import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { getColumns } from '../../utils/chartOptions'
import { useQuery } from '@tanstack/react-query';
import { fetchTableData } from '../../services/attendanceApi';


export const GridTable= () => {
  //表データ取得
  const { data = [] } = useQuery({
    queryKey: ['tableData'],
    queryFn: fetchTableData,
  });

  //表のカラム取得
  const columns = getColumns()

  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          表
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          データを視覚的かつ整理された形式で表示するための要素です。数値、ステータス、日付などの詳細情報を効率よく伝える手段として活用される。
        </Typography>
        <DataGrid
          rows={data}
          columns={columns}
        />
      </CardContent>
    </Card>
  );
};