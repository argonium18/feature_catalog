import React from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent, 
} from '@mui/material';
import type { Filters } from '../../types/attendance';
import { CLASSES, SUBJECTS } from '../../constants/attendance';

interface GlobalFiltersProps {
  filters: Filters;
  onFilterChange: (key: keyof Filters) => (e: SelectChangeEvent) => void; 
}

export const GlobalFilters: React.FC<GlobalFiltersProps> = ({
  filters,
  onFilterChange
}) => {
  return (
    <Grid container spacing={2} columns={12}>
      
      <Grid size={{ xs: 12, sm: 6, lg: 1 }}>
        <FormControl fullWidth>
          <InputLabel>クラス</InputLabel>
          <Select 
            value={filters.class} 
            label="クラス" 
            onChange={onFilterChange('class')}
          >
            {CLASSES.map(cls => (
              <MenuItem key={cls.value} value={cls.value}>
                {cls.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 1 }}>
        <FormControl fullWidth>
          <InputLabel>科目</InputLabel>
          <Select 
            value={filters.subject} 
            label="科目" 
            onChange={onFilterChange('subject')}
          >
            {SUBJECTS.map(subject => (
              <MenuItem key={subject.value} value={subject.value}>
                {subject.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
