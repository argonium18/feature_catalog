import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import ReactECharts from 'echarts-for-react';
import type { BarData } from '../../types/attendance';
import { getBarChartOption } from '../../utils/chartOptions';
import { CHART_CONFIG } from '../../constants/attendance';

interface BarChartProps {
  data: BarData | null;
  isLoading: boolean;
  selectedRows: number[];
  filters?: any; // フィルターの具体的な型に応じて調整してください
  onFilterChange?: (filters: any) => void; // フィルター変更ハンドラーの型に応じて調整してください
}

export const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  isLoading,
  selectedRows,
  filters,
  onFilterChange
}) => {
  // フィルターが適用されたデータを取得（必要に応じて実装）
  const filteredData = React.useMemo(() => {
    // ここでfiltersを使ってdataをフィルタリングする処理を実装
    // 現在は単純にdataをそのまま返しています
    return data;
  }, [data, filters]);

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
            棒グラフ
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            グループごとのデータを表示
        </Typography>
        {isLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={300}>
            <Typography>読み込み中...</Typography>
          </Box>
        ) : (
          <ReactECharts 
            option={getBarChartOption(filteredData)} 
            notMerge={true} 
            lazyUpdate={true} 
            style={{ height: 300 }} 
          />
        )}
      </CardContent>
    </Card>
  );
};