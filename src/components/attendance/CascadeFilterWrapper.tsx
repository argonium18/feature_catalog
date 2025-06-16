"use client";
import React, { useState ,useEffect} from "react";
import DynamicFilterChartManager  from "@/components/issy/CascadeFilter3Lane";
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
            段階フィルター
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            「フィルター対象」を選択することで、特定のカテゴリによる絞り込みが可能です。<br/>
            「フィルターを追加」ボタンを押すことで、さらにドリルダウンして複数段階のフィルターを適用できます。<br/>
            また、グラフのX軸付近をクリックするとその日付のデータがハイライトされます。<br/>
            このハイライトは、複数のグラフ間で連動して表示され、異なるカテゴリの動きを同じタイミングで比較できます。<br/>
        </Typography>
        {/* カスケードカード */}
          <DynamicFilterChartManager
          highlightDate={highlightDate}
          onDateClick={(date: string | null) => setHighlightDate(date)}
          />
      </CardContent>
    </Card>
  );
}
