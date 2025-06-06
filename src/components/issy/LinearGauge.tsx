import React from "react";

type LinearGaugeProps = {
  value: number;
  max: number;
  target?: number;
  width?: number | string;
  height?: number | string;
};

const LinearGauge: React.FC<LinearGaugeProps> = ({
  value,
  max,
  target,
  width = "100%",
  height = 20,
}) => {
  const percentage = max > 0 ? Math.min(Math.max(value / max, 0), 1) * 100 : 0;
  const targetPercentage =
    target && max > 0
      ? Math.min(Math.max(target / max, 0), 1) * 100
      : null;

  let fillColor = "#45f572"; // 緑
  if (percentage < 50) fillColor = "#ff714e"; // 赤
  else if (percentage < 80) fillColor = "#ffca28"; // 黄

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        backgroundColor: "#eee",
        borderRadius: typeof height === "number" ? height / 2 : "10px",
        overflow: "visible", // ラベルのためにvisibleに
      border: "2px solid rgb(197, 197, 197)", // ここで緑の境界線（好みに応じて色・太さ調整）
      boxSizing: "border-box",    // 境界線込みでサイズ調整
      }}
    >
      {/* ゲージ本体 */}
      <div
        style={{
          width: `${percentage}%`,
          height: "100%",
          backgroundColor: fillColor,
          transition: "width 0.5s ease, backgroundColor 0.5s ease",
          borderRadius: typeof height === "number" ? height / 2 : "10px",
        }}
      />

      {/* 目標線 */}
      {targetPercentage !== null && (
        <>
          <div
            style={{
              position: "absolute",
              left: `${targetPercentage}%`,
              top: 0,
              bottom: 0,
              width: 2,
              backgroundColor: "red",
              transform: "translateX(-1px)",
              pointerEvents: "none",
              borderRadius: 1,
            }}
            title={`目標値: ${target?.toLocaleString()}`}
          />
          {/* 目標ラベル */}
          <div
            style={{
              position: "absolute",
              left: `${targetPercentage}%`,
              top: -28, // ゲージ上に少し離して表示
              transform: "translateX(-50%)",
              color: "red",
              fontWeight: "bold",
              fontSize: 12,
              whiteSpace: "nowrap",
              userSelect: "none",
              cursor: "default",
            }}
          >
            目標金額：3億 円   ▼　　　　　　　　
          </div>
        </>
      )}
    </div>
  );
};

export default LinearGauge;
