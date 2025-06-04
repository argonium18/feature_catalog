//node generateSalesData.jsでファイル出力

import { writeFileSync } from "fs";

const categories = ["野菜", "果物", "肉", "魚", "飲料"];
const regions = ["関東", "関西", "中部", "東北", "九州"];

function generateSalesData() {
  const data = [];
  const start = new Date("2025-01-01");
  const end = new Date("2027-01-01");

  for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
    const dateString = d.toISOString().slice(0, 10);
    for (const category of categories) {
      for (const region of regions) {
        const sales = Math.floor(Math.random() * 500);
        data.push({ date: dateString, category, region, sales });
      }
    }
  }
  return data;
}

// データを生成
const salesData = generateSalesData();

// ファイルに書き込む
writeFileSync("./sales_data.json", JSON.stringify(salesData, null, 2), { encoding: "utf-8" });

console.log("✅ sales_data.json を生成しました！");

