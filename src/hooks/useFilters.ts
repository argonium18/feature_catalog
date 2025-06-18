import { useState } from 'react';
import type { Filters } from '../types/attendance';
import type { ChangeEvent } from 'react';

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

  const handleGlobalFilterChange = (key: keyof Filters) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setGlobalFilters((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleLineChartFilterChange = (key: keyof Filters) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setLineChartFilters((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleBarChartFilterChange = (key: keyof Filters) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
