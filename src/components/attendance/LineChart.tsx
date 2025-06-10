import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { getLineChartOption } from '../../utils/chartOptions';
import type { TimeSeriesData, StudentTimeSeriesData } from '../../types/attendance';

interface LineChartProps {
  data: TimeSeriesData[] | StudentTimeSeriesData[];
  isLoading: boolean;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  isLoading,
}) => {
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>

        <Typography variant="h6" gutterBottom>
          累積欠席日数の推移
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          生徒一覧で選択した生徒の、累積欠席日数の変化を期間ごとにグラフで表示します
        </Typography>

        {!isLoading && (
          <ReactECharts
            option={getLineChartOption(data)}
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 300 }}
          />
        )}
      </CardContent>
    </Card>
  );
};