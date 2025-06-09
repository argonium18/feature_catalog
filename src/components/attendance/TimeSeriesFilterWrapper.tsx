import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import TimeSeriesFilter from "@/components/issy/TimeSeriesFilter"
export default function  TimeSeriesFilterWrapper () {
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          時系列フィルター
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          解説
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          <TimeSeriesFilter/>
        </Typography>
      </CardContent>
    </Card>
  );
};