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
        <Typography variant="body1" gutterBottom>
          カテゴリデータに対してフィルタリングする<br/>
          抽出前との差分を赤い領域で表示
        </Typography>
        <Typography variant="body1" gutterBottom>
          <CategoryFilter/>
        </Typography>
      </CardContent>
    </Card>
  );
};