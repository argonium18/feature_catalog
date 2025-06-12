"use client";
import React, { useState ,useEffect} from "react";
import DynamicFilterChartManager  from "@/components/issy/CascadeFilter";
import RechartsGroupedBar  from "@/components/issy/BarChart";
import * as echarts from "echarts";
import "@/app/globals.css"
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
export default function DashboardPage() {
  const [highlightDate, setHighlightDate] = useState<string | null>(null);
  useEffect(() => {
    echarts.disconnect("linked-group");
    echarts.connect("linked-group");
  }, []);
  return (
        <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              2種類のソートグラフの連動
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                とある小売業の売り上げデータを日付でソートしたグラフと売り上げでソートしたグラフを表示しています。<br/>
                折れ線グラフ上の日付（X軸）をクリックすることで、その月の売上データが自動的に抽出され、棒グラフに反映されます。<br/>
                これにより、特定期間における売上の詳細を視覚的に把握できます。<br/>
            </Typography>
            <Typography variant="body1" gutterBottom component="div">

                <div className="grid grid-cols-3 gap-4">
                    {/* カスケードカード */}
                    <Card>
                        <CardContent>
                        <DynamicFilterChartManager
                        highlightDate={highlightDate}
                        onDateClick={(date: string | null) => setHighlightDate(date)}
                        />
                        </CardContent>
                    </Card>
                    {/* 棒グラフ */}
                    <Card className="col-span-2">
                        <CardContent>
                            <RechartsGroupedBar targetMonth={highlightDate ? highlightDate.slice(0, 7) : null}/>
                        </CardContent>
                    </Card>
                </div>
            </Typography>
        </CardContent>
    </Card>
  );
}
