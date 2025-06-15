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
