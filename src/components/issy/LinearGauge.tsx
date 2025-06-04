// components/LinearGauge.tsx
import React from "react";

type LinearGaugeProps = {
  value: number;       // 現在値
  max: number;         // 最大値
  width?: number | string;  // 横幅（pxや%など、任意）
  height?: number | string; // 高さ（任意）
  bgColor?: string;    // 背景色
  fillColor?: string;  // 進捗部分の色
};

const LinearGauge: React.FC<LinearGaugeProps> = ({
  value,
  max,
  width = "100%",
  height = 20,
  bgColor = "#eee",
  fillColor = "#4caf50",
}) => {
  // 0〜100のパーセントに正規化（最大値0は0%）
  const percentage = max > 0 ? Math.min(Math.max(value / max, 0), 1) * 100 : 0;

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: bgColor,
        borderRadius: typeof height === "number" ? height / 2 : "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          height: "100%",
          backgroundColor: fillColor,
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
};

export default LinearGauge;
