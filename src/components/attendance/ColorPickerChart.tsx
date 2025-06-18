import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
} from 'recharts';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Card,
  CardContent,
} from '@mui/material';

// ✅ バーのデータ型
type BarData = {
  name: string;
  value: number;
  color: string;
};

// ✅ Tooltip の props 型
type CustomTooltipProps = {
  active?: boolean;
  payload?: { payload: BarData }[];
  label?: string;
};

export const ColorPickerChart = () => {
  const colors = ['#91CC75', '#5470C6', '#EE6666', '#FAC858', '#73C0DE'];

  const [data, setData] = useState<BarData[]>([
    { name: '月', value: 120, color: colors[0] },
    { name: '火', value: 200, color: colors[0] },
    { name: '水', value: 150, color: colors[0] },
    { name: '木', value: 80, color: colors[0] },
    { name: '金', value: 70, color: colors[0] },
    { name: '土', value: 110, color: colors[0] },
    { name: '日', value: 130, color: colors[0] },
  ]);

  const [selectedBar, setSelectedBar] = useState<number | null>(null);

  const handleBarClick = (_: unknown, index: number) => {
    setSelectedBar(selectedBar === index ? null : index);
  };

  const changeColor = (colorIndex: number) => {
    setData((prev) =>
      prev.map((item, idx) =>
        idx === selectedBar ? { ...item, color: colors[colorIndex] } : item
      )
    );
    setSelectedBar(null);
  };

  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
      <Paper sx={{ p: 1.5 }}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="body2" color="text.secondary">
          値: {payload[0].payload.value}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          クリックして色を変更
        </Typography>
      </Paper>
    );
  };

  return (
    <Card variant="outlined" sx={{ p: 2, height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          棒グラフ
        </Typography>
        <Typography variant="body2" color="text.secondary">
          データの数量を棒の長さで視覚的に表現するグラフの一種。売上の月別推移やアンケート結果の集計など、数量の比較が重要な場面で活用される
        </Typography>

        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="value"
            onClick={handleBarClick}
            style={{ cursor: 'pointer' }}
          >
            {data.map((entry, idx) => (
              <Cell
                key={`cell-${idx}`}
                fill={entry.color}
                stroke={selectedBar === idx ? '#000' : 'none'}
                strokeWidth={2}
              />
            ))}
          </Bar>
        </BarChart>

        {selectedBar !== null && (
          <Paper sx={{ mt: 2, p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {data[selectedBar].name}の色を選択
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {colors.map((color, idx) => (
                <IconButton
                  key={idx}
                  aria-label={`色${idx + 1}`}
                  onClick={() => changeColor(idx)}
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: color,
                    '&:hover': { backgroundColor: color, opacity: 0.8 },
                  }}
                />
              ))}
            </Box>
          </Paper>
        )}
      </CardContent>
    </Card>
  );
};
