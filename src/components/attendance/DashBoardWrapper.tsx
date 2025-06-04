'use client';
import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('./AttendanceDashboard'), {
  ssr: false,
  loading: () => <p>Loading chart…</p>,
});

export default Dashboard;
