import React from 'react';
import { DraggableWrapper } from '../DraggableWrapper';
import { MetricsCard } from './MetricsCard';

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
    <DraggableWrapper onReorder={handleReorder}>
      {metricsCards}
    </DraggableWrapper>
  );
};