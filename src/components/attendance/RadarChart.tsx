// MathRadarChart.tsx
import React from 'react';
import ReactECharts from 'echarts-for-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import { useEchartsTheme } from '../.././dashboard/theme/customizations/echarts';

const MathRadarChart = () => {

  // const themeName = useEchartsTheme('custom-mui');  // 'custom-mui-light' or 'custom-mui-dark'

  const subjects = [
    '代数', '幾何', '微分', '積分', '確率', '統計', 'ベクトル', '数列'
  ];

  const option = {
    title: {
      text: '数学科目別成績',
      left: 'center'
    },
    tooltip: {},
    radar: {
      indicator: subjects.map(subject => ({
        name: subject,
        max: 100
      })),
      shape: 'circle',
      radius: '65%',
    },
    series: [
      {
        name: '得点',
        type: 'radar',
        data: [
          {
            value: [85, 90, 78, 88, 92, 80, 75, 89],
            name: 'Aさん'
          }
        ]
      }
    ]
  };

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent sx={{ textAlign: 'left' }}>
        <ReactECharts 
            option={option} 
            style={{ height: '400px' }} 
        />
      </CardContent>
    </Card>
    );
};

export default MathRadarChart;