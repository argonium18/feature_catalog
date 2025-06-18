"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useState, useMemo } from 'react';
import { rawData } from "@/components/issy/data/salesData";
import type { SalesData } from "@/components/issy/data/salesData";
import { Button } from '@mui/material';

type Props = {
  targetMonth: string | null;
};

type GroupedData = {
  name: string;
  region: string;
  sales: number;
};

export default function RechartsGroupedBar({ targetMonth }: Props) {
  const [mode, setMode] = useState<'grouped' | 'flat'>('grouped');

  const inputData: SalesData[] = rawData;

  const filteredData = useMemo(
    () =>
      targetMonth
        ? inputData.filter((d) => d.date.startsWith(targetMonth))
        : inputData,
    [targetMonth, inputData]
  );

  const data = useMemo<GroupedData[]>(() => {
    if (filteredData.length === 0) return [];

    const grouped: Record<string, { region: string; sales: number }> = {};
    filteredData.forEach((d) => {
      if (!grouped[d.name]) {
        grouped[d.name] = { region: d.region, sales: 0 };
      }
      grouped[d.name].sales += d.sales;
    });

    const result: GroupedData[] = Object.entries(grouped).map(
      ([name, { region, sales }]) => ({
        name,
        region,
        sales
      })
    );

    if (mode === 'grouped') {
      const regions = Array.from(new Set(result.map((d) => d.region)));
      return regions.flatMap((region) =>
        result
          .filter((d) => d.region === region)
          .sort((a, b) => b.sales - a.sales)
      );
    } else {
      return result.sort((a, b) => b.sales - a.sales);
    }
  }, [mode, filteredData]);

  const regions = Array.from(new Set(data.map((d) => d.region)));
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#faf000', '#33f0ff'];

  return (
    <div style={{ width: '100%', height: 500 }}>
      <Button
        variant="outlined"
        style={{ marginBottom: "1rem" }}
        onClick={() => setMode(mode === 'grouped' ? 'flat' : 'grouped')}
      >
        モード切替（現在: {mode === 'grouped' ? '部門別ソート' : '全店舗ソート'}）
      </Button>
      <h2 style={{ color: "#B71C1C" }}>
        {targetMonth ? `${targetMonth} の集計データ` : "全期間のデータ"}
      </h2>

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
            regions.map((region, i) => (
              <Bar
                key={region}
                dataKey={(entry: GroupedData) =>
                  entry.region === region ? entry.sales : 0
                }
                name={region}
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
