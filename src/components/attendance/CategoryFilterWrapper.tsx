import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import CategoryFilter from "@/components/issy/CategoryFilter"
export default function  CategoryFilterWrapper () {
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          動的フィルター
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          カテゴリデータを用いて折れ線グラフを動的にフィルタリングすることができます。<br/>
          抽出前との差分が赤い領域で表示されます。<br/>
          とある小売店の2年間の売り上げの推移のグラフを商品カテゴリで絞ってみましょう。
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          <CategoryFilter/>
        </Typography>
      </CardContent>
    </Card>
  );
};