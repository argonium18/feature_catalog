import React from 'react';
import { DraggableWrapper } from '../DraggableWrapper';
import { MetricsCard } from './MetricsCard';
import {
  Typography,
  Card,
  CardContent,
} from '@mui/material';
const metricsData = [
  { title: "月間売上", current: 1250000, previous: 980000, currency: "¥" },
  { title: "新規顧客数", current: 245, previous: 190, currency: "" },
  { title: "平均注文額", current: 8500, previous: 9200, currency: "¥" }
];

export const DraggableMetrics: React.FC = () => {
  const handleReorder = (newOrder: string[]) => {
    console.log('新しい順序:', newOrder);
  };

  const metricsCards = metricsData.map((data, index) => (
    <MetricsCard 
      key={index}
      title={data.title}
      current={data.current}
      previous={data.previous}
      currency={data.currency}
    />
  ));

  return (
    <Card variant="outlined" sx={{ p: 2, height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          ドラッグ&ドロップ
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ドラッグ&ドロップでカードの位置を自由に変更することができます。<br/>
        </Typography>
        <DraggableWrapper onReorder={handleReorder}>
          {metricsCards}
        </DraggableWrapper>
      </CardContent>
    </Card>
  );
};