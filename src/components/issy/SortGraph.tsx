"use client";

import React, { useState, useMemo } from "react";
import ReactECharts from "echarts-for-react";
import { Select, MenuItem, FormControl, InputLabel, Stack } from "@mui/material";

const salesData = [
  { name: "佐藤", sales: 1500, hiragana: "さとう" },
  { name: "鈴木", sales: 1000, hiragana: "すずき" },
  { name: "高橋", sales: 1800, hiragana: "たかはし" },
  { name: "田中", sales: 900, hiragana: "たなか" },
  { name: "伊藤", sales: 1200, hiragana: "いとう" },
  { name: "渡辺", sales: 1300, hiragana: "わたなべ" },
  { name: "山本", sales: 800, hiragana: "やまもと" },
  { name: "中村", sales: 1700, hiragana: "なかむら" },
  { name: "小林", sales: 1100, hiragana: "こばやし" },
  { name: "加藤", sales: 2000, hiragana: "かとう" },
];

export default function SalesOfficeChart() {
  const [sortKey, setSortKey] = useState<"original" | "hiragana" | "sales">("original");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedData = useMemo(() => {
  if (sortKey === "original") {
    return [...salesData]; // 並べ替えない
  }
  const sorted = [...salesData];
  if (sortKey === "hiragana") {
    sorted.sort((a, b) =>
      sortOrder === "asc"
        ? a.hiragana.localeCompare(b.hiragana)
        : b.hiragana.localeCompare(a.hiragana)
    );
  } else {
    sorted.sort((a, b) =>
      sortOrder === "asc" ? a.sales - b.sales : b.sales - a.sales
    );
  }
  return sorted;
}, [sortKey, sortOrder]);

  const option = {
    xAxis: {
      type: "category",
      data: sortedData.map((d) => d.name),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "bar",
        data: sortedData.map((d) => d.sales),
      },
    ],
  };

  return (
    <div>
      <Stack direction="row" spacing={2} sx={{ m: 1 }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>ソートキー</InputLabel>
          <Select
            value={sortKey}
            label="ソートキー"
            onChange={(e) => setSortKey(e.target.value as "original" | "hiragana" | "sales")}
          >
            <MenuItem value="original">元データ順</MenuItem>
            <MenuItem value="hiragana">名前順</MenuItem>
            <MenuItem value="sales">売上順</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }} disabled={sortKey === "original"}>
          <InputLabel>順序</InputLabel>
          <Select
            value={sortOrder}
            label="順序"
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          >
            <MenuItem value="asc">昇順</MenuItem>
            <MenuItem value="desc">降順</MenuItem>
          </Select>
        </FormControl>

      </Stack>

      <ReactECharts option={option} />
    </div>
  );
}
