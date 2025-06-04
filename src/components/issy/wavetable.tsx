"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Papa from "papaparse";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

function parseCSV(file: File): Promise<
  Array<{ Recency: number; Frequency: number; Monetary: number }>
> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        resolve(results.data as any);
      },
      error: (err) => reject(err),
    });
  });
}

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

  return grid;
}

export default function Wavetable() {
  const size = 20;
  const [grid, setGrid] = useState<number[][][] | null>(null);
  const [xR, setXR] = useState<number[]>([]);
  const [yF, setYF] = useState<number[]>([]);
  const [zM, setZM] = useState<number[]>([]);
  const [value, setValue] = useState<number[]>([]);
  const [heatmapZ, setHeatmapZ] = useState<number[][]>([]);
  const [sliceIndex, setSliceIndex] = useState(0);

  const handleCSVUpload = async (file: File) => {
    const raw = await parseCSV(file);
    const records = raw.filter(
      (r) =>
        typeof r.Recency === "number" &&
        typeof r.Frequency === "number" &&
        typeof r.Monetary === "number"
    );

    if (records.length === 0) {
      alert("RFM列が見つかりません。CSVを確認してください。");
      return;
    }

    const grid = convertRFMTo3DGrid(records, size);
    setGrid(grid); // 🔁 useEffectでflattenとheatmapZを自動処理
  };

  // flatten（xR, yF, zM, value）をgridから生成
  useEffect(() => {
    if (!grid) return;
    const xR: number[] = [];
    const yF: number[] = [];
    const zM: number[] = [];
    const value: number[] = [];

    for (let r = 0; r < size; r++) {
      for (let f = 0; f < size; f++) {
        for (let m = 0; m < size; m++) {
          xR.push(r);
          yF.push(f);
          zM.push(m);
          value.push(grid[r][f][m]);
        }
      }
    }

    setXR(xR);
    setYF(yF);
    setZM(zM);
    setValue(value);
  }, [grid]);

  // ヒートマップを sliceIndex に応じて再計算
  useEffect(() => {
    if (!grid) return;
    const heatmap: number[][] = [];

    for (let r = 0; r < size; r++) {
      const row = [];
      for (let f = 0; f < size; f++) {
        row.push(grid[r][f][sliceIndex]); // M = sliceIndex の断面
      }
      heatmap.push(row);
    }

    setHeatmapZ(heatmap);
  }, [sliceIndex, grid]);

  const vMin = Math.min(...value);
  const vMax = Math.max(...value);

  return (
    <div style={{ padding: 20 }}>
      <h2>M軸のスライス位置: {sliceIndex}</h2>
      <input
        type="range"
        min={0}
        max={size - 1}
        value={sliceIndex}
        onChange={(e) => setSliceIndex(Number(e.target.value))}
        style={{ width: 400 }}
      />

      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleCSVUpload(file);
        }}
      />

      <Plot
        data={[
          {
            z: heatmapZ,
            type: "heatmap",
            colorscale: "Viridis",
          },
        ]}
        layout={{
          width: 600,
          height: 500,
          title: "2Dヒートマップ（R×F）",
          xaxis: { title: { text: "R" } },
          yaxis: { title: { text: "F" } },
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
            caps: { x: { show: true }, y: { show: true }, z: { show: false } }
          },
          {
            type: "isosurface",
            x: xR,
            y: yF,
            z: zM,
            value: value,
            isomin: vMin,
            isomax: vMax,
            slices: {
              z: {
                show: true,
                locations: [sliceIndex],
              },
            },
            surface: { show: false },
            opacity: 0.7,
            colorscale: "Reds",
            name: "スライス",
            caps: { x: { show: false }, y: { show: false }, z: { show: true } }
          },
        ]}
        layout={{
          width: 700,
          height: 600,
          title: "3Dボリュームと断面",
          scene: {
            xaxis: { title: { text: "R" } },
            yaxis: { title: { text: "F" } },
            zaxis: { title: { text: "M" } },
            camera: { eye: { x: 1.3, y: -1.3, z: 1.3 } },
          },
        }}
      />
    </div>
  );
}
