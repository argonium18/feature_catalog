import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Typography, Card, CardContent } from '@mui/material';
import { createRadarChartOption } from '../../utils/chartOptions'
import { useQuery } from '@tanstack/react-query';
import { fetchScore } from '../../services/attendanceApi';

export const RadarChart = () => {
  //レーダーチャートデータ取得
 const { data = [] } = useQuery({
    queryKey: ['mathScore'],
    queryFn: fetchScore,
  });

  // レーダーチャートオプション生成
  const option = createRadarChartOption(data);

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography variant="h6" gutterBottom>
            レーダーチャート
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            複数の項目にわたるデータを視覚的に比較するためのグラフで、項目間のバランスや傾向、強み・弱みを直感的に把握することができる
        </Typography>
        <ReactECharts 
            option={option} 
            style={{ height: '400px' }} 
        />
      </CardContent>
    </Card>
    );
};
