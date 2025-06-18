import type { 
  PieDataItem,
  LineChartDataItem,
  BarChartDataItem,
  RadarChartDataItem,
} from '../types/attendance';
import { 
  ATTENDANCE_RATE_COLORS, 
  CHART_CONFIG,
  headerDefs,
} from '../constants/attendance';
import { GridColDef } from '@mui/x-data-grid';

//円グラフのオプション作成関数
export function createDonutOption(data: PieDataItem[]) {
  return {
    title: {
      text: '地方別人口割合',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: '人口割合',
        type: 'pie',
        radius: ['40%', '70%'],
        data,
      },
    ],
  };
}

// 折れ線グラフのオプション生成
export function createLineChartOption(data: LineChartDataItem[]) {
  return{
    tooltip: { trigger: 'axis' },
    xAxis: { 
      type: 'category', 
      data: data.map(d => d.date) 
    },
    yAxis: { type: 'value' },
    series: [{
      name: '米の価格',
      type: 'line',
      data: data.map(d => d.price),
    }],
  };
}

//棒グラフのオプション生成
export const createBarChartOption = (barData: BarChartDataItem[]) => {
    if (!barData || barData.length === 0) {
      return { series: [] }
  }

  const names = barData.map(({ name }) => name);
  const rates = barData.map(({ rate }) => rate);
  const rotate = names.length > 5 ? 45 : 0;
  const bottom = names.length > 5 ? 60 : 30;

  return {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    xAxis: {
      type: 'category',
      data: names,
      axisLabel: { interval: 0, rotate },
    },
    yAxis: {
      type: 'value',
      name: '出席率',
      min: CHART_CONFIG.MIN_RATE,
      max: CHART_CONFIG.MAX_RATE,
    },
    grid: { bottom },
    series: [
      {
        type: 'bar',
        data: rates,
        label: { show: true, position: 'top', formatter: '{c}%' },
        itemStyle: {
          color: ({ data }: { data: number }) => {
            if (data >= 95) return ATTENDANCE_RATE_COLORS.EXCELLENT;
            if (data >= 90) return ATTENDANCE_RATE_COLORS.GOOD;
            if (data >= 85) return ATTENDANCE_RATE_COLORS.WARNING;
            return ATTENDANCE_RATE_COLORS.DANGER;
          },
        },
      },
    ],
  };
};


//レーダーチャート生成オプション
export function createRadarChartOption(data: RadarChartDataItem[]) {
  if (!data || data.length === 0) {
    return {
      tooltip: {},
      radar: {
        indicator: [],
        shape: 'circle',
        radius: '65%'
      },
      series: []
    };
  }

  const subjects = data.map(item => item.subject);
  const scores = data.map(item => item.score);

  return {
    tooltip: {},
    radar: {
      indicator: subjects.map(name => ({ name, max: 100 })),
      shape: 'circle',
      radius: '65%'
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: scores,
            name: 'Aさん',
            itemStyle: {
              color: '#FFA500' // オレンジ
            },
            lineStyle: {
              color: '#FFA500'
            },
            areaStyle: {
              color: 'rgba(255, 165, 0, 0.3)' // 半透明のオレンジ
            }
          }
        ]
      }
    ]
  };
}


// テーブルカラム生成関数
export function getColumns(): GridColDef[] {
  return headerDefs.map(({ field, headerName, width }) => ({
    field,
    headerName,
    width,
  }))
}