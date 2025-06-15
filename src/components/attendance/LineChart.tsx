import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, Typography } from '@mui/material';
import { createLineChartOption } from '../../utils/chartOptions'
import ReactECharts from 'echarts-for-react';
import { fetchTimeSeries } from '../../services/attendanceApi';

export const LineChart: React.FC = () => {
  
  //折れ線グラフデータ取得
  const { data = [] } = useQuery({
    queryKey: ['timeSeries'],
    queryFn: fetchTimeSeries,
  });

  // 折れ線グラフオプション生成
  const option = createLineChartOption(data);

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ '& > *': { mb: 2 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" gutterBottom>
          折れ線グラフ
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          時間経過や連続するデータの変化を視覚的に示し、トレンドやパターンを把握しやすくする役割を持つ
        </Typography>
        <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
      </CardContent>
    </Card>
  );
};