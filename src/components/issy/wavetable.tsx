"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Papa from "papaparse";

// PlotlyのSSR対応
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// CSVパース（自動ロード用）
async function fetchAndParseCSV(url: string): Promise<
  Array<{ Recency: number; Frequency: number; Monetary: number }>
> {
  const res = await fetch(url);
  const text = await res.text();
  return new Promise((resolve, reject) => {
    Papa.parse<string>(text, {
      header: true,
      dynamicTyping: true,
      complete: (results) => resolve(results.data as any),
      error: (err: Error) => reject(err),
    });
  });
}

// RFM → 3Dグリッド + 最大値
function convertRFMTo3DGrid(records: any[], size = 20) {
  const grid = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => Array(size).fill(0))
  );
  const maxR = Math.max(...records.map((r) => r.Recency));
  const maxF = Math.max(...records.map((r) => r.Frequency));
  const maxM = Math.max(...records.map((r) => r.Monetary));

  for (const { Recency, Frequency, Monetary } of records) {
    const rIdx = Math.floor((Recency / maxR) * (size - 1));
    const fIdx = Math.floor((Frequency / maxF) * (size - 1));
    const mIdx = Math.floor((Monetary / maxM) * (size - 1));
    grid[rIdx][fIdx][mIdx] += 1;
  }

  return { grid, maxR, maxF, maxM };
}

export default function Page() {
  const size = 20; // グリッドの粒度
  const [grid, setGrid] = useState<number[][][] | null>(null);
  const [maxR, setMaxR] = useState(1);
  const [maxF, setMaxF] = useState(1);
  const [maxM, setMaxM] = useState(1);

  const [xR, setXR] = useState<number[]>([]);
  const [yF, setYF] = useState<number[]>([]);
  const [zM, setZM] = useState<number[]>([]);
  const [value, setValue] = useState<number[]>([]);

  const [heatmapZ, setHeatmapZ] = useState<number[][]>([]);
  const [heatmapX, setHeatmapX] = useState<number[]>([]);
  const [heatmapY, setHeatmapY] = useState<number[]>([]);

  const [sliceIndex, setSliceIndex] = useState(0);

  // ✅ 初回ロードでCSVを自動fetch
  useEffect(() => {
    const load = async () => {
      try {
        const raw = await fetchAndParseCSV("/data/rfm.csv");
        const records = raw.filter(
          (r) =>
            Number.isFinite(r.Recency) &&
            Number.isFinite(r.Frequency) &&
            Number.isFinite(r.Monetary)
        );
        if (records.length === 0) {
          alert("RFM列が見つかりません。CSVを確認してください。");
          return;
        }
        const { grid, maxR, maxF, maxM } = convertRFMTo3DGrid(records, size);
        setGrid(grid);
        setMaxR(maxR);
        setMaxF(maxF);
        setMaxM(maxM);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, []);

  // flatten + heatmap 軸tick生成
  useEffect(() => {
    if (!grid) return;

    const xR: number[] = [];
    const yF: number[] = [];
    const zM: number[] = [];
    const value: number[] = [];

    for (let r = 0; r < size; r++) {
      for (let f = 0; f < size; f++) {
        for (let m = 0; m < size; m++) {
          xR.push((r / (size - 1)) * maxR);
          yF.push((f / (size - 1)) * maxF);
          zM.push((m / (size - 1)) * maxM);
          value.push(grid[r][f][m]);
        }
      }
    }

    setXR(xR);
    setYF(yF);
    setZM(zM);
    setValue(value);

    const hX = Array.from({ length: size }, (_, i) => (i / (size - 1)) * maxR);
    const hY = Array.from({ length: size }, (_, i) => (i / (size - 1)) * maxF);
    setHeatmapX(hX);
    setHeatmapY(hY);
  }, [grid, maxR, maxF, maxM]);

  // sliceIndex に応じたヒートマップ生成
  useEffect(() => {
    if (!grid) return;
    const heatmap: number[][] = [];

    for (let r = 0; r < size; r++) {
      const row = [];
      for (let f = 0; f < size; f++) {
        row.push(grid[r][f][sliceIndex]);
      }
      heatmap.push(row);
    }

    setHeatmapZ(heatmap);
  }, [sliceIndex, grid]);

  const vMin = Math.min(...value);
  const vMax = Math.max(...value);

  return (
    <div style={{ padding: 20 }}>
      <h2>
        M軸のスライス位置: {sliceIndex} (Monetary ~{" "}
        {(sliceIndex / (size - 1) * maxM).toFixed(2)})
      </h2>

      <input
        type="range"
        min={0}
        max={size - 1}
        value={sliceIndex}
        onChange={(e) => setSliceIndex(Number(e.target.value))}
        style={{ width: 400 }}
      />

      <Plot
        data={[
          {
            z: heatmapZ,
            x: heatmapX,
            y: heatmapY,
            type: "heatmap",
            colorscale: "Viridis",
          },
        ]}
        layout={{
          width: 600,
          height: 500,
          title: `2Dヒートマップ (Recency × Frequency @ Monetary=${(
            (sliceIndex / (size - 1)) *
            maxM
          ).toFixed(2)})`,
          xaxis: { title: { text: "Recency" } },
          yaxis: { title: { text: "Frequency" } },
        }}
      />

      <Plot
        data={[
          {
            type: "volume",
            x: xR,
            y: yF,
            z: zM,
            value: value,
            isomin: vMin,
            isomax: vMax,
            opacity: 0.1,
            surface: { count: 10 },
            colorscale: "Blues",
            name: "全体構造",
            caps: { x: { show: false }, y: { show: false }, z: { show: false } },
          },
          {
            type: "isosurface",
            x: xR,
            y: yF,
            z: zM,
            value: value,
            isomin: 0.1,
            isomax: vMax,
            slices: {
              z: {
                show: true,
                locations: [(sliceIndex / (size - 1)) * maxM],
              },
            },
            surface: { show: false },
            opacity: 2,
            colorscale: "Reds",
            name: "スライス",
            caps: { x: { show: false }, y: { show: false }, z: { show: false } },
          },
        ]}
        layout={{
          width: 700,
          height: 600,
          title: "3Dボリュームと断面",
          scene: {
            xaxis: { title: { text: "Recency" } },
            yaxis: { title: { text: "Frequency" } },
            zaxis: { title: { text: "Monetary" } },
            camera: { eye: { x: 1.3, y: -1.3, z: 1.3 } },
          },
        }}
      />
    </div>
  );
}
