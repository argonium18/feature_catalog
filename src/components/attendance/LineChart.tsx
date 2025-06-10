import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, Typography } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { fetchTimeSeries } from '../../services/attendanceApi';

export const LineChart: React.FC = () => {
  //折れ線グラフデータ取得
  const { data = [] } = useQuery({
    queryKey: ['timeSeries'],
    queryFn: fetchTimeSeries,
  });

  //グラフ生成オプション
  const option = {
    tooltip: { trigger: 'axis' },
    xAxis: { 
      type: 'category', 
      data: data.map(d => d.date) 
    },
    yAxis: { type: 'value' },
    series: [{
      name: '米の価格',
      type: 'line',
      data: data.map(d => d.price),
    }],
  };

  return (
    <Card variant="outlined" sx={{ flexGrow: 1}}>
      <CardContent sx={{'& > *': { mb: 2}}}>
        <Typography variant="h6" gutterBottom>
          折れ線グラフ
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          時間経過や連続するデータの変化を視覚的に示し、トレンドやパターンを把握しやすくする役割を持つ
        </Typography>
        <ReactECharts option={option} style={{ height: 300 }} />
      </CardContent>
    </Card>
  );
};