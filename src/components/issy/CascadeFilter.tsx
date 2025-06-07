"use client";

import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import DynamicFilterChart from "@/components/issy/DynamicFilterChart";
import { rawData } from "@/components/issy/data/salesData";
import { Button,Typography } from '@mui/material';
type DynamicFilterChartManagerProps = {
  highlightDate: string | null;
  onDateClick: (date: string | null) => void;
};
export default function DynamicFilterChartManager({highlightDate,onDateClick,}: DynamicFilterChartManagerProps)  {
  const [charts, setCharts] = useState<
    { id: number; inputData: { [key: string]: any }[] }[]
  >([{ id: 0, inputData: rawData }]);


  // ✅ 一度だけグラフ間リンクを確立
  useEffect(() => {
    echarts.connect("linked-group");
  }, []);

  const handleFiltered = (id: number, filteredData: { [key: string]: any }[]) => {
    setCharts(prev => {
      const newCharts = [...prev];
      if (newCharts[id + 1]) {
        newCharts[id + 1].inputData = filteredData;
      }
      return newCharts;
    });
  };

const addChart = () => {
  setCharts(prev => [
    ...prev,
    { id: prev.length, inputData: prev[prev.length - 1].inputData }
  ]);
};


  return (
    <div style={{ padding: "1rem" }}>

      <h2 style={{
        color: "#B71C1C",
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        display: "inline-block",
        marginBottom: "1rem",}}>
          選択された日付: {highlightDate ?? "なし"}
      </h2>
      {highlightDate && (
      <Button
        style={{ margin: "0.5rem 0", padding: "0.3rem 1rem", fontSize: "0.9rem" }}
        onClick={() => onDateClick(null)}
      >
        🔄 選択解除
      </Button>
      )}
      {charts.map((chart, index) => (
        <div key={chart.id}>
          <DynamicFilterChart
            inputData={chart.inputData}
            availableKeys={Object.keys(chart.inputData[0]).filter(k => k !== "date" && k !== "sales")}
            xKey="date"
            yKey="sales"
            onFiltered={(filtered) => handleFiltered(chart.id, filtered)}
            highlightDate={highlightDate}
            onDateClick={(date: string | null) => {
              console.log("✅ 選択された日付:", date);
              onDateClick(date);
            }}
          />
          {index === charts.length - 1 && (
            <Button
              style={{ marginBottom: "2rem", padding: "0.5rem 1rem" }}
              onClick={addChart}
            >
              ＋フィルターを追加
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}
