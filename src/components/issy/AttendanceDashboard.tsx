import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { useAttendanceData } from '../../hooks/useAttendanceData';
import { useFilters } from '../../hooks/useFilters';
import { GlobalFilters } from '@/components/attendance/GlobalFilters';
import { DonutChart } from '@/components/attendance/DonutChart';
import { LineChart } from '@/components/attendance/LineChart';
import { BarChart}  from '@/components/attendance/GroupBarChart';
import StudentTable  from '@/components/attendance/StudentTable';

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
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <GlobalFilters
        filters={globalFilters}
        onFilterChange={handleGlobalFilterChange}
      />

      <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
        <Grid item size={{ xs: 12, sm: 6, lg: 4 }}>
          <DonutChart 
            summary={summary.data}
            isLoading={summary.isLoading}
          />
        </Grid>

        <Grid item size={{ xs: 12, sm: 6, lg: 4 }}>
          <LineChart
            data={timeSeries.data}
            isLoading={timeSeries.isLoading}
            selectedRows={selectedRows}
            filters={lineChartFilters}
            onFilterChange={handleLineChartFilterChange}
          />
        </Grid>
        
        <Grid item size={{ xs: 12, sm: 6, lg: 4 }}>
          <BarChart
            data={barData.data}
            isLoading={barData.isLoading}
            selectedRows={selectedRows}
            filters={barChartFilters}
            onFilterChange={handleBarChartFilterChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} columns={12} sx={{ mb: 2 }}>
        <Grid item size={{ xs: 12, sm: 6, lg: 12 }}>
          <StudentTable
            data={students.data || []}
            isLoading={students.isLoading}
            selectedRows={selectedRows}
            onSelectionChange={setSelectedRows}
          />
        </Grid>
      </Grid>
    </Box>
  );
}