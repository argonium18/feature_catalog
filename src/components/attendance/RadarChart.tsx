import React from 'react';
import ReactECharts from 'echarts-for-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const RadarChart = () => {
  
  const subjects = ['代数', '幾何', '微分', '積分', '確率', '統計', 'ベクトル', '数列'];
  const scores = [85, 90, 78, 88, 92, 80, 75, 89];

  const option = {
    title: { text: '数学科目別成績', left: 'center' },
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
