"use client";

import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import Popover from "@mui/material/Popover";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// -------------------------------
// 1️⃣ 商品テーブル
// -------------------------------
const productData = [
  { id: "P1", name: "緑茶", category: "飲料" },
  { id: "P2", name: "紅茶", category: "飲料" },
  { id: "P3", name: "コーヒー", category: "飲料" },
  { id: "P4", name: "クッキー", category: "お菓子" },
  { id: "P5", name: "チョコレート", category: "お菓子" },
];

// -------------------------------
// 2️⃣ ダミー売上データ
// -------------------------------
const dates = ["2025-06-15", "2025-06-16", "2025-06-17", "2025-06-18"];

const salesData = productData.map((product) => ({
  name: product.id, // 商品ID
  type: "line",
  data: dates.map(() => Math.floor(Math.random() * 1000 + 500)),
}));

// -------------------------------
// 3️⃣ 型定義
// -------------------------------
type SelectedPoint = {
  itemId: string;
  date: string;
  value: number;
  product: {
    id: string;
    name: string;
    category: string;
  } | undefined;
} | null;

type Highlight = {
  seriesName: string;
  dataIndex: number;
} | null;

// -------------------------------
// 4️⃣ コンポーネント
// -------------------------------
export default function Page() {
  const [selectedPoint, setSelectedPoint] = useState<SelectedPoint>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [highlight, setHighlight] = useState<Highlight>(null);

  // チェック & メモ
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [memos, setMemos] = useState<Record<string, string>>({});

  const toggleCheck = (id: string) =>
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));

  const saveMemo = (key: string, val: string) =>
    setMemos((prev) => ({ ...prev, [key]: val }));

  // -------------------------------
  // 5️⃣ ECharts オプション
  // -------------------------------
  const option = {
    tooltip: { trigger: "axis" },
    legend: { data: productData.map((p) => p.id) },
    xAxis: { type: "category", data: dates },
    yAxis: { type: "value" },
    series: salesData.map((s) => ({
      ...s,
      markPoint:
        highlight && highlight.seriesName === s.name
          ? {
              data: [
                {
                  coord: [
                    highlight.dataIndex,
                    s.data[highlight.dataIndex],
                  ],
                  symbol: "circle",
                  symbolSize: 20,
                  itemStyle: {
                    color: "red",
                  },
                },
              ],
            }
          : undefined,
    })),
  };

  // -------------------------------
  // 6️⃣ クリックハンドラ
  // -------------------------------
  const handleClick = (params: any) => {
    const itemId = params.seriesName; // P1, P2, ...
    const info = productData.find((p) => p.id === itemId);

    setSelectedPoint({
      itemId,
      date: params.name,
      value: params.data,
      product: info,
    });

    setHighlight({
      seriesName: params.seriesName,
      dataIndex: params.dataIndex,
    });

    setAnchorEl(params.event.event.target as HTMLElement);
  };

  // -------------------------------
  // 7️⃣ Popover 閉じる
  // -------------------------------
  const handleClose = () => {
    setSelectedPoint(null);
    setHighlight(null);
  };

  return (
    <>
      <ReactECharts
        option={option}
        style={{ height: "400px" }}
        onEvents={{ click: handleClick }}
      />

      <Popover
        open={!!selectedPoint}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {selectedPoint && (
          <div style={{ padding: "1rem", maxWidth: 300 }}>
            <h3>
              {selectedPoint.product?.name} (
              {selectedPoint.product?.category})
            </h3>
            <p>商品ID: {selectedPoint.itemId}</p>
            <p>日付: {selectedPoint.date}</p>
            <p>売上: {selectedPoint.value.toLocaleString()}円</p>

            <label>
              <Checkbox
                checked={checkedItems[selectedPoint.itemId] || false}
                onChange={() => toggleCheck(selectedPoint.itemId)}
              />
              監視対象にする
            </label>

            <TextField
              label="メモ"
              multiline
              rows={3}
              value={
                memos[
                  `${selectedPoint.itemId}:${selectedPoint.date}`
                ] || ""
              }
              onChange={(e) =>
                saveMemo(
                  `${selectedPoint.itemId}:${selectedPoint.date}`,
                  e.target.value
                )
              }
              fullWidth
              margin="dense"
            />

            <Button onClick={handleClose}>閉じる</Button>
          </div>
        )}
      </Popover>
    </>
  );
}
