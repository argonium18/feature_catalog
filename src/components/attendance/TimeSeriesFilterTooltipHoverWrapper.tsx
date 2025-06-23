import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import TimeSeriesFilterTooltipHover from "@/components/issy/TimeSeriesFilterTooltipHover"
export default function  TimeSeriesFilterTooltipHoverWrapper () {
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          ホバーするツールチップ
        </Typography>
        <Typography >
          時系列フィルターにホバーするツールチップを追加しています。<br/>
          カーソルを乗せた時点のデータの日付、フィルター前の値、フィルター後の値、差分を表示します。<br/>
          これによって直観的に値を選択しながら詳細な値を知ることができます。

        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          <TimeSeriesFilterTooltipHover/>
        </Typography>
      </CardContent>
    </Card>
  );
};