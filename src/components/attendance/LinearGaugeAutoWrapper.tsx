"use client";
import { useState, useEffect, useRef } from "react";
import LinearGauge from "@/components/issy/LinearGauge";
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';
function formatJapaneseNumber(num: number) {
  const oku = Math.floor(num / 100_000_000);
  const man = Math.floor((num % 100_000_000) / 10_000);
  let str = "";
  if (oku > 0) str += `${oku}億`;
  if (man > 0) str += `${man}万`;
  if (oku === 0 && man === 0) str += num.toLocaleString();
  return str || "0";
}

function AnimatedNumber({ value, target }: { value: number; target: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [shake, setShake] = useState(false);
  const rafId = useRef<number | null>(null);
  const prevValue = useRef<number>(0);

  useEffect(() => {
    const duration = 800;
    const startTime = performance.now();
    const startValue = displayValue;
    const change = value - startValue;

    function animate(time: number) {
      const elapsed = time - startTime;
      if (elapsed < duration) {
        const progress = elapsed / duration;
        setDisplayValue(Math.floor(startValue + change * progress));
        rafId.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    }

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [value]);

  useEffect(() => {
    if (value >= target && prevValue.current < target && value > prevValue.current) {
      setShake(true);
      const timeout = setTimeout(() => setShake(false), 600);
      return () => clearTimeout(timeout);
    }
    prevValue.current = value;
  }, [value, target]);

  return (
      <>
        <span
            className={shake ? "shake" : ""}
            style={{
            display: "inline-block",
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginLeft: 10,
            minWidth: 100,
            textAlign: "right",
            fontVariantNumeric: "tabular-nums",
            transition: "transform 0.3s",
            }}
            title={displayValue.toLocaleString()}
        >
            {formatJapaneseNumber(displayValue)}
        </span>

        <style>{`
            @keyframes shake-rotate {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(10deg); }
            50% { transform: rotate(-4deg); }
            75% { transform: rotate(2deg); }
            100% { transform: rotate(0deg); }
            }
            .shake {
            animation: shake-rotate 0.3s ease;
            }
        `}</style>
      </>
  );
}

export default function Home() {
  const [value, setValue] = useState(0);
  const [increment, setIncrement] = useState(0);
  const max = 320_000_000;
  const target = 300_000_000;

  useEffect(() => {
    const interval = setInterval(() => {
      // 500万〜3700万のランダム増加（例）
      const inc = Math.floor(Math.random() * (37_000_000 - 5_000_000 + 1)) + 5_000_000;

      setIncrement(inc);
      setValue((v) => {
        if (v >= max) return 0;
        return Math.min(v + inc, max);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [max]);

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          棒状のゲージ
        </Typography>
        <Typography variant="body1" gutterBottom>
          ある量の進捗や割合を視覚的に直感的に示すためのUIコンポーネントです。<br/>
          棒状のゲージが長さや色で値の大小や状態を表現し、瞬時に状況把握を助けます。<br/>
          色やアニメーションを付けることで感情的なインパクトも演出できます。<br/>
          ラッパーから自動で値を更新していますが実際のダッシュボードでは止まっている状態で見ることになるでしょう
        </Typography>
        <Typography variant="body1" gutterBottom component="div">
          <h1>今期の売上進捗</h1>
          <div style={{ padding: 20, maxWidth: 500 }}>
            <LinearGauge value={value} max={max} target={target} height={30} />
            <div
              style={{
                marginTop: 12,
                fontSize: 24,
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>売上: </span>
              <AnimatedNumber value={value} target={target} />
              <span> 円</span>
            </div>
            <div style={{ marginTop: 8, fontSize: 16, color: "#555" }}>
              増分: +{formatJapaneseNumber(increment)} 円
            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
