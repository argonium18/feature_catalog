"use client";

import React, { useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import { rawData } from "@/components/issy/data/salesDataDate";
import { Checkbox } from '@mui/material';

export default function Page() {
  const [includedCategories, setIncludedCategories] = useState<string[]>(() => Array.from(new Set(rawData.map(d => d.category))));

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


  const makeOption = (original: { date: string; sales: number }[], filtered: { date: string; sales: number }[]) => {
    return {
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: dates },
      yAxis: { type: "value" },
      series: [
        {
          type: "line",
          data: filtered.map(d => d.sales),
          smooth: false,
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
