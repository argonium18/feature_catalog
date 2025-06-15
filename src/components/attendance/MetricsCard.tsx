//MetricsCard .tsx
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Chip, 
  Grid 
} from '@mui/material';
import { 
  TrendingUp, 
  TrendingDown, 
  AttachMoney 
} from '@mui/icons-material';

// データと計算を統合
const data = [
  { title: "月間売上", current: 1250000, previous: 980000, currency: "¥" },
  { title: "新規顧客数", current: 245, previous: 190, currency: "" },
  { title: "平均注文額", current: 8500, previous: 9200, currency: "¥" }
];

const MetricsCard = ({ title, current, previous, currency }) => {
  const change = ((current - previous) / previous) * 100;
  const isUp = change > 0;
  
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6" color="text.secondary">{title}</Typography>
          <AttachMoney color="primary" />
        </Box>
        
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {currency}{current.toLocaleString()}
        </Typography>
        
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">前月比</Typography>
          <Chip
            icon={isUp ? <TrendingUp /> : <TrendingDown />}
            label={`${Math.abs(change).toFixed(1)}%`}
            color={isUp ? "success" : "error"}
            size="small"
          />
        </Box>
        
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
          前月: {currency}{previous.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export function MetricsCardCollection () {
  return (
    <>
      {data.map((item, i) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
          <MetricsCard {...item} />
        </Grid>
      ))}
    </>
  );
}