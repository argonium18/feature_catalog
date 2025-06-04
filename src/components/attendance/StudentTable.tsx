import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Student } from '../../types/attendance';

interface StudentTableProps {
  data: Student[];
  isLoading: boolean;
  selectedRows: number[];
  onSelectionChange: (selection: number[]) => void;
}

const StudentTable: React.FC<StudentTableProps> = ({
  data,
  isLoading,
  selectedRows,
  onSelectionChange,
}) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'class', headerName: 'クラス', width: 100 },
    { field: 'name', headerName: '生徒名', width: 150 },
    { field: 'status', headerName: '出席ステータス', width: 150 },
    { field: 'cumulative', headerName: '累積欠席日数', width: 150 },
    {
      field: 'alert',
      headerName: '要対応',
      width: 130,
      renderCell: (params) => {
        if (isLoading) {
          return <Typography variant="body2" color="text.secondary">読み込み中...</Typography>;
        }
        return params.value
          ? <Chip label="要対応" size="small" color="error" />
          : <Chip label="—" size="small" variant="outlined" />;
      },
    },
  ];


  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          生徒一覧
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          生徒を選択するとグラフに個別データが表示されます
        </Typography>
        <div style={{ width: '100%' }}>
          {isLoading ? (
            <Box display="flex" justifyContent="center" alignItems="center" height={200}>
              <Typography>読み込み中...</Typography>
            </Box>
          ) : (
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              checkboxSelection
              onRowSelectionModelChange={(newSelection) => {
                // newSelection は必ず number[] 型になることに注意
                console.log('選択変更:', newSelection);
                onSelectionChange(newSelection as number[]);
              }}
              rowSelectionModel={selectedRows}
              autoHeight
              disableColumnMenu
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentTable;