"use client"

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { useState, useMemo } from 'react';
import { baseData } from "@/components/issy/data/rawBarData";

type Props = {
  targetMonth: string | null;
};

export default function RechartsGroupedBar({ targetMonth }: Props) {
  const [mode, setMode] = useState<'grouped' | 'flat'>('grouped');

  // 該当月だけ抽出
  const filteredData = useMemo(
    () => baseData.filter(d => d.month === targetMonth),
    [targetMonth]
  );

  const data = useMemo(() => {
    if (mode === 'grouped') {
      const deps = Array.from(new Set(filteredData.map(d => d.rigion)));
      return deps.flatMap(dep =>
        filteredData
          .filter(d => d.rigion === dep)
          .sort((a, b) => b.sales - a.sales)
      );
    } else {
      return [...filteredData].sort((a, b) => b.sales - a.sales);
    }
  }, [mode, filteredData]);

  const rigion = Array.from(new Set(data.map(d => d.rigion)));
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#faf000', '#33f0ff'];

  return (
    <div style={{ width: '100%', height: 500 }}>
      <button onClick={() => setMode(mode === 'grouped' ? 'flat' : 'grouped')}>
        モード切替（現在: {mode === 'grouped' ? '部門別' : 'フラット'}）
      </button>

      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} />
          <YAxis />
          <Tooltip />
          <Legend />

          {mode === 'grouped' ? (
            rigion.map((dep, i) => (
              <Bar
                key={dep}
                dataKey={(entry: any) => entry.rigion === dep ? entry.sales : 0}
                name={dep}
                fill={colors[i % colors.length]}
                stackId="a"
                isAnimationActive={false}
              />
            ))
          ) : (
            <Bar
              dataKey="sales"
              fill="#4CAF50"
              name="売上"
              isAnimationActive={false}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
