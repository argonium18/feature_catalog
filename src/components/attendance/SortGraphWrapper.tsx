import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import SortGraph from "@/components/issy/SortGraph"

export default  function SortGraphWrapper () {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          ソート機能
        </Typography>
        <Typography>
          二種類のデータでのソートを行います。<br/>
          昇順・降順も切り替えることができます。
        </Typography>
        <SortGraph/>
      </CardContent>
    </Card>
  );
};