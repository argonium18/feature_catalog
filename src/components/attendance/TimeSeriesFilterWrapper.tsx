import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import TimeSeriesFilter from "@/components/issy/TimeSeriesFilter"
export default function  TimeSeriesFilterWrapper () {
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          時系列フィルター
        </Typography>
        <Typography >
          カテゴリフィルターの機能に加え、表示する期間をフィルターする機能と移動平均による平滑化機能を備えています。
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          <TimeSeriesFilter/>
        </Typography>
      </CardContent>
    </Card>
  );
};