import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { useQuery } from '@tanstack/react-query';
import { fetchSummary } from '../../services/attendanceApi';

export const DonutChart: React.FC = () => {
  // 円グラフデータ取得（正しいAPI関数を使用）
  const { data = [] } = useQuery({
    queryKey: ['summary'], // クエリキーも変更
    queryFn: fetchSummary,
  });

  // 円グラフオプション
  const option = {
    title: { 
      text: '地方別人口割合', 
      left: 'center'
    },
    tooltip: { 
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [{
      name: '人口割合',
      type: 'pie',
      radius: ['40%', '70%'],
      data: data
    }]
  };
  
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          地方別人口分布
        </Typography>
        <Box mt={2} display="flex" alignItems="center" gap={1}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            総人口：
          </Typography>
          <Chip
            label="100%"
            size="small"
            color="primary"
          />
        </Box>
        <ReactECharts option={option} style={{ height: '400px' }} />
      </CardContent>
    </Card>
  );
};