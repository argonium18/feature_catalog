import React, { useState } from 'react';
import { Grid, Box, Typography} from '@mui/material';
import { useAttendanceData } from '../../hooks/useAttendanceData';
import { useFilters } from '../../hooks/useFilters';
import { GlobalFilters } from './GlobalFilters';
import { DonutChart } from './DonutChart';
import { LineChart } from './LineChart';
import { BarChart}  from './GroupBarChart';
import { Sample}  from './Sample';
import { DragAndDrop } from  './DragAndDrop';
import StudentTable  from './StudentTable';
import CategoryFilterWrapper  from './CategoryFilterWrapper';
import TimeSeriesFilterWrapper  from './TimeSeriesFilterWrapper';
import ChurnDashboardWrapper  from './ChurnDashboardWrapper';
import LinearGaugeWrapper  from './LinearGaugeWrapper';
import FocusSortDash  from './FocusSortDash';

export default function AttendanceDashboard() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  
  const {
    globalFilters,
    lineChartFilters,
    barChartFilters,
    handleGlobalFilterChange,
    handleLineChartFilterChange,
    handleBarChartFilterChange
  } = useFilters();

  const { summary, students, timeSeries, barData } = useAttendanceData(
    globalFilters, 
    selectedRows
  );

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' }, py : 4 , '& > *': { p: 3 }}}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
          グラフ描画 機能カタログ
      </Typography>

      <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom sx={{ px: 1, fontWeight: "bold" }}>
              チャート描画
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, lg: 6 }}>
          <DonutChart 
            summary={summary.data}
            isLoading={summary.isLoading}
          />
        </Grid>

        <Grid item size={{ xs: 12, sm: 6, lg: 6 }}>
          <LineChart
            data={timeSeries.data}
            isLoading={timeSeries.isLoading}
          />
        </Grid>
        
        <Grid item size={{ xs: 12, sm: 6, lg: 6 }}>
          <BarChart
            data={barData.data}
            isLoading={barData.isLoading}
            selectedRows={selectedRows}
            filters={barChartFilters}
            onFilterChange={handleBarChartFilterChange}
          />
        </Grid>

        <Grid item size={{ xs: 12, sm: 6, lg: 6 }}>
          <Sample/>
        </Grid>
      </Grid>

      <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom sx={{ px: 1, fontWeight: "bold" }}>
              フィルタリング
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <CategoryFilterWrapper/>
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <TimeSeriesFilterWrapper/>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom sx={{ px: 1, fontWeight: "bold" }}>
              ソート
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <FocusSortDash/>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom sx={{ px: 1, fontWeight: "bold" }}>
              テーブル表示
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, lg: 12 }}>
          <StudentTable
            data={students.data || []}
            isLoading={students.isLoading}
            selectedRows={selectedRows}
            onSelectionChange={setSelectedRows}
          />
        </Grid>
      </Grid>
        <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
          <Grid item size={{ xs: 12 }}>
            <Typography variant="h4" gutterBottom sx={{ px: 1, fontWeight: "bold" }}>
                アラート表示
            </Typography>
          </Grid>
        <Grid item size={{ xs: 12, sm: 6, lg: 12 }}>
          <ChurnDashboardWrapper/>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom sx={{ px: 1, fontWeight: "bold" }}>
              指標表示
          </Typography>
          <LinearGaugeWrapper/>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom sx={{ px: 1, fontWeight: "bold" }}>
              ドラッグ&ドロップ
          </Typography>
          <DragAndDrop/>
        </Grid>
      </Grid>
    </Box>
    
  );
}