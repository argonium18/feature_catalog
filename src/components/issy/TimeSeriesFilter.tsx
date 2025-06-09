"use client";

import React, { useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import { rawData } from "@/components/issy/data/salesTimeSeries";
import {
  Select,MenuItem } from '@mui/material';
export default function Page() {
  const [windowSize, setWindowSize] = useState(2);

  const categories = Array.from(new Set(rawData.map((d) => d.category)));
  const [excludedCategories, setExcludedCategories] = useState<string[]>(categories);
  const dates = Array.from(new Set(rawData.map((d) => d.date))).sort();

  const originalSeries = useMemo(() => {
    return dates.map((date) => {
      const sum = rawData
        .filter((d) => d.date === date)
        .reduce((a, b) => a + b.sales, 0);
      return { date, sales: sum };
    });
  }, [rawData, dates]);

  const filteredSeries = useMemo(() => {
    return dates.map((date) => {
      const sum = rawData
        .filter(
          (d) => d.date === date && excludedCategories.includes(d.category)
        )
        .reduce((a, b) => a + b.sales, 0);
      return { date, sales: sum };
    });
  }, [rawData, excludedCategories, dates]);

  const movingAverage = (data: { date: string; sales: number }[]) => {
    return data.map((_, i) => {
      const window = data.slice(Math.max(0, i - windowSize + 1), i + 1);
      const avg = window.reduce((a, b) => a + b.sales, 0) / window.length;
      return { date: data[i].date, sales: avg };
    });
  };

  const originalMA = movingAverage(originalSeries);
  const filteredMA = movingAverage(filteredSeries);

  const diffBase = originalMA.map((d, i) =>
    Math.min(originalMA[i].sales, filteredMA[i].sales)
  );

  const diffDelta = originalMA.map((d, i) =>
    Math.abs(originalMA[i].sales - filteredMA[i].sales)
  );

  const option = {
    tooltip: { trigger: "axis" },
    legend: { data: ["元データ移動平均", "フィルター後移動平均"] },
    xAxis: { type: "category", data: dates },
    yAxis: { type: "value" },
    series: [
      {
        name: "元データ移動平均",
        type: "line",
        data: originalMA.map((d) => d.sales),
        lineStyle: { type: "dotted" },
        smooth: false,
      },
      {
        name: "フィルター後移動平均",
        type: "line",
        data: filteredMA.map((d) => d.sales),
        smooth: false,
      },
      {
        name: "差分ベース",
        type: "line",
        data: diffBase,
        stack: "diff",
        lineStyle: { opacity: 0 },
        areaStyle: { opacity: 0 },
      },
      {
        name: "差分領域",
        type: "line",
        data: diffDelta,
        stack: "diff",
        lineStyle: { opacity: 0 },
        areaStyle: {
          color: "rgba(255, 0, 0, 0.2)",
        },
      },
    ],
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🛒 売上時系列グラフ</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          移動平均幅:
          <Select
            value={windowSize}
            onChange={(e) => setWindowSize(Number(e.target.value))}
          >
            {[1, 30, 90, 360].map((v) => (
              <MenuItem key={v} value={v}>
                {v}
              </MenuItem>
            ))}
          </Select>
        </label>

        <div>
          <p>除外するカテゴリ:</p>
          {categories.map((cat) => (
            <label key={cat} style={{ marginRight: "1rem" }}>
              <input
                type="checkbox"
                checked={excludedCategories.includes(cat)}
                onChange={(e) => {
                  setExcludedCategories((prev) =>
                    e.target.checked
                      ? [...prev, cat]
                      : prev.filter((c) => c !== cat)
                  );
                }}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <ReactECharts option={option} style={{ height: "400px" }} />
    </div>
  );
}
