import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import { createDonutOption } from '../../utils/chartOptions'
import ReactECharts from 'echarts-for-react';
import { useQuery } from '@tanstack/react-query';
import { fetchSummary } from '../../services/attendanceApi';

export const DonutChart: React.FC = () => {
  // 円グラフデータ取得
  const { data = [] } = useQuery({
    queryKey: ['summary'], 
    queryFn: fetchSummary,
  });

  // 円グラフオプション生成
  const option = createDonutOption(data);

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          円グラフ
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          データの各項目の割合を直感的に示すグラフ。売上構成、予算配分、アンケート結果の比率などで使用される
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