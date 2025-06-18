/*
import { useQuery } from '@tanstack/react-query';
import type { Filters } from '../types/attendance';
import {
  fetchSummary,
  fetchTimeSeries,
  fetchTableData,
  fetchBarData
} from '../services/attendanceApi';

export const useAttendanceData = (
  globalFilters: Filters, 
  selectedRows: number[],
  lineChartFilters?: Filters,
  barChartFilters?: Filters,
) => {
  // サマリーデータ
  const summaryQuery = useQuery({
    queryKey: ['attendance-summary', globalFilters],
    queryFn: () => fetchSummary(globalFilters),
  });

  // テーブルデータ
  const studentsQuery = useQuery({
    queryKey: ['attendance-students', globalFilters],
    queryFn: () => fetchTableData(globalFilters),
  });

  // 時系列データ（ローカルフィルター対応）
  const timeSeriesFilters = lineChartFilters || globalFilters;
  const timeSeriesQuery = useQuery({
    queryKey: ['attendance-timeseries', timeSeriesFilters, selectedRows],
    queryFn: () => fetchTimeSeries(timeSeriesFilters, selectedRows),
  });

  // 棒グラフデータ（選択行に依存）
  // barFiltersの名前は変更
  const barFilters = barChartFilters || globalFilters;
  const barDataQuery = useQuery({
    queryKey: ['attendance-bar', barFilters, selectedRows],
    queryFn: () => fetchBarData(barFilters, selectedRows),
  });

  return {
    summary: {
      data: summaryQuery.data ?? null,
      isLoading: summaryQuery.isLoading,
      error: summaryQuery.error,
      refetch: summaryQuery.refetch
    },
    students: {
      data: studentsQuery.data ?? [],
      isLoading: studentsQuery.isLoading,
      error: studentsQuery.error,
      refetch: studentsQuery.refetch
    },
    timeSeries: {
      data: timeSeriesQuery.data ?? [],
      isLoading: timeSeriesQuery.isLoading,
      error: timeSeriesQuery.error,
      refetch: timeSeriesQuery.refetch
    },
    barData: {
      data: barDataQuery.data ?? null,
      isLoading: barDataQuery.isLoading,
      error: barDataQuery.error,
      refetch: barDataQuery.refetch
    },
  };
};
*/