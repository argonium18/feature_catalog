"use client";

import React, { useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import { rawData } from "@/components/issy/data/salesDataDate";
import { Checkbox } from '@mui/material';

export default function Page() {
  const [includedCategories, setIncludedCategories] = useState<string[]>(() => Array.from(new Set(rawData.map(d => d.category))));
  const [includedRegions, setIncludedRegions] = useState<string[]>(() => Array.from(new Set(rawData.map(d => d.region))));

  const dates = useMemo(() => Array.from(new Set(rawData.map(d => d.date))).sort(), [rawData]);

  // グラフ1：商品カテゴリフィルター後のデータ
  const categoryFilteredData = useMemo(() => {
    return rawData.filter(d => includedCategories.includes(d.category));
  }, [rawData, includedCategories]);

  // グラフ1：時系列売上（元データ）
  const originalSeries1 = useMemo(() => {
    return dates.map(date => {
      const sum = rawData.filter(d => d.date === date).reduce((a, b) => a + b.sales, 0);
      return { date, sales: sum };
    });
  }, [rawData, dates]);

  // グラフ1：時系列売上（フィルター後）
  const filteredSeries1 = useMemo(() => {
    return dates.map(date => {
      const sum = categoryFilteredData.filter(d => d.date === date).reduce((a, b) => a + b.sales, 0);
      return { date, sales: sum };
    });
  }, [categoryFilteredData, dates]);

  // グラフ2：地域フィルター後のデータ
  const regionFilteredData = useMemo(() => {
    return categoryFilteredData.filter(d => includedRegions.includes(d.region));
  }, [categoryFilteredData, includedRegions]);

  // グラフ2：時系列売上（フィルター後）
  const filteredSeries2 = useMemo(() => {
    return dates.map(date => {
      const sum = regionFilteredData.filter(d => d.date === date).reduce((a, b) => a + b.sales, 0);
      return { date, sales: sum };
    });
  }, [regionFilteredData, dates]);

  const makeOption = (original: { date: string; sales: number }[], filtered: { date: string; sales: number }[]) => {
    const diffBase = original.map((d, i) => Math.min(original[i].sales, filtered[i].sales));
    const diffDelta = original.map((d, i) => Math.abs(original[i].sales - filtered[i].sales));

    return {
      tooltip: { trigger: "axis" },
      legend: { data: ["元データ", "フィルター後"] },
      xAxis: { type: "category", data: dates },
      yAxis: { type: "value" },
      series: [
        {
          name: "元データ",
          type: "line",
          data: original.map(d => d.sales),
          lineStyle: { type: "dotted" },
          smooth: false,
        },
        {
          name: "フィルター後",
          type: "line",
          data: filtered.map(d => d.sales),
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
  };

  return (
    <div style={{ padding: "1rem" }}>
      <div>
        {Array.from(new Set(rawData.map(d => d.category))).map(cat => (
          <label key={cat} style={{ marginRight: "1rem" }}>
            <Checkbox
              checked={includedCategories.includes(cat)}
              onChange={(e) => {
                setIncludedCategories(prev =>
                  e.target.checked ? [...prev, cat] : prev.filter(c => c !== cat)
                );
              }}
            />
            {cat}
          </label>
        ))}
      </div>
      <ReactECharts option={makeOption(originalSeries1, filteredSeries1)} style={{ height: "400px" }} />
    </div>
  );
}
