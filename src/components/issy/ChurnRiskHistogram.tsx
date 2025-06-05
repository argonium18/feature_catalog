// ChurnRiskHistogram.tsx
"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import type { ChurnPredict } from "@/components/issy/data/churnPredict";

type Props = {
  customers: ChurnPredict[];
  alertThreshold: number;
  onBarClick?: (risk: number) => void;
};

export default function ChurnRiskHistogram({ customers, alertThreshold, onBarClick }: Props) {
  const chartRef = useRef<HTMLDivElement>(null);

  // 対象顧客数と費用の計算
  const alertCustomers = customers.filter((c) => parseFloat(c.churn_risk) >= alertThreshold);
  const campaignCost = alertCustomers.length * 500; // 1人あたり500円（仮）

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const binCount = 10;
    const bins = new Array(binCount).fill(0);
    customers.forEach((c) => {
      const riskValue = parseFloat(c.churn_risk);
      if (!isNaN(riskValue)) {
        const index = Math.min(Math.floor(riskValue * binCount), binCount - 1);
        bins[index]++;
      }
    });

    const binEdges = Array.from({ length: binCount }, (_, i) => `${(i / binCount).toFixed(1)}-${((i + 1) / binCount).toFixed(1)}`);

    const alertIndex = Math.floor(alertThreshold * binCount);

    chart.setOption({
      title: { text: "　" },
      tooltip: {},
      xAxis: {
        type: "category",
        data: binEdges,
        name: "Churn Risk Score"
      },
      yAxis: {
        type: "value",
        name: "Customer Count"
      },
      series: [
        {
          type: "bar",
          data: bins.map((count, i) => ({
            value: count,
            itemStyle: {
              color: i >= alertIndex ? "#e74c3c" : "#3498db",
            },
          })),
          animationDuration: 0,
          animationDurationUpdate: 0
        },
      ],
      animation: false
    });

    chart.off("click");
    chart.on("click", (params) => {
      const index = params.dataIndex;
      const clickedRisk = (index + 0.5) / binCount; // 中央値でしきい値に
      onBarClick?.(clickedRisk);
    });

    return () => {
      chart.dispose();
    };
  }, [customers, alertThreshold, onBarClick]);

  return (
    <div>
      <div className="mb-2 text-sm text-gray-700">
        <span className="font-semibold">キャンペーン施策対象：</span>
        {alertCustomers.length} 人 ／ <span className="font-semibold">キャンペーン想定費用：</span>
        {campaignCost.toLocaleString()} 円
        <button
          onClick={() => alert("施策を実行しました！（モック）")}
          className="ml-4 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
        >
          キャンペーン施策を実行
        </button>
      </div>
      <div ref={chartRef} style={{ width: "100%", height: "400px" }} />
    </div>
  );
}
