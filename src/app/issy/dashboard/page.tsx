"use client";
import React, { useState ,useEffect} from "react";
import { Card, CardHeader, CardContent } from "@/components/issy/ui/card";
import DynamicFilterChartManager  from "@/components/issy/cascade";
import RechartsGroupedBar  from "@/components/issy/bar-chart";
import Wavetable  from "@/components/issy/wavetable";
import * as echarts from "echarts";
import "@/app/globals.css"
export default function DashboardPage() {
  const [highlightDate, setHighlightDate] = useState<string | null>(null);
  useEffect(() => {
    echarts.disconnect("linked-group");
    echarts.connect("linked-group");
  }, []);
  return (
    
    <div className="grid grid-cols-3 gap-4">
      {/* カスケードカード */}
      <Card>
        <CardContent>
          <h2>選択された日付: {highlightDate ?? "なし"}</h2>
          <DynamicFilterChartManager
          highlightDate={highlightDate}
          onDateClick={(date) => setHighlightDate(date)}
          />
        </CardContent>
      </Card>

      {/* KPIカード */}
      <Card className="col-span-1">
        <CardHeader>棒グラフ（カテゴリ）</CardHeader>
        <CardContent>
          <RechartsGroupedBar targetMonth={highlightDate ? highlightDate.slice(0, 7) : null}/>
        </CardContent>
      </Card>

      {/* データメタカード       */}
<Card className="col-span-1">
        <CardHeader>多次元分分析（RFM）</CardHeader>
        <CardContent>
          <Wavetable/>
        </CardContent>
      </Card>
    </div>
  );
}
