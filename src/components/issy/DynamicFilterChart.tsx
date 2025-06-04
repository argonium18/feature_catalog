"use client";

import React, { useState, useEffect, useMemo } from "react";
import ReactECharts from "echarts-for-react";

type DynamicFilterChartProps = {
  inputData: { [key: string]: any }[];
  availableKeys: string[];
  xKey: string;
  yKey: string;
  onFiltered?: (filteredData: { [key: string]: any }[]) => void;
  highlightDate: string | null;
  onDateClick?: (date: string) => void;
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
  const onFilteredMemo = React.useRef<string>("");

  if (!inputData || inputData.length === 0) {
    return <div>データがありません</div>;
  }

  const sortedInputData = [...inputData].sort((a, b) => a[xKey].localeCompare(b[xKey]));

  const availableValues = filterKey
    ? Array.from(new Set(sortedInputData.map((d) => d[filterKey])))
    : [];

  const filteredData = !filterKey
    ? sortedInputData
    : sortedInputData.filter((d) => !excludedValues.includes(d[filterKey]));

  const filteredAndReducedData = filteredData.map((d) => {
    const newObj = { ...d };
    if (filterKey) delete newObj[filterKey];
    return newObj;
  });

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
      const date = d[xKey];
      map.set(date, (map.get(date) ?? 0) + d[yKey]);
    }
    return map;
  }, [sortedInputData, xKey, yKey]);

  const aggregatedFiltered = useMemo(() => {
    const map = new Map<string, number>();
    for (const d of filteredData) {
      const date = d[xKey];
      map.set(date, (map.get(date) ?? 0) + d[yKey]);
    }
    return map;
  }, [filteredData, xKey, yKey]);

  const dates = useMemo(
    () => Array.from(new Set(sortedInputData.map((d) => d[xKey]))).sort(),
    [sortedInputData, xKey]
  );

  const diffBase = useMemo(
    () => dates.map((date) => Math.min(aggregatedOriginal.get(date) ?? 0, aggregatedFiltered.get(date) ?? 0)),
    [dates, aggregatedOriginal, aggregatedFiltered]
  );

  const diffDelta = useMemo(
    () => dates.map((date) => Math.abs((aggregatedOriginal.get(date) ?? 0) - (aggregatedFiltered.get(date) ?? 0))),
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
      tooltip: { trigger: "axis" },
      legend: { data: ["元データ合計", "フィルター後合計"] },
      xAxis: { type: "category", data: dates },
      yAxis: { type: "value" },
      series: [
        {
          name: "元データ合計",
          type: "line",
          data: dates.map((date) => aggregatedOriginal.get(date) ?? 0),
          lineStyle: { type: "dotted" },
          smooth: false,
        },
        {
          name: "フィルター後合計",
          type: "line",
          data: dates.map((date) => aggregatedFiltered.get(date) ?? 0),
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
          areaStyle: { color: "rgba(255, 0, 0, 0.2)" },
        },
        {
          name: "クリックゾーン",
          type: "scatter",
          data: dates.map((date) => [date, 0]),
          symbolSize: 30,
          itemStyle: { color: "transparent" },
          emphasis: { itemStyle: { color: "rgba(0,0,0,0.05)" } },
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
  }, [dates, aggregatedOriginal, aggregatedFiltered, diffBase, diffDelta, highlightDate]);

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "2rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          フィルター対象:
          <select value={filterKey} onChange={(e) => { setFilterKey(e.target.value); setExcludedValues([]); }}>
            <option value="">選択してください</option>
            {availableKeys.map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </label>
      </div>

      {filterKey && (
        <div style={{ marginBottom: "1rem" }}>
          <p>除外する{filterKey}:</p>
          {availableValues.map((val) => (
            <label key={val} style={{ marginRight: "1rem" }}>
              <input
                type="checkbox"
                checked={excludedValues.includes(val)}
                onChange={(e) => {
                  setExcludedValues((prev) =>
                    e.target.checked ? [...prev, val] : prev.filter((v) => v !== val)
                  );
                }}
              />
              {val}
            </label>
          ))}
        </div>
      )}

      <ReactECharts
        notMerge={true}
        lazyUpdate={false}
        option={option}
        style={{ height: "400px" }}
        onChartReady={(chart) => { chart.group = "linked-group"; }}
        onEvents={{
          click: (params: any) => {
            console.log("🟥 グラフでクリックされた:", params);
            if (params.seriesName === "クリックゾーン") {
              const date = params.name || (Array.isArray(params.value) && params.value[0]);
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