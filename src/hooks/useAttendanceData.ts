import { useState, useEffect, useCallback } from 'react';
import type {
  Filters,
  SummaryData,
  TimeSeriesData,
  StudentTimeSeriesData,
  StudentData,
  BarData
} from '../types/attendance';
import {
  fetchSummary,
  fetchTimeSeries,
  fetchTableData,
  fetchBarData
} from '../services/attendanceApi';

export const useAttendanceData = (filters: Filters, selectedRows: number[]) => {
  const [summary, setSummary] = useState<SummaryData | null>(null);
  const [timeSeries, setTimeSeries] = useState<TimeSeriesData[] | StudentTimeSeriesData[]>([]);
  const [tableData, setTableData] = useState<StudentData[]>([]);
  const [barData, setBarData] = useState<BarData | null>(null);
  
  // 各データソースごとに個別のローディング状態を管理
  const [loadingStates, setLoadingStates] = useState({
    summary: false,
    timeSeries: false,
    tableData: false,
    barData: false,
    initial: true
  });

  // ローディング状態を更新するヘルパー関数
  const updateLoadingState = useCallback((key: keyof typeof loadingStates, value: boolean) => {
    setLoadingStates(prev => ({
      ...prev,
      [key]: value,
      initial: false
    }));
  }, []);

  // 全体のローディング状態（いずれかが読み込み中の場合true）
  const isLoading = Object.values(loadingStates).some(Boolean);

  // 初期データとフィルター変更時のデータ取得
  useEffect(() => {
    const loadInitialData = async () => {
      console.log('フィルター変更によるデータ読み込み開始');
      
      // 各データソースのローディング状態を設定
      updateLoadingState('summary', true);
      updateLoadingState('tableData', true);
      updateLoadingState('timeSeries', true);
      updateLoadingState('barData', true);

      try {
        // サマリーとテーブルデータを並行取得
        const [summaryData, tableDataResult] = await Promise.all([
          fetchSummary(filters).finally(() => updateLoadingState('summary', false)),
          fetchTableData(filters).finally(() => updateLoadingState('tableData', false))
        ]);

        setSummary(summaryData);
        setTableData(tableDataResult);

        // 初期表示は選択なしの状態でグラフデータを取得
        const [timeSeriesData, barDataResult] = await Promise.all([
          fetchTimeSeries(filters, []).finally(() => updateLoadingState('timeSeries', false)),
          fetchBarData(filters, []).finally(() => updateLoadingState('barData', false))
        ]);
        
        setTimeSeries(timeSeriesData);
        setBarData(barDataResult);

      } catch (error) {
        console.error('データの取得に失敗しました:', error);
        // エラー時もローディング状態をリセット
        setLoadingStates({
          summary: false,
          timeSeries: false,
          tableData: false,
          barData: false,
          initial: false
        });
      }
    };

    loadInitialData();
  }, [filters, updateLoadingState]);

  // 選択行変更時のグラフデータ更新
  useEffect(() => {
    // 初期ロード中は実行しない
    if (loadingStates.initial) return;

    const updateChartsWithSelection = async () => {
      console.log("選択された生徒ID:", selectedRows);
      
      updateLoadingState('timeSeries', true);
      updateLoadingState('barData', true);

      try {
        const [timeSeriesData, barDataResult] = await Promise.all([
          fetchTimeSeries(filters, selectedRows).finally(() => updateLoadingState('timeSeries', false)),
          fetchBarData(filters, selectedRows).finally(() => updateLoadingState('barData', false))
        ]);

        setTimeSeries(timeSeriesData);
        setBarData(barDataResult);
      } catch (error) {
        console.error('グラフデータの更新に失敗しました:', error);
        updateLoadingState('timeSeries', false);
        updateLoadingState('barData', false);
      }
    };

    updateChartsWithSelection();
  }, [selectedRows, filters, loadingStates.initial, updateLoadingState]);

  return {
    summary: {
      data: summary,
      isLoading: loadingStates.summary
    },
    students: {
      data: tableData,
      isLoading: loadingStates.tableData
    },
    timeSeries: {
      data: timeSeries,
      isLoading: loadingStates.timeSeries
    },
    barData: {
      data: barData,
      isLoading: loadingStates.barData
    },
    // 全体のローディング状態も提供
    isLoading
  };
};