"use client";
import React, { useState ,useEffect} from "react";
import DynamicFilterChartManager  from "@/components/issy/CascadeFilter";
import RechartsGroupedBar  from "@/components/issy/BarChart";
import * as echarts from "echarts";
import "@/app/globals.css"
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
export default function DashboardPage() {
  const [highlightDate, setHighlightDate] = useState<string | null>(null);
  useEffect(() => {
    echarts.disconnect("linked-group");
    echarts.connect("linked-group");
  }, []);
  return (
        <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              2種類のソートグラフの連動
            </Typography>
            <Typography variant="body1" gutterBottom>
                とある小売業の売り上げデータを日付でソートしたグラフと売り上げでソートしたグラフを表示しています。<br/><br/>
            </Typography>
            <Typography variant="body1" gutterBottom>
                <div className="grid grid-cols-3 gap-4">
                    <Card>
                        <Typography variant="h6" gutterBottom>
                            段階フィルター
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            時系列順にソートされたデータを折れ線グラフとして表示しています。<br/>
                            「フィルター対象」を選択することで、特定のカテゴリによる絞り込みが可能です。<br/>
                            また、「フィルターを追加」ボタンを押すことで、さらにドリルダウンして複数段階のフィルターを適用できます。<br/>
                        </Typography>
                    </Card>
                    <Card className="col-span-2">
                        <Typography variant="h6" gutterBottom>
                            グループ化棒グラフ
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            棒グラフでは、量的データ（売上など）に基づいて各対象（例：支店）のパフォーマンスをランキング形式で比較できます。<br/>
                            「モード切替」ボタンを押すことで、カテゴリ（例：地域）ごとにグループ化された表示に切り替えることができ、各グループ内での順位や傾向も把握できます。<br/>
                            折れ線グラフ上の日付（X軸）をクリックすることで、その月の売上データが自動的に抽出され、棒グラフに反映されます。<br/>
                            これにより、特定期間における売上の詳細を視覚的に把握できます。<br/>
                        </Typography>
                    </Card>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {/* カスケードカード */}
                    <Card>
                        <CardContent>
                        <DynamicFilterChartManager
                        highlightDate={highlightDate}
                        onDateClick={(date: string | null) => setHighlightDate(date)}
                        />
                        </CardContent>
                    </Card>
                    {/* 棒グラフ */}
                    <Card className="col-span-2">
                        <CardContent>
                            <RechartsGroupedBar targetMonth={highlightDate ? highlightDate.slice(0, 7) : null}/>
                        </CardContent>
                    </Card>
                </div>
            </Typography>
        </CardContent>
    </Card>
  );
}
