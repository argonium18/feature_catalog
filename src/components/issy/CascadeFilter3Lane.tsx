"use client";

import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import DynamicFilterChart from "@/components/issy/DynamicFilterChart";
import { rawData } from "@/components/issy/data/salesData";
import { Button, Typography, Card } from "@mui/material";

// ✅ ここで DataRow = ChartRow に統一
type DataRow = Record<string, string | number | null | undefined>;
type ChartRow = DataRow;

type ChartState = {
  id: number;
  inputData: ChartRow[];
  outputData: ChartRow[];
};

type DynamicFilterChartManagerProps = {
  highlightDate: string | null;
  onDateClick: (date: string | null) => void;
};

export default function DynamicFilterChartManager({
  highlightDate,
  onDateClick,
}: DynamicFilterChartManagerProps) {
  const [charts, setCharts] = useState<ChartState[]>([
    {
      id: 0,
      inputData: rawData,
      outputData: rawData,
    },
  ]);

  useEffect(() => {
    echarts.connect("linked-group");
  }, []);

  // 🔁 output chain をたどって input を再構築
  const updateAllInputsFromOutputChain = (base: ChartState[]) => {
    const updated: ChartState[] = [];
    for (let i = 0; i < base.length; i++) {
      const input = i === 0 ? rawData : updated[i - 1].outputData;
      updated.push({
        ...base[i],
        inputData: input,
      });
    }
    return updated;
  };

  const handleFiltered = (id: number, filteredData: ChartRow[]) => {
    setCharts((prev) => {
      const updated = [...prev];
      updated[id] = {
        ...updated[id],
        outputData: filteredData,
      };
      return updateAllInputsFromOutputChain(updated);
    });
  };

  const addChart = () => {
    setCharts((prev) => {
      const last = prev[prev.length - 1];
      const newChart: ChartState = {
        id: prev.length,
        inputData: last.outputData,
        outputData: last.outputData,
      };
      return [...prev, newChart];
    });
  };

  const removeChart = (id: number) => {
    setCharts((prev) => {
      const filtered = prev.filter((chart) => chart.id !== id);
      const reindexed = filtered.map((chart, index) => ({
        ...chart,
        id: index,
      }));
      return updateAllInputsFromOutputChain(reindexed);
    });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <Typography
        style={{
          color: "#B71C1C",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          display: "inline-block",
          marginBottom: "1rem",
        }}
      >
        選択された日付: {highlightDate ?? "なし"}
      </Typography>
      {highlightDate && (
        <Button
          style={{
            margin: "0.5rem 0",
            padding: "0.3rem 1rem",
            fontSize: "0.9rem",
          }}
          onClick={() => onDateClick(null)}
        >
          🔄 選択解除
        </Button>
      )}
      <div style={{ padding: "1rem" }} className="grid grid-cols-3 gap-4">
        {charts.map((chart, index) => (
          <Card
            key={chart.id}
            component="div"
            style={{
              position: "relative",
              marginBottom: "2rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            {index !== 0 && (
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => removeChart(chart.id)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                  zIndex: 1,
                }}
              >
                ✖ 削除
              </Button>
            )}

            <DynamicFilterChart
              inputData={chart.inputData}
              availableKeys={Object.keys(chart.inputData[0]).filter(
                (k) => k !== "date" && k !== "sales"
              )}
              xKey="date"
              yKey="sales"
              onFiltered={(filtered) => handleFiltered(chart.id, filtered)}
              highlightDate={highlightDate}
              onDateClick={(date: string | null) => onDateClick(date)}
            />

            {index === charts.length - 1 && (
              <Button
                style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
                onClick={addChart}
              >
                ＋フィルターを追加
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
