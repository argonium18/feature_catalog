import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Chip 
} from '@mui/material';
import { 
  TrendingUp, 
  TrendingDown, 
  AttachMoney 
} from '@mui/icons-material';

interface MetricsCardProps {
  title: string;
  current: number;
  previous: number;
  currency?: string;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({ 
  title, 
  current, 
  previous, 
  currency = "" 
}) => {
  const change = ((current - previous) / previous) * 100;
  const isUp = change > 0;
  
  return (
    <Card sx={{ height: '100%' }}>
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