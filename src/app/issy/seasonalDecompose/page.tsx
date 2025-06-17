"use client";

import React, { useMemo, useState } from "react";
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
  // カテゴリと日付のセット
  const categories = Array.from(new Set(rawData.map((d) => d.category)));
  const dates = Array.from(new Set(rawData.map((d) => d.date))).sort();

  // UI State
  const [windowSize, setWindowSize] = useState(30); // 移動平均幅（トレンド）
  const [excludedCategories, setExcludedCategories] = useState<string[]>([]);
  const [range, setRange] = useState<[number, number]>([0, dates.length - 1]);

  // 日付範囲
  const visibleDates = useMemo(() => {
    return dates.slice(range[0], range[1] + 1);
  }, [dates, range]);

  // フィルター後の系列
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

  // トレンド: 移動平均幅を使用
  const trend = useMemo(() => {
    return filteredSeries.map((_, i) => {
      const window = filteredSeries.slice(Math.max(0, i - windowSize + 1), i + 1);
      const avg = window.reduce((a, b) => a + b.sales, 0) / window.length;
      return { date: filteredSeries[i].date, sales: avg };
    });
  }, [filteredSeries, windowSize]);

  // 季節成分: 固定周期
  const period = 365; // 例えば30日周期
  const seasonal = useMemo(() => {
    // トレンドを引いて
    const detrended = filteredSeries.map((d, i) => d.sales - trend[i].sales);

    // 1周期分のパターン作成
    const pattern = Array.from({ length: period }, (_, p) => {
      const samePhase = detrended.filter((_, i) => i % period === p);
      return samePhase.length > 0
        ? samePhase.reduce((a, b) => a + b, 0) / samePhase.length
        : 0;
    });

    // パターンを全期間に適用
    return filteredSeries.map((_, i) => ({
      date: filteredSeries[i].date,
      sales: pattern[i % period],
    }));
  }, [filteredSeries, trend, period]);

  // 残差
  const residual = useMemo(() => {
    return filteredSeries.map((d, i) => ({
      date: d.date,
      sales: d.sales - trend[i].sales - seasonal[i].sales,
    }));
  }, [filteredSeries, trend, seasonal]);

  // ECharts オプション
  const option = {
    tooltip: { trigger: "axis" },
    legend: {
      data: ["元系列", "トレンド", "季節成分", "残差"],
    },
    xAxis: {
      type: "category",
      data: visibleDates,
    },
    yAxis: { type: "value" },
    series: [
      {
        name: "元系列",
        type: "line",
        data: filteredSeries.map((d) => d.sales),
        smooth: false,
      },
      {
        name: "トレンド",
        type: "line",
        data: trend.map((d) => d.sales),
        smooth: false,
      },
      {
        name: "季節成分",
        type: "line",
        data: seasonal.map((d) => d.sales),
        smooth: false,
      },
      {
        name: "残差",
        type: "line",
        data: residual.map((d) => d.sales),
        smooth: false,
      },
    ],
  };

  // スライダー変更
  const handleRangeChange = (_: Event, newValue: number | number[]) => {
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
            {[1, 7, 30, 90].map((v) => (
              <MenuItem key={v} value={v}>
                {v}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <Typography gutterBottom>
        表示範囲: {visibleDates[0]} ~ {visibleDates[visibleDates.length - 1]}
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
              onChange={(e) =>
                setExcludedCategories((prev) =>
                  e.target.checked
                    ? [...prev, cat]
                    : prev.filter((c) => c !== cat)
                )
              }
            />
            {cat}
          </label>
        ))}
      </div>

      <ReactECharts option={option} style={{ height: "500px" }} />
    </div>
  );
}
