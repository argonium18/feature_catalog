import { useState } from 'react';
import type { Filters } from '../types/attendance';

export const useFilters = () => {
  const [globalFilters, setGlobalFilters] = useState<Filters>({ 
    class: '', 
    subject: '' 
  });
  const [lineChartFilters, setLineChartFilters] = useState<Filters>({ 
    class: '', 
    subject: '' 
  });
  const [barChartFilters, setBarChartFilters] = useState<Filters>({ 
    class: '', 
    subject: '' 
  });

  const handleGlobalFilterChange = (key: keyof Filters) => (e: any) => {
    setGlobalFilters((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleLineChartFilterChange = (key: keyof Filters) => (e: any) => {
    setLineChartFilters((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleBarChartFilterChange = (key: keyof Filters) => (e: any) => {
    setBarChartFilters((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return {
    globalFilters,
    lineChartFilters,
    barChartFilters,
    handleGlobalFilterChange,
    handleLineChartFilterChange,
    handleBarChartFilterChange
  };
};