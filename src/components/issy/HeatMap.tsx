"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { RFMData } from "@/components/issy/data/RFMData"; 


const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

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
  const size = 20;
  const [grid, setGrid] = useState<number[][][] | null>(null);
  const [maxR, setMaxR] = useState(1);
  const [maxF, setMaxF] = useState(1);
  const [maxM, setMaxM] = useState(1);

  const [heatmapZ, setHeatmapZ] = useState<number[][]>([]);
  const [heatmapX, setHeatmapX] = useState<number[]>([]);
  const [heatmapY, setHeatmapY] = useState<number[]>([]);

  const [sliceIndex, setSliceIndex] = useState(0);

  useEffect(() => {
    const records = RFMData;
    const { grid, maxR, maxF, maxM } = convertRFMTo3DGrid(records, size);
    setGrid(grid);
    setMaxR(maxR);
    setMaxF(maxF);
    setMaxM(maxM);
  }, []);

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

    const hX = Array.from({ length: size }, (_, i) => (i / (size - 1)) * maxR);
    const hY = Array.from({ length: size }, (_, i) => (i / (size - 1)) * maxF);
    setHeatmapX(hX);
    setHeatmapY(hY);
  }, [grid, maxR, maxF, maxM]);

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
    </div>
  );
}
