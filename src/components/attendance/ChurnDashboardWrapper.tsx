"use client";

import React, { useState } from "react";
import { churnPredict } from "@/components/issy/data/churnPredict";
import ChurnRiskHistogram from "@/components/issy/ChurnRiskHistogram";
import ChurnRiskRanking from "@/components/issy/ChurnRiskRanking";
import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

export default function ChurnDashboardWrapper() {
  const [alertThreshold, setAlertThreshold] = useState(0.8);

  return (
    
  <Card>
    <CardContent>
        <Typography variant="h6" gutterBottom>
          顧客解約リスクダッシュボード
        </Typography>
        <div className="p-6 space-y-8">
        <Typography variant="body1" gutterBottom>
        顧客の解約リスクが閾値を超えていた時に、アラート状態としてビンが赤く表示されたりランキングリストがアラート表示になります。<br/>
        解約リスク高い顧客に対してキャンペーン施策を行うなどのユースケースが考えられます。<br/>
        ツールバーを移動したりビンをクリックすることで閾値を変更できますので見た目の変化をご確認ください。<br/>
        <br/>
        </Typography>
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
        <div className="grid grid-cols-2 gap-4">
          <CardContent>
          {/* グラフ1：ヒストグラム */}
          <Typography variant="h6" gutterBottom>
            顧客の解約リスク分布
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ChurnRiskHistogram
              alertThreshold={alertThreshold}
              onBarClick={(risk) => setAlertThreshold(risk)}
              customers={churnPredict}
            />
          </Typography>
          </CardContent>
          <CardContent>
          <Typography variant="body1" gutterBottom>
            {/* グラフ2：ランキング */}
            <ChurnRiskRanking
              alertThreshold={alertThreshold}
              customers={churnPredict}
            />
          </Typography>
          </CardContent>
        </div>
      </div>
    </CardContent>
  </Card>
  );
}
