// ChurnRiskRanking.tsx
"use client";

import React from "react";
import { ChurnPredict } from "@/components/issy/data/churnPredict";

type Props = {
  customers: ChurnPredict[];
  alertThreshold: number;
};

export default function ChurnRiskRanking({ customers, alertThreshold }: Props) {
  const sorted = [...customers]
    .map(c => ({
      ...c,
      riskValue: parseFloat(c.churn_risk)
    }))
    .filter(c => !isNaN(c.riskValue))
    .sort((a, b) => b.riskValue - a.riskValue)

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">解約リスクランキング</h3>
      <ul className="space-y-2 max-h-96 overflow-y-auto">
        {sorted.map((c, i) => {
          const isAlert = c.riskValue >= alertThreshold;
          return (
            <li
              key={i}
              className={`flex justify-between items-center p-2 border rounded ${isAlert ? "bg-red-100 border-red-400" : "bg-white"}`}
            >
              <span>{c.cusomer_name}</span>
              {isAlert && <span className="text-red-600 text-xs ml-2">⚠ アラート対象</span>}
              <span className="text-sm font-mono">{c.riskValue.toFixed(2)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
