import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import AccentDiffFilter from "@/components/issy/AccentDiffFilter"
export default function  CategoryFilterWrapper () {
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          差分の着色
        </Typography>
        <Typography>
          抽出前との差分が赤い領域で表示されます。<br/>
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          <AccentDiffFilter/>
        </Typography>
      </CardContent>
    </Card>
  );
};