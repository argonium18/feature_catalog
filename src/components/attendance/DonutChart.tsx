import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import ReactECharts from 'echarts-for-react';
import type { SummaryData } from '../../types/attendance';
import { getDonutOption } from '../../utils/chartOptions';
import { CHART_CONFIG } from '../../constants/attendance';

interface DonutChartProps {
  summary: SummaryData | null;
}

export const DonutChart: React.FC<DonutChartProps> = ({ summary }) => {
  // 目標差異を計算
  const diff = summary ? summary.todayRate - summary.target : 0;
  const diffLabel = summary ? `${diff > 0 ? '+' : ''}${diff}%` : '';

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          今日の出席率
        </Typography>
        
        {/* 目標差異を色つきChipで表示 */}
        <Box mt={2} display="flex" alignItems="center">
          <Typography variant="body2" sx={{ mr: 1 }}>
            目標との差異：
          </Typography>
          <Chip
            label={diffLabel}
            size="small"
            color={diff >= 0 ? 'success' : 'error'}
          />
        </Box>
        
        {summary && (
          <ReactECharts 
            option={getDonutOption(summary.todayRate)} 
            style={{ height: CHART_CONFIG.HEIGHT }} 
          />
        )}
      </CardContent>
    </Card>
  );
};