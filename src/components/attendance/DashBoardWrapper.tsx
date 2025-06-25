'use client';
import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('./ShowcaseBI'), {
  ssr: false,
  loading: () => <p>Loading chart…</p>,
});

export default Dashboard;
