import type { 
  Filters, 
  SummaryData, 
  StudentTimeSeriesData, 
  TimeSeriesData, 
  StudentData, 
  BarData 
} from '../types/attendance';
import { SUBJECT_NAMES } from '../constants/attendance';

// サマリーデータの取得
export const fetchSummary = async (filters: Filters): Promise<SummaryData> => {
  // TODO: 実際のAPI呼び出しに置き換える
  return { 
    todayRate: 92, 
    prevDayRate: 95, 
    prevWeekRate: 90, 
    target: 95 
  };
};

// 時系列データの取得
export const fetchTimeSeries = async (
  filters: Filters, 
  selectedIds: number[]
): Promise<TimeSeriesData[] | StudentTimeSeriesData[]> => {
  // 基本の時系列データ
  const baseData: TimeSeriesData[] = [
    { date: '2025-05-10', rate: 90, cumulative: 5 },
    { date: '2025-05-11', rate: 92, cumulative: 7 },
    { date: '2025-05-12', rate: 94, cumulative: 8 },
    { date: '2025-05-13', rate: 91, cumulative: 10 },
    { date: '2025-05-14', rate: 93, cumulative: 12 },
  ];

  // 生徒が選択されている場合は、選択された生徒のデータを返す
  if (selectedIds?.length > 0) {
    return selectedIds.map((id) => ({
      studentId: id,
      name: `生徒${id}`,
      data: baseData.map((day, index) => ({
        date: day.date,
        rate: Math.max(85, Math.min(98, 90 + id % 5 + index % 3)),
        cumulative: index + id % 3
      }))
    }));
  }
  
  // 生徒が選択されていない場合は、全体の平均データを返す
  return baseData;
};

// テーブルデータの取得
export const fetchTableData = async (filters: Filters): Promise<StudentData[]> => {
  // TODO: 実際のAPI呼び出しに置き換える
  return [
    { id: 1, name: 'A太郎', class: '1A', status: '欠席', cumulative: 3, alert: true },
    { id: 2, name: 'B花子', class: '1A', status: '出席', cumulative: 0, alert: false },
    { id: 3, name: 'C次郎', class: '1B', status: '遅刻', cumulative: 1, alert: true },
    { id: 4, name: 'D三郎', class: '1B', status: '出席', cumulative: 0, alert: false },
  ];
};

// 棒グラフデータの取得
export const fetchBarData = async (
  filters: Filters, 
  selectedIds: number[]
): Promise<BarData> => {
  // 生徒が選択されている場合は、生徒ごとの科目別出席率を返す
  if (selectedIds && selectedIds.length > 0) {
    const studentSubjectData = [];
    
    // 選択された各生徒について科目別データを生成
    for (const id of selectedIds) {
      const studentName = `生徒${id}`;
      
      // 生徒の科目別出席率を生成（ダミーデータ）
      const subjectRates = SUBJECT_NAMES.map(subject => {
        // 生徒IDと科目に基づいて少し変化をつける
        const baseRate = 85 + (id % 5) * 2;
        const variation = (subject.charCodeAt(0) % 5);
        return {
          subject: subject,
          rate: Math.min(98, Math.max(83, baseRate + variation))
        };
      });
      
      studentSubjectData.push({
        studentId: id,
        name: studentName,
        subjectRates: subjectRates
      });
    }
    
    return {
      type: 'students',
      subjects: SUBJECT_NAMES,
      data: studentSubjectData
    };
  }
  
  // 生徒が選択されていない場合は全体の科目別データを表示
  return {
    type: 'overall',
    data: [
      { name: '数学', rate: 88 },
      { name: '英語', rate: 95 },
      { name: '理科', rate: 92 },
      { name: '国語', rate: 90 },
      { name: '社会', rate: 86 }
    ]
  };
};