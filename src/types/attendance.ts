// 出席ステータスの型
export type AttendanceStatus = '出席' | '欠席' | '遅刻';

// フィルターの型
export interface Filters {
  class: string;
  subject: string;
}

//円グラフ データ型
export interface PieDataItem {
  name: string; //
  value: number;
}

// 折れ線グラフ データ型
export interface LineChartDataItem {
  date: string;    // 日付（例: '2025-06-15'）
  price: number;   // 価格
}

//棒グラフ　データ型
export interface BarChartDataItem {
  name : string;
  rate : number;
}

//レーダーチャート　データ型
export type RadarChartDataItem = {
  subject: string;
  score: number;
};

// サマリーデータの型
export interface SummaryData {
  name: string;
  value: number;
}

//Dridテーブルのカラム型
export interface HeaderDef {
  field: string;
  headerName: string;
  width: number;
};

export interface TabelDataItem {
  id: number;
  name: string;         // 氏名
  grade: string;        // 学年
  subject: string;      // 科目
  score: number;        // 得点
  attendance: string;   // 出欠
  note: string;         // 備考
}

// // 時系列データの型
// export interface TimeSeriesData {
//   date: string;
//   rate: number;
//   price: number;
// }

// // 生徒別時系列データの型
// export interface StudentTimeSeriesData {
//   studentId: number;
//   name: string;
//   data: TimeSeriesData[];
// }

// // テーブルデータの型
// export interface StudentData {
//   id: number;
//   name: string;
//   class: string;
//   status: AttendanceStatus;
//   cumulative: number;
//   alert: boolean;
// }

// // 科目別出席率の型
// export interface SubjectRate {
//   subject: string;
//   rate: number;
// }

// // 生徒別科目データの型
// export interface StudentSubjectData {
//   studentId: number;
//   name: string;
//   subjectRates: SubjectRate[];
// }

// // 棒グラフデータの型（全体用）
// export interface OverallBarData {
//   type: 'overall';
//   data: Array<{
//     name: string;
//     rate: number;
//   }>;
// }

// // 棒グラフデータの型（生徒別用）
// export interface StudentsBarData {
//   type: 'students';
//   subjects: string[];
//   data: StudentSubjectData[];
// }

// // 棒グラフデータの統合型
// export type BarData = OverallBarData | StudentsBarData;