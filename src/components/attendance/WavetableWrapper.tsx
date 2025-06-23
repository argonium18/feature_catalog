"use client";
import Wavetable  from "@/components/issy/Wavetable";
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
export default function WavetableWrapper() {
  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          立体スライサー
        </Typography>
        <Typography >
          RFMなどの多次元のデータを3次元グリッドにマッピングし、立体構造として捉えることができます。<br/>
          R（Recency）軸、F（Frequency）軸、M（Monetary）軸を立体座標として扱い、顧客行動の分布を空間的に把握します。<br/>
          ヒートマップでは2軸の断面を切り出し、スライス操作でM軸の位置を自由に変更できます。<br/>
          ボリューム全体の形状と特定スライスを同時に確認することで、表や2D分析だけでは見えにくい局所的な密集やパターンを発見できます。<br/>
        </Typography>
          <Wavetable/>
      </CardContent>
    </Card>
  );
}
