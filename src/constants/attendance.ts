
// テーブルヘッダー
export const headerDefs = [
  { field: 'id',         headerName: 'ID',        width: 70 },
  { field: 'name',       headerName: '氏名',      width: 150 },
  { field: 'grade',      headerName: '学年',      width: 100 },
  { field: 'subject',    headerName: '科目',      width: 120 },
  { field: 'score',      headerName: '得点',      width: 80,  type: 'number' },
  { field: 'attendance', headerName: '出欠',      width: 100 },
  { field: 'note',       headerName: '備考',      width: 200 },
];

// クラス一覧
export const CLASSES = [
  { value: '', label: '全て' },
  { value: '1A', label: '1A' },
  { value: '1B', label: '1B' },
];

// 科目一覧
export const SUBJECTS = [
  { value: '', label: '全て' },
  { value: 'math', label: '数学' },
  { value: 'eng', label: '英語' },
  { value: 'sci', label: '理科' },
];

// 科目名（日本語）
export const SUBJECT_NAMES = ['数学', '英語', '理科', '国語', '社会'];

// グラフ用カラーパレット
export const STUDENT_COLORS = [
  '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', 
  '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'
];

// 出席率に応じた色設定
export const ATTENDANCE_RATE_COLORS = {
  EXCELLENT: '#4caf50', // 95%以上
  GOOD: '#8bc34a',      // 90%以上
  WARNING: '#ffc107',   // 85%以上
  DANGER: '#f44336'     // 85%未満
};

// チャートの共通設定
export const CHART_CONFIG = {
  HEIGHT: 300,
  MIN_RATE: 80,
  MAX_RATE: 100,
  DONUT_INNER_RADIUS: '60%',
  DONUT_OUTER_RADIUS: '80%',
};