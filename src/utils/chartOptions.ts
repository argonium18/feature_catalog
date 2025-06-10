import type { 
  TimeSeriesData, 
  StudentTimeSeriesData, 
  BarData 
} from '../types/attendance';
import { 
  STUDENT_COLORS, 
  ATTENDANCE_RATE_COLORS, 
  CHART_CONFIG 
} from '../constants/attendance';

// ドーナツグラフのオプション生成
export const getDonutOption = (value: number) => {
  const remaining = 100 - value;
  return {
    tooltip: { trigger: 'item' },
    legend: { show: false },
    series: [
      {
        name: '今日の出席率',
        type: 'pie',
        radius: [CHART_CONFIG.DONUT_INNER_RADIUS, CHART_CONFIG.DONUT_OUTER_RADIUS],
        avoidLabelOverlap: false,
        label: { 
          show: true, 
          position: 'center', 
          formatter: `${value}%`, 
          fontSize: 24 
        },
        data: [
          { 
            value: value, 
            name: '出席', 
            itemStyle: { color: ATTENDANCE_RATE_COLORS.EXCELLENT } 
          },
          { 
            value: remaining, 
            name: '欠席', 
            itemStyle: { color: '#e0e0e0' } 
          },
        ],
      },
    ],
  };
};

// 折れ線グラフのオプション生成
export const getLineChartOption = (
  data: TimeSeriesData[] | StudentTimeSeriesData[]
) => {
  // 生徒が選択されている場合（複数生徒の比較グラフ）
  if (data?.length > 0 ) {
    const studentData = data as StudentTimeSeriesData[];
    return {
      tooltip: { trigger: 'axis' },
      legend: { 
        data: studentData.map((s) => s.name),
        type: 'scroll',
        top: 'auto',
      },
      grid: {
        bottom: 30,
        containLabel: true,
      },
      xAxis: { 
        type: 'category', 
        data: studentData[0].data.map((d) => d.date),
        axisLabel: {
          formatter: (value: string) => value.substring(5) // MMM-DD形式に短縮
        }
      },
      yAxis: { 
        type: 'value',
        min: CHART_CONFIG.MIN_RATE,
        max: CHART_CONFIG.MAX_RATE
      },
      series: studentData.map((s) => ({ 
        name: s.name, 
        type: 'line', 
        data: s.data.map((d) => d.rate),
        emphasis: {
          focus: 'series'
        }
      })),
    };
  }
};

// 棒グラフのオプション生成
export const getBarChartOption = (barData: BarData | null) => {
  // データがまだロードされていない場合
  if (!barData) return { series: [] };
  
  // 生徒が選択されている場合（生徒ごとの科目別出席率）
  if (barData.type === 'students') {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      legend: {
        data: barData.data.map(student => student.name),
        type: 'scroll',
        bottom: 0
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: barData.data.length > 3 ? 60 : 40,
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: barData.subjects,
        axisLabel: {
          interval: 0,
          rotate: barData.subjects.length > 4 ? 30 : 0
        }
      },
      yAxis: {
        type: 'value',
        name: '出席率',
        min: CHART_CONFIG.MIN_RATE,
        max: CHART_CONFIG.MAX_RATE
      },
      series: barData.data.map((student, index) => ({
        name: student.name,
        type: 'bar',
        barGap: 0,
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: STUDENT_COLORS[index % STUDENT_COLORS.length]
        },
        data: student.subjectRates.map(sr => sr.rate),
        label: {
          show: barData.data.length <= 2,
          position: 'top',
          formatter: '{c}%'
        }
      }))
    };
  }
  
  // 生徒が選択されていない場合（全体の科目別出席率）
  return {
    tooltip: { trigger: 'axis' },
    xAxis: { 
      type: 'category', 
      data: barData.data.map((item) => item.name),
      axisLabel: {
        interval: 0,
        rotate: barData.data.length > 5 ? 45 : 0
      }
    },
    yAxis: { 
      type: 'value',
      min: CHART_CONFIG.MIN_RATE,
      max: CHART_CONFIG.MAX_RATE,
      name: '出席率'
    },
    grid: {
      bottom: barData.data.length > 5 ? 60 : 30
    },
    series: [{ 
      name: '出席率', 
      type: 'bar', 
      data: barData.data.map((item) => item.rate),
      itemStyle: {
        color: function(params: any) {
          // 出席率に応じて色を変える
          const rate = params.data;
          if (rate >= 95) return ATTENDANCE_RATE_COLORS.EXCELLENT;
          if (rate >= 90) return ATTENDANCE_RATE_COLORS.GOOD;
          if (rate >= 85) return ATTENDANCE_RATE_COLORS.WARNING;
          return ATTENDANCE_RATE_COLORS.DANGER;
        }
      },
      label: {
        show: true,
        position: 'top',
        formatter: '{c}%'
      }
    }],
  };
};