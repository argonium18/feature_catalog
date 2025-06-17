import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import HeatMap from '@/components/issy/HeatMap'

export default function HeatMapChart ()  {
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ '& > *': { mb: 2 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" gutterBottom>
          ヒートマップ
        </Typography>
        <Typography variant="body2" color="text.secondary" >
        2つの数値軸の組み合わせごとにデータの分布を色で可視化するヒートマップコンポーネントです。<br/>
        横軸・縦軸で任意の数値データを指定し、値の大小や密度を色の濃淡として直感的に表現します。<br/>
        スライダーや他の操作と組み合わせることで、特定の条件下での分布変化を動的に観察できます。
        </Typography>
        <HeatMap/>
      </CardContent>
    </Card>
  );
};