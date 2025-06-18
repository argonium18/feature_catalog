"use client";

import React, { useMemo, useState} from "react";
import ReactECharts from "echarts-for-react";
import { rawData } from "@/components/issy/data/salesTimeSeries";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Typography,
} from "@mui/material";

export default function Page() {
  const categories = Array.from(new Set(rawData.map((d) => d.category)));
  const dates = Array.from(new Set(rawData.map((d) => d.date))).sort();

  const [windowSize, setWindowSize] = useState(2);
  const [excludedCategories, setExcludedCategories] = useState<string[]>([]);

  // Range Slider: インデックスを管理
  const [range, setRange] = useState<[number, number]>([0, dates.length - 1]);

  // インデックスから日付に変換
  const startDate = dates[range[0]];
  const endDate = dates[range[1]];

  const visibleDates = useMemo(() => {
    return dates.slice(range[0], range[1] + 1);
  }, [dates, range]);

  const originalSeries = useMemo(() => {
    return visibleDates.map((date) => {
      const sum = rawData
        .filter((d) => d.date === date)
        .reduce((a, b) => a + b.sales, 0);
      return { date, sales: sum };
    });
  }, [rawData, visibleDates]);

  const filteredSeries = useMemo(() => {
    return visibleDates.map((date) => {
      const sum = rawData
        .filter(
          (d) => d.date === date && !excludedCategories.includes(d.category)
        )
        .reduce((a, b) => a + b.sales, 0);
      return { date, sales: sum };
    });
  }, [rawData, excludedCategories, visibleDates]);

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
    legend: { data: ["元データ移動平均", "フィルター後移動平均"] },
    xAxis: { type: "category", data: visibleDates },
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

  // スライダー値変更ハンドラ
  const handleRangeChange = (event: Event, newValue: number | number[]) => {
    setRange(newValue as [number, number]);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <FormControl style={{ marginRight: "1rem", minWidth: 120 }}>
          <InputLabel>移動平均幅</InputLabel>
          <Select
            value={windowSize}
            onChange={(e) => setWindowSize(Number(e.target.value))}
            label="移動平均幅"
          >
            {[1, 30, 90, 360].map((v) => (
              <MenuItem key={v} value={v}>
                {v}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <Typography gutterBottom>
        表示範囲: {startDate} ~ {endDate}
      </Typography>
      <Slider
        value={range}
        min={0}
        max={dates.length - 1}
        onChange={handleRangeChange}
        valueLabelDisplay="on"
        step={1}
        disableSwap 
        marks={[
          { value: 0, label: dates[0] },
          { value: dates.length - 1, label: dates[dates.length - 1] },
        ]}
      />


      <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
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

      <ReactECharts option={option} style={{ height: "400px" }} />
    </div>
  );
}
