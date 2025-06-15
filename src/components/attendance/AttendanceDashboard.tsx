import React, { useState } from 'react';
import { Grid, Box, Typography} from '@mui/material';
import { useAttendanceData } from '../../hooks/useAttendanceData';
import { useFilters } from '../../hooks/useFilters';
import { GlobalFilters } from './GlobalFilters';
import { DonutChart } from './DonutChart';
import { LineChart } from './LineChart';
import { BarChart }  from './BarChart';
import { RadarChart }  from './RadarChart';
import { DragAndDrop } from  './DragAndDrop';
import { MetricsCardCollection } from './MetricsCard';
import { ColorPickerChart } from './ColorPickerChart';
import { GridTable } from './StudentTable';
import CategoryFilterWrapper  from './CategoryFilterWrapper';
import TimeSeriesFilterWrapper  from './TimeSeriesFilterWrapper';
import ChurnDashboardWrapper  from './ChurnDashboardWrapper';
import LinearGaugeWrapper  from './LinearGaugeWrapper';
import LinearGaugeAutoWrapper  from './LinearGaugeAutoWrapper';
import FocusSortDash  from './FocusSortDash';
import AccentDiff from './AccentDiffWrapper'
import CascadeFilterWrapper from './CascadeFilterWrapper'
import GroupBarWrapper from './GroupBarWrapper'

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
    selectedRows,
    lineChartFilters,
    barChartFilters
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
          <DonutChart/>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, lg: 6 }}>
          <LineChart/>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, lg: 6 }}>
          <BarChart/>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, lg: 6 }}>
          <RadarChart/>
        </Grid>
      </Grid>

      <Grid container spacing={2} columns={12} sx={{ mb: 2 , py: 2}}>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom sx={{fontWeight: "bold" }}>
              テーブル表示
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, lg: 12 }}>
          <GridTable/>
        </Grid>
      </Grid>

      <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom sx={{ px: 1, fontWeight: "bold" }}>
              指標表示
          </Typography>
          <Grid item size={{ xs: 12, sm: 6, lg: 6 }}>
            <LinearGaugeAutoWrapper/>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, lg: 6 }}>
            <LinearGaugeWrapper/>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom sx={{ px: 1, fontWeight: "bold" }}>
              色替え棒グラフ
          </Typography>
          <ColorPickerChart/>
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

      <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
          <MetricsCardCollection/>
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
              アクセント
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <AccentDiff/>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom sx={{ px: 1, fontWeight: "bold" }}>
              インタラクティブなUI
          </Typography>
        </Grid>
        
        <Grid item size={{ xs: 12 }}>
          <CascadeFilterWrapper/>
        </Grid>
                
        <Grid item size={{ xs: 12 }}>
          <GroupBarWrapper/>
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <FocusSortDash/>
        </Grid>
      </Grid>
    </Box>
    
  );
}