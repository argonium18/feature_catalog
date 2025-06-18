import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';


export const Sample = () => {
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          機能名
        </Typography>
        <Typography variant="body1" gutterBottom>
          機能説明：使用目的・用途など
        </Typography>
        <Typography variant="body1" gutterBottom>
          ↓グラフはここに配置↓
        </Typography>
      </CardContent>
    </Card>
  );
};