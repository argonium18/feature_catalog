import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { FilterOption, LocalFilters } from '../../types/attendance';

interface LocalFilterPanelProps {
  filters: LocalFilters;
  onFilterChange: (key: keyof LocalFilters, value: string) => void;
  options: FilterOption[];
}

export const LocalFilterPanel: React.FC<LocalFilterPanelProps> = ({ 
  filters, 
  onFilterChange, 
  options 
}) => {
  return (
    <>
      {options.map((option) => (
        <FormControl key={option.key} fullWidth size="small" style={{ marginBottom: '1rem' }}>
          <InputLabel>{option.label}</InputLabel>
          <Select
            value={filters[option.key as keyof LocalFilters] || ''}
            label={option.label}
            onChange={(e) => onFilterChange(option.key as keyof LocalFilters, e.target.value)}
          >
            <MenuItem value="">全て</MenuItem>
            {option.values.map((val) => (
              <MenuItem key={val.value} value={val.value}>
                {val.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </>
  );
};