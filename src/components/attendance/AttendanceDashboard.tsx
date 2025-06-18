import React from 'react';
import { Grid, Box, Typography} from '@mui/material';
import { DonutChart } from './DonutChart';
import { LineChart } from './LineChart';
import { BarChart }  from './BarChart';
import { RadarChart }  from './RadarChart';
import { DraggableMetrics } from './DraggableMetrics';
import { ColorPickerChart } from './ColorPickerChart';
import { GridTable } from './GridTable';
import CategoryFilterWrapper  from './CategoryFilterWrapper';
import TimeSeriesFilterWrapper  from './TimeSeriesFilterWrapper';
import TimeSeriesFilterTooltipHoverWrapper  from './TimeSeriesFilterTooltipHoverWrapper';
import ChurnDashboardWrapper  from './ChurnDashboardWrapper';
import LinearGaugeWrapper  from './LinearGaugeWrapper';
import LinearGaugeAutoWrapper  from './LinearGaugeAutoWrapper';
import FocusSortDash  from './FocusSortDash';
import AccentDiff from './AccentDiffWrapper'
import CascadeFilterWrapper from './CascadeFilterWrapper'
import GroupBarWrapper from './GroupBarWrapper'
import SortGraphWrapper from './SortGraphWrapper'
import HeatMapChart from './HeatMapChart'
import WavetableWrapper from './WavetableWrapper'

export default function AttendanceDashboard() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' }, py : 4 , '& > *': { p: 4 }}}>
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
        <Grid item size={{ xs: 12, sm: 6, lg: 6 }}>
          <HeatMapChart/>
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
          <DraggableMetrics/>
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
          <SortGraphWrapper/>
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <GroupBarWrapper/>
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
          <TimeSeriesFilterTooltipHoverWrapper/>
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <CascadeFilterWrapper/>
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <FocusSortDash/>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
        <Grid item size={{ xs: 12 }}>
          <Typography variant="h4" gutterBottom sx={{ px: 1, fontWeight: "bold" }}>
              実験的なUI
          </Typography>
        </Grid>
        
        <Grid item size={{ xs: 12 }}>
          <WavetableWrapper/>
        </Grid>
      </Grid>
    </Box>
    
  );
}