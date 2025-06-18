"use client";

import React, { useState } from "react";
import { churnPredict } from "@/components/issy/data/churnPredict";
import ChurnRiskHistogram from "@/components/issy/ChurnRiskHistogram";
import ChurnRiskRanking from "@/components/issy/ChurnRiskRanking";
import { Card,  CardContent } from "@/components/issy/ui/card";

export default function ChurnDashboardWrapper() {
  const [alertThreshold, setAlertThreshold] = useState(0.8);

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">チャーンリスクダッシュボード</h2>
          {/* スライダーコントロール */}
        <div>
          <label htmlFor="threshold" className="block font-medium mb-1">
            アラート条件: 顧客解約リスクが{alertThreshold.toFixed(2)}以上の時
          </label>
          <input
            id="threshold"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={alertThreshold}
            onChange={(e) => setAlertThreshold(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent>
              {/* グラフ1：ヒストグラム */}
              <ChurnRiskHistogram
                alertThreshold={alertThreshold}
                onBarClick={(risk) => setAlertThreshold(risk)}
                customers={churnPredict}
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              {/* グラフ2：ランキング */}
              <ChurnRiskRanking
                alertThreshold={alertThreshold}
                customers={churnPredict}
              />
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
