"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import ReactECharts from "echarts-for-react";
import { FormControl, InputLabel, Select, MenuItem, Checkbox, Typography } from "@mui/material";
import type { ECElementEvent } from "echarts";

type DataRow = Record<string, string | number | null | undefined>;

type DynamicFilterChartProps = {
  inputData: DataRow[];
  availableKeys: string[];
  xKey: string;
  yKey: string;
  onFiltered?: (filteredData: DataRow[]) => void;
  highlightDate: string | null;
  onDateClick: (date: string | null) => void;
};

const DynamicFilterChart = React.memo(function DynamicFilterChart({
  inputData,
  availableKeys,
  xKey,
  yKey,
  onFiltered,
  highlightDate,
  onDateClick,
}: DynamicFilterChartProps) {
  const [filterKey, setFilterKey] = useState<string>("");
  const [excludedValues, setExcludedValues] = useState<string[]>([]);
  const onFilteredMemo = useRef<string>("");

  // ✅ Hooks はトップレベル
  const isEmpty = !inputData || inputData.length === 0;

  const sortedInputData = useMemo(() => {
    if (isEmpty) return [];
    return [...inputData].sort((a, b) =>
      String(a[xKey]).localeCompare(String(b[xKey]))
    );
  }, [inputData, xKey, isEmpty]);

  const availableValues = useMemo(() => {
    if (!filterKey) return [];
    return Array.from(new Set(sortedInputData.map((d) => String(d[filterKey]))));
  }, [filterKey, sortedInputData]);

  const filteredData = useMemo(() => {
    if (!filterKey) return sortedInputData;
    return sortedInputData.filter(
      (d) => !excludedValues.includes(String(d[filterKey]))
    );
  }, [filterKey, excludedValues, sortedInputData]);

  const filteredAndReducedData = useMemo(() => {
    return filteredData.map((d) => {
      const newObj = { ...d };
      if (filterKey) delete newObj[filterKey];
      return newObj;
    });
  }, [filteredData, filterKey]);

  useEffect(() => {
    if (onFiltered) {
      const json = JSON.stringify(filteredAndReducedData);
      if (onFilteredMemo.current !== json) {
        onFiltered(filteredAndReducedData);
        onFilteredMemo.current = json;
      }
    }
  }, [filteredAndReducedData, onFiltered]);

  const aggregatedOriginal = useMemo(() => {
    const map = new Map<string, number>();
    for (const d of sortedInputData) {
      const date = String(d[xKey]);
      map.set(date, (map.get(date) ?? 0) + Number(d[yKey]));
    }
    return map;
  }, [sortedInputData, xKey, yKey]);

  const aggregatedFiltered = useMemo(() => {
    const map = new Map<string, number>();
    for (const d of filteredData) {
      const date = String(d[xKey]);
      map.set(date, (map.get(date) ?? 0) + Number(d[yKey]));
    }
    return map;
  }, [filteredData, xKey, yKey]);

  const dates = useMemo(
    () =>
      Array.from(new Set(sortedInputData.map((d) => String(d[xKey])))).sort(),
    [sortedInputData, xKey]
  );

  const diffBase = useMemo(
    () =>
      dates.map((date) =>
        Math.min(
          aggregatedOriginal.get(date) ?? 0,
          aggregatedFiltered.get(date) ?? 0
        )
      ),
    [dates, aggregatedOriginal, aggregatedFiltered]
  );

  const diffDelta = useMemo(
    () =>
      dates.map((date) =>
        Math.abs(
          (aggregatedOriginal.get(date) ?? 0) -
            (aggregatedFiltered.get(date) ?? 0)
        )
      ),
    [dates, aggregatedOriginal, aggregatedFiltered]
  );

  const option = useMemo(() => {
    const highlightPoint = highlightDate
      ? (() => {
          const y = aggregatedFiltered.get(highlightDate);
          return y != null ? [[highlightDate, y]] : [];
        })()
      : [];

    return {
      tooltip: { trigger: "none" },
      legend: { data: ["元データ合計", "フィルター後合計"] },
      xAxis: { type: "category", data: dates },
      yAxis: { type: "value" },
      series: [
        {
          name: "元データ合計",
          type: "line",
          data: dates.map((date) => aggregatedOriginal.get(date) ?? 0),
          lineStyle: { type: "dotted" },
        },
        {
          name: "フィルター後合計",
          type: "line",
          data: dates.map((date) => aggregatedFiltered.get(date) ?? 0),
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
          areaStyle: { color: "rgba(255, 0, 0, 0.2)" },
        },
        {
          name: "クリックゾーン",
          type: "scatter",
          data: dates.map((date) => [date, 0]),
          symbolSize: [20, 300],
          itemStyle: { color: "transparent" },
          emphasis: {
            itemStyle: { color: "rgba(255, 0, 0, 0.1)" },
            label: {
              show: true,
              formatter: (params: ECElementEvent) => {
                const dateStr =
                  params.name ||
                  (Array.isArray(params.value) && params.value[0]);
                if (typeof dateStr === "string") {
                  const [yyyy, mm] = dateStr.split("-");
                  return `${yyyy}-${mm}`;
                }
                return "";
              },
              position: "top",
              fontSize: 12,
              color: "black",
              backgroundColor: "white",
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 4,
              padding: [2, 6],
            },
          },
          tooltip: { show: false },
          z: 98,
        },
        {
          name: "ハイライト",
          type: "scatter",
          data: highlightPoint,
          symbolSize: 12,
          itemStyle: { color: "red" },
          z: 100,
        },
      ],
    };
  }, [
    dates,
    aggregatedOriginal,
    aggregatedFiltered,
    diffBase,
    diffDelta,
    highlightDate,
  ]);

  if (isEmpty) {
    return <div>データがありません</div>;
  }

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "2rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <FormControl fullWidth style={{ marginBottom: "1rem" }}>
          <InputLabel id="filter-select-label">フィルター対象</InputLabel>
          <Select
            labelId="filter-select-label"
            value={filterKey}
            label="フィルター対象"
            onChange={(e) => {
              setFilterKey(e.target.value);
              setExcludedValues([]);
            }}
          >
            <MenuItem value="">未選択</MenuItem>
            {availableKeys.map((key) => (
              <MenuItem key={key} value={key}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {filterKey && (
        <div style={{ marginBottom: "1rem" }}>
          <Typography>除外する {filterKey}:</Typography>
          {availableValues.map((val) => (
            <label key={val} style={{ marginRight: "1rem" }}>
              <Checkbox
                checked={excludedValues.includes(val)}
                onChange={(e) => {
                  setExcludedValues((prev) =>
                    e.target.checked
                      ? [...prev, val]
                      : prev.filter((v) => v !== val)
                  );
                }}
              />
              {val}
            </label>
          ))}
        </div>
      )}

      <ReactECharts
        notMerge
        lazyUpdate={false}
        option={option}
        style={{ height: "400px" }}
        onChartReady={(chart) => {
          chart.group = "linked-group";
        }}
        onEvents={{
          click: (params: ECElementEvent) => {
            console.log("🟥 グラフでクリックされた:", params);
            if (params.seriesName === "クリックゾーン") {
              const date =
                params.name ||
                (Array.isArray(params.value) && params.value[0]);
              if (onDateClick && typeof date === "string") {
                onDateClick(date);
              }
            }
          },
        }}
      />
    </div>
  );
});

export default DynamicFilterChart;
