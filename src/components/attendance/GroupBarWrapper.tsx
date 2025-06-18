"use client";
import React, { useState ,useEffect} from "react";
import RechartsGroupedBar  from "@/components/issy/BarChart";
import * as echarts from "echarts";
import "@/app/globals.css"
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
export default function DashboardPage() {
  const [highlightDate, setHighlightDate] = useState<string | null>(null);
  useEffect(() => {
    echarts.disconnect("linked-group");
    echarts.connect("linked-group");
  }, []);
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 ,}}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
            グループ別ソート機能
        </Typography>
        <Typography variant="body2" color="text.secondary" >
            「モード切替」ボタンを押すことで、カテゴリ（例：地域）ごとにグループ化された表示に切り替えることができ、各グループ内での順位や傾向も把握できます。<br/>
        </Typography>
        {/* 棒グラフ */}
        <Typography variant="body1" gutterBottom component="div">
            <RechartsGroupedBar targetMonth='2025-06'/>
            <br/><br/><br/>
        </Typography>
      </CardContent>
    </Card>
  );
}
