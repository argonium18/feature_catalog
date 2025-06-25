'use client';

import dynamic from 'next/dynamic';
import QueryProvider from '@/components/QueryProvider';

const Dashboard = dynamic(() => import('@/components/attendance/ShowcaseBI'), {
  ssr: false,
});

export default function Page() {
  return (
    <QueryProvider>
      <Dashboard />
    </QueryProvider>
  );
}
