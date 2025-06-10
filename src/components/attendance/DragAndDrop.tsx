// AttendanceDashboard.tsx
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { useAttendanceData } from '../../hooks/useAttendanceData';
import { useFilters } from '../../hooks/useFilters';
import { GlobalFilters } from './GlobalFilters';
import { DonutChart } from './DonutChart';
import { LineChart } from './LineChart';
import { BarChart} from './GroupBarChart';
import { DraggableWrapper } from '../DraggableWrapper';

export function DragAndDrop() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [chartOrder, setChartOrder] = useState<string[]>(['donut', 'line', 'bar']);

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
  );

  // チャートの順序を管理
  const handleChartReorder = (newOrder: string[]) => {
    setChartOrder(newOrder);
  };

  // チャートコンポーネントマップ
  const chartMap = {
    donut: (
      <DonutChart 
        summary={summary.data}
        isLoading={summary.isLoading}
      />
    ),
    line: (
      <LineChart
        data={timeSeries.data}
        isLoading={timeSeries.isLoading}
      />
    ),
    bar: (
      <BarChart
        data={barData.data}
        isLoading={barData.isLoading}
        selectedRows={selectedRows}
        filters={barChartFilters}
        onFilterChange={handleBarChartFilterChange}
      />
    )
  };

  return (
    <Box sx={{ width: '100%', p: 2, maxWidth: { sm: '100%', md: '1700px' } }}>
      <DraggableWrapper onReorder={handleChartReorder}>
        {chartOrder.map(chartType => 
          React.cloneElement(
            chartMap[chartType as keyof typeof chartMap], 
            { key: chartType }
          )
        )}
      </DraggableWrapper>
    </Box>
  );
}