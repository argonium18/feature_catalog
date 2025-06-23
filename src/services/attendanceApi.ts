import type { 
  SummaryData, 
  RadarChartDataItem,
  BarChartDataItem,
  LineChartDataItem,
  TabelDataItem
} from '../types/attendance';

// サマリーデータの取得
export const fetchSummary = async (): Promise<SummaryData[]> => {
  return [
      { name: '関東', value: 34.8 },
      { name: '近畿', value: 16.6 },
      { name: '中部', value: 15.1 },
      { name: '九州・沖縄', value: 11.1 },
      { name: '東北', value: 7.1 },
      { name: '中国', value: 5.9 },
      { name: '北海道', value: 4.2 },
      { name: '四国', value: 2.4 },
  ]; 
};

//折れ線グラフデータの取得
export const fetchTimeSeries = async (): Promise<LineChartDataItem[]> => {
  return [
    { date: '05-10',price: 2000 },
    { date: '05-11',price: 2500 },
    { date: '05-12',price: 2200 },
    { date: '05-13',price: 2500 },
    { date: '05-14',price: 2800 },
  ];
};

//レーダーチャートデータの取得
export const fetchScore = async (): Promise<RadarChartDataItem[]> => {
  return [
    { subject: '国語', score: 45 },
    { subject: '英語', score: 80 },
    { subject: '数学', score: 28 },
    { subject: '物理', score: 60 },
    { subject: '化学', score: 92 },
    { subject: '歴史', score: 100 },
    { subject: '地理', score: 75 },
    { subject: '公民', score: 89 },
  ];
};

// 棒グラフデータの取得
export const fetchBarData = async (): Promise<BarChartDataItem[]> => {
  return [
      { name: '数学', rate: 88 },
      { name: '英語', rate: 95 },
      { name: '理科', rate: 92 },
      { name: '国語', rate: 90 },
      { name: '社会', rate: 86 }
    ];
};

// テーブルデータの取得
export const fetchTableData = async (): Promise<TabelDataItem[]> => {
  return [
    { id: 1, name: '佐藤　太郎', grade: '1年A組', subject: '数学', score: 85, attendance: '出席', note: '特になし' },
    { id: 2, name: '鈴木　花子', grade: '1年B組', subject: '英語', score: 92, attendance: '欠席', note: '体調不良' },
    { id: 3, name: '高橋　一朗', grade: '1年A組', subject: '理科', score: 78, attendance: '遅刻', note: '交通渋滞' },
    { id: 4, name: '田中　美咲', grade: '1年C組', subject: '社会', score: 88, attendance: '出席', note: '発表優秀' },
    { id: 5, name: '伊藤　健太', grade: '1年B組', subject: '国語', score: 74, attendance: '出席', note: '要復習' },
    { id: 6, name: '山本　由美', grade: '1年C組', subject: '音楽', score: 95, attendance: '出席', note: '伴奏担当' },
    { id: 7, name: '中村　浩二', grade: '1年A組', subject: '体育', score: 81, attendance: '欠席', note: 'けがのため' },
  ];
};
