import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { createBarChartOption } from '../../utils/chartOptions'
import { useQuery } from '@tanstack/react-query';
import { fetchBarData } from '../../services/attendanceApi';


export const BarChart: React.FC = () => {
  // 円グラフデータ取得
  const { data = []} = useQuery({
    queryKey: ['barData'], 
    queryFn: fetchBarData,
  });

  // 円グラフオプション生成
  const option = createBarChartOption(data);

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
            棒グラフ
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            データの数量を棒の長さで視覚的に表現するグラフの一種です。売上の月別推移やアンケート結果の集計など、数量の比較が重要な場面で活用される
        </Typography>
          <ReactECharts 
            option = {option}
          />
      </CardContent>
    </Card>
  );
};