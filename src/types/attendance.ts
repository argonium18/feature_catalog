// 出席ステータスの型
export type AttendanceStatus = '出席' | '欠席' | '遅刻';

// フィルターの型
export interface Filters {
  class: string;
  subject: string;
}

// サマリーデータの型
export interface SummaryData {
  todayRate: number;
  prevDayRate: number;
  prevWeekRate: number;
  target: number;
}

// 時系列データの型
export interface TimeSeriesData {
  date: string;
  rate: number;
  cumulative: number;
}

// 生徒別時系列データの型
export interface StudentTimeSeriesData {
  studentId: number;
  name: string;
  data: TimeSeriesData[];
}

// テーブルデータの型
export interface StudentData {
  id: number;
  name: string;
  class: string;
  status: AttendanceStatus;
  cumulative: number;
  alert: boolean;
}

// 科目別出席率の型
export interface SubjectRate {
  subject: string;
  rate: number;
}

// 生徒別科目データの型
export interface StudentSubjectData {
  studentId: number;
  name: string;
  subjectRates: SubjectRate[];
}

// 棒グラフデータの型（全体用）
export interface OverallBarData {
  type: 'overall';
  data: Array<{
    name: string;
    rate: number;
  }>;
}

// 棒グラフデータの型（生徒別用）
export interface StudentsBarData {
  type: 'students';
  subjects: string[];
  data: StudentSubjectData[];
}

// 棒グラフデータの統合型
export type BarData = OverallBarData | StudentsBarData;