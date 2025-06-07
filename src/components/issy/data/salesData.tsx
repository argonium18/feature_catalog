export type SalesData = {
  date: string;      // 日付（例: '2025-04-01'）
  category: string;  // 商品カテゴリ（例: '野菜', '肉'）
  region: string;  // 地域カテゴリ（ 関東,関西,中部,東北,九州） 
  sales: number;     // 売上金額（例: 1000）
  name: string;     // 店舗名
};
export const rawData: SalesData[] = [
  {
    "date": "2024-06-01",
    "category": "野菜",
    "region": "関東",
    "sales": 407876,
    "name": "東京店"
  },
  {
    "date": "2024-06-01",
    "category": "肉",
    "region": "関東",
    "sales": 411418,
    "name": "東京店"
  },
  {
    "date": "2024-06-01",
    "category": "果物",
    "region": "関東",
    "sales": 187718,
    "name": "東京店"
  },
  {
    "date": "2024-06-01",
    "category": "魚",
    "region": "関東",
    "sales": 375477,
    "name": "東京店"
  },
  {
    "date": "2024-06-01",
    "category": "飲料",
    "region": "関東",
    "sales": 480226,
    "name": "東京店"
  },
  {
    "date": "2024-06-01",
    "category": "野菜",
    "region": "関東",
    "sales": 96670,
    "name": "千葉店"
  },
  {
    "date": "2024-06-01",
    "category": "肉",
    "region": "関東",
    "sales": 477806,
    "name": "千葉店"
  },
  {
    "date": "2024-06-01",
    "category": "果物",
    "region": "関東",
    "sales": 208612,
    "name": "千葉店"
  },
  {
    "date": "2024-06-01",
    "category": "魚",
    "region": "関東",
    "sales": 477141,
    "name": "千葉店"
  },
  {
    "date": "2024-06-01",
    "category": "飲料",
    "region": "関東",
    "sales": 303980,
    "name": "千葉店"
  },
  {
    "date": "2024-06-01",
    "category": "野菜",
    "region": "関東",
    "sales": 263545,
    "name": "神奈川店"
  },
  {
    "date": "2024-06-01",
    "category": "肉",
    "region": "関東",
    "sales": 495394,
    "name": "神奈川店"
  },
  {
    "date": "2024-06-01",
    "category": "果物",
    "region": "関東",
    "sales": 341060,
    "name": "神奈川店"
  },
  {
    "date": "2024-06-01",
    "category": "魚",
    "region": "関東",
    "sales": 179304,
    "name": "神奈川店"
  },
  {
    "date": "2024-06-01",
    "category": "飲料",
    "region": "関東",
    "sales": 455915,
    "name": "神奈川店"
  },
  {
    "date": "2024-06-01",
    "category": "野菜",
    "region": "関西",
    "sales": 170814,
    "name": "大阪店"
  },
  {
    "date": "2024-06-01",
    "category": "肉",
    "region": "関西",
    "sales": 147187,
    "name": "大阪店"
  },
  {
    "date": "2024-06-01",
    "category": "果物",
    "region": "関西",
    "sales": 324590,
    "name": "大阪店"
  },
  {
    "date": "2024-06-01",
    "category": "魚",
    "region": "関西",
    "sales": 289913,
    "name": "大阪店"
  },
  {
    "date": "2024-06-01",
    "category": "飲料",
    "region": "関西",
    "sales": 379864,
    "name": "大阪店"
  },
  {
    "date": "2024-06-01",
    "category": "野菜",
    "region": "関西",
    "sales": 53238,
    "name": "京都店"
  },
  {
    "date": "2024-06-01",
    "category": "肉",
    "region": "関西",
    "sales": 352442,
    "name": "京都店"
  },
  {
    "date": "2024-06-01",
    "category": "果物",
    "region": "関西",
    "sales": 295690,
    "name": "京都店"
  },
  {
    "date": "2024-06-01",
    "category": "魚",
    "region": "関西",
    "sales": 444575,
    "name": "京都店"
  },
  {
    "date": "2024-06-01",
    "category": "飲料",
    "region": "関西",
    "sales": 435114,
    "name": "京都店"
  },
  {
    "date": "2024-06-01",
    "category": "野菜",
    "region": "関西",
    "sales": 105881,
    "name": "兵庫店"
  },
  {
    "date": "2024-06-01",
    "category": "肉",
    "region": "関西",
    "sales": 389263,
    "name": "兵庫店"
  },
  {
    "date": "2024-06-01",
    "category": "果物",
    "region": "関西",
    "sales": 100864,
    "name": "兵庫店"
  },
  {
    "date": "2024-06-01",
    "category": "魚",
    "region": "関西",
    "sales": 157594,
    "name": "兵庫店"
  },
  {
    "date": "2024-06-01",
    "category": "飲料",
    "region": "関西",
    "sales": 295691,
    "name": "兵庫店"
  },
  {
    "date": "2024-06-01",
    "category": "野菜",
    "region": "中部",
    "sales": 130344,
    "name": "名古屋店"
  },
  {
    "date": "2024-06-01",
    "category": "肉",
    "region": "中部",
    "sales": 496871,
    "name": "名古屋店"
  },
  {
    "date": "2024-06-01",
    "category": "果物",
    "region": "中部",
    "sales": 134650,
    "name": "名古屋店"
  },
  {
    "date": "2024-06-01",
    "category": "魚",
    "region": "中部",
    "sales": 58144,
    "name": "名古屋店"
  },
  {
    "date": "2024-06-01",
    "category": "飲料",
    "region": "中部",
    "sales": 315746,
    "name": "名古屋店"
  },
  {
    "date": "2024-06-01",
    "category": "野菜",
    "region": "中部",
    "sales": 248995,
    "name": "静岡店"
  },
  {
    "date": "2024-06-01",
    "category": "肉",
    "region": "中部",
    "sales": 207409,
    "name": "静岡店"
  },
  {
    "date": "2024-06-01",
    "category": "果物",
    "region": "中部",
    "sales": 138431,
    "name": "静岡店"
  },
  {
    "date": "2024-06-01",
    "category": "魚",
    "region": "中部",
    "sales": 186803,
    "name": "静岡店"
  },
  {
    "date": "2024-06-01",
    "category": "飲料",
    "region": "中部",
    "sales": 333176,
    "name": "静岡店"
  },
  {
    "date": "2024-06-01",
    "category": "野菜",
    "region": "東北",
    "sales": 346150,
    "name": "仙台店"
  },
  {
    "date": "2024-06-01",
    "category": "肉",
    "region": "東北",
    "sales": 316883,
    "name": "仙台店"
  },
  {
    "date": "2024-06-01",
    "category": "果物",
    "region": "東北",
    "sales": 283086,
    "name": "仙台店"
  },
  {
    "date": "2024-06-01",
    "category": "魚",
    "region": "東北",
    "sales": 132264,
    "name": "仙台店"
  },
  {
    "date": "2024-06-01",
    "category": "飲料",
    "region": "東北",
    "sales": 159283,
    "name": "仙台店"
  },
  {
    "date": "2024-06-01",
    "category": "野菜",
    "region": "東北",
    "sales": 165770,
    "name": "青森店"
  },
  {
    "date": "2024-06-01",
    "category": "肉",
    "region": "東北",
    "sales": 406540,
    "name": "青森店"
  },
  {
    "date": "2024-06-01",
    "category": "果物",
    "region": "東北",
    "sales": 173822,
    "name": "青森店"
  },
  {
    "date": "2024-06-01",
    "category": "魚",
    "region": "東北",
    "sales": 383158,
    "name": "青森店"
  },
  {
    "date": "2024-06-01",
    "category": "飲料",
    "region": "東北",
    "sales": 51560,
    "name": "青森店"
  },
  {
    "date": "2024-06-01",
    "category": "野菜",
    "region": "九州",
    "sales": 415185,
    "name": "福岡店"
  },
  {
    "date": "2024-06-01",
    "category": "肉",
    "region": "九州",
    "sales": 87032,
    "name": "福岡店"
  },
  {
    "date": "2024-06-01",
    "category": "果物",
    "region": "九州",
    "sales": 331972,
    "name": "福岡店"
  },
  {
    "date": "2024-06-01",
    "category": "魚",
    "region": "九州",
    "sales": 391457,
    "name": "福岡店"
  },
  {
    "date": "2024-06-01",
    "category": "飲料",
    "region": "九州",
    "sales": 204901,
    "name": "福岡店"
  },
  {
    "date": "2024-06-01",
    "category": "野菜",
    "region": "九州",
    "sales": 423348,
    "name": "熊本店"
  },
  {
    "date": "2024-06-01",
    "category": "肉",
    "region": "九州",
    "sales": 114651,
    "name": "熊本店"
  },
  {
    "date": "2024-06-01",
    "category": "果物",
    "region": "九州",
    "sales": 249564,
    "name": "熊本店"
  },
  {
    "date": "2024-06-01",
    "category": "魚",
    "region": "九州",
    "sales": 91334,
    "name": "熊本店"
  },
  {
    "date": "2024-06-01",
    "category": "飲料",
    "region": "九州",
    "sales": 434233,
    "name": "熊本店"
  },
  {
    "date": "2024-07-01",
    "category": "野菜",
    "region": "関東",
    "sales": 191023,
    "name": "東京店"
  },
  {
    "date": "2024-07-01",
    "category": "肉",
    "region": "関東",
    "sales": 398431,
    "name": "東京店"
  },
  {
    "date": "2024-07-01",
    "category": "果物",
    "region": "関東",
    "sales": 105690,
    "name": "東京店"
  },
  {
    "date": "2024-07-01",
    "category": "魚",
    "region": "関東",
    "sales": 245713,
    "name": "東京店"
  },
  {
    "date": "2024-07-01",
    "category": "飲料",
    "region": "関東",
    "sales": 406342,
    "name": "東京店"
  },
  {
    "date": "2024-07-01",
    "category": "野菜",
    "region": "関東",
    "sales": 294660,
    "name": "千葉店"
  },
  {
    "date": "2024-07-01",
    "category": "肉",
    "region": "関東",
    "sales": 76574,
    "name": "千葉店"
  },
  {
    "date": "2024-07-01",
    "category": "果物",
    "region": "関東",
    "sales": 280339,
    "name": "千葉店"
  },
  {
    "date": "2024-07-01",
    "category": "魚",
    "region": "関東",
    "sales": 145816,
    "name": "千葉店"
  },
  {
    "date": "2024-07-01",
    "category": "飲料",
    "region": "関東",
    "sales": 95787,
    "name": "千葉店"
  },
  {
    "date": "2024-07-01",
    "category": "野菜",
    "region": "関東",
    "sales": 92924,
    "name": "神奈川店"
  },
  {
    "date": "2024-07-01",
    "category": "肉",
    "region": "関東",
    "sales": 497577,
    "name": "神奈川店"
  },
  {
    "date": "2024-07-01",
    "category": "果物",
    "region": "関東",
    "sales": 380859,
    "name": "神奈川店"
  },
  {
    "date": "2024-07-01",
    "category": "魚",
    "region": "関東",
    "sales": 329533,
    "name": "神奈川店"
  },
  {
    "date": "2024-07-01",
    "category": "飲料",
    "region": "関東",
    "sales": 272544,
    "name": "神奈川店"
  },
  {
    "date": "2024-07-01",
    "category": "野菜",
    "region": "関西",
    "sales": 125906,
    "name": "大阪店"
  },
  {
    "date": "2024-07-01",
    "category": "肉",
    "region": "関西",
    "sales": 290796,
    "name": "大阪店"
  },
  {
    "date": "2024-07-01",
    "category": "果物",
    "region": "関西",
    "sales": 105227,
    "name": "大阪店"
  },
  {
    "date": "2024-07-01",
    "category": "魚",
    "region": "関西",
    "sales": 141923,
    "name": "大阪店"
  },
  {
    "date": "2024-07-01",
    "category": "飲料",
    "region": "関西",
    "sales": 121810,
    "name": "大阪店"
  },
  {
    "date": "2024-07-01",
    "category": "野菜",
    "region": "関西",
    "sales": 67021,
    "name": "京都店"
  },
  {
    "date": "2024-07-01",
    "category": "肉",
    "region": "関西",
    "sales": 57750,
    "name": "京都店"
  },
  {
    "date": "2024-07-01",
    "category": "果物",
    "region": "関西",
    "sales": 295340,
    "name": "京都店"
  },
  {
    "date": "2024-07-01",
    "category": "魚",
    "region": "関西",
    "sales": 417920,
    "name": "京都店"
  },
  {
    "date": "2024-07-01",
    "category": "飲料",
    "region": "関西",
    "sales": 109311,
    "name": "京都店"
  },
  {
    "date": "2024-07-01",
    "category": "野菜",
    "region": "関西",
    "sales": 441650,
    "name": "兵庫店"
  },
  {
    "date": "2024-07-01",
    "category": "肉",
    "region": "関西",
    "sales": 369397,
    "name": "兵庫店"
  },
  {
    "date": "2024-07-01",
    "category": "果物",
    "region": "関西",
    "sales": 214385,
    "name": "兵庫店"
  },
  {
    "date": "2024-07-01",
    "category": "魚",
    "region": "関西",
    "sales": 419913,
    "name": "兵庫店"
  },
  {
    "date": "2024-07-01",
    "category": "飲料",
    "region": "関西",
    "sales": 370197,
    "name": "兵庫店"
  },
  {
    "date": "2024-07-01",
    "category": "野菜",
    "region": "中部",
    "sales": 296878,
    "name": "名古屋店"
  },
  {
    "date": "2024-07-01",
    "category": "肉",
    "region": "中部",
    "sales": 87157,
    "name": "名古屋店"
  },
  {
    "date": "2024-07-01",
    "category": "果物",
    "region": "中部",
    "sales": 313477,
    "name": "名古屋店"
  },
  {
    "date": "2024-07-01",
    "category": "魚",
    "region": "中部",
    "sales": 165921,
    "name": "名古屋店"
  },
  {
    "date": "2024-07-01",
    "category": "飲料",
    "region": "中部",
    "sales": 190945,
    "name": "名古屋店"
  },
  {
    "date": "2024-07-01",
    "category": "野菜",
    "region": "中部",
    "sales": 219309,
    "name": "静岡店"
  },
  {
    "date": "2024-07-01",
    "category": "肉",
    "region": "中部",
    "sales": 427540,
    "name": "静岡店"
  },
  {
    "date": "2024-07-01",
    "category": "果物",
    "region": "中部",
    "sales": 190364,
    "name": "静岡店"
  },
  {
    "date": "2024-07-01",
    "category": "魚",
    "region": "中部",
    "sales": 53002,
    "name": "静岡店"
  },
  {
    "date": "2024-07-01",
    "category": "飲料",
    "region": "中部",
    "sales": 100334,
    "name": "静岡店"
  },
  {
    "date": "2024-07-01",
    "category": "野菜",
    "region": "東北",
    "sales": 343771,
    "name": "仙台店"
  },
  {
    "date": "2024-07-01",
    "category": "肉",
    "region": "東北",
    "sales": 463338,
    "name": "仙台店"
  },
  {
    "date": "2024-07-01",
    "category": "果物",
    "region": "東北",
    "sales": 60071,
    "name": "仙台店"
  },
  {
    "date": "2024-07-01",
    "category": "魚",
    "region": "東北",
    "sales": 68626,
    "name": "仙台店"
  },
  {
    "date": "2024-07-01",
    "category": "飲料",
    "region": "東北",
    "sales": 481540,
    "name": "仙台店"
  },
  {
    "date": "2024-07-01",
    "category": "野菜",
    "region": "東北",
    "sales": 424351,
    "name": "青森店"
  },
  {
    "date": "2024-07-01",
    "category": "肉",
    "region": "東北",
    "sales": 461777,
    "name": "青森店"
  },
  {
    "date": "2024-07-01",
    "category": "果物",
    "region": "東北",
    "sales": 178043,
    "name": "青森店"
  },
  {
    "date": "2024-07-01",
    "category": "魚",
    "region": "東北",
    "sales": 81929,
    "name": "青森店"
  },
  {
    "date": "2024-07-01",
    "category": "飲料",
    "region": "東北",
    "sales": 447422,
    "name": "青森店"
  },
  {
    "date": "2024-07-01",
    "category": "野菜",
    "region": "九州",
    "sales": 355735,
    "name": "福岡店"
  },
  {
    "date": "2024-07-01",
    "category": "肉",
    "region": "九州",
    "sales": 124719,
    "name": "福岡店"
  },
  {
    "date": "2024-07-01",
    "category": "果物",
    "region": "九州",
    "sales": 73925,
    "name": "福岡店"
  },
  {
    "date": "2024-07-01",
    "category": "魚",
    "region": "九州",
    "sales": 145061,
    "name": "福岡店"
  },
  {
    "date": "2024-07-01",
    "category": "飲料",
    "region": "九州",
    "sales": 107418,
    "name": "福岡店"
  },
  {
    "date": "2024-07-01",
    "category": "野菜",
    "region": "九州",
    "sales": 170241,
    "name": "熊本店"
  },
  {
    "date": "2024-07-01",
    "category": "肉",
    "region": "九州",
    "sales": 275763,
    "name": "熊本店"
  },
  {
    "date": "2024-07-01",
    "category": "果物",
    "region": "九州",
    "sales": 467372,
    "name": "熊本店"
  },
  {
    "date": "2024-07-01",
    "category": "魚",
    "region": "九州",
    "sales": 144568,
    "name": "熊本店"
  },
  {
    "date": "2024-07-01",
    "category": "飲料",
    "region": "九州",
    "sales": 83200,
    "name": "熊本店"
  },
  {
    "date": "2024-07-31",
    "category": "野菜",
    "region": "関東",
    "sales": 434178,
    "name": "東京店"
  },
  {
    "date": "2024-07-31",
    "category": "肉",
    "region": "関東",
    "sales": 167226,
    "name": "東京店"
  },
  {
    "date": "2024-07-31",
    "category": "果物",
    "region": "関東",
    "sales": 413133,
    "name": "東京店"
  },
  {
    "date": "2024-07-31",
    "category": "魚",
    "region": "関東",
    "sales": 86343,
    "name": "東京店"
  },
  {
    "date": "2024-07-31",
    "category": "飲料",
    "region": "関東",
    "sales": 401063,
    "name": "東京店"
  },
  {
    "date": "2024-07-31",
    "category": "野菜",
    "region": "関東",
    "sales": 437152,
    "name": "千葉店"
  },
  {
    "date": "2024-07-31",
    "category": "肉",
    "region": "関東",
    "sales": 265670,
    "name": "千葉店"
  },
  {
    "date": "2024-07-31",
    "category": "果物",
    "region": "関東",
    "sales": 82529,
    "name": "千葉店"
  },
  {
    "date": "2024-07-31",
    "category": "魚",
    "region": "関東",
    "sales": 230211,
    "name": "千葉店"
  },
  {
    "date": "2024-07-31",
    "category": "飲料",
    "region": "関東",
    "sales": 261682,
    "name": "千葉店"
  },
  {
    "date": "2024-07-31",
    "category": "野菜",
    "region": "関東",
    "sales": 299690,
    "name": "神奈川店"
  },
  {
    "date": "2024-07-31",
    "category": "肉",
    "region": "関東",
    "sales": 281918,
    "name": "神奈川店"
  },
  {
    "date": "2024-07-31",
    "category": "果物",
    "region": "関東",
    "sales": 122311,
    "name": "神奈川店"
  },
  {
    "date": "2024-07-31",
    "category": "魚",
    "region": "関東",
    "sales": 233983,
    "name": "神奈川店"
  },
  {
    "date": "2024-07-31",
    "category": "飲料",
    "region": "関東",
    "sales": 248643,
    "name": "神奈川店"
  },
  {
    "date": "2024-07-31",
    "category": "野菜",
    "region": "関西",
    "sales": 367755,
    "name": "大阪店"
  },
  {
    "date": "2024-07-31",
    "category": "肉",
    "region": "関西",
    "sales": 453603,
    "name": "大阪店"
  },
  {
    "date": "2024-07-31",
    "category": "果物",
    "region": "関西",
    "sales": 396571,
    "name": "大阪店"
  },
  {
    "date": "2024-07-31",
    "category": "魚",
    "region": "関西",
    "sales": 290431,
    "name": "大阪店"
  },
  {
    "date": "2024-07-31",
    "category": "飲料",
    "region": "関西",
    "sales": 204858,
    "name": "大阪店"
  },
  {
    "date": "2024-07-31",
    "category": "野菜",
    "region": "関西",
    "sales": 77463,
    "name": "京都店"
  },
  {
    "date": "2024-07-31",
    "category": "肉",
    "region": "関西",
    "sales": 160678,
    "name": "京都店"
  },
  {
    "date": "2024-07-31",
    "category": "果物",
    "region": "関西",
    "sales": 316077,
    "name": "京都店"
  },
  {
    "date": "2024-07-31",
    "category": "魚",
    "region": "関西",
    "sales": 119559,
    "name": "京都店"
  },
  {
    "date": "2024-07-31",
    "category": "飲料",
    "region": "関西",
    "sales": 170218,
    "name": "京都店"
  },
  {
    "date": "2024-07-31",
    "category": "野菜",
    "region": "関西",
    "sales": 462397,
    "name": "兵庫店"
  },
  {
    "date": "2024-07-31",
    "category": "肉",
    "region": "関西",
    "sales": 123985,
    "name": "兵庫店"
  },
  {
    "date": "2024-07-31",
    "category": "果物",
    "region": "関西",
    "sales": 190686,
    "name": "兵庫店"
  },
  {
    "date": "2024-07-31",
    "category": "魚",
    "region": "関西",
    "sales": 468011,
    "name": "兵庫店"
  },
  {
    "date": "2024-07-31",
    "category": "飲料",
    "region": "関西",
    "sales": 317167,
    "name": "兵庫店"
  },
  {
    "date": "2024-07-31",
    "category": "野菜",
    "region": "中部",
    "sales": 304175,
    "name": "名古屋店"
  },
  {
    "date": "2024-07-31",
    "category": "肉",
    "region": "中部",
    "sales": 449744,
    "name": "名古屋店"
  },
  {
    "date": "2024-07-31",
    "category": "果物",
    "region": "中部",
    "sales": 166247,
    "name": "名古屋店"
  },
  {
    "date": "2024-07-31",
    "category": "魚",
    "region": "中部",
    "sales": 442017,
    "name": "名古屋店"
  },
  {
    "date": "2024-07-31",
    "category": "飲料",
    "region": "中部",
    "sales": 453874,
    "name": "名古屋店"
  },
  {
    "date": "2024-07-31",
    "category": "野菜",
    "region": "中部",
    "sales": 111950,
    "name": "静岡店"
  },
  {
    "date": "2024-07-31",
    "category": "肉",
    "region": "中部",
    "sales": 316458,
    "name": "静岡店"
  },
  {
    "date": "2024-07-31",
    "category": "果物",
    "region": "中部",
    "sales": 139252,
    "name": "静岡店"
  },
  {
    "date": "2024-07-31",
    "category": "魚",
    "region": "中部",
    "sales": 461512,
    "name": "静岡店"
  },
  {
    "date": "2024-07-31",
    "category": "飲料",
    "region": "中部",
    "sales": 452388,
    "name": "静岡店"
  },
  {
    "date": "2024-07-31",
    "category": "野菜",
    "region": "東北",
    "sales": 115724,
    "name": "仙台店"
  },
  {
    "date": "2024-07-31",
    "category": "肉",
    "region": "東北",
    "sales": 310138,
    "name": "仙台店"
  },
  {
    "date": "2024-07-31",
    "category": "果物",
    "region": "東北",
    "sales": 216229,
    "name": "仙台店"
  },
  {
    "date": "2024-07-31",
    "category": "魚",
    "region": "東北",
    "sales": 383892,
    "name": "仙台店"
  },
  {
    "date": "2024-07-31",
    "category": "飲料",
    "region": "東北",
    "sales": 481098,
    "name": "仙台店"
  },
  {
    "date": "2024-07-31",
    "category": "野菜",
    "region": "東北",
    "sales": 265934,
    "name": "青森店"
  },
  {
    "date": "2024-07-31",
    "category": "肉",
    "region": "東北",
    "sales": 64534,
    "name": "青森店"
  },
  {
    "date": "2024-07-31",
    "category": "果物",
    "region": "東北",
    "sales": 192591,
    "name": "青森店"
  },
  {
    "date": "2024-07-31",
    "category": "魚",
    "region": "東北",
    "sales": 474121,
    "name": "青森店"
  },
  {
    "date": "2024-07-31",
    "category": "飲料",
    "region": "東北",
    "sales": 229776,
    "name": "青森店"
  },
  {
    "date": "2024-07-31",
    "category": "野菜",
    "region": "九州",
    "sales": 223131,
    "name": "福岡店"
  },
  {
    "date": "2024-07-31",
    "category": "肉",
    "region": "九州",
    "sales": 275584,
    "name": "福岡店"
  },
  {
    "date": "2024-07-31",
    "category": "果物",
    "region": "九州",
    "sales": 188095,
    "name": "福岡店"
  },
  {
    "date": "2024-07-31",
    "category": "魚",
    "region": "九州",
    "sales": 275719,
    "name": "福岡店"
  },
  {
    "date": "2024-07-31",
    "category": "飲料",
    "region": "九州",
    "sales": 171892,
    "name": "福岡店"
  },
  {
    "date": "2024-07-31",
    "category": "野菜",
    "region": "九州",
    "sales": 106348,
    "name": "熊本店"
  },
  {
    "date": "2024-07-31",
    "category": "肉",
    "region": "九州",
    "sales": 336019,
    "name": "熊本店"
  },
  {
    "date": "2024-07-31",
    "category": "果物",
    "region": "九州",
    "sales": 92561,
    "name": "熊本店"
  },
  {
    "date": "2024-07-31",
    "category": "魚",
    "region": "九州",
    "sales": 393632,
    "name": "熊本店"
  },
  {
    "date": "2024-07-31",
    "category": "飲料",
    "region": "九州",
    "sales": 458786,
    "name": "熊本店"
  },
  {
    "date": "2024-08-30",
    "category": "野菜",
    "region": "関東",
    "sales": 435876,
    "name": "東京店"
  },
  {
    "date": "2024-08-30",
    "category": "肉",
    "region": "関東",
    "sales": 73498,
    "name": "東京店"
  },
  {
    "date": "2024-08-30",
    "category": "果物",
    "region": "関東",
    "sales": 61653,
    "name": "東京店"
  },
  {
    "date": "2024-08-30",
    "category": "魚",
    "region": "関東",
    "sales": 91019,
    "name": "東京店"
  },
  {
    "date": "2024-08-30",
    "category": "飲料",
    "region": "関東",
    "sales": 378107,
    "name": "東京店"
  },
  {
    "date": "2024-08-30",
    "category": "野菜",
    "region": "関東",
    "sales": 80426,
    "name": "千葉店"
  },
  {
    "date": "2024-08-30",
    "category": "肉",
    "region": "関東",
    "sales": 371713,
    "name": "千葉店"
  },
  {
    "date": "2024-08-30",
    "category": "果物",
    "region": "関東",
    "sales": 405626,
    "name": "千葉店"
  },
  {
    "date": "2024-08-30",
    "category": "魚",
    "region": "関東",
    "sales": 330126,
    "name": "千葉店"
  },
  {
    "date": "2024-08-30",
    "category": "飲料",
    "region": "関東",
    "sales": 177862,
    "name": "千葉店"
  },
  {
    "date": "2024-08-30",
    "category": "野菜",
    "region": "関東",
    "sales": 458026,
    "name": "神奈川店"
  },
  {
    "date": "2024-08-30",
    "category": "肉",
    "region": "関東",
    "sales": 340475,
    "name": "神奈川店"
  },
  {
    "date": "2024-08-30",
    "category": "果物",
    "region": "関東",
    "sales": 461118,
    "name": "神奈川店"
  },
  {
    "date": "2024-08-30",
    "category": "魚",
    "region": "関東",
    "sales": 64057,
    "name": "神奈川店"
  },
  {
    "date": "2024-08-30",
    "category": "飲料",
    "region": "関東",
    "sales": 457987,
    "name": "神奈川店"
  },
  {
    "date": "2024-08-30",
    "category": "野菜",
    "region": "関西",
    "sales": 339672,
    "name": "大阪店"
  },
  {
    "date": "2024-08-30",
    "category": "肉",
    "region": "関西",
    "sales": 467770,
    "name": "大阪店"
  },
  {
    "date": "2024-08-30",
    "category": "果物",
    "region": "関西",
    "sales": 205796,
    "name": "大阪店"
  },
  {
    "date": "2024-08-30",
    "category": "魚",
    "region": "関西",
    "sales": 352415,
    "name": "大阪店"
  },
  {
    "date": "2024-08-30",
    "category": "飲料",
    "region": "関西",
    "sales": 490689,
    "name": "大阪店"
  },
  {
    "date": "2024-08-30",
    "category": "野菜",
    "region": "関西",
    "sales": 314872,
    "name": "京都店"
  },
  {
    "date": "2024-08-30",
    "category": "肉",
    "region": "関西",
    "sales": 353688,
    "name": "京都店"
  },
  {
    "date": "2024-08-30",
    "category": "果物",
    "region": "関西",
    "sales": 491858,
    "name": "京都店"
  },
  {
    "date": "2024-08-30",
    "category": "魚",
    "region": "関西",
    "sales": 239500,
    "name": "京都店"
  },
  {
    "date": "2024-08-30",
    "category": "飲料",
    "region": "関西",
    "sales": 434511,
    "name": "京都店"
  },
  {
    "date": "2024-08-30",
    "category": "野菜",
    "region": "関西",
    "sales": 251547,
    "name": "兵庫店"
  },
  {
    "date": "2024-08-30",
    "category": "肉",
    "region": "関西",
    "sales": 334220,
    "name": "兵庫店"
  },
  {
    "date": "2024-08-30",
    "category": "果物",
    "region": "関西",
    "sales": 95932,
    "name": "兵庫店"
  },
  {
    "date": "2024-08-30",
    "category": "魚",
    "region": "関西",
    "sales": 428620,
    "name": "兵庫店"
  },
  {
    "date": "2024-08-30",
    "category": "飲料",
    "region": "関西",
    "sales": 443213,
    "name": "兵庫店"
  },
  {
    "date": "2024-08-30",
    "category": "野菜",
    "region": "中部",
    "sales": 52903,
    "name": "名古屋店"
  },
  {
    "date": "2024-08-30",
    "category": "肉",
    "region": "中部",
    "sales": 366271,
    "name": "名古屋店"
  },
  {
    "date": "2024-08-30",
    "category": "果物",
    "region": "中部",
    "sales": 320190,
    "name": "名古屋店"
  },
  {
    "date": "2024-08-30",
    "category": "魚",
    "region": "中部",
    "sales": 406233,
    "name": "名古屋店"
  },
  {
    "date": "2024-08-30",
    "category": "飲料",
    "region": "中部",
    "sales": 325294,
    "name": "名古屋店"
  },
  {
    "date": "2024-08-30",
    "category": "野菜",
    "region": "中部",
    "sales": 80698,
    "name": "静岡店"
  },
  {
    "date": "2024-08-30",
    "category": "肉",
    "region": "中部",
    "sales": 192840,
    "name": "静岡店"
  },
  {
    "date": "2024-08-30",
    "category": "果物",
    "region": "中部",
    "sales": 81603,
    "name": "静岡店"
  },
  {
    "date": "2024-08-30",
    "category": "魚",
    "region": "中部",
    "sales": 153609,
    "name": "静岡店"
  },
  {
    "date": "2024-08-30",
    "category": "飲料",
    "region": "中部",
    "sales": 211073,
    "name": "静岡店"
  },
  {
    "date": "2024-08-30",
    "category": "野菜",
    "region": "東北",
    "sales": 224637,
    "name": "仙台店"
  },
  {
    "date": "2024-08-30",
    "category": "肉",
    "region": "東北",
    "sales": 146980,
    "name": "仙台店"
  },
  {
    "date": "2024-08-30",
    "category": "果物",
    "region": "東北",
    "sales": 441680,
    "name": "仙台店"
  },
  {
    "date": "2024-08-30",
    "category": "魚",
    "region": "東北",
    "sales": 158260,
    "name": "仙台店"
  },
  {
    "date": "2024-08-30",
    "category": "飲料",
    "region": "東北",
    "sales": 263405,
    "name": "仙台店"
  },
  {
    "date": "2024-08-30",
    "category": "野菜",
    "region": "東北",
    "sales": 450190,
    "name": "青森店"
  },
  {
    "date": "2024-08-30",
    "category": "肉",
    "region": "東北",
    "sales": 184427,
    "name": "青森店"
  },
  {
    "date": "2024-08-30",
    "category": "果物",
    "region": "東北",
    "sales": 78885,
    "name": "青森店"
  },
  {
    "date": "2024-08-30",
    "category": "魚",
    "region": "東北",
    "sales": 222579,
    "name": "青森店"
  },
  {
    "date": "2024-08-30",
    "category": "飲料",
    "region": "東北",
    "sales": 198720,
    "name": "青森店"
  },
  {
    "date": "2024-08-30",
    "category": "野菜",
    "region": "九州",
    "sales": 396329,
    "name": "福岡店"
  },
  {
    "date": "2024-08-30",
    "category": "肉",
    "region": "九州",
    "sales": 120227,
    "name": "福岡店"
  },
  {
    "date": "2024-08-30",
    "category": "果物",
    "region": "九州",
    "sales": 261230,
    "name": "福岡店"
  },
  {
    "date": "2024-08-30",
    "category": "魚",
    "region": "九州",
    "sales": 319475,
    "name": "福岡店"
  },
  {
    "date": "2024-08-30",
    "category": "飲料",
    "region": "九州",
    "sales": 369573,
    "name": "福岡店"
  },
  {
    "date": "2024-08-30",
    "category": "野菜",
    "region": "九州",
    "sales": 101277,
    "name": "熊本店"
  },
  {
    "date": "2024-08-30",
    "category": "肉",
    "region": "九州",
    "sales": 458614,
    "name": "熊本店"
  },
  {
    "date": "2024-08-30",
    "category": "果物",
    "region": "九州",
    "sales": 50845,
    "name": "熊本店"
  },
  {
    "date": "2024-08-30",
    "category": "魚",
    "region": "九州",
    "sales": 431637,
    "name": "熊本店"
  },
  {
    "date": "2024-08-30",
    "category": "飲料",
    "region": "九州",
    "sales": 356961,
    "name": "熊本店"
  },
  {
    "date": "2024-09-29",
    "category": "野菜",
    "region": "関東",
    "sales": 182919,
    "name": "東京店"
  },
  {
    "date": "2024-09-29",
    "category": "肉",
    "region": "関東",
    "sales": 75969,
    "name": "東京店"
  },
  {
    "date": "2024-09-29",
    "category": "果物",
    "region": "関東",
    "sales": 94735,
    "name": "東京店"
  },
  {
    "date": "2024-09-29",
    "category": "魚",
    "region": "関東",
    "sales": 453207,
    "name": "東京店"
  },
  {
    "date": "2024-09-29",
    "category": "飲料",
    "region": "関東",
    "sales": 51008,
    "name": "東京店"
  },
  {
    "date": "2024-09-29",
    "category": "野菜",
    "region": "関東",
    "sales": 307663,
    "name": "千葉店"
  },
  {
    "date": "2024-09-29",
    "category": "肉",
    "region": "関東",
    "sales": 172492,
    "name": "千葉店"
  },
  {
    "date": "2024-09-29",
    "category": "果物",
    "region": "関東",
    "sales": 362329,
    "name": "千葉店"
  },
  {
    "date": "2024-09-29",
    "category": "魚",
    "region": "関東",
    "sales": 113656,
    "name": "千葉店"
  },
  {
    "date": "2024-09-29",
    "category": "飲料",
    "region": "関東",
    "sales": 370005,
    "name": "千葉店"
  },
  {
    "date": "2024-09-29",
    "category": "野菜",
    "region": "関東",
    "sales": 60761,
    "name": "神奈川店"
  },
  {
    "date": "2024-09-29",
    "category": "肉",
    "region": "関東",
    "sales": 441738,
    "name": "神奈川店"
  },
  {
    "date": "2024-09-29",
    "category": "果物",
    "region": "関東",
    "sales": 116825,
    "name": "神奈川店"
  },
  {
    "date": "2024-09-29",
    "category": "魚",
    "region": "関東",
    "sales": 171848,
    "name": "神奈川店"
  },
  {
    "date": "2024-09-29",
    "category": "飲料",
    "region": "関東",
    "sales": 421437,
    "name": "神奈川店"
  },
  {
    "date": "2024-09-29",
    "category": "野菜",
    "region": "関西",
    "sales": 458239,
    "name": "大阪店"
  },
  {
    "date": "2024-09-29",
    "category": "肉",
    "region": "関西",
    "sales": 86143,
    "name": "大阪店"
  },
  {
    "date": "2024-09-29",
    "category": "果物",
    "region": "関西",
    "sales": 125606,
    "name": "大阪店"
  },
  {
    "date": "2024-09-29",
    "category": "魚",
    "region": "関西",
    "sales": 256932,
    "name": "大阪店"
  },
  {
    "date": "2024-09-29",
    "category": "飲料",
    "region": "関西",
    "sales": 323746,
    "name": "大阪店"
  },
  {
    "date": "2024-09-29",
    "category": "野菜",
    "region": "関西",
    "sales": 183865,
    "name": "京都店"
  },
  {
    "date": "2024-09-29",
    "category": "肉",
    "region": "関西",
    "sales": 61506,
    "name": "京都店"
  },
  {
    "date": "2024-09-29",
    "category": "果物",
    "region": "関西",
    "sales": 60004,
    "name": "京都店"
  },
  {
    "date": "2024-09-29",
    "category": "魚",
    "region": "関西",
    "sales": 357519,
    "name": "京都店"
  },
  {
    "date": "2024-09-29",
    "category": "飲料",
    "region": "関西",
    "sales": 194105,
    "name": "京都店"
  },
  {
    "date": "2024-09-29",
    "category": "野菜",
    "region": "関西",
    "sales": 165573,
    "name": "兵庫店"
  },
  {
    "date": "2024-09-29",
    "category": "肉",
    "region": "関西",
    "sales": 153525,
    "name": "兵庫店"
  },
  {
    "date": "2024-09-29",
    "category": "果物",
    "region": "関西",
    "sales": 447602,
    "name": "兵庫店"
  },
  {
    "date": "2024-09-29",
    "category": "魚",
    "region": "関西",
    "sales": 352047,
    "name": "兵庫店"
  },
  {
    "date": "2024-09-29",
    "category": "飲料",
    "region": "関西",
    "sales": 209459,
    "name": "兵庫店"
  },
  {
    "date": "2024-09-29",
    "category": "野菜",
    "region": "中部",
    "sales": 182646,
    "name": "名古屋店"
  },
  {
    "date": "2024-09-29",
    "category": "肉",
    "region": "中部",
    "sales": 189696,
    "name": "名古屋店"
  },
  {
    "date": "2024-09-29",
    "category": "果物",
    "region": "中部",
    "sales": 395379,
    "name": "名古屋店"
  },
  {
    "date": "2024-09-29",
    "category": "魚",
    "region": "中部",
    "sales": 195333,
    "name": "名古屋店"
  },
  {
    "date": "2024-09-29",
    "category": "飲料",
    "region": "中部",
    "sales": 287976,
    "name": "名古屋店"
  },
  {
    "date": "2024-09-29",
    "category": "野菜",
    "region": "中部",
    "sales": 345124,
    "name": "静岡店"
  },
  {
    "date": "2024-09-29",
    "category": "肉",
    "region": "中部",
    "sales": 448277,
    "name": "静岡店"
  },
  {
    "date": "2024-09-29",
    "category": "果物",
    "region": "中部",
    "sales": 385835,
    "name": "静岡店"
  },
  {
    "date": "2024-09-29",
    "category": "魚",
    "region": "中部",
    "sales": 146550,
    "name": "静岡店"
  },
  {
    "date": "2024-09-29",
    "category": "飲料",
    "region": "中部",
    "sales": 136237,
    "name": "静岡店"
  },
  {
    "date": "2024-09-29",
    "category": "野菜",
    "region": "東北",
    "sales": 343224,
    "name": "仙台店"
  },
  {
    "date": "2024-09-29",
    "category": "肉",
    "region": "東北",
    "sales": 390731,
    "name": "仙台店"
  },
  {
    "date": "2024-09-29",
    "category": "果物",
    "region": "東北",
    "sales": 421730,
    "name": "仙台店"
  },
  {
    "date": "2024-09-29",
    "category": "魚",
    "region": "東北",
    "sales": 56444,
    "name": "仙台店"
  },
  {
    "date": "2024-09-29",
    "category": "飲料",
    "region": "東北",
    "sales": 74985,
    "name": "仙台店"
  },
  {
    "date": "2024-09-29",
    "category": "野菜",
    "region": "東北",
    "sales": 433474,
    "name": "青森店"
  },
  {
    "date": "2024-09-29",
    "category": "肉",
    "region": "東北",
    "sales": 243457,
    "name": "青森店"
  },
  {
    "date": "2024-09-29",
    "category": "果物",
    "region": "東北",
    "sales": 195417,
    "name": "青森店"
  },
  {
    "date": "2024-09-29",
    "category": "魚",
    "region": "東北",
    "sales": 440219,
    "name": "青森店"
  },
  {
    "date": "2024-09-29",
    "category": "飲料",
    "region": "東北",
    "sales": 128785,
    "name": "青森店"
  },
  {
    "date": "2024-09-29",
    "category": "野菜",
    "region": "九州",
    "sales": 98773,
    "name": "福岡店"
  },
  {
    "date": "2024-09-29",
    "category": "肉",
    "region": "九州",
    "sales": 217744,
    "name": "福岡店"
  },
  {
    "date": "2024-09-29",
    "category": "果物",
    "region": "九州",
    "sales": 305066,
    "name": "福岡店"
  },
  {
    "date": "2024-09-29",
    "category": "魚",
    "region": "九州",
    "sales": 254350,
    "name": "福岡店"
  },
  {
    "date": "2024-09-29",
    "category": "飲料",
    "region": "九州",
    "sales": 58511,
    "name": "福岡店"
  },
  {
    "date": "2024-09-29",
    "category": "野菜",
    "region": "九州",
    "sales": 209817,
    "name": "熊本店"
  },
  {
    "date": "2024-09-29",
    "category": "肉",
    "region": "九州",
    "sales": 413551,
    "name": "熊本店"
  },
  {
    "date": "2024-09-29",
    "category": "果物",
    "region": "九州",
    "sales": 226623,
    "name": "熊本店"
  },
  {
    "date": "2024-09-29",
    "category": "魚",
    "region": "九州",
    "sales": 331382,
    "name": "熊本店"
  },
  {
    "date": "2024-09-29",
    "category": "飲料",
    "region": "九州",
    "sales": 494156,
    "name": "熊本店"
  },
  {
    "date": "2024-10-29",
    "category": "野菜",
    "region": "関東",
    "sales": 64376,
    "name": "東京店"
  },
  {
    "date": "2024-10-29",
    "category": "肉",
    "region": "関東",
    "sales": 212012,
    "name": "東京店"
  },
  {
    "date": "2024-10-29",
    "category": "果物",
    "region": "関東",
    "sales": 432523,
    "name": "東京店"
  },
  {
    "date": "2024-10-29",
    "category": "魚",
    "region": "関東",
    "sales": 487308,
    "name": "東京店"
  },
  {
    "date": "2024-10-29",
    "category": "飲料",
    "region": "関東",
    "sales": 412659,
    "name": "東京店"
  },
  {
    "date": "2024-10-29",
    "category": "野菜",
    "region": "関東",
    "sales": 420768,
    "name": "千葉店"
  },
  {
    "date": "2024-10-29",
    "category": "肉",
    "region": "関東",
    "sales": 410215,
    "name": "千葉店"
  },
  {
    "date": "2024-10-29",
    "category": "果物",
    "region": "関東",
    "sales": 444481,
    "name": "千葉店"
  },
  {
    "date": "2024-10-29",
    "category": "魚",
    "region": "関東",
    "sales": 109816,
    "name": "千葉店"
  },
  {
    "date": "2024-10-29",
    "category": "飲料",
    "region": "関東",
    "sales": 266793,
    "name": "千葉店"
  },
  {
    "date": "2024-10-29",
    "category": "野菜",
    "region": "関東",
    "sales": 248312,
    "name": "神奈川店"
  },
  {
    "date": "2024-10-29",
    "category": "肉",
    "region": "関東",
    "sales": 454286,
    "name": "神奈川店"
  },
  {
    "date": "2024-10-29",
    "category": "果物",
    "region": "関東",
    "sales": 102911,
    "name": "神奈川店"
  },
  {
    "date": "2024-10-29",
    "category": "魚",
    "region": "関東",
    "sales": 467980,
    "name": "神奈川店"
  },
  {
    "date": "2024-10-29",
    "category": "飲料",
    "region": "関東",
    "sales": 254478,
    "name": "神奈川店"
  },
  {
    "date": "2024-10-29",
    "category": "野菜",
    "region": "関西",
    "sales": 342862,
    "name": "大阪店"
  },
  {
    "date": "2024-10-29",
    "category": "肉",
    "region": "関西",
    "sales": 300178,
    "name": "大阪店"
  },
  {
    "date": "2024-10-29",
    "category": "果物",
    "region": "関西",
    "sales": 317767,
    "name": "大阪店"
  },
  {
    "date": "2024-10-29",
    "category": "魚",
    "region": "関西",
    "sales": 424039,
    "name": "大阪店"
  },
  {
    "date": "2024-10-29",
    "category": "飲料",
    "region": "関西",
    "sales": 157658,
    "name": "大阪店"
  },
  {
    "date": "2024-10-29",
    "category": "野菜",
    "region": "関西",
    "sales": 74682,
    "name": "京都店"
  },
  {
    "date": "2024-10-29",
    "category": "肉",
    "region": "関西",
    "sales": 170867,
    "name": "京都店"
  },
  {
    "date": "2024-10-29",
    "category": "果物",
    "region": "関西",
    "sales": 85488,
    "name": "京都店"
  },
  {
    "date": "2024-10-29",
    "category": "魚",
    "region": "関西",
    "sales": 436702,
    "name": "京都店"
  },
  {
    "date": "2024-10-29",
    "category": "飲料",
    "region": "関西",
    "sales": 380271,
    "name": "京都店"
  },
  {
    "date": "2024-10-29",
    "category": "野菜",
    "region": "関西",
    "sales": 257150,
    "name": "兵庫店"
  },
  {
    "date": "2024-10-29",
    "category": "肉",
    "region": "関西",
    "sales": 206810,
    "name": "兵庫店"
  },
  {
    "date": "2024-10-29",
    "category": "果物",
    "region": "関西",
    "sales": 233970,
    "name": "兵庫店"
  },
  {
    "date": "2024-10-29",
    "category": "魚",
    "region": "関西",
    "sales": 240560,
    "name": "兵庫店"
  },
  {
    "date": "2024-10-29",
    "category": "飲料",
    "region": "関西",
    "sales": 416276,
    "name": "兵庫店"
  },
  {
    "date": "2024-10-29",
    "category": "野菜",
    "region": "中部",
    "sales": 186658,
    "name": "名古屋店"
  },
  {
    "date": "2024-10-29",
    "category": "肉",
    "region": "中部",
    "sales": 347579,
    "name": "名古屋店"
  },
  {
    "date": "2024-10-29",
    "category": "果物",
    "region": "中部",
    "sales": 107418,
    "name": "名古屋店"
  },
  {
    "date": "2024-10-29",
    "category": "魚",
    "region": "中部",
    "sales": 377997,
    "name": "名古屋店"
  },
  {
    "date": "2024-10-29",
    "category": "飲料",
    "region": "中部",
    "sales": 499866,
    "name": "名古屋店"
  },
  {
    "date": "2024-10-29",
    "category": "野菜",
    "region": "中部",
    "sales": 240610,
    "name": "静岡店"
  },
  {
    "date": "2024-10-29",
    "category": "肉",
    "region": "中部",
    "sales": 80454,
    "name": "静岡店"
  },
  {
    "date": "2024-10-29",
    "category": "果物",
    "region": "中部",
    "sales": 439232,
    "name": "静岡店"
  },
  {
    "date": "2024-10-29",
    "category": "魚",
    "region": "中部",
    "sales": 386306,
    "name": "静岡店"
  },
  {
    "date": "2024-10-29",
    "category": "飲料",
    "region": "中部",
    "sales": 70388,
    "name": "静岡店"
  },
  {
    "date": "2024-10-29",
    "category": "野菜",
    "region": "東北",
    "sales": 206375,
    "name": "仙台店"
  },
  {
    "date": "2024-10-29",
    "category": "肉",
    "region": "東北",
    "sales": 273876,
    "name": "仙台店"
  },
  {
    "date": "2024-10-29",
    "category": "果物",
    "region": "東北",
    "sales": 162291,
    "name": "仙台店"
  },
  {
    "date": "2024-10-29",
    "category": "魚",
    "region": "東北",
    "sales": 464606,
    "name": "仙台店"
  },
  {
    "date": "2024-10-29",
    "category": "飲料",
    "region": "東北",
    "sales": 380838,
    "name": "仙台店"
  },
  {
    "date": "2024-10-29",
    "category": "野菜",
    "region": "東北",
    "sales": 75979,
    "name": "青森店"
  },
  {
    "date": "2024-10-29",
    "category": "肉",
    "region": "東北",
    "sales": 307077,
    "name": "青森店"
  },
  {
    "date": "2024-10-29",
    "category": "果物",
    "region": "東北",
    "sales": 472587,
    "name": "青森店"
  },
  {
    "date": "2024-10-29",
    "category": "魚",
    "region": "東北",
    "sales": 77560,
    "name": "青森店"
  },
  {
    "date": "2024-10-29",
    "category": "飲料",
    "region": "東北",
    "sales": 181767,
    "name": "青森店"
  },
  {
    "date": "2024-10-29",
    "category": "野菜",
    "region": "九州",
    "sales": 185277,
    "name": "福岡店"
  },
  {
    "date": "2024-10-29",
    "category": "肉",
    "region": "九州",
    "sales": 487373,
    "name": "福岡店"
  },
  {
    "date": "2024-10-29",
    "category": "果物",
    "region": "九州",
    "sales": 128662,
    "name": "福岡店"
  },
  {
    "date": "2024-10-29",
    "category": "魚",
    "region": "九州",
    "sales": 178481,
    "name": "福岡店"
  },
  {
    "date": "2024-10-29",
    "category": "飲料",
    "region": "九州",
    "sales": 245651,
    "name": "福岡店"
  },
  {
    "date": "2024-10-29",
    "category": "野菜",
    "region": "九州",
    "sales": 316668,
    "name": "熊本店"
  },
  {
    "date": "2024-10-29",
    "category": "肉",
    "region": "九州",
    "sales": 399441,
    "name": "熊本店"
  },
  {
    "date": "2024-10-29",
    "category": "果物",
    "region": "九州",
    "sales": 272047,
    "name": "熊本店"
  },
  {
    "date": "2024-10-29",
    "category": "魚",
    "region": "九州",
    "sales": 405505,
    "name": "熊本店"
  },
  {
    "date": "2024-10-29",
    "category": "飲料",
    "region": "九州",
    "sales": 285998,
    "name": "熊本店"
  },
  {
    "date": "2024-11-28",
    "category": "野菜",
    "region": "関東",
    "sales": 262685,
    "name": "東京店"
  },
  {
    "date": "2024-11-28",
    "category": "肉",
    "region": "関東",
    "sales": 139803,
    "name": "東京店"
  },
  {
    "date": "2024-11-28",
    "category": "果物",
    "region": "関東",
    "sales": 322734,
    "name": "東京店"
  },
  {
    "date": "2024-11-28",
    "category": "魚",
    "region": "関東",
    "sales": 473987,
    "name": "東京店"
  },
  {
    "date": "2024-11-28",
    "category": "飲料",
    "region": "関東",
    "sales": 494401,
    "name": "東京店"
  },
  {
    "date": "2024-11-28",
    "category": "野菜",
    "region": "関東",
    "sales": 194240,
    "name": "千葉店"
  },
  {
    "date": "2024-11-28",
    "category": "肉",
    "region": "関東",
    "sales": 96422,
    "name": "千葉店"
  },
  {
    "date": "2024-11-28",
    "category": "果物",
    "region": "関東",
    "sales": 69864,
    "name": "千葉店"
  },
  {
    "date": "2024-11-28",
    "category": "魚",
    "region": "関東",
    "sales": 50746,
    "name": "千葉店"
  },
  {
    "date": "2024-11-28",
    "category": "飲料",
    "region": "関東",
    "sales": 140680,
    "name": "千葉店"
  },
  {
    "date": "2024-11-28",
    "category": "野菜",
    "region": "関東",
    "sales": 482295,
    "name": "神奈川店"
  },
  {
    "date": "2024-11-28",
    "category": "肉",
    "region": "関東",
    "sales": 442464,
    "name": "神奈川店"
  },
  {
    "date": "2024-11-28",
    "category": "果物",
    "region": "関東",
    "sales": 435020,
    "name": "神奈川店"
  },
  {
    "date": "2024-11-28",
    "category": "魚",
    "region": "関東",
    "sales": 91683,
    "name": "神奈川店"
  },
  {
    "date": "2024-11-28",
    "category": "飲料",
    "region": "関東",
    "sales": 237198,
    "name": "神奈川店"
  },
  {
    "date": "2024-11-28",
    "category": "野菜",
    "region": "関西",
    "sales": 167769,
    "name": "大阪店"
  },
  {
    "date": "2024-11-28",
    "category": "肉",
    "region": "関西",
    "sales": 215940,
    "name": "大阪店"
  },
  {
    "date": "2024-11-28",
    "category": "果物",
    "region": "関西",
    "sales": 427505,
    "name": "大阪店"
  },
  {
    "date": "2024-11-28",
    "category": "魚",
    "region": "関西",
    "sales": 169590,
    "name": "大阪店"
  },
  {
    "date": "2024-11-28",
    "category": "飲料",
    "region": "関西",
    "sales": 474207,
    "name": "大阪店"
  },
  {
    "date": "2024-11-28",
    "category": "野菜",
    "region": "関西",
    "sales": 285833,
    "name": "京都店"
  },
  {
    "date": "2024-11-28",
    "category": "肉",
    "region": "関西",
    "sales": 146031,
    "name": "京都店"
  },
  {
    "date": "2024-11-28",
    "category": "果物",
    "region": "関西",
    "sales": 168228,
    "name": "京都店"
  },
  {
    "date": "2024-11-28",
    "category": "魚",
    "region": "関西",
    "sales": 176962,
    "name": "京都店"
  },
  {
    "date": "2024-11-28",
    "category": "飲料",
    "region": "関西",
    "sales": 291058,
    "name": "京都店"
  },
  {
    "date": "2024-11-28",
    "category": "野菜",
    "region": "関西",
    "sales": 304098,
    "name": "兵庫店"
  },
  {
    "date": "2024-11-28",
    "category": "肉",
    "region": "関西",
    "sales": 389631,
    "name": "兵庫店"
  },
  {
    "date": "2024-11-28",
    "category": "果物",
    "region": "関西",
    "sales": 458638,
    "name": "兵庫店"
  },
  {
    "date": "2024-11-28",
    "category": "魚",
    "region": "関西",
    "sales": 306146,
    "name": "兵庫店"
  },
  {
    "date": "2024-11-28",
    "category": "飲料",
    "region": "関西",
    "sales": 376207,
    "name": "兵庫店"
  },
  {
    "date": "2024-11-28",
    "category": "野菜",
    "region": "中部",
    "sales": 437041,
    "name": "名古屋店"
  },
  {
    "date": "2024-11-28",
    "category": "肉",
    "region": "中部",
    "sales": 476173,
    "name": "名古屋店"
  },
  {
    "date": "2024-11-28",
    "category": "果物",
    "region": "中部",
    "sales": 346129,
    "name": "名古屋店"
  },
  {
    "date": "2024-11-28",
    "category": "魚",
    "region": "中部",
    "sales": 150875,
    "name": "名古屋店"
  },
  {
    "date": "2024-11-28",
    "category": "飲料",
    "region": "中部",
    "sales": 105718,
    "name": "名古屋店"
  },
  {
    "date": "2024-11-28",
    "category": "野菜",
    "region": "中部",
    "sales": 473797,
    "name": "静岡店"
  },
  {
    "date": "2024-11-28",
    "category": "肉",
    "region": "中部",
    "sales": 68364,
    "name": "静岡店"
  },
  {
    "date": "2024-11-28",
    "category": "果物",
    "region": "中部",
    "sales": 175308,
    "name": "静岡店"
  },
  {
    "date": "2024-11-28",
    "category": "魚",
    "region": "中部",
    "sales": 324616,
    "name": "静岡店"
  },
  {
    "date": "2024-11-28",
    "category": "飲料",
    "region": "中部",
    "sales": 449531,
    "name": "静岡店"
  },
  {
    "date": "2024-11-28",
    "category": "野菜",
    "region": "東北",
    "sales": 369992,
    "name": "仙台店"
  },
  {
    "date": "2024-11-28",
    "category": "肉",
    "region": "東北",
    "sales": 256362,
    "name": "仙台店"
  },
  {
    "date": "2024-11-28",
    "category": "果物",
    "region": "東北",
    "sales": 396440,
    "name": "仙台店"
  },
  {
    "date": "2024-11-28",
    "category": "魚",
    "region": "東北",
    "sales": 82668,
    "name": "仙台店"
  },
  {
    "date": "2024-11-28",
    "category": "飲料",
    "region": "東北",
    "sales": 356358,
    "name": "仙台店"
  },
  {
    "date": "2024-11-28",
    "category": "野菜",
    "region": "東北",
    "sales": 361941,
    "name": "青森店"
  },
  {
    "date": "2024-11-28",
    "category": "肉",
    "region": "東北",
    "sales": 276130,
    "name": "青森店"
  },
  {
    "date": "2024-11-28",
    "category": "果物",
    "region": "東北",
    "sales": 209295,
    "name": "青森店"
  },
  {
    "date": "2024-11-28",
    "category": "魚",
    "region": "東北",
    "sales": 219331,
    "name": "青森店"
  },
  {
    "date": "2024-11-28",
    "category": "飲料",
    "region": "東北",
    "sales": 250037,
    "name": "青森店"
  },
  {
    "date": "2024-11-28",
    "category": "野菜",
    "region": "九州",
    "sales": 388592,
    "name": "福岡店"
  },
  {
    "date": "2024-11-28",
    "category": "肉",
    "region": "九州",
    "sales": 98334,
    "name": "福岡店"
  },
  {
    "date": "2024-11-28",
    "category": "果物",
    "region": "九州",
    "sales": 94620,
    "name": "福岡店"
  },
  {
    "date": "2024-11-28",
    "category": "魚",
    "region": "九州",
    "sales": 464634,
    "name": "福岡店"
  },
  {
    "date": "2024-11-28",
    "category": "飲料",
    "region": "九州",
    "sales": 351258,
    "name": "福岡店"
  },
  {
    "date": "2024-11-28",
    "category": "野菜",
    "region": "九州",
    "sales": 367975,
    "name": "熊本店"
  },
  {
    "date": "2024-11-28",
    "category": "肉",
    "region": "九州",
    "sales": 185019,
    "name": "熊本店"
  },
  {
    "date": "2024-11-28",
    "category": "果物",
    "region": "九州",
    "sales": 88236,
    "name": "熊本店"
  },
  {
    "date": "2024-11-28",
    "category": "魚",
    "region": "九州",
    "sales": 401491,
    "name": "熊本店"
  },
  {
    "date": "2024-11-28",
    "category": "飲料",
    "region": "九州",
    "sales": 443306,
    "name": "熊本店"
  },
  {
    "date": "2024-12-28",
    "category": "野菜",
    "region": "関東",
    "sales": 458607,
    "name": "東京店"
  },
  {
    "date": "2024-12-28",
    "category": "肉",
    "region": "関東",
    "sales": 226663,
    "name": "東京店"
  },
  {
    "date": "2024-12-28",
    "category": "果物",
    "region": "関東",
    "sales": 306351,
    "name": "東京店"
  },
  {
    "date": "2024-12-28",
    "category": "魚",
    "region": "関東",
    "sales": 285394,
    "name": "東京店"
  },
  {
    "date": "2024-12-28",
    "category": "飲料",
    "region": "関東",
    "sales": 141386,
    "name": "東京店"
  },
  {
    "date": "2024-12-28",
    "category": "野菜",
    "region": "関東",
    "sales": 487731,
    "name": "千葉店"
  },
  {
    "date": "2024-12-28",
    "category": "肉",
    "region": "関東",
    "sales": 364012,
    "name": "千葉店"
  },
  {
    "date": "2024-12-28",
    "category": "果物",
    "region": "関東",
    "sales": 141357,
    "name": "千葉店"
  },
  {
    "date": "2024-12-28",
    "category": "魚",
    "region": "関東",
    "sales": 179051,
    "name": "千葉店"
  },
  {
    "date": "2024-12-28",
    "category": "飲料",
    "region": "関東",
    "sales": 181497,
    "name": "千葉店"
  },
  {
    "date": "2024-12-28",
    "category": "野菜",
    "region": "関東",
    "sales": 205963,
    "name": "神奈川店"
  },
  {
    "date": "2024-12-28",
    "category": "肉",
    "region": "関東",
    "sales": 144931,
    "name": "神奈川店"
  },
  {
    "date": "2024-12-28",
    "category": "果物",
    "region": "関東",
    "sales": 295155,
    "name": "神奈川店"
  },
  {
    "date": "2024-12-28",
    "category": "魚",
    "region": "関東",
    "sales": 302295,
    "name": "神奈川店"
  },
  {
    "date": "2024-12-28",
    "category": "飲料",
    "region": "関東",
    "sales": 355302,
    "name": "神奈川店"
  },
  {
    "date": "2024-12-28",
    "category": "野菜",
    "region": "関西",
    "sales": 70081,
    "name": "大阪店"
  },
  {
    "date": "2024-12-28",
    "category": "肉",
    "region": "関西",
    "sales": 148507,
    "name": "大阪店"
  },
  {
    "date": "2024-12-28",
    "category": "果物",
    "region": "関西",
    "sales": 172762,
    "name": "大阪店"
  },
  {
    "date": "2024-12-28",
    "category": "魚",
    "region": "関西",
    "sales": 68481,
    "name": "大阪店"
  },
  {
    "date": "2024-12-28",
    "category": "飲料",
    "region": "関西",
    "sales": 420386,
    "name": "大阪店"
  },
  {
    "date": "2024-12-28",
    "category": "野菜",
    "region": "関西",
    "sales": 114740,
    "name": "京都店"
  },
  {
    "date": "2024-12-28",
    "category": "肉",
    "region": "関西",
    "sales": 393503,
    "name": "京都店"
  },
  {
    "date": "2024-12-28",
    "category": "果物",
    "region": "関西",
    "sales": 305857,
    "name": "京都店"
  },
  {
    "date": "2024-12-28",
    "category": "魚",
    "region": "関西",
    "sales": 479900,
    "name": "京都店"
  },
  {
    "date": "2024-12-28",
    "category": "飲料",
    "region": "関西",
    "sales": 143627,
    "name": "京都店"
  },
  {
    "date": "2024-12-28",
    "category": "野菜",
    "region": "関西",
    "sales": 203213,
    "name": "兵庫店"
  },
  {
    "date": "2024-12-28",
    "category": "肉",
    "region": "関西",
    "sales": 288188,
    "name": "兵庫店"
  },
  {
    "date": "2024-12-28",
    "category": "果物",
    "region": "関西",
    "sales": 161683,
    "name": "兵庫店"
  },
  {
    "date": "2024-12-28",
    "category": "魚",
    "region": "関西",
    "sales": 438384,
    "name": "兵庫店"
  },
  {
    "date": "2024-12-28",
    "category": "飲料",
    "region": "関西",
    "sales": 358882,
    "name": "兵庫店"
  },
  {
    "date": "2024-12-28",
    "category": "野菜",
    "region": "中部",
    "sales": 57146,
    "name": "名古屋店"
  },
  {
    "date": "2024-12-28",
    "category": "肉",
    "region": "中部",
    "sales": 54685,
    "name": "名古屋店"
  },
  {
    "date": "2024-12-28",
    "category": "果物",
    "region": "中部",
    "sales": 430104,
    "name": "名古屋店"
  },
  {
    "date": "2024-12-28",
    "category": "魚",
    "region": "中部",
    "sales": 407166,
    "name": "名古屋店"
  },
  {
    "date": "2024-12-28",
    "category": "飲料",
    "region": "中部",
    "sales": 462301,
    "name": "名古屋店"
  },
  {
    "date": "2024-12-28",
    "category": "野菜",
    "region": "中部",
    "sales": 188739,
    "name": "静岡店"
  },
  {
    "date": "2024-12-28",
    "category": "肉",
    "region": "中部",
    "sales": 222522,
    "name": "静岡店"
  },
  {
    "date": "2024-12-28",
    "category": "果物",
    "region": "中部",
    "sales": 467392,
    "name": "静岡店"
  },
  {
    "date": "2024-12-28",
    "category": "魚",
    "region": "中部",
    "sales": 383700,
    "name": "静岡店"
  },
  {
    "date": "2024-12-28",
    "category": "飲料",
    "region": "中部",
    "sales": 83215,
    "name": "静岡店"
  },
  {
    "date": "2024-12-28",
    "category": "野菜",
    "region": "東北",
    "sales": 112688,
    "name": "仙台店"
  },
  {
    "date": "2024-12-28",
    "category": "肉",
    "region": "東北",
    "sales": 382392,
    "name": "仙台店"
  },
  {
    "date": "2024-12-28",
    "category": "果物",
    "region": "東北",
    "sales": 291552,
    "name": "仙台店"
  },
  {
    "date": "2024-12-28",
    "category": "魚",
    "region": "東北",
    "sales": 279828,
    "name": "仙台店"
  },
  {
    "date": "2024-12-28",
    "category": "飲料",
    "region": "東北",
    "sales": 385429,
    "name": "仙台店"
  },
  {
    "date": "2024-12-28",
    "category": "野菜",
    "region": "東北",
    "sales": 437161,
    "name": "青森店"
  },
  {
    "date": "2024-12-28",
    "category": "肉",
    "region": "東北",
    "sales": 67784,
    "name": "青森店"
  },
  {
    "date": "2024-12-28",
    "category": "果物",
    "region": "東北",
    "sales": 166890,
    "name": "青森店"
  },
  {
    "date": "2024-12-28",
    "category": "魚",
    "region": "東北",
    "sales": 269805,
    "name": "青森店"
  },
  {
    "date": "2024-12-28",
    "category": "飲料",
    "region": "東北",
    "sales": 151625,
    "name": "青森店"
  },
  {
    "date": "2024-12-28",
    "category": "野菜",
    "region": "九州",
    "sales": 361005,
    "name": "福岡店"
  },
  {
    "date": "2024-12-28",
    "category": "肉",
    "region": "九州",
    "sales": 419819,
    "name": "福岡店"
  },
  {
    "date": "2024-12-28",
    "category": "果物",
    "region": "九州",
    "sales": 403722,
    "name": "福岡店"
  },
  {
    "date": "2024-12-28",
    "category": "魚",
    "region": "九州",
    "sales": 414139,
    "name": "福岡店"
  },
  {
    "date": "2024-12-28",
    "category": "飲料",
    "region": "九州",
    "sales": 482612,
    "name": "福岡店"
  },
  {
    "date": "2024-12-28",
    "category": "野菜",
    "region": "九州",
    "sales": 140595,
    "name": "熊本店"
  },
  {
    "date": "2024-12-28",
    "category": "肉",
    "region": "九州",
    "sales": 240512,
    "name": "熊本店"
  },
  {
    "date": "2024-12-28",
    "category": "果物",
    "region": "九州",
    "sales": 234895,
    "name": "熊本店"
  },
  {
    "date": "2024-12-28",
    "category": "魚",
    "region": "九州",
    "sales": 361304,
    "name": "熊本店"
  },
  {
    "date": "2024-12-28",
    "category": "飲料",
    "region": "九州",
    "sales": 137344,
    "name": "熊本店"
  },
  {
    "date": "2025-01-27",
    "category": "野菜",
    "region": "関東",
    "sales": 400844,
    "name": "東京店"
  },
  {
    "date": "2025-01-27",
    "category": "肉",
    "region": "関東",
    "sales": 207857,
    "name": "東京店"
  },
  {
    "date": "2025-01-27",
    "category": "果物",
    "region": "関東",
    "sales": 104084,
    "name": "東京店"
  },
  {
    "date": "2025-01-27",
    "category": "魚",
    "region": "関東",
    "sales": 361992,
    "name": "東京店"
  },
  {
    "date": "2025-01-27",
    "category": "飲料",
    "region": "関東",
    "sales": 349116,
    "name": "東京店"
  },
  {
    "date": "2025-01-27",
    "category": "野菜",
    "region": "関東",
    "sales": 291271,
    "name": "千葉店"
  },
  {
    "date": "2025-01-27",
    "category": "肉",
    "region": "関東",
    "sales": 215622,
    "name": "千葉店"
  },
  {
    "date": "2025-01-27",
    "category": "果物",
    "region": "関東",
    "sales": 240315,
    "name": "千葉店"
  },
  {
    "date": "2025-01-27",
    "category": "魚",
    "region": "関東",
    "sales": 364106,
    "name": "千葉店"
  },
  {
    "date": "2025-01-27",
    "category": "飲料",
    "region": "関東",
    "sales": 421710,
    "name": "千葉店"
  },
  {
    "date": "2025-01-27",
    "category": "野菜",
    "region": "関東",
    "sales": 142961,
    "name": "神奈川店"
  },
  {
    "date": "2025-01-27",
    "category": "肉",
    "region": "関東",
    "sales": 287086,
    "name": "神奈川店"
  },
  {
    "date": "2025-01-27",
    "category": "果物",
    "region": "関東",
    "sales": 348170,
    "name": "神奈川店"
  },
  {
    "date": "2025-01-27",
    "category": "魚",
    "region": "関東",
    "sales": 216243,
    "name": "神奈川店"
  },
  {
    "date": "2025-01-27",
    "category": "飲料",
    "region": "関東",
    "sales": 109619,
    "name": "神奈川店"
  },
  {
    "date": "2025-01-27",
    "category": "野菜",
    "region": "関西",
    "sales": 432652,
    "name": "大阪店"
  },
  {
    "date": "2025-01-27",
    "category": "肉",
    "region": "関西",
    "sales": 480531,
    "name": "大阪店"
  },
  {
    "date": "2025-01-27",
    "category": "果物",
    "region": "関西",
    "sales": 425090,
    "name": "大阪店"
  },
  {
    "date": "2025-01-27",
    "category": "魚",
    "region": "関西",
    "sales": 63977,
    "name": "大阪店"
  },
  {
    "date": "2025-01-27",
    "category": "飲料",
    "region": "関西",
    "sales": 331002,
    "name": "大阪店"
  },
  {
    "date": "2025-01-27",
    "category": "野菜",
    "region": "関西",
    "sales": 251959,
    "name": "京都店"
  },
  {
    "date": "2025-01-27",
    "category": "肉",
    "region": "関西",
    "sales": 384804,
    "name": "京都店"
  },
  {
    "date": "2025-01-27",
    "category": "果物",
    "region": "関西",
    "sales": 349605,
    "name": "京都店"
  },
  {
    "date": "2025-01-27",
    "category": "魚",
    "region": "関西",
    "sales": 154330,
    "name": "京都店"
  },
  {
    "date": "2025-01-27",
    "category": "飲料",
    "region": "関西",
    "sales": 380032,
    "name": "京都店"
  },
  {
    "date": "2025-01-27",
    "category": "野菜",
    "region": "関西",
    "sales": 255615,
    "name": "兵庫店"
  },
  {
    "date": "2025-01-27",
    "category": "肉",
    "region": "関西",
    "sales": 77096,
    "name": "兵庫店"
  },
  {
    "date": "2025-01-27",
    "category": "果物",
    "region": "関西",
    "sales": 225120,
    "name": "兵庫店"
  },
  {
    "date": "2025-01-27",
    "category": "魚",
    "region": "関西",
    "sales": 295093,
    "name": "兵庫店"
  },
  {
    "date": "2025-01-27",
    "category": "飲料",
    "region": "関西",
    "sales": 274619,
    "name": "兵庫店"
  },
  {
    "date": "2025-01-27",
    "category": "野菜",
    "region": "中部",
    "sales": 368706,
    "name": "名古屋店"
  },
  {
    "date": "2025-01-27",
    "category": "肉",
    "region": "中部",
    "sales": 141766,
    "name": "名古屋店"
  },
  {
    "date": "2025-01-27",
    "category": "果物",
    "region": "中部",
    "sales": 225759,
    "name": "名古屋店"
  },
  {
    "date": "2025-01-27",
    "category": "魚",
    "region": "中部",
    "sales": 326108,
    "name": "名古屋店"
  },
  {
    "date": "2025-01-27",
    "category": "飲料",
    "region": "中部",
    "sales": 96183,
    "name": "名古屋店"
  },
  {
    "date": "2025-01-27",
    "category": "野菜",
    "region": "中部",
    "sales": 250287,
    "name": "静岡店"
  },
  {
    "date": "2025-01-27",
    "category": "肉",
    "region": "中部",
    "sales": 292849,
    "name": "静岡店"
  },
  {
    "date": "2025-01-27",
    "category": "果物",
    "region": "中部",
    "sales": 217608,
    "name": "静岡店"
  },
  {
    "date": "2025-01-27",
    "category": "魚",
    "region": "中部",
    "sales": 125065,
    "name": "静岡店"
  },
  {
    "date": "2025-01-27",
    "category": "飲料",
    "region": "中部",
    "sales": 264226,
    "name": "静岡店"
  },
  {
    "date": "2025-01-27",
    "category": "野菜",
    "region": "東北",
    "sales": 217972,
    "name": "仙台店"
  },
  {
    "date": "2025-01-27",
    "category": "肉",
    "region": "東北",
    "sales": 142039,
    "name": "仙台店"
  },
  {
    "date": "2025-01-27",
    "category": "果物",
    "region": "東北",
    "sales": 163675,
    "name": "仙台店"
  },
  {
    "date": "2025-01-27",
    "category": "魚",
    "region": "東北",
    "sales": 237941,
    "name": "仙台店"
  },
  {
    "date": "2025-01-27",
    "category": "飲料",
    "region": "東北",
    "sales": 293057,
    "name": "仙台店"
  },
  {
    "date": "2025-01-27",
    "category": "野菜",
    "region": "東北",
    "sales": 128020,
    "name": "青森店"
  },
  {
    "date": "2025-01-27",
    "category": "肉",
    "region": "東北",
    "sales": 297113,
    "name": "青森店"
  },
  {
    "date": "2025-01-27",
    "category": "果物",
    "region": "東北",
    "sales": 302863,
    "name": "青森店"
  },
  {
    "date": "2025-01-27",
    "category": "魚",
    "region": "東北",
    "sales": 75416,
    "name": "青森店"
  },
  {
    "date": "2025-01-27",
    "category": "飲料",
    "region": "東北",
    "sales": 237663,
    "name": "青森店"
  },
  {
    "date": "2025-01-27",
    "category": "野菜",
    "region": "九州",
    "sales": 134058,
    "name": "福岡店"
  },
  {
    "date": "2025-01-27",
    "category": "肉",
    "region": "九州",
    "sales": 213785,
    "name": "福岡店"
  },
  {
    "date": "2025-01-27",
    "category": "果物",
    "region": "九州",
    "sales": 149342,
    "name": "福岡店"
  },
  {
    "date": "2025-01-27",
    "category": "魚",
    "region": "九州",
    "sales": 68427,
    "name": "福岡店"
  },
  {
    "date": "2025-01-27",
    "category": "飲料",
    "region": "九州",
    "sales": 242834,
    "name": "福岡店"
  },
  {
    "date": "2025-01-27",
    "category": "野菜",
    "region": "九州",
    "sales": 395360,
    "name": "熊本店"
  },
  {
    "date": "2025-01-27",
    "category": "肉",
    "region": "九州",
    "sales": 219938,
    "name": "熊本店"
  },
  {
    "date": "2025-01-27",
    "category": "果物",
    "region": "九州",
    "sales": 407045,
    "name": "熊本店"
  },
  {
    "date": "2025-01-27",
    "category": "魚",
    "region": "九州",
    "sales": 357315,
    "name": "熊本店"
  },
  {
    "date": "2025-01-27",
    "category": "飲料",
    "region": "九州",
    "sales": 282554,
    "name": "熊本店"
  },
  {
    "date": "2025-02-26",
    "category": "野菜",
    "region": "関東",
    "sales": 108792,
    "name": "東京店"
  },
  {
    "date": "2025-02-26",
    "category": "肉",
    "region": "関東",
    "sales": 231716,
    "name": "東京店"
  },
  {
    "date": "2025-02-26",
    "category": "果物",
    "region": "関東",
    "sales": 483118,
    "name": "東京店"
  },
  {
    "date": "2025-02-26",
    "category": "魚",
    "region": "関東",
    "sales": 191852,
    "name": "東京店"
  },
  {
    "date": "2025-02-26",
    "category": "飲料",
    "region": "関東",
    "sales": 447018,
    "name": "東京店"
  },
  {
    "date": "2025-02-26",
    "category": "野菜",
    "region": "関東",
    "sales": 385304,
    "name": "千葉店"
  },
  {
    "date": "2025-02-26",
    "category": "肉",
    "region": "関東",
    "sales": 420727,
    "name": "千葉店"
  },
  {
    "date": "2025-02-26",
    "category": "果物",
    "region": "関東",
    "sales": 264966,
    "name": "千葉店"
  },
  {
    "date": "2025-02-26",
    "category": "魚",
    "region": "関東",
    "sales": 292571,
    "name": "千葉店"
  },
  {
    "date": "2025-02-26",
    "category": "飲料",
    "region": "関東",
    "sales": 302563,
    "name": "千葉店"
  },
  {
    "date": "2025-02-26",
    "category": "野菜",
    "region": "関東",
    "sales": 367004,
    "name": "神奈川店"
  },
  {
    "date": "2025-02-26",
    "category": "肉",
    "region": "関東",
    "sales": 215473,
    "name": "神奈川店"
  },
  {
    "date": "2025-02-26",
    "category": "果物",
    "region": "関東",
    "sales": 369796,
    "name": "神奈川店"
  },
  {
    "date": "2025-02-26",
    "category": "魚",
    "region": "関東",
    "sales": 442012,
    "name": "神奈川店"
  },
  {
    "date": "2025-02-26",
    "category": "飲料",
    "region": "関東",
    "sales": 86875,
    "name": "神奈川店"
  },
  {
    "date": "2025-02-26",
    "category": "野菜",
    "region": "関西",
    "sales": 311501,
    "name": "大阪店"
  },
  {
    "date": "2025-02-26",
    "category": "肉",
    "region": "関西",
    "sales": 97566,
    "name": "大阪店"
  },
  {
    "date": "2025-02-26",
    "category": "果物",
    "region": "関西",
    "sales": 408805,
    "name": "大阪店"
  },
  {
    "date": "2025-02-26",
    "category": "魚",
    "region": "関西",
    "sales": 319278,
    "name": "大阪店"
  },
  {
    "date": "2025-02-26",
    "category": "飲料",
    "region": "関西",
    "sales": 229078,
    "name": "大阪店"
  },
  {
    "date": "2025-02-26",
    "category": "野菜",
    "region": "関西",
    "sales": 206247,
    "name": "京都店"
  },
  {
    "date": "2025-02-26",
    "category": "肉",
    "region": "関西",
    "sales": 83478,
    "name": "京都店"
  },
  {
    "date": "2025-02-26",
    "category": "果物",
    "region": "関西",
    "sales": 133773,
    "name": "京都店"
  },
  {
    "date": "2025-02-26",
    "category": "魚",
    "region": "関西",
    "sales": 292182,
    "name": "京都店"
  },
  {
    "date": "2025-02-26",
    "category": "飲料",
    "region": "関西",
    "sales": 385180,
    "name": "京都店"
  },
  {
    "date": "2025-02-26",
    "category": "野菜",
    "region": "関西",
    "sales": 133710,
    "name": "兵庫店"
  },
  {
    "date": "2025-02-26",
    "category": "肉",
    "region": "関西",
    "sales": 341863,
    "name": "兵庫店"
  },
  {
    "date": "2025-02-26",
    "category": "果物",
    "region": "関西",
    "sales": 311061,
    "name": "兵庫店"
  },
  {
    "date": "2025-02-26",
    "category": "魚",
    "region": "関西",
    "sales": 363991,
    "name": "兵庫店"
  },
  {
    "date": "2025-02-26",
    "category": "飲料",
    "region": "関西",
    "sales": 466789,
    "name": "兵庫店"
  },
  {
    "date": "2025-02-26",
    "category": "野菜",
    "region": "中部",
    "sales": 309311,
    "name": "名古屋店"
  },
  {
    "date": "2025-02-26",
    "category": "肉",
    "region": "中部",
    "sales": 164625,
    "name": "名古屋店"
  },
  {
    "date": "2025-02-26",
    "category": "果物",
    "region": "中部",
    "sales": 473931,
    "name": "名古屋店"
  },
  {
    "date": "2025-02-26",
    "category": "魚",
    "region": "中部",
    "sales": 215677,
    "name": "名古屋店"
  },
  {
    "date": "2025-02-26",
    "category": "飲料",
    "region": "中部",
    "sales": 55579,
    "name": "名古屋店"
  },
  {
    "date": "2025-02-26",
    "category": "野菜",
    "region": "中部",
    "sales": 459738,
    "name": "静岡店"
  },
  {
    "date": "2025-02-26",
    "category": "肉",
    "region": "中部",
    "sales": 278348,
    "name": "静岡店"
  },
  {
    "date": "2025-02-26",
    "category": "果物",
    "region": "中部",
    "sales": 150863,
    "name": "静岡店"
  },
  {
    "date": "2025-02-26",
    "category": "魚",
    "region": "中部",
    "sales": 488953,
    "name": "静岡店"
  },
  {
    "date": "2025-02-26",
    "category": "飲料",
    "region": "中部",
    "sales": 232511,
    "name": "静岡店"
  },
  {
    "date": "2025-02-26",
    "category": "野菜",
    "region": "東北",
    "sales": 434589,
    "name": "仙台店"
  },
  {
    "date": "2025-02-26",
    "category": "肉",
    "region": "東北",
    "sales": 112635,
    "name": "仙台店"
  },
  {
    "date": "2025-02-26",
    "category": "果物",
    "region": "東北",
    "sales": 470082,
    "name": "仙台店"
  },
  {
    "date": "2025-02-26",
    "category": "魚",
    "region": "東北",
    "sales": 141498,
    "name": "仙台店"
  },
  {
    "date": "2025-02-26",
    "category": "飲料",
    "region": "東北",
    "sales": 472986,
    "name": "仙台店"
  },
  {
    "date": "2025-02-26",
    "category": "野菜",
    "region": "東北",
    "sales": 419892,
    "name": "青森店"
  },
  {
    "date": "2025-02-26",
    "category": "肉",
    "region": "東北",
    "sales": 435478,
    "name": "青森店"
  },
  {
    "date": "2025-02-26",
    "category": "果物",
    "region": "東北",
    "sales": 488886,
    "name": "青森店"
  },
  {
    "date": "2025-02-26",
    "category": "魚",
    "region": "東北",
    "sales": 159613,
    "name": "青森店"
  },
  {
    "date": "2025-02-26",
    "category": "飲料",
    "region": "東北",
    "sales": 479858,
    "name": "青森店"
  },
  {
    "date": "2025-02-26",
    "category": "野菜",
    "region": "九州",
    "sales": 166888,
    "name": "福岡店"
  },
  {
    "date": "2025-02-26",
    "category": "肉",
    "region": "九州",
    "sales": 463961,
    "name": "福岡店"
  },
  {
    "date": "2025-02-26",
    "category": "果物",
    "region": "九州",
    "sales": 318811,
    "name": "福岡店"
  },
  {
    "date": "2025-02-26",
    "category": "魚",
    "region": "九州",
    "sales": 383397,
    "name": "福岡店"
  },
  {
    "date": "2025-02-26",
    "category": "飲料",
    "region": "九州",
    "sales": 121423,
    "name": "福岡店"
  },
  {
    "date": "2025-02-26",
    "category": "野菜",
    "region": "九州",
    "sales": 315710,
    "name": "熊本店"
  },
  {
    "date": "2025-02-26",
    "category": "肉",
    "region": "九州",
    "sales": 490360,
    "name": "熊本店"
  },
  {
    "date": "2025-02-26",
    "category": "果物",
    "region": "九州",
    "sales": 63768,
    "name": "熊本店"
  },
  {
    "date": "2025-02-26",
    "category": "魚",
    "region": "九州",
    "sales": 203626,
    "name": "熊本店"
  },
  {
    "date": "2025-02-26",
    "category": "飲料",
    "region": "九州",
    "sales": 324483,
    "name": "熊本店"
  },
  {
    "date": "2025-03-28",
    "category": "野菜",
    "region": "関東",
    "sales": 497749,
    "name": "東京店"
  },
  {
    "date": "2025-03-28",
    "category": "肉",
    "region": "関東",
    "sales": 460234,
    "name": "東京店"
  },
  {
    "date": "2025-03-28",
    "category": "果物",
    "region": "関東",
    "sales": 418358,
    "name": "東京店"
  },
  {
    "date": "2025-03-28",
    "category": "魚",
    "region": "関東",
    "sales": 361521,
    "name": "東京店"
  },
  {
    "date": "2025-03-28",
    "category": "飲料",
    "region": "関東",
    "sales": 92190,
    "name": "東京店"
  },
  {
    "date": "2025-03-28",
    "category": "野菜",
    "region": "関東",
    "sales": 71745,
    "name": "千葉店"
  },
  {
    "date": "2025-03-28",
    "category": "肉",
    "region": "関東",
    "sales": 315075,
    "name": "千葉店"
  },
  {
    "date": "2025-03-28",
    "category": "果物",
    "region": "関東",
    "sales": 331977,
    "name": "千葉店"
  },
  {
    "date": "2025-03-28",
    "category": "魚",
    "region": "関東",
    "sales": 180501,
    "name": "千葉店"
  },
  {
    "date": "2025-03-28",
    "category": "飲料",
    "region": "関東",
    "sales": 475586,
    "name": "千葉店"
  },
  {
    "date": "2025-03-28",
    "category": "野菜",
    "region": "関東",
    "sales": 269119,
    "name": "神奈川店"
  },
  {
    "date": "2025-03-28",
    "category": "肉",
    "region": "関東",
    "sales": 447655,
    "name": "神奈川店"
  },
  {
    "date": "2025-03-28",
    "category": "果物",
    "region": "関東",
    "sales": 479482,
    "name": "神奈川店"
  },
  {
    "date": "2025-03-28",
    "category": "魚",
    "region": "関東",
    "sales": 435013,
    "name": "神奈川店"
  },
  {
    "date": "2025-03-28",
    "category": "飲料",
    "region": "関東",
    "sales": 379503,
    "name": "神奈川店"
  },
  {
    "date": "2025-03-28",
    "category": "野菜",
    "region": "関西",
    "sales": 408307,
    "name": "大阪店"
  },
  {
    "date": "2025-03-28",
    "category": "肉",
    "region": "関西",
    "sales": 290524,
    "name": "大阪店"
  },
  {
    "date": "2025-03-28",
    "category": "果物",
    "region": "関西",
    "sales": 351852,
    "name": "大阪店"
  },
  {
    "date": "2025-03-28",
    "category": "魚",
    "region": "関西",
    "sales": 149256,
    "name": "大阪店"
  },
  {
    "date": "2025-03-28",
    "category": "飲料",
    "region": "関西",
    "sales": 315349,
    "name": "大阪店"
  },
  {
    "date": "2025-03-28",
    "category": "野菜",
    "region": "関西",
    "sales": 176667,
    "name": "京都店"
  },
  {
    "date": "2025-03-28",
    "category": "肉",
    "region": "関西",
    "sales": 72695,
    "name": "京都店"
  },
  {
    "date": "2025-03-28",
    "category": "果物",
    "region": "関西",
    "sales": 176875,
    "name": "京都店"
  },
  {
    "date": "2025-03-28",
    "category": "魚",
    "region": "関西",
    "sales": 97321,
    "name": "京都店"
  },
  {
    "date": "2025-03-28",
    "category": "飲料",
    "region": "関西",
    "sales": 75478,
    "name": "京都店"
  },
  {
    "date": "2025-03-28",
    "category": "野菜",
    "region": "関西",
    "sales": 348580,
    "name": "兵庫店"
  },
  {
    "date": "2025-03-28",
    "category": "肉",
    "region": "関西",
    "sales": 193983,
    "name": "兵庫店"
  },
  {
    "date": "2025-03-28",
    "category": "果物",
    "region": "関西",
    "sales": 294610,
    "name": "兵庫店"
  },
  {
    "date": "2025-03-28",
    "category": "魚",
    "region": "関西",
    "sales": 351903,
    "name": "兵庫店"
  },
  {
    "date": "2025-03-28",
    "category": "飲料",
    "region": "関西",
    "sales": 373731,
    "name": "兵庫店"
  },
  {
    "date": "2025-03-28",
    "category": "野菜",
    "region": "中部",
    "sales": 223720,
    "name": "名古屋店"
  },
  {
    "date": "2025-03-28",
    "category": "肉",
    "region": "中部",
    "sales": 93763,
    "name": "名古屋店"
  },
  {
    "date": "2025-03-28",
    "category": "果物",
    "region": "中部",
    "sales": 89195,
    "name": "名古屋店"
  },
  {
    "date": "2025-03-28",
    "category": "魚",
    "region": "中部",
    "sales": 157350,
    "name": "名古屋店"
  },
  {
    "date": "2025-03-28",
    "category": "飲料",
    "region": "中部",
    "sales": 359143,
    "name": "名古屋店"
  },
  {
    "date": "2025-03-28",
    "category": "野菜",
    "region": "中部",
    "sales": 299825,
    "name": "静岡店"
  },
  {
    "date": "2025-03-28",
    "category": "肉",
    "region": "中部",
    "sales": 313906,
    "name": "静岡店"
  },
  {
    "date": "2025-03-28",
    "category": "果物",
    "region": "中部",
    "sales": 350734,
    "name": "静岡店"
  },
  {
    "date": "2025-03-28",
    "category": "魚",
    "region": "中部",
    "sales": 422396,
    "name": "静岡店"
  },
  {
    "date": "2025-03-28",
    "category": "飲料",
    "region": "中部",
    "sales": 83222,
    "name": "静岡店"
  },
  {
    "date": "2025-03-28",
    "category": "野菜",
    "region": "東北",
    "sales": 202411,
    "name": "仙台店"
  },
  {
    "date": "2025-03-28",
    "category": "肉",
    "region": "東北",
    "sales": 468882,
    "name": "仙台店"
  },
  {
    "date": "2025-03-28",
    "category": "果物",
    "region": "東北",
    "sales": 54854,
    "name": "仙台店"
  },
  {
    "date": "2025-03-28",
    "category": "魚",
    "region": "東北",
    "sales": 312014,
    "name": "仙台店"
  },
  {
    "date": "2025-03-28",
    "category": "飲料",
    "region": "東北",
    "sales": 445483,
    "name": "仙台店"
  },
  {
    "date": "2025-03-28",
    "category": "野菜",
    "region": "東北",
    "sales": 153845,
    "name": "青森店"
  },
  {
    "date": "2025-03-28",
    "category": "肉",
    "region": "東北",
    "sales": 134277,
    "name": "青森店"
  },
  {
    "date": "2025-03-28",
    "category": "果物",
    "region": "東北",
    "sales": 305422,
    "name": "青森店"
  },
  {
    "date": "2025-03-28",
    "category": "魚",
    "region": "東北",
    "sales": 124994,
    "name": "青森店"
  },
  {
    "date": "2025-03-28",
    "category": "飲料",
    "region": "東北",
    "sales": 491656,
    "name": "青森店"
  },
  {
    "date": "2025-03-28",
    "category": "野菜",
    "region": "九州",
    "sales": 110116,
    "name": "福岡店"
  },
  {
    "date": "2025-03-28",
    "category": "肉",
    "region": "九州",
    "sales": 236340,
    "name": "福岡店"
  },
  {
    "date": "2025-03-28",
    "category": "果物",
    "region": "九州",
    "sales": 127318,
    "name": "福岡店"
  },
  {
    "date": "2025-03-28",
    "category": "魚",
    "region": "九州",
    "sales": 164408,
    "name": "福岡店"
  },
  {
    "date": "2025-03-28",
    "category": "飲料",
    "region": "九州",
    "sales": 305811,
    "name": "福岡店"
  },
  {
    "date": "2025-03-28",
    "category": "野菜",
    "region": "九州",
    "sales": 391830,
    "name": "熊本店"
  },
  {
    "date": "2025-03-28",
    "category": "肉",
    "region": "九州",
    "sales": 310851,
    "name": "熊本店"
  },
  {
    "date": "2025-03-28",
    "category": "果物",
    "region": "九州",
    "sales": 72540,
    "name": "熊本店"
  },
  {
    "date": "2025-03-28",
    "category": "魚",
    "region": "九州",
    "sales": 367275,
    "name": "熊本店"
  },
  {
    "date": "2025-03-28",
    "category": "飲料",
    "region": "九州",
    "sales": 260017,
    "name": "熊本店"
  },
  {
    "date": "2025-04-27",
    "category": "野菜",
    "region": "関東",
    "sales": 423505,
    "name": "東京店"
  },
  {
    "date": "2025-04-27",
    "category": "肉",
    "region": "関東",
    "sales": 485142,
    "name": "東京店"
  },
  {
    "date": "2025-04-27",
    "category": "果物",
    "region": "関東",
    "sales": 499034,
    "name": "東京店"
  },
  {
    "date": "2025-04-27",
    "category": "魚",
    "region": "関東",
    "sales": 308063,
    "name": "東京店"
  },
  {
    "date": "2025-04-27",
    "category": "飲料",
    "region": "関東",
    "sales": 60655,
    "name": "東京店"
  },
  {
    "date": "2025-04-27",
    "category": "野菜",
    "region": "関東",
    "sales": 83344,
    "name": "千葉店"
  },
  {
    "date": "2025-04-27",
    "category": "肉",
    "region": "関東",
    "sales": 445929,
    "name": "千葉店"
  },
  {
    "date": "2025-04-27",
    "category": "果物",
    "region": "関東",
    "sales": 463099,
    "name": "千葉店"
  },
  {
    "date": "2025-04-27",
    "category": "魚",
    "region": "関東",
    "sales": 204788,
    "name": "千葉店"
  },
  {
    "date": "2025-04-27",
    "category": "飲料",
    "region": "関東",
    "sales": 366425,
    "name": "千葉店"
  },
  {
    "date": "2025-04-27",
    "category": "野菜",
    "region": "関東",
    "sales": 395402,
    "name": "神奈川店"
  },
  {
    "date": "2025-04-27",
    "category": "肉",
    "region": "関東",
    "sales": 127457,
    "name": "神奈川店"
  },
  {
    "date": "2025-04-27",
    "category": "果物",
    "region": "関東",
    "sales": 217589,
    "name": "神奈川店"
  },
  {
    "date": "2025-04-27",
    "category": "魚",
    "region": "関東",
    "sales": 102869,
    "name": "神奈川店"
  },
  {
    "date": "2025-04-27",
    "category": "飲料",
    "region": "関東",
    "sales": 55091,
    "name": "神奈川店"
  },
  {
    "date": "2025-04-27",
    "category": "野菜",
    "region": "関西",
    "sales": 94606,
    "name": "大阪店"
  },
  {
    "date": "2025-04-27",
    "category": "肉",
    "region": "関西",
    "sales": 161197,
    "name": "大阪店"
  },
  {
    "date": "2025-04-27",
    "category": "果物",
    "region": "関西",
    "sales": 173255,
    "name": "大阪店"
  },
  {
    "date": "2025-04-27",
    "category": "魚",
    "region": "関西",
    "sales": 465301,
    "name": "大阪店"
  },
  {
    "date": "2025-04-27",
    "category": "飲料",
    "region": "関西",
    "sales": 405591,
    "name": "大阪店"
  },
  {
    "date": "2025-04-27",
    "category": "野菜",
    "region": "関西",
    "sales": 288156,
    "name": "京都店"
  },
  {
    "date": "2025-04-27",
    "category": "肉",
    "region": "関西",
    "sales": 128789,
    "name": "京都店"
  },
  {
    "date": "2025-04-27",
    "category": "果物",
    "region": "関西",
    "sales": 198155,
    "name": "京都店"
  },
  {
    "date": "2025-04-27",
    "category": "魚",
    "region": "関西",
    "sales": 429447,
    "name": "京都店"
  },
  {
    "date": "2025-04-27",
    "category": "飲料",
    "region": "関西",
    "sales": 120599,
    "name": "京都店"
  },
  {
    "date": "2025-04-27",
    "category": "野菜",
    "region": "関西",
    "sales": 425477,
    "name": "兵庫店"
  },
  {
    "date": "2025-04-27",
    "category": "肉",
    "region": "関西",
    "sales": 198162,
    "name": "兵庫店"
  },
  {
    "date": "2025-04-27",
    "category": "果物",
    "region": "関西",
    "sales": 470192,
    "name": "兵庫店"
  },
  {
    "date": "2025-04-27",
    "category": "魚",
    "region": "関西",
    "sales": 200560,
    "name": "兵庫店"
  },
  {
    "date": "2025-04-27",
    "category": "飲料",
    "region": "関西",
    "sales": 440160,
    "name": "兵庫店"
  },
  {
    "date": "2025-04-27",
    "category": "野菜",
    "region": "中部",
    "sales": 339446,
    "name": "名古屋店"
  },
  {
    "date": "2025-04-27",
    "category": "肉",
    "region": "中部",
    "sales": 455706,
    "name": "名古屋店"
  },
  {
    "date": "2025-04-27",
    "category": "果物",
    "region": "中部",
    "sales": 218996,
    "name": "名古屋店"
  },
  {
    "date": "2025-04-27",
    "category": "魚",
    "region": "中部",
    "sales": 202950,
    "name": "名古屋店"
  },
  {
    "date": "2025-04-27",
    "category": "飲料",
    "region": "中部",
    "sales": 225723,
    "name": "名古屋店"
  },
  {
    "date": "2025-04-27",
    "category": "野菜",
    "region": "中部",
    "sales": 159850,
    "name": "静岡店"
  },
  {
    "date": "2025-04-27",
    "category": "肉",
    "region": "中部",
    "sales": 265603,
    "name": "静岡店"
  },
  {
    "date": "2025-04-27",
    "category": "果物",
    "region": "中部",
    "sales": 399262,
    "name": "静岡店"
  },
  {
    "date": "2025-04-27",
    "category": "魚",
    "region": "中部",
    "sales": 147812,
    "name": "静岡店"
  },
  {
    "date": "2025-04-27",
    "category": "飲料",
    "region": "中部",
    "sales": 88225,
    "name": "静岡店"
  },
  {
    "date": "2025-04-27",
    "category": "野菜",
    "region": "東北",
    "sales": 275080,
    "name": "仙台店"
  },
  {
    "date": "2025-04-27",
    "category": "肉",
    "region": "東北",
    "sales": 305541,
    "name": "仙台店"
  },
  {
    "date": "2025-04-27",
    "category": "果物",
    "region": "東北",
    "sales": 104664,
    "name": "仙台店"
  },
  {
    "date": "2025-04-27",
    "category": "魚",
    "region": "東北",
    "sales": 193784,
    "name": "仙台店"
  },
  {
    "date": "2025-04-27",
    "category": "飲料",
    "region": "東北",
    "sales": 317532,
    "name": "仙台店"
  },
  {
    "date": "2025-04-27",
    "category": "野菜",
    "region": "東北",
    "sales": 386449,
    "name": "青森店"
  },
  {
    "date": "2025-04-27",
    "category": "肉",
    "region": "東北",
    "sales": 235586,
    "name": "青森店"
  },
  {
    "date": "2025-04-27",
    "category": "果物",
    "region": "東北",
    "sales": 373194,
    "name": "青森店"
  },
  {
    "date": "2025-04-27",
    "category": "魚",
    "region": "東北",
    "sales": 89640,
    "name": "青森店"
  },
  {
    "date": "2025-04-27",
    "category": "飲料",
    "region": "東北",
    "sales": 182192,
    "name": "青森店"
  },
  {
    "date": "2025-04-27",
    "category": "野菜",
    "region": "九州",
    "sales": 156722,
    "name": "福岡店"
  },
  {
    "date": "2025-04-27",
    "category": "肉",
    "region": "九州",
    "sales": 151177,
    "name": "福岡店"
  },
  {
    "date": "2025-04-27",
    "category": "果物",
    "region": "九州",
    "sales": 456391,
    "name": "福岡店"
  },
  {
    "date": "2025-04-27",
    "category": "魚",
    "region": "九州",
    "sales": 418889,
    "name": "福岡店"
  },
  {
    "date": "2025-04-27",
    "category": "飲料",
    "region": "九州",
    "sales": 448600,
    "name": "福岡店"
  },
  {
    "date": "2025-04-27",
    "category": "野菜",
    "region": "九州",
    "sales": 320946,
    "name": "熊本店"
  },
  {
    "date": "2025-04-27",
    "category": "肉",
    "region": "九州",
    "sales": 239244,
    "name": "熊本店"
  },
  {
    "date": "2025-04-27",
    "category": "果物",
    "region": "九州",
    "sales": 304845,
    "name": "熊本店"
  },
  {
    "date": "2025-04-27",
    "category": "魚",
    "region": "九州",
    "sales": 335189,
    "name": "熊本店"
  },
  {
    "date": "2025-04-27",
    "category": "飲料",
    "region": "九州",
    "sales": 315199,
    "name": "熊本店"
  },
  {
    "date": "2025-05-27",
    "category": "野菜",
    "region": "関東",
    "sales": 447393,
    "name": "東京店"
  },
  {
    "date": "2025-05-27",
    "category": "肉",
    "region": "関東",
    "sales": 221701,
    "name": "東京店"
  },
  {
    "date": "2025-05-27",
    "category": "果物",
    "region": "関東",
    "sales": 264047,
    "name": "東京店"
  },
  {
    "date": "2025-05-27",
    "category": "魚",
    "region": "関東",
    "sales": 306751,
    "name": "東京店"
  },
  {
    "date": "2025-05-27",
    "category": "飲料",
    "region": "関東",
    "sales": 476228,
    "name": "東京店"
  },
  {
    "date": "2025-05-27",
    "category": "野菜",
    "region": "関東",
    "sales": 197989,
    "name": "千葉店"
  },
  {
    "date": "2025-05-27",
    "category": "肉",
    "region": "関東",
    "sales": 391721,
    "name": "千葉店"
  },
  {
    "date": "2025-05-27",
    "category": "果物",
    "region": "関東",
    "sales": 174655,
    "name": "千葉店"
  },
  {
    "date": "2025-05-27",
    "category": "魚",
    "region": "関東",
    "sales": 450166,
    "name": "千葉店"
  },
  {
    "date": "2025-05-27",
    "category": "飲料",
    "region": "関東",
    "sales": 293883,
    "name": "千葉店"
  },
  {
    "date": "2025-05-27",
    "category": "野菜",
    "region": "関東",
    "sales": 210803,
    "name": "神奈川店"
  },
  {
    "date": "2025-05-27",
    "category": "肉",
    "region": "関東",
    "sales": 187281,
    "name": "神奈川店"
  },
  {
    "date": "2025-05-27",
    "category": "果物",
    "region": "関東",
    "sales": 164524,
    "name": "神奈川店"
  },
  {
    "date": "2025-05-27",
    "category": "魚",
    "region": "関東",
    "sales": 150658,
    "name": "神奈川店"
  },
  {
    "date": "2025-05-27",
    "category": "飲料",
    "region": "関東",
    "sales": 449328,
    "name": "神奈川店"
  },
  {
    "date": "2025-05-27",
    "category": "野菜",
    "region": "関西",
    "sales": 206167,
    "name": "大阪店"
  },
  {
    "date": "2025-05-27",
    "category": "肉",
    "region": "関西",
    "sales": 73198,
    "name": "大阪店"
  },
  {
    "date": "2025-05-27",
    "category": "果物",
    "region": "関西",
    "sales": 426777,
    "name": "大阪店"
  },
  {
    "date": "2025-05-27",
    "category": "魚",
    "region": "関西",
    "sales": 436688,
    "name": "大阪店"
  },
  {
    "date": "2025-05-27",
    "category": "飲料",
    "region": "関西",
    "sales": 298485,
    "name": "大阪店"
  },
  {
    "date": "2025-05-27",
    "category": "野菜",
    "region": "関西",
    "sales": 273913,
    "name": "京都店"
  },
  {
    "date": "2025-05-27",
    "category": "肉",
    "region": "関西",
    "sales": 103630,
    "name": "京都店"
  },
  {
    "date": "2025-05-27",
    "category": "果物",
    "region": "関西",
    "sales": 159745,
    "name": "京都店"
  },
  {
    "date": "2025-05-27",
    "category": "魚",
    "region": "関西",
    "sales": 93729,
    "name": "京都店"
  },
  {
    "date": "2025-05-27",
    "category": "飲料",
    "region": "関西",
    "sales": 446598,
    "name": "京都店"
  },
  {
    "date": "2025-05-27",
    "category": "野菜",
    "region": "関西",
    "sales": 220242,
    "name": "兵庫店"
  },
  {
    "date": "2025-05-27",
    "category": "肉",
    "region": "関西",
    "sales": 391154,
    "name": "兵庫店"
  },
  {
    "date": "2025-05-27",
    "category": "果物",
    "region": "関西",
    "sales": 305357,
    "name": "兵庫店"
  },
  {
    "date": "2025-05-27",
    "category": "魚",
    "region": "関西",
    "sales": 358822,
    "name": "兵庫店"
  },
  {
    "date": "2025-05-27",
    "category": "飲料",
    "region": "関西",
    "sales": 413667,
    "name": "兵庫店"
  },
  {
    "date": "2025-05-27",
    "category": "野菜",
    "region": "中部",
    "sales": 232649,
    "name": "名古屋店"
  },
  {
    "date": "2025-05-27",
    "category": "肉",
    "region": "中部",
    "sales": 287578,
    "name": "名古屋店"
  },
  {
    "date": "2025-05-27",
    "category": "果物",
    "region": "中部",
    "sales": 88212,
    "name": "名古屋店"
  },
  {
    "date": "2025-05-27",
    "category": "魚",
    "region": "中部",
    "sales": 295339,
    "name": "名古屋店"
  },
  {
    "date": "2025-05-27",
    "category": "飲料",
    "region": "中部",
    "sales": 499480,
    "name": "名古屋店"
  },
  {
    "date": "2025-05-27",
    "category": "野菜",
    "region": "中部",
    "sales": 165794,
    "name": "静岡店"
  },
  {
    "date": "2025-05-27",
    "category": "肉",
    "region": "中部",
    "sales": 107111,
    "name": "静岡店"
  },
  {
    "date": "2025-05-27",
    "category": "果物",
    "region": "中部",
    "sales": 393134,
    "name": "静岡店"
  },
  {
    "date": "2025-05-27",
    "category": "魚",
    "region": "中部",
    "sales": 91795,
    "name": "静岡店"
  },
  {
    "date": "2025-05-27",
    "category": "飲料",
    "region": "中部",
    "sales": 89558,
    "name": "静岡店"
  },
  {
    "date": "2025-05-27",
    "category": "野菜",
    "region": "東北",
    "sales": 307280,
    "name": "仙台店"
  },
  {
    "date": "2025-05-27",
    "category": "肉",
    "region": "東北",
    "sales": 245330,
    "name": "仙台店"
  },
  {
    "date": "2025-05-27",
    "category": "果物",
    "region": "東北",
    "sales": 483251,
    "name": "仙台店"
  },
  {
    "date": "2025-05-27",
    "category": "魚",
    "region": "東北",
    "sales": 99976,
    "name": "仙台店"
  },
  {
    "date": "2025-05-27",
    "category": "飲料",
    "region": "東北",
    "sales": 321065,
    "name": "仙台店"
  },
  {
    "date": "2025-05-27",
    "category": "野菜",
    "region": "東北",
    "sales": 364732,
    "name": "青森店"
  },
  {
    "date": "2025-05-27",
    "category": "肉",
    "region": "東北",
    "sales": 393508,
    "name": "青森店"
  },
  {
    "date": "2025-05-27",
    "category": "果物",
    "region": "東北",
    "sales": 244431,
    "name": "青森店"
  },
  {
    "date": "2025-05-27",
    "category": "魚",
    "region": "東北",
    "sales": 360738,
    "name": "青森店"
  },
  {
    "date": "2025-05-27",
    "category": "飲料",
    "region": "東北",
    "sales": 377458,
    "name": "青森店"
  },
  {
    "date": "2025-05-27",
    "category": "野菜",
    "region": "九州",
    "sales": 414355,
    "name": "福岡店"
  },
  {
    "date": "2025-05-27",
    "category": "肉",
    "region": "九州",
    "sales": 62648,
    "name": "福岡店"
  },
  {
    "date": "2025-05-27",
    "category": "果物",
    "region": "九州",
    "sales": 453613,
    "name": "福岡店"
  },
  {
    "date": "2025-05-27",
    "category": "魚",
    "region": "九州",
    "sales": 488721,
    "name": "福岡店"
  },
  {
    "date": "2025-05-27",
    "category": "飲料",
    "region": "九州",
    "sales": 116299,
    "name": "福岡店"
  },
  {
    "date": "2025-05-27",
    "category": "野菜",
    "region": "九州",
    "sales": 109904,
    "name": "熊本店"
  },
  {
    "date": "2025-05-27",
    "category": "肉",
    "region": "九州",
    "sales": 114633,
    "name": "熊本店"
  },
  {
    "date": "2025-05-27",
    "category": "果物",
    "region": "九州",
    "sales": 57974,
    "name": "熊本店"
  },
  {
    "date": "2025-05-27",
    "category": "魚",
    "region": "九州",
    "sales": 335342,
    "name": "熊本店"
  },
  {
    "date": "2025-05-27",
    "category": "飲料",
    "region": "九州",
    "sales": 213858,
    "name": "熊本店"
  },
  {
    "date": "2025-06-26",
    "category": "野菜",
    "region": "関東",
    "sales": 188872,
    "name": "東京店"
  },
  {
    "date": "2025-06-26",
    "category": "肉",
    "region": "関東",
    "sales": 487442,
    "name": "東京店"
  },
  {
    "date": "2025-06-26",
    "category": "果物",
    "region": "関東",
    "sales": 448482,
    "name": "東京店"
  },
  {
    "date": "2025-06-26",
    "category": "魚",
    "region": "関東",
    "sales": 363274,
    "name": "東京店"
  },
  {
    "date": "2025-06-26",
    "category": "飲料",
    "region": "関東",
    "sales": 454659,
    "name": "東京店"
  },
  {
    "date": "2025-06-26",
    "category": "野菜",
    "region": "関東",
    "sales": 110717,
    "name": "千葉店"
  },
  {
    "date": "2025-06-26",
    "category": "肉",
    "region": "関東",
    "sales": 53698,
    "name": "千葉店"
  },
  {
    "date": "2025-06-26",
    "category": "果物",
    "region": "関東",
    "sales": 471237,
    "name": "千葉店"
  },
  {
    "date": "2025-06-26",
    "category": "魚",
    "region": "関東",
    "sales": 124902,
    "name": "千葉店"
  },
  {
    "date": "2025-06-26",
    "category": "飲料",
    "region": "関東",
    "sales": 365659,
    "name": "千葉店"
  },
  {
    "date": "2025-06-26",
    "category": "野菜",
    "region": "関東",
    "sales": 389404,
    "name": "神奈川店"
  },
  {
    "date": "2025-06-26",
    "category": "肉",
    "region": "関東",
    "sales": 431295,
    "name": "神奈川店"
  },
  {
    "date": "2025-06-26",
    "category": "果物",
    "region": "関東",
    "sales": 110826,
    "name": "神奈川店"
  },
  {
    "date": "2025-06-26",
    "category": "魚",
    "region": "関東",
    "sales": 297173,
    "name": "神奈川店"
  },
  {
    "date": "2025-06-26",
    "category": "飲料",
    "region": "関東",
    "sales": 466946,
    "name": "神奈川店"
  },
  {
    "date": "2025-06-26",
    "category": "野菜",
    "region": "関西",
    "sales": 258519,
    "name": "大阪店"
  },
  {
    "date": "2025-06-26",
    "category": "肉",
    "region": "関西",
    "sales": 425384,
    "name": "大阪店"
  },
  {
    "date": "2025-06-26",
    "category": "果物",
    "region": "関西",
    "sales": 83329,
    "name": "大阪店"
  },
  {
    "date": "2025-06-26",
    "category": "魚",
    "region": "関西",
    "sales": 296973,
    "name": "大阪店"
  },
  {
    "date": "2025-06-26",
    "category": "飲料",
    "region": "関西",
    "sales": 366837,
    "name": "大阪店"
  },
  {
    "date": "2025-06-26",
    "category": "野菜",
    "region": "関西",
    "sales": 91546,
    "name": "京都店"
  },
  {
    "date": "2025-06-26",
    "category": "肉",
    "region": "関西",
    "sales": 260637,
    "name": "京都店"
  },
  {
    "date": "2025-06-26",
    "category": "果物",
    "region": "関西",
    "sales": 169267,
    "name": "京都店"
  },
  {
    "date": "2025-06-26",
    "category": "魚",
    "region": "関西",
    "sales": 339021,
    "name": "京都店"
  },
  {
    "date": "2025-06-26",
    "category": "飲料",
    "region": "関西",
    "sales": 179072,
    "name": "京都店"
  },
  {
    "date": "2025-06-26",
    "category": "野菜",
    "region": "関西",
    "sales": 403207,
    "name": "兵庫店"
  },
  {
    "date": "2025-06-26",
    "category": "肉",
    "region": "関西",
    "sales": 494229,
    "name": "兵庫店"
  },
  {
    "date": "2025-06-26",
    "category": "果物",
    "region": "関西",
    "sales": 63119,
    "name": "兵庫店"
  },
  {
    "date": "2025-06-26",
    "category": "魚",
    "region": "関西",
    "sales": 280963,
    "name": "兵庫店"
  },
  {
    "date": "2025-06-26",
    "category": "飲料",
    "region": "関西",
    "sales": 281819,
    "name": "兵庫店"
  },
  {
    "date": "2025-06-26",
    "category": "野菜",
    "region": "中部",
    "sales": 214949,
    "name": "名古屋店"
  },
  {
    "date": "2025-06-26",
    "category": "肉",
    "region": "中部",
    "sales": 93500,
    "name": "名古屋店"
  },
  {
    "date": "2025-06-26",
    "category": "果物",
    "region": "中部",
    "sales": 385141,
    "name": "名古屋店"
  },
  {
    "date": "2025-06-26",
    "category": "魚",
    "region": "中部",
    "sales": 91424,
    "name": "名古屋店"
  },
  {
    "date": "2025-06-26",
    "category": "飲料",
    "region": "中部",
    "sales": 278011,
    "name": "名古屋店"
  },
  {
    "date": "2025-06-26",
    "category": "野菜",
    "region": "中部",
    "sales": 456965,
    "name": "静岡店"
  },
  {
    "date": "2025-06-26",
    "category": "肉",
    "region": "中部",
    "sales": 206955,
    "name": "静岡店"
  },
  {
    "date": "2025-06-26",
    "category": "果物",
    "region": "中部",
    "sales": 338213,
    "name": "静岡店"
  },
  {
    "date": "2025-06-26",
    "category": "魚",
    "region": "中部",
    "sales": 418608,
    "name": "静岡店"
  },
  {
    "date": "2025-06-26",
    "category": "飲料",
    "region": "中部",
    "sales": 401574,
    "name": "静岡店"
  },
  {
    "date": "2025-06-26",
    "category": "野菜",
    "region": "東北",
    "sales": 494013,
    "name": "仙台店"
  },
  {
    "date": "2025-06-26",
    "category": "肉",
    "region": "東北",
    "sales": 298650,
    "name": "仙台店"
  },
  {
    "date": "2025-06-26",
    "category": "果物",
    "region": "東北",
    "sales": 461139,
    "name": "仙台店"
  },
  {
    "date": "2025-06-26",
    "category": "魚",
    "region": "東北",
    "sales": 418106,
    "name": "仙台店"
  },
  {
    "date": "2025-06-26",
    "category": "飲料",
    "region": "東北",
    "sales": 326017,
    "name": "仙台店"
  },
  {
    "date": "2025-06-26",
    "category": "野菜",
    "region": "東北",
    "sales": 417124,
    "name": "青森店"
  },
  {
    "date": "2025-06-26",
    "category": "肉",
    "region": "東北",
    "sales": 259508,
    "name": "青森店"
  },
  {
    "date": "2025-06-26",
    "category": "果物",
    "region": "東北",
    "sales": 467145,
    "name": "青森店"
  },
  {
    "date": "2025-06-26",
    "category": "魚",
    "region": "東北",
    "sales": 407955,
    "name": "青森店"
  },
  {
    "date": "2025-06-26",
    "category": "飲料",
    "region": "東北",
    "sales": 148020,
    "name": "青森店"
  },
  {
    "date": "2025-06-26",
    "category": "野菜",
    "region": "九州",
    "sales": 497042,
    "name": "福岡店"
  },
  {
    "date": "2025-06-26",
    "category": "肉",
    "region": "九州",
    "sales": 379502,
    "name": "福岡店"
  },
  {
    "date": "2025-06-26",
    "category": "果物",
    "region": "九州",
    "sales": 209838,
    "name": "福岡店"
  },
  {
    "date": "2025-06-26",
    "category": "魚",
    "region": "九州",
    "sales": 151202,
    "name": "福岡店"
  },
  {
    "date": "2025-06-26",
    "category": "飲料",
    "region": "九州",
    "sales": 499120,
    "name": "福岡店"
  },
  {
    "date": "2025-06-26",
    "category": "野菜",
    "region": "九州",
    "sales": 309651,
    "name": "熊本店"
  },
  {
    "date": "2025-06-26",
    "category": "肉",
    "region": "九州",
    "sales": 186777,
    "name": "熊本店"
  },
  {
    "date": "2025-06-26",
    "category": "果物",
    "region": "九州",
    "sales": 344001,
    "name": "熊本店"
  },
  {
    "date": "2025-06-26",
    "category": "魚",
    "region": "九州",
    "sales": 353789,
    "name": "熊本店"
  },
  {
    "date": "2025-06-26",
    "category": "飲料",
    "region": "九州",
    "sales": 228796,
    "name": "熊本店"
  },
  {
    "date": "2025-07-26",
    "category": "野菜",
    "region": "関東",
    "sales": 466275,
    "name": "東京店"
  },
  {
    "date": "2025-07-26",
    "category": "肉",
    "region": "関東",
    "sales": 75995,
    "name": "東京店"
  },
  {
    "date": "2025-07-26",
    "category": "果物",
    "region": "関東",
    "sales": 58165,
    "name": "東京店"
  },
  {
    "date": "2025-07-26",
    "category": "魚",
    "region": "関東",
    "sales": 156335,
    "name": "東京店"
  },
  {
    "date": "2025-07-26",
    "category": "飲料",
    "region": "関東",
    "sales": 153969,
    "name": "東京店"
  },
  {
    "date": "2025-07-26",
    "category": "野菜",
    "region": "関東",
    "sales": 242146,
    "name": "千葉店"
  },
  {
    "date": "2025-07-26",
    "category": "肉",
    "region": "関東",
    "sales": 103157,
    "name": "千葉店"
  },
  {
    "date": "2025-07-26",
    "category": "果物",
    "region": "関東",
    "sales": 234825,
    "name": "千葉店"
  },
  {
    "date": "2025-07-26",
    "category": "魚",
    "region": "関東",
    "sales": 266051,
    "name": "千葉店"
  },
  {
    "date": "2025-07-26",
    "category": "飲料",
    "region": "関東",
    "sales": 326011,
    "name": "千葉店"
  },
  {
    "date": "2025-07-26",
    "category": "野菜",
    "region": "関東",
    "sales": 337270,
    "name": "神奈川店"
  },
  {
    "date": "2025-07-26",
    "category": "肉",
    "region": "関東",
    "sales": 50623,
    "name": "神奈川店"
  },
  {
    "date": "2025-07-26",
    "category": "果物",
    "region": "関東",
    "sales": 314842,
    "name": "神奈川店"
  },
  {
    "date": "2025-07-26",
    "category": "魚",
    "region": "関東",
    "sales": 254496,
    "name": "神奈川店"
  },
  {
    "date": "2025-07-26",
    "category": "飲料",
    "region": "関東",
    "sales": 100464,
    "name": "神奈川店"
  },
  {
    "date": "2025-07-26",
    "category": "野菜",
    "region": "関西",
    "sales": 50537,
    "name": "大阪店"
  },
  {
    "date": "2025-07-26",
    "category": "肉",
    "region": "関西",
    "sales": 363636,
    "name": "大阪店"
  },
  {
    "date": "2025-07-26",
    "category": "果物",
    "region": "関西",
    "sales": 82987,
    "name": "大阪店"
  },
  {
    "date": "2025-07-26",
    "category": "魚",
    "region": "関西",
    "sales": 339595,
    "name": "大阪店"
  },
  {
    "date": "2025-07-26",
    "category": "飲料",
    "region": "関西",
    "sales": 374564,
    "name": "大阪店"
  },
  {
    "date": "2025-07-26",
    "category": "野菜",
    "region": "関西",
    "sales": 51033,
    "name": "京都店"
  },
  {
    "date": "2025-07-26",
    "category": "肉",
    "region": "関西",
    "sales": 242256,
    "name": "京都店"
  },
  {
    "date": "2025-07-26",
    "category": "果物",
    "region": "関西",
    "sales": 307949,
    "name": "京都店"
  },
  {
    "date": "2025-07-26",
    "category": "魚",
    "region": "関西",
    "sales": 346598,
    "name": "京都店"
  },
  {
    "date": "2025-07-26",
    "category": "飲料",
    "region": "関西",
    "sales": 472427,
    "name": "京都店"
  },
  {
    "date": "2025-07-26",
    "category": "野菜",
    "region": "関西",
    "sales": 287660,
    "name": "兵庫店"
  },
  {
    "date": "2025-07-26",
    "category": "肉",
    "region": "関西",
    "sales": 495978,
    "name": "兵庫店"
  },
  {
    "date": "2025-07-26",
    "category": "果物",
    "region": "関西",
    "sales": 273606,
    "name": "兵庫店"
  },
  {
    "date": "2025-07-26",
    "category": "魚",
    "region": "関西",
    "sales": 85214,
    "name": "兵庫店"
  },
  {
    "date": "2025-07-26",
    "category": "飲料",
    "region": "関西",
    "sales": 85794,
    "name": "兵庫店"
  },
  {
    "date": "2025-07-26",
    "category": "野菜",
    "region": "中部",
    "sales": 428317,
    "name": "名古屋店"
  },
  {
    "date": "2025-07-26",
    "category": "肉",
    "region": "中部",
    "sales": 110936,
    "name": "名古屋店"
  },
  {
    "date": "2025-07-26",
    "category": "果物",
    "region": "中部",
    "sales": 95603,
    "name": "名古屋店"
  },
  {
    "date": "2025-07-26",
    "category": "魚",
    "region": "中部",
    "sales": 90124,
    "name": "名古屋店"
  },
  {
    "date": "2025-07-26",
    "category": "飲料",
    "region": "中部",
    "sales": 56478,
    "name": "名古屋店"
  },
  {
    "date": "2025-07-26",
    "category": "野菜",
    "region": "中部",
    "sales": 62700,
    "name": "静岡店"
  },
  {
    "date": "2025-07-26",
    "category": "肉",
    "region": "中部",
    "sales": 245096,
    "name": "静岡店"
  },
  {
    "date": "2025-07-26",
    "category": "果物",
    "region": "中部",
    "sales": 209419,
    "name": "静岡店"
  },
  {
    "date": "2025-07-26",
    "category": "魚",
    "region": "中部",
    "sales": 157901,
    "name": "静岡店"
  },
  {
    "date": "2025-07-26",
    "category": "飲料",
    "region": "中部",
    "sales": 266566,
    "name": "静岡店"
  },
  {
    "date": "2025-07-26",
    "category": "野菜",
    "region": "東北",
    "sales": 370128,
    "name": "仙台店"
  },
  {
    "date": "2025-07-26",
    "category": "肉",
    "region": "東北",
    "sales": 301637,
    "name": "仙台店"
  },
  {
    "date": "2025-07-26",
    "category": "果物",
    "region": "東北",
    "sales": 261459,
    "name": "仙台店"
  },
  {
    "date": "2025-07-26",
    "category": "魚",
    "region": "東北",
    "sales": 286718,
    "name": "仙台店"
  },
  {
    "date": "2025-07-26",
    "category": "飲料",
    "region": "東北",
    "sales": 166540,
    "name": "仙台店"
  },
  {
    "date": "2025-07-26",
    "category": "野菜",
    "region": "東北",
    "sales": 414943,
    "name": "青森店"
  },
  {
    "date": "2025-07-26",
    "category": "肉",
    "region": "東北",
    "sales": 76330,
    "name": "青森店"
  },
  {
    "date": "2025-07-26",
    "category": "果物",
    "region": "東北",
    "sales": 299780,
    "name": "青森店"
  },
  {
    "date": "2025-07-26",
    "category": "魚",
    "region": "東北",
    "sales": 152478,
    "name": "青森店"
  },
  {
    "date": "2025-07-26",
    "category": "飲料",
    "region": "東北",
    "sales": 181384,
    "name": "青森店"
  },
  {
    "date": "2025-07-26",
    "category": "野菜",
    "region": "九州",
    "sales": 162487,
    "name": "福岡店"
  },
  {
    "date": "2025-07-26",
    "category": "肉",
    "region": "九州",
    "sales": 465377,
    "name": "福岡店"
  },
  {
    "date": "2025-07-26",
    "category": "果物",
    "region": "九州",
    "sales": 101002,
    "name": "福岡店"
  },
  {
    "date": "2025-07-26",
    "category": "魚",
    "region": "九州",
    "sales": 69873,
    "name": "福岡店"
  },
  {
    "date": "2025-07-26",
    "category": "飲料",
    "region": "九州",
    "sales": 61450,
    "name": "福岡店"
  },
  {
    "date": "2025-07-26",
    "category": "野菜",
    "region": "九州",
    "sales": 358563,
    "name": "熊本店"
  },
  {
    "date": "2025-07-26",
    "category": "肉",
    "region": "九州",
    "sales": 263012,
    "name": "熊本店"
  },
  {
    "date": "2025-07-26",
    "category": "果物",
    "region": "九州",
    "sales": 415616,
    "name": "熊本店"
  },
  {
    "date": "2025-07-26",
    "category": "魚",
    "region": "九州",
    "sales": 59995,
    "name": "熊本店"
  },
  {
    "date": "2025-07-26",
    "category": "飲料",
    "region": "九州",
    "sales": 141470,
    "name": "熊本店"
  },
  {
    "date": "2025-08-25",
    "category": "野菜",
    "region": "関東",
    "sales": 194031,
    "name": "東京店"
  },
  {
    "date": "2025-08-25",
    "category": "肉",
    "region": "関東",
    "sales": 175566,
    "name": "東京店"
  },
  {
    "date": "2025-08-25",
    "category": "果物",
    "region": "関東",
    "sales": 125161,
    "name": "東京店"
  },
  {
    "date": "2025-08-25",
    "category": "魚",
    "region": "関東",
    "sales": 75636,
    "name": "東京店"
  },
  {
    "date": "2025-08-25",
    "category": "飲料",
    "region": "関東",
    "sales": 173351,
    "name": "東京店"
  },
  {
    "date": "2025-08-25",
    "category": "野菜",
    "region": "関東",
    "sales": 375239,
    "name": "千葉店"
  },
  {
    "date": "2025-08-25",
    "category": "肉",
    "region": "関東",
    "sales": 474078,
    "name": "千葉店"
  },
  {
    "date": "2025-08-25",
    "category": "果物",
    "region": "関東",
    "sales": 65653,
    "name": "千葉店"
  },
  {
    "date": "2025-08-25",
    "category": "魚",
    "region": "関東",
    "sales": 389932,
    "name": "千葉店"
  },
  {
    "date": "2025-08-25",
    "category": "飲料",
    "region": "関東",
    "sales": 379849,
    "name": "千葉店"
  },
  {
    "date": "2025-08-25",
    "category": "野菜",
    "region": "関東",
    "sales": 241022,
    "name": "神奈川店"
  },
  {
    "date": "2025-08-25",
    "category": "肉",
    "region": "関東",
    "sales": 232823,
    "name": "神奈川店"
  },
  {
    "date": "2025-08-25",
    "category": "果物",
    "region": "関東",
    "sales": 58793,
    "name": "神奈川店"
  },
  {
    "date": "2025-08-25",
    "category": "魚",
    "region": "関東",
    "sales": 487391,
    "name": "神奈川店"
  },
  {
    "date": "2025-08-25",
    "category": "飲料",
    "region": "関東",
    "sales": 210158,
    "name": "神奈川店"
  },
  {
    "date": "2025-08-25",
    "category": "野菜",
    "region": "関西",
    "sales": 471931,
    "name": "大阪店"
  },
  {
    "date": "2025-08-25",
    "category": "肉",
    "region": "関西",
    "sales": 392546,
    "name": "大阪店"
  },
  {
    "date": "2025-08-25",
    "category": "果物",
    "region": "関西",
    "sales": 264115,
    "name": "大阪店"
  },
  {
    "date": "2025-08-25",
    "category": "魚",
    "region": "関西",
    "sales": 68543,
    "name": "大阪店"
  },
  {
    "date": "2025-08-25",
    "category": "飲料",
    "region": "関西",
    "sales": 123274,
    "name": "大阪店"
  },
  {
    "date": "2025-08-25",
    "category": "野菜",
    "region": "関西",
    "sales": 366134,
    "name": "京都店"
  },
  {
    "date": "2025-08-25",
    "category": "肉",
    "region": "関西",
    "sales": 267620,
    "name": "京都店"
  },
  {
    "date": "2025-08-25",
    "category": "果物",
    "region": "関西",
    "sales": 273350,
    "name": "京都店"
  },
  {
    "date": "2025-08-25",
    "category": "魚",
    "region": "関西",
    "sales": 169179,
    "name": "京都店"
  },
  {
    "date": "2025-08-25",
    "category": "飲料",
    "region": "関西",
    "sales": 299438,
    "name": "京都店"
  },
  {
    "date": "2025-08-25",
    "category": "野菜",
    "region": "関西",
    "sales": 132602,
    "name": "兵庫店"
  },
  {
    "date": "2025-08-25",
    "category": "肉",
    "region": "関西",
    "sales": 108886,
    "name": "兵庫店"
  },
  {
    "date": "2025-08-25",
    "category": "果物",
    "region": "関西",
    "sales": 265040,
    "name": "兵庫店"
  },
  {
    "date": "2025-08-25",
    "category": "魚",
    "region": "関西",
    "sales": 433130,
    "name": "兵庫店"
  },
  {
    "date": "2025-08-25",
    "category": "飲料",
    "region": "関西",
    "sales": 268732,
    "name": "兵庫店"
  },
  {
    "date": "2025-08-25",
    "category": "野菜",
    "region": "中部",
    "sales": 150551,
    "name": "名古屋店"
  },
  {
    "date": "2025-08-25",
    "category": "肉",
    "region": "中部",
    "sales": 354837,
    "name": "名古屋店"
  },
  {
    "date": "2025-08-25",
    "category": "果物",
    "region": "中部",
    "sales": 253271,
    "name": "名古屋店"
  },
  {
    "date": "2025-08-25",
    "category": "魚",
    "region": "中部",
    "sales": 415094,
    "name": "名古屋店"
  },
  {
    "date": "2025-08-25",
    "category": "飲料",
    "region": "中部",
    "sales": 54445,
    "name": "名古屋店"
  },
  {
    "date": "2025-08-25",
    "category": "野菜",
    "region": "中部",
    "sales": 345623,
    "name": "静岡店"
  },
  {
    "date": "2025-08-25",
    "category": "肉",
    "region": "中部",
    "sales": 326191,
    "name": "静岡店"
  },
  {
    "date": "2025-08-25",
    "category": "果物",
    "region": "中部",
    "sales": 465690,
    "name": "静岡店"
  },
  {
    "date": "2025-08-25",
    "category": "魚",
    "region": "中部",
    "sales": 461204,
    "name": "静岡店"
  },
  {
    "date": "2025-08-25",
    "category": "飲料",
    "region": "中部",
    "sales": 486167,
    "name": "静岡店"
  },
  {
    "date": "2025-08-25",
    "category": "野菜",
    "region": "東北",
    "sales": 229635,
    "name": "仙台店"
  },
  {
    "date": "2025-08-25",
    "category": "肉",
    "region": "東北",
    "sales": 418759,
    "name": "仙台店"
  },
  {
    "date": "2025-08-25",
    "category": "果物",
    "region": "東北",
    "sales": 344062,
    "name": "仙台店"
  },
  {
    "date": "2025-08-25",
    "category": "魚",
    "region": "東北",
    "sales": 363524,
    "name": "仙台店"
  },
  {
    "date": "2025-08-25",
    "category": "飲料",
    "region": "東北",
    "sales": 221950,
    "name": "仙台店"
  },
  {
    "date": "2025-08-25",
    "category": "野菜",
    "region": "東北",
    "sales": 81172,
    "name": "青森店"
  },
  {
    "date": "2025-08-25",
    "category": "肉",
    "region": "東北",
    "sales": 440397,
    "name": "青森店"
  },
  {
    "date": "2025-08-25",
    "category": "果物",
    "region": "東北",
    "sales": 238673,
    "name": "青森店"
  },
  {
    "date": "2025-08-25",
    "category": "魚",
    "region": "東北",
    "sales": 379959,
    "name": "青森店"
  },
  {
    "date": "2025-08-25",
    "category": "飲料",
    "region": "東北",
    "sales": 196697,
    "name": "青森店"
  },
  {
    "date": "2025-08-25",
    "category": "野菜",
    "region": "九州",
    "sales": 375257,
    "name": "福岡店"
  },
  {
    "date": "2025-08-25",
    "category": "肉",
    "region": "九州",
    "sales": 488891,
    "name": "福岡店"
  },
  {
    "date": "2025-08-25",
    "category": "果物",
    "region": "九州",
    "sales": 162092,
    "name": "福岡店"
  },
  {
    "date": "2025-08-25",
    "category": "魚",
    "region": "九州",
    "sales": 405420,
    "name": "福岡店"
  },
  {
    "date": "2025-08-25",
    "category": "飲料",
    "region": "九州",
    "sales": 309432,
    "name": "福岡店"
  },
  {
    "date": "2025-08-25",
    "category": "野菜",
    "region": "九州",
    "sales": 131906,
    "name": "熊本店"
  },
  {
    "date": "2025-08-25",
    "category": "肉",
    "region": "九州",
    "sales": 409360,
    "name": "熊本店"
  },
  {
    "date": "2025-08-25",
    "category": "果物",
    "region": "九州",
    "sales": 407284,
    "name": "熊本店"
  },
  {
    "date": "2025-08-25",
    "category": "魚",
    "region": "九州",
    "sales": 164600,
    "name": "熊本店"
  },
  {
    "date": "2025-08-25",
    "category": "飲料",
    "region": "九州",
    "sales": 357646,
    "name": "熊本店"
  },
  {
    "date": "2025-09-24",
    "category": "野菜",
    "region": "関東",
    "sales": 383234,
    "name": "東京店"
  },
  {
    "date": "2025-09-24",
    "category": "肉",
    "region": "関東",
    "sales": 160701,
    "name": "東京店"
  },
  {
    "date": "2025-09-24",
    "category": "果物",
    "region": "関東",
    "sales": 178732,
    "name": "東京店"
  },
  {
    "date": "2025-09-24",
    "category": "魚",
    "region": "関東",
    "sales": 50797,
    "name": "東京店"
  },
  {
    "date": "2025-09-24",
    "category": "飲料",
    "region": "関東",
    "sales": 312425,
    "name": "東京店"
  },
  {
    "date": "2025-09-24",
    "category": "野菜",
    "region": "関東",
    "sales": 472845,
    "name": "千葉店"
  },
  {
    "date": "2025-09-24",
    "category": "肉",
    "region": "関東",
    "sales": 319310,
    "name": "千葉店"
  },
  {
    "date": "2025-09-24",
    "category": "果物",
    "region": "関東",
    "sales": 423499,
    "name": "千葉店"
  },
  {
    "date": "2025-09-24",
    "category": "魚",
    "region": "関東",
    "sales": 423473,
    "name": "千葉店"
  },
  {
    "date": "2025-09-24",
    "category": "飲料",
    "region": "関東",
    "sales": 424208,
    "name": "千葉店"
  },
  {
    "date": "2025-09-24",
    "category": "野菜",
    "region": "関東",
    "sales": 359944,
    "name": "神奈川店"
  },
  {
    "date": "2025-09-24",
    "category": "肉",
    "region": "関東",
    "sales": 59122,
    "name": "神奈川店"
  },
  {
    "date": "2025-09-24",
    "category": "果物",
    "region": "関東",
    "sales": 408146,
    "name": "神奈川店"
  },
  {
    "date": "2025-09-24",
    "category": "魚",
    "region": "関東",
    "sales": 446453,
    "name": "神奈川店"
  },
  {
    "date": "2025-09-24",
    "category": "飲料",
    "region": "関東",
    "sales": 131419,
    "name": "神奈川店"
  },
  {
    "date": "2025-09-24",
    "category": "野菜",
    "region": "関西",
    "sales": 439576,
    "name": "大阪店"
  },
  {
    "date": "2025-09-24",
    "category": "肉",
    "region": "関西",
    "sales": 126248,
    "name": "大阪店"
  },
  {
    "date": "2025-09-24",
    "category": "果物",
    "region": "関西",
    "sales": 86339,
    "name": "大阪店"
  },
  {
    "date": "2025-09-24",
    "category": "魚",
    "region": "関西",
    "sales": 420963,
    "name": "大阪店"
  },
  {
    "date": "2025-09-24",
    "category": "飲料",
    "region": "関西",
    "sales": 115228,
    "name": "大阪店"
  },
  {
    "date": "2025-09-24",
    "category": "野菜",
    "region": "関西",
    "sales": 384176,
    "name": "京都店"
  },
  {
    "date": "2025-09-24",
    "category": "肉",
    "region": "関西",
    "sales": 414595,
    "name": "京都店"
  },
  {
    "date": "2025-09-24",
    "category": "果物",
    "region": "関西",
    "sales": 99846,
    "name": "京都店"
  },
  {
    "date": "2025-09-24",
    "category": "魚",
    "region": "関西",
    "sales": 429004,
    "name": "京都店"
  },
  {
    "date": "2025-09-24",
    "category": "飲料",
    "region": "関西",
    "sales": 82473,
    "name": "京都店"
  },
  {
    "date": "2025-09-24",
    "category": "野菜",
    "region": "関西",
    "sales": 255754,
    "name": "兵庫店"
  },
  {
    "date": "2025-09-24",
    "category": "肉",
    "region": "関西",
    "sales": 380616,
    "name": "兵庫店"
  },
  {
    "date": "2025-09-24",
    "category": "果物",
    "region": "関西",
    "sales": 475569,
    "name": "兵庫店"
  },
  {
    "date": "2025-09-24",
    "category": "魚",
    "region": "関西",
    "sales": 79158,
    "name": "兵庫店"
  },
  {
    "date": "2025-09-24",
    "category": "飲料",
    "region": "関西",
    "sales": 87558,
    "name": "兵庫店"
  },
  {
    "date": "2025-09-24",
    "category": "野菜",
    "region": "中部",
    "sales": 268867,
    "name": "名古屋店"
  },
  {
    "date": "2025-09-24",
    "category": "肉",
    "region": "中部",
    "sales": 203292,
    "name": "名古屋店"
  },
  {
    "date": "2025-09-24",
    "category": "果物",
    "region": "中部",
    "sales": 409307,
    "name": "名古屋店"
  },
  {
    "date": "2025-09-24",
    "category": "魚",
    "region": "中部",
    "sales": 352045,
    "name": "名古屋店"
  },
  {
    "date": "2025-09-24",
    "category": "飲料",
    "region": "中部",
    "sales": 481748,
    "name": "名古屋店"
  },
  {
    "date": "2025-09-24",
    "category": "野菜",
    "region": "中部",
    "sales": 388798,
    "name": "静岡店"
  },
  {
    "date": "2025-09-24",
    "category": "肉",
    "region": "中部",
    "sales": 269587,
    "name": "静岡店"
  },
  {
    "date": "2025-09-24",
    "category": "果物",
    "region": "中部",
    "sales": 80324,
    "name": "静岡店"
  },
  {
    "date": "2025-09-24",
    "category": "魚",
    "region": "中部",
    "sales": 52288,
    "name": "静岡店"
  },
  {
    "date": "2025-09-24",
    "category": "飲料",
    "region": "中部",
    "sales": 393548,
    "name": "静岡店"
  },
  {
    "date": "2025-09-24",
    "category": "野菜",
    "region": "東北",
    "sales": 286434,
    "name": "仙台店"
  },
  {
    "date": "2025-09-24",
    "category": "肉",
    "region": "東北",
    "sales": 99337,
    "name": "仙台店"
  },
  {
    "date": "2025-09-24",
    "category": "果物",
    "region": "東北",
    "sales": 67757,
    "name": "仙台店"
  },
  {
    "date": "2025-09-24",
    "category": "魚",
    "region": "東北",
    "sales": 112039,
    "name": "仙台店"
  },
  {
    "date": "2025-09-24",
    "category": "飲料",
    "region": "東北",
    "sales": 343460,
    "name": "仙台店"
  },
  {
    "date": "2025-09-24",
    "category": "野菜",
    "region": "東北",
    "sales": 400412,
    "name": "青森店"
  },
  {
    "date": "2025-09-24",
    "category": "肉",
    "region": "東北",
    "sales": 153127,
    "name": "青森店"
  },
  {
    "date": "2025-09-24",
    "category": "果物",
    "region": "東北",
    "sales": 126405,
    "name": "青森店"
  },
  {
    "date": "2025-09-24",
    "category": "魚",
    "region": "東北",
    "sales": 337165,
    "name": "青森店"
  },
  {
    "date": "2025-09-24",
    "category": "飲料",
    "region": "東北",
    "sales": 445647,
    "name": "青森店"
  },
  {
    "date": "2025-09-24",
    "category": "野菜",
    "region": "九州",
    "sales": 83714,
    "name": "福岡店"
  },
  {
    "date": "2025-09-24",
    "category": "肉",
    "region": "九州",
    "sales": 382166,
    "name": "福岡店"
  },
  {
    "date": "2025-09-24",
    "category": "果物",
    "region": "九州",
    "sales": 297576,
    "name": "福岡店"
  },
  {
    "date": "2025-09-24",
    "category": "魚",
    "region": "九州",
    "sales": 66934,
    "name": "福岡店"
  },
  {
    "date": "2025-09-24",
    "category": "飲料",
    "region": "九州",
    "sales": 256791,
    "name": "福岡店"
  },
  {
    "date": "2025-09-24",
    "category": "野菜",
    "region": "九州",
    "sales": 220602,
    "name": "熊本店"
  },
  {
    "date": "2025-09-24",
    "category": "肉",
    "region": "九州",
    "sales": 400961,
    "name": "熊本店"
  },
  {
    "date": "2025-09-24",
    "category": "果物",
    "region": "九州",
    "sales": 187986,
    "name": "熊本店"
  },
  {
    "date": "2025-09-24",
    "category": "魚",
    "region": "九州",
    "sales": 439645,
    "name": "熊本店"
  },
  {
    "date": "2025-09-24",
    "category": "飲料",
    "region": "九州",
    "sales": 364890,
    "name": "熊本店"
  },
  {
    "date": "2025-10-24",
    "category": "野菜",
    "region": "関東",
    "sales": 334329,
    "name": "東京店"
  },
  {
    "date": "2025-10-24",
    "category": "肉",
    "region": "関東",
    "sales": 171529,
    "name": "東京店"
  },
  {
    "date": "2025-10-24",
    "category": "果物",
    "region": "関東",
    "sales": 63079,
    "name": "東京店"
  },
  {
    "date": "2025-10-24",
    "category": "魚",
    "region": "関東",
    "sales": 87472,
    "name": "東京店"
  },
  {
    "date": "2025-10-24",
    "category": "飲料",
    "region": "関東",
    "sales": 426552,
    "name": "東京店"
  },
  {
    "date": "2025-10-24",
    "category": "野菜",
    "region": "関東",
    "sales": 189819,
    "name": "千葉店"
  },
  {
    "date": "2025-10-24",
    "category": "肉",
    "region": "関東",
    "sales": 499792,
    "name": "千葉店"
  },
  {
    "date": "2025-10-24",
    "category": "果物",
    "region": "関東",
    "sales": 178403,
    "name": "千葉店"
  },
  {
    "date": "2025-10-24",
    "category": "魚",
    "region": "関東",
    "sales": 282000,
    "name": "千葉店"
  },
  {
    "date": "2025-10-24",
    "category": "飲料",
    "region": "関東",
    "sales": 353637,
    "name": "千葉店"
  },
  {
    "date": "2025-10-24",
    "category": "野菜",
    "region": "関東",
    "sales": 438814,
    "name": "神奈川店"
  },
  {
    "date": "2025-10-24",
    "category": "肉",
    "region": "関東",
    "sales": 221020,
    "name": "神奈川店"
  },
  {
    "date": "2025-10-24",
    "category": "果物",
    "region": "関東",
    "sales": 292453,
    "name": "神奈川店"
  },
  {
    "date": "2025-10-24",
    "category": "魚",
    "region": "関東",
    "sales": 264384,
    "name": "神奈川店"
  },
  {
    "date": "2025-10-24",
    "category": "飲料",
    "region": "関東",
    "sales": 136135,
    "name": "神奈川店"
  },
  {
    "date": "2025-10-24",
    "category": "野菜",
    "region": "関西",
    "sales": 274308,
    "name": "大阪店"
  },
  {
    "date": "2025-10-24",
    "category": "肉",
    "region": "関西",
    "sales": 262252,
    "name": "大阪店"
  },
  {
    "date": "2025-10-24",
    "category": "果物",
    "region": "関西",
    "sales": 164306,
    "name": "大阪店"
  },
  {
    "date": "2025-10-24",
    "category": "魚",
    "region": "関西",
    "sales": 394965,
    "name": "大阪店"
  },
  {
    "date": "2025-10-24",
    "category": "飲料",
    "region": "関西",
    "sales": 236005,
    "name": "大阪店"
  },
  {
    "date": "2025-10-24",
    "category": "野菜",
    "region": "関西",
    "sales": 168284,
    "name": "京都店"
  },
  {
    "date": "2025-10-24",
    "category": "肉",
    "region": "関西",
    "sales": 120166,
    "name": "京都店"
  },
  {
    "date": "2025-10-24",
    "category": "果物",
    "region": "関西",
    "sales": 379786,
    "name": "京都店"
  },
  {
    "date": "2025-10-24",
    "category": "魚",
    "region": "関西",
    "sales": 286715,
    "name": "京都店"
  },
  {
    "date": "2025-10-24",
    "category": "飲料",
    "region": "関西",
    "sales": 189676,
    "name": "京都店"
  },
  {
    "date": "2025-10-24",
    "category": "野菜",
    "region": "関西",
    "sales": 56747,
    "name": "兵庫店"
  },
  {
    "date": "2025-10-24",
    "category": "肉",
    "region": "関西",
    "sales": 172814,
    "name": "兵庫店"
  },
  {
    "date": "2025-10-24",
    "category": "果物",
    "region": "関西",
    "sales": 198854,
    "name": "兵庫店"
  },
  {
    "date": "2025-10-24",
    "category": "魚",
    "region": "関西",
    "sales": 245346,
    "name": "兵庫店"
  },
  {
    "date": "2025-10-24",
    "category": "飲料",
    "region": "関西",
    "sales": 59359,
    "name": "兵庫店"
  },
  {
    "date": "2025-10-24",
    "category": "野菜",
    "region": "中部",
    "sales": 435592,
    "name": "名古屋店"
  },
  {
    "date": "2025-10-24",
    "category": "肉",
    "region": "中部",
    "sales": 380764,
    "name": "名古屋店"
  },
  {
    "date": "2025-10-24",
    "category": "果物",
    "region": "中部",
    "sales": 248559,
    "name": "名古屋店"
  },
  {
    "date": "2025-10-24",
    "category": "魚",
    "region": "中部",
    "sales": 492931,
    "name": "名古屋店"
  },
  {
    "date": "2025-10-24",
    "category": "飲料",
    "region": "中部",
    "sales": 135277,
    "name": "名古屋店"
  },
  {
    "date": "2025-10-24",
    "category": "野菜",
    "region": "中部",
    "sales": 429461,
    "name": "静岡店"
  },
  {
    "date": "2025-10-24",
    "category": "肉",
    "region": "中部",
    "sales": 294781,
    "name": "静岡店"
  },
  {
    "date": "2025-10-24",
    "category": "果物",
    "region": "中部",
    "sales": 166758,
    "name": "静岡店"
  },
  {
    "date": "2025-10-24",
    "category": "魚",
    "region": "中部",
    "sales": 272927,
    "name": "静岡店"
  },
  {
    "date": "2025-10-24",
    "category": "飲料",
    "region": "中部",
    "sales": 292829,
    "name": "静岡店"
  },
  {
    "date": "2025-10-24",
    "category": "野菜",
    "region": "東北",
    "sales": 196644,
    "name": "仙台店"
  },
  {
    "date": "2025-10-24",
    "category": "肉",
    "region": "東北",
    "sales": 325194,
    "name": "仙台店"
  },
  {
    "date": "2025-10-24",
    "category": "果物",
    "region": "東北",
    "sales": 399336,
    "name": "仙台店"
  },
  {
    "date": "2025-10-24",
    "category": "魚",
    "region": "東北",
    "sales": 261679,
    "name": "仙台店"
  },
  {
    "date": "2025-10-24",
    "category": "飲料",
    "region": "東北",
    "sales": 365668,
    "name": "仙台店"
  },
  {
    "date": "2025-10-24",
    "category": "野菜",
    "region": "東北",
    "sales": 330812,
    "name": "青森店"
  },
  {
    "date": "2025-10-24",
    "category": "肉",
    "region": "東北",
    "sales": 85806,
    "name": "青森店"
  },
  {
    "date": "2025-10-24",
    "category": "果物",
    "region": "東北",
    "sales": 441880,
    "name": "青森店"
  },
  {
    "date": "2025-10-24",
    "category": "魚",
    "region": "東北",
    "sales": 300497,
    "name": "青森店"
  },
  {
    "date": "2025-10-24",
    "category": "飲料",
    "region": "東北",
    "sales": 394190,
    "name": "青森店"
  },
  {
    "date": "2025-10-24",
    "category": "野菜",
    "region": "九州",
    "sales": 313028,
    "name": "福岡店"
  },
  {
    "date": "2025-10-24",
    "category": "肉",
    "region": "九州",
    "sales": 229704,
    "name": "福岡店"
  },
  {
    "date": "2025-10-24",
    "category": "果物",
    "region": "九州",
    "sales": 184169,
    "name": "福岡店"
  },
  {
    "date": "2025-10-24",
    "category": "魚",
    "region": "九州",
    "sales": 86778,
    "name": "福岡店"
  },
  {
    "date": "2025-10-24",
    "category": "飲料",
    "region": "九州",
    "sales": 81885,
    "name": "福岡店"
  },
  {
    "date": "2025-10-24",
    "category": "野菜",
    "region": "九州",
    "sales": 321576,
    "name": "熊本店"
  },
  {
    "date": "2025-10-24",
    "category": "肉",
    "region": "九州",
    "sales": 391300,
    "name": "熊本店"
  },
  {
    "date": "2025-10-24",
    "category": "果物",
    "region": "九州",
    "sales": 397414,
    "name": "熊本店"
  },
  {
    "date": "2025-10-24",
    "category": "魚",
    "region": "九州",
    "sales": 127127,
    "name": "熊本店"
  },
  {
    "date": "2025-10-24",
    "category": "飲料",
    "region": "九州",
    "sales": 144987,
    "name": "熊本店"
  },
  {
    "date": "2025-11-23",
    "category": "野菜",
    "region": "関東",
    "sales": 456567,
    "name": "東京店"
  },
  {
    "date": "2025-11-23",
    "category": "肉",
    "region": "関東",
    "sales": 377822,
    "name": "東京店"
  },
  {
    "date": "2025-11-23",
    "category": "果物",
    "region": "関東",
    "sales": 455548,
    "name": "東京店"
  },
  {
    "date": "2025-11-23",
    "category": "魚",
    "region": "関東",
    "sales": 232808,
    "name": "東京店"
  },
  {
    "date": "2025-11-23",
    "category": "飲料",
    "region": "関東",
    "sales": 165356,
    "name": "東京店"
  },
  {
    "date": "2025-11-23",
    "category": "野菜",
    "region": "関東",
    "sales": 191334,
    "name": "千葉店"
  },
  {
    "date": "2025-11-23",
    "category": "肉",
    "region": "関東",
    "sales": 378987,
    "name": "千葉店"
  },
  {
    "date": "2025-11-23",
    "category": "果物",
    "region": "関東",
    "sales": 356185,
    "name": "千葉店"
  },
  {
    "date": "2025-11-23",
    "category": "魚",
    "region": "関東",
    "sales": 425041,
    "name": "千葉店"
  },
  {
    "date": "2025-11-23",
    "category": "飲料",
    "region": "関東",
    "sales": 447952,
    "name": "千葉店"
  },
  {
    "date": "2025-11-23",
    "category": "野菜",
    "region": "関東",
    "sales": 449051,
    "name": "神奈川店"
  },
  {
    "date": "2025-11-23",
    "category": "肉",
    "region": "関東",
    "sales": 163220,
    "name": "神奈川店"
  },
  {
    "date": "2025-11-23",
    "category": "果物",
    "region": "関東",
    "sales": 235298,
    "name": "神奈川店"
  },
  {
    "date": "2025-11-23",
    "category": "魚",
    "region": "関東",
    "sales": 270012,
    "name": "神奈川店"
  },
  {
    "date": "2025-11-23",
    "category": "飲料",
    "region": "関東",
    "sales": 460854,
    "name": "神奈川店"
  },
  {
    "date": "2025-11-23",
    "category": "野菜",
    "region": "関西",
    "sales": 225557,
    "name": "大阪店"
  },
  {
    "date": "2025-11-23",
    "category": "肉",
    "region": "関西",
    "sales": 59913,
    "name": "大阪店"
  },
  {
    "date": "2025-11-23",
    "category": "果物",
    "region": "関西",
    "sales": 191574,
    "name": "大阪店"
  },
  {
    "date": "2025-11-23",
    "category": "魚",
    "region": "関西",
    "sales": 278666,
    "name": "大阪店"
  },
  {
    "date": "2025-11-23",
    "category": "飲料",
    "region": "関西",
    "sales": 135706,
    "name": "大阪店"
  },
  {
    "date": "2025-11-23",
    "category": "野菜",
    "region": "関西",
    "sales": 62965,
    "name": "京都店"
  },
  {
    "date": "2025-11-23",
    "category": "肉",
    "region": "関西",
    "sales": 237611,
    "name": "京都店"
  },
  {
    "date": "2025-11-23",
    "category": "果物",
    "region": "関西",
    "sales": 308342,
    "name": "京都店"
  },
  {
    "date": "2025-11-23",
    "category": "魚",
    "region": "関西",
    "sales": 420822,
    "name": "京都店"
  },
  {
    "date": "2025-11-23",
    "category": "飲料",
    "region": "関西",
    "sales": 65501,
    "name": "京都店"
  },
  {
    "date": "2025-11-23",
    "category": "野菜",
    "region": "関西",
    "sales": 160668,
    "name": "兵庫店"
  },
  {
    "date": "2025-11-23",
    "category": "肉",
    "region": "関西",
    "sales": 330662,
    "name": "兵庫店"
  },
  {
    "date": "2025-11-23",
    "category": "果物",
    "region": "関西",
    "sales": 405229,
    "name": "兵庫店"
  },
  {
    "date": "2025-11-23",
    "category": "魚",
    "region": "関西",
    "sales": 237223,
    "name": "兵庫店"
  },
  {
    "date": "2025-11-23",
    "category": "飲料",
    "region": "関西",
    "sales": 159849,
    "name": "兵庫店"
  },
  {
    "date": "2025-11-23",
    "category": "野菜",
    "region": "中部",
    "sales": 253178,
    "name": "名古屋店"
  },
  {
    "date": "2025-11-23",
    "category": "肉",
    "region": "中部",
    "sales": 169671,
    "name": "名古屋店"
  },
  {
    "date": "2025-11-23",
    "category": "果物",
    "region": "中部",
    "sales": 339526,
    "name": "名古屋店"
  },
  {
    "date": "2025-11-23",
    "category": "魚",
    "region": "中部",
    "sales": 436404,
    "name": "名古屋店"
  },
  {
    "date": "2025-11-23",
    "category": "飲料",
    "region": "中部",
    "sales": 61938,
    "name": "名古屋店"
  },
  {
    "date": "2025-11-23",
    "category": "野菜",
    "region": "中部",
    "sales": 380662,
    "name": "静岡店"
  },
  {
    "date": "2025-11-23",
    "category": "肉",
    "region": "中部",
    "sales": 150883,
    "name": "静岡店"
  },
  {
    "date": "2025-11-23",
    "category": "果物",
    "region": "中部",
    "sales": 282265,
    "name": "静岡店"
  },
  {
    "date": "2025-11-23",
    "category": "魚",
    "region": "中部",
    "sales": 87065,
    "name": "静岡店"
  },
  {
    "date": "2025-11-23",
    "category": "飲料",
    "region": "中部",
    "sales": 352691,
    "name": "静岡店"
  },
  {
    "date": "2025-11-23",
    "category": "野菜",
    "region": "東北",
    "sales": 160989,
    "name": "仙台店"
  },
  {
    "date": "2025-11-23",
    "category": "肉",
    "region": "東北",
    "sales": 223994,
    "name": "仙台店"
  },
  {
    "date": "2025-11-23",
    "category": "果物",
    "region": "東北",
    "sales": 441464,
    "name": "仙台店"
  },
  {
    "date": "2025-11-23",
    "category": "魚",
    "region": "東北",
    "sales": 218923,
    "name": "仙台店"
  },
  {
    "date": "2025-11-23",
    "category": "飲料",
    "region": "東北",
    "sales": 171008,
    "name": "仙台店"
  },
  {
    "date": "2025-11-23",
    "category": "野菜",
    "region": "東北",
    "sales": 309173,
    "name": "青森店"
  },
  {
    "date": "2025-11-23",
    "category": "肉",
    "region": "東北",
    "sales": 138185,
    "name": "青森店"
  },
  {
    "date": "2025-11-23",
    "category": "果物",
    "region": "東北",
    "sales": 135553,
    "name": "青森店"
  },
  {
    "date": "2025-11-23",
    "category": "魚",
    "region": "東北",
    "sales": 236114,
    "name": "青森店"
  },
  {
    "date": "2025-11-23",
    "category": "飲料",
    "region": "東北",
    "sales": 242096,
    "name": "青森店"
  },
  {
    "date": "2025-11-23",
    "category": "野菜",
    "region": "九州",
    "sales": 88565,
    "name": "福岡店"
  },
  {
    "date": "2025-11-23",
    "category": "肉",
    "region": "九州",
    "sales": 356406,
    "name": "福岡店"
  },
  {
    "date": "2025-11-23",
    "category": "果物",
    "region": "九州",
    "sales": 109155,
    "name": "福岡店"
  },
  {
    "date": "2025-11-23",
    "category": "魚",
    "region": "九州",
    "sales": 122820,
    "name": "福岡店"
  },
  {
    "date": "2025-11-23",
    "category": "飲料",
    "region": "九州",
    "sales": 161666,
    "name": "福岡店"
  },
  {
    "date": "2025-11-23",
    "category": "野菜",
    "region": "九州",
    "sales": 156346,
    "name": "熊本店"
  },
  {
    "date": "2025-11-23",
    "category": "肉",
    "region": "九州",
    "sales": 193512,
    "name": "熊本店"
  },
  {
    "date": "2025-11-23",
    "category": "果物",
    "region": "九州",
    "sales": 111907,
    "name": "熊本店"
  },
  {
    "date": "2025-11-23",
    "category": "魚",
    "region": "九州",
    "sales": 177166,
    "name": "熊本店"
  },
  {
    "date": "2025-11-23",
    "category": "飲料",
    "region": "九州",
    "sales": 116600,
    "name": "熊本店"
  },
  {
    "date": "2025-12-23",
    "category": "野菜",
    "region": "関東",
    "sales": 321349,
    "name": "東京店"
  },
  {
    "date": "2025-12-23",
    "category": "肉",
    "region": "関東",
    "sales": 429097,
    "name": "東京店"
  },
  {
    "date": "2025-12-23",
    "category": "果物",
    "region": "関東",
    "sales": 324636,
    "name": "東京店"
  },
  {
    "date": "2025-12-23",
    "category": "魚",
    "region": "関東",
    "sales": 348765,
    "name": "東京店"
  },
  {
    "date": "2025-12-23",
    "category": "飲料",
    "region": "関東",
    "sales": 66296,
    "name": "東京店"
  },
  {
    "date": "2025-12-23",
    "category": "野菜",
    "region": "関東",
    "sales": 418253,
    "name": "千葉店"
  },
  {
    "date": "2025-12-23",
    "category": "肉",
    "region": "関東",
    "sales": 253757,
    "name": "千葉店"
  },
  {
    "date": "2025-12-23",
    "category": "果物",
    "region": "関東",
    "sales": 302113,
    "name": "千葉店"
  },
  {
    "date": "2025-12-23",
    "category": "魚",
    "region": "関東",
    "sales": 222400,
    "name": "千葉店"
  },
  {
    "date": "2025-12-23",
    "category": "飲料",
    "region": "関東",
    "sales": 109597,
    "name": "千葉店"
  },
  {
    "date": "2025-12-23",
    "category": "野菜",
    "region": "関東",
    "sales": 68486,
    "name": "神奈川店"
  },
  {
    "date": "2025-12-23",
    "category": "肉",
    "region": "関東",
    "sales": 425692,
    "name": "神奈川店"
  },
  {
    "date": "2025-12-23",
    "category": "果物",
    "region": "関東",
    "sales": 407724,
    "name": "神奈川店"
  },
  {
    "date": "2025-12-23",
    "category": "魚",
    "region": "関東",
    "sales": 55429,
    "name": "神奈川店"
  },
  {
    "date": "2025-12-23",
    "category": "飲料",
    "region": "関東",
    "sales": 315345,
    "name": "神奈川店"
  },
  {
    "date": "2025-12-23",
    "category": "野菜",
    "region": "関西",
    "sales": 369616,
    "name": "大阪店"
  },
  {
    "date": "2025-12-23",
    "category": "肉",
    "region": "関西",
    "sales": 423464,
    "name": "大阪店"
  },
  {
    "date": "2025-12-23",
    "category": "果物",
    "region": "関西",
    "sales": 297865,
    "name": "大阪店"
  },
  {
    "date": "2025-12-23",
    "category": "魚",
    "region": "関西",
    "sales": 409874,
    "name": "大阪店"
  },
  {
    "date": "2025-12-23",
    "category": "飲料",
    "region": "関西",
    "sales": 338135,
    "name": "大阪店"
  },
  {
    "date": "2025-12-23",
    "category": "野菜",
    "region": "関西",
    "sales": 312785,
    "name": "京都店"
  },
  {
    "date": "2025-12-23",
    "category": "肉",
    "region": "関西",
    "sales": 226232,
    "name": "京都店"
  },
  {
    "date": "2025-12-23",
    "category": "果物",
    "region": "関西",
    "sales": 460567,
    "name": "京都店"
  },
  {
    "date": "2025-12-23",
    "category": "魚",
    "region": "関西",
    "sales": 164902,
    "name": "京都店"
  },
  {
    "date": "2025-12-23",
    "category": "飲料",
    "region": "関西",
    "sales": 348006,
    "name": "京都店"
  },
  {
    "date": "2025-12-23",
    "category": "野菜",
    "region": "関西",
    "sales": 193658,
    "name": "兵庫店"
  },
  {
    "date": "2025-12-23",
    "category": "肉",
    "region": "関西",
    "sales": 276243,
    "name": "兵庫店"
  },
  {
    "date": "2025-12-23",
    "category": "果物",
    "region": "関西",
    "sales": 298469,
    "name": "兵庫店"
  },
  {
    "date": "2025-12-23",
    "category": "魚",
    "region": "関西",
    "sales": 394540,
    "name": "兵庫店"
  },
  {
    "date": "2025-12-23",
    "category": "飲料",
    "region": "関西",
    "sales": 160189,
    "name": "兵庫店"
  },
  {
    "date": "2025-12-23",
    "category": "野菜",
    "region": "中部",
    "sales": 142634,
    "name": "名古屋店"
  },
  {
    "date": "2025-12-23",
    "category": "肉",
    "region": "中部",
    "sales": 331526,
    "name": "名古屋店"
  },
  {
    "date": "2025-12-23",
    "category": "果物",
    "region": "中部",
    "sales": 293797,
    "name": "名古屋店"
  },
  {
    "date": "2025-12-23",
    "category": "魚",
    "region": "中部",
    "sales": 456253,
    "name": "名古屋店"
  },
  {
    "date": "2025-12-23",
    "category": "飲料",
    "region": "中部",
    "sales": 233124,
    "name": "名古屋店"
  },
  {
    "date": "2025-12-23",
    "category": "野菜",
    "region": "中部",
    "sales": 414470,
    "name": "静岡店"
  },
  {
    "date": "2025-12-23",
    "category": "肉",
    "region": "中部",
    "sales": 365812,
    "name": "静岡店"
  },
  {
    "date": "2025-12-23",
    "category": "果物",
    "region": "中部",
    "sales": 486230,
    "name": "静岡店"
  },
  {
    "date": "2025-12-23",
    "category": "魚",
    "region": "中部",
    "sales": 56026,
    "name": "静岡店"
  },
  {
    "date": "2025-12-23",
    "category": "飲料",
    "region": "中部",
    "sales": 203523,
    "name": "静岡店"
  },
  {
    "date": "2025-12-23",
    "category": "野菜",
    "region": "東北",
    "sales": 196964,
    "name": "仙台店"
  },
  {
    "date": "2025-12-23",
    "category": "肉",
    "region": "東北",
    "sales": 89248,
    "name": "仙台店"
  },
  {
    "date": "2025-12-23",
    "category": "果物",
    "region": "東北",
    "sales": 262903,
    "name": "仙台店"
  },
  {
    "date": "2025-12-23",
    "category": "魚",
    "region": "東北",
    "sales": 319917,
    "name": "仙台店"
  },
  {
    "date": "2025-12-23",
    "category": "飲料",
    "region": "東北",
    "sales": 397270,
    "name": "仙台店"
  },
  {
    "date": "2025-12-23",
    "category": "野菜",
    "region": "東北",
    "sales": 412481,
    "name": "青森店"
  },
  {
    "date": "2025-12-23",
    "category": "肉",
    "region": "東北",
    "sales": 474371,
    "name": "青森店"
  },
  {
    "date": "2025-12-23",
    "category": "果物",
    "region": "東北",
    "sales": 68158,
    "name": "青森店"
  },
  {
    "date": "2025-12-23",
    "category": "魚",
    "region": "東北",
    "sales": 499542,
    "name": "青森店"
  },
  {
    "date": "2025-12-23",
    "category": "飲料",
    "region": "東北",
    "sales": 427630,
    "name": "青森店"
  },
  {
    "date": "2025-12-23",
    "category": "野菜",
    "region": "九州",
    "sales": 471581,
    "name": "福岡店"
  },
  {
    "date": "2025-12-23",
    "category": "肉",
    "region": "九州",
    "sales": 301199,
    "name": "福岡店"
  },
  {
    "date": "2025-12-23",
    "category": "果物",
    "region": "九州",
    "sales": 462604,
    "name": "福岡店"
  },
  {
    "date": "2025-12-23",
    "category": "魚",
    "region": "九州",
    "sales": 133495,
    "name": "福岡店"
  },
  {
    "date": "2025-12-23",
    "category": "飲料",
    "region": "九州",
    "sales": 422517,
    "name": "福岡店"
  },
  {
    "date": "2025-12-23",
    "category": "野菜",
    "region": "九州",
    "sales": 122059,
    "name": "熊本店"
  },
  {
    "date": "2025-12-23",
    "category": "肉",
    "region": "九州",
    "sales": 188025,
    "name": "熊本店"
  },
  {
    "date": "2025-12-23",
    "category": "果物",
    "region": "九州",
    "sales": 490597,
    "name": "熊本店"
  },
  {
    "date": "2025-12-23",
    "category": "魚",
    "region": "九州",
    "sales": 196019,
    "name": "熊本店"
  },
  {
    "date": "2025-12-23",
    "category": "飲料",
    "region": "九州",
    "sales": 362721,
    "name": "熊本店"
  },
  {
    "date": "2026-01-22",
    "category": "野菜",
    "region": "関東",
    "sales": 241638,
    "name": "東京店"
  },
  {
    "date": "2026-01-22",
    "category": "肉",
    "region": "関東",
    "sales": 205503,
    "name": "東京店"
  },
  {
    "date": "2026-01-22",
    "category": "果物",
    "region": "関東",
    "sales": 177968,
    "name": "東京店"
  },
  {
    "date": "2026-01-22",
    "category": "魚",
    "region": "関東",
    "sales": 126097,
    "name": "東京店"
  },
  {
    "date": "2026-01-22",
    "category": "飲料",
    "region": "関東",
    "sales": 253154,
    "name": "東京店"
  },
  {
    "date": "2026-01-22",
    "category": "野菜",
    "region": "関東",
    "sales": 83245,
    "name": "千葉店"
  },
  {
    "date": "2026-01-22",
    "category": "肉",
    "region": "関東",
    "sales": 287928,
    "name": "千葉店"
  },
  {
    "date": "2026-01-22",
    "category": "果物",
    "region": "関東",
    "sales": 403448,
    "name": "千葉店"
  },
  {
    "date": "2026-01-22",
    "category": "魚",
    "region": "関東",
    "sales": 497651,
    "name": "千葉店"
  },
  {
    "date": "2026-01-22",
    "category": "飲料",
    "region": "関東",
    "sales": 317125,
    "name": "千葉店"
  },
  {
    "date": "2026-01-22",
    "category": "野菜",
    "region": "関東",
    "sales": 64956,
    "name": "神奈川店"
  },
  {
    "date": "2026-01-22",
    "category": "肉",
    "region": "関東",
    "sales": 139534,
    "name": "神奈川店"
  },
  {
    "date": "2026-01-22",
    "category": "果物",
    "region": "関東",
    "sales": 61370,
    "name": "神奈川店"
  },
  {
    "date": "2026-01-22",
    "category": "魚",
    "region": "関東",
    "sales": 107542,
    "name": "神奈川店"
  },
  {
    "date": "2026-01-22",
    "category": "飲料",
    "region": "関東",
    "sales": 58070,
    "name": "神奈川店"
  },
  {
    "date": "2026-01-22",
    "category": "野菜",
    "region": "関西",
    "sales": 142733,
    "name": "大阪店"
  },
  {
    "date": "2026-01-22",
    "category": "肉",
    "region": "関西",
    "sales": 363123,
    "name": "大阪店"
  },
  {
    "date": "2026-01-22",
    "category": "果物",
    "region": "関西",
    "sales": 110154,
    "name": "大阪店"
  },
  {
    "date": "2026-01-22",
    "category": "魚",
    "region": "関西",
    "sales": 193126,
    "name": "大阪店"
  },
  {
    "date": "2026-01-22",
    "category": "飲料",
    "region": "関西",
    "sales": 203945,
    "name": "大阪店"
  },
  {
    "date": "2026-01-22",
    "category": "野菜",
    "region": "関西",
    "sales": 176794,
    "name": "京都店"
  },
  {
    "date": "2026-01-22",
    "category": "肉",
    "region": "関西",
    "sales": 245520,
    "name": "京都店"
  },
  {
    "date": "2026-01-22",
    "category": "果物",
    "region": "関西",
    "sales": 208136,
    "name": "京都店"
  },
  {
    "date": "2026-01-22",
    "category": "魚",
    "region": "関西",
    "sales": 151146,
    "name": "京都店"
  },
  {
    "date": "2026-01-22",
    "category": "飲料",
    "region": "関西",
    "sales": 384648,
    "name": "京都店"
  },
  {
    "date": "2026-01-22",
    "category": "野菜",
    "region": "関西",
    "sales": 322276,
    "name": "兵庫店"
  },
  {
    "date": "2026-01-22",
    "category": "肉",
    "region": "関西",
    "sales": 499931,
    "name": "兵庫店"
  },
  {
    "date": "2026-01-22",
    "category": "果物",
    "region": "関西",
    "sales": 421356,
    "name": "兵庫店"
  },
  {
    "date": "2026-01-22",
    "category": "魚",
    "region": "関西",
    "sales": 96473,
    "name": "兵庫店"
  },
  {
    "date": "2026-01-22",
    "category": "飲料",
    "region": "関西",
    "sales": 227945,
    "name": "兵庫店"
  },
  {
    "date": "2026-01-22",
    "category": "野菜",
    "region": "中部",
    "sales": 316466,
    "name": "名古屋店"
  },
  {
    "date": "2026-01-22",
    "category": "肉",
    "region": "中部",
    "sales": 148839,
    "name": "名古屋店"
  },
  {
    "date": "2026-01-22",
    "category": "果物",
    "region": "中部",
    "sales": 243358,
    "name": "名古屋店"
  },
  {
    "date": "2026-01-22",
    "category": "魚",
    "region": "中部",
    "sales": 258277,
    "name": "名古屋店"
  },
  {
    "date": "2026-01-22",
    "category": "飲料",
    "region": "中部",
    "sales": 194433,
    "name": "名古屋店"
  },
  {
    "date": "2026-01-22",
    "category": "野菜",
    "region": "中部",
    "sales": 292827,
    "name": "静岡店"
  },
  {
    "date": "2026-01-22",
    "category": "肉",
    "region": "中部",
    "sales": 327191,
    "name": "静岡店"
  },
  {
    "date": "2026-01-22",
    "category": "果物",
    "region": "中部",
    "sales": 368727,
    "name": "静岡店"
  },
  {
    "date": "2026-01-22",
    "category": "魚",
    "region": "中部",
    "sales": 165659,
    "name": "静岡店"
  },
  {
    "date": "2026-01-22",
    "category": "飲料",
    "region": "中部",
    "sales": 360672,
    "name": "静岡店"
  },
  {
    "date": "2026-01-22",
    "category": "野菜",
    "region": "東北",
    "sales": 396801,
    "name": "仙台店"
  },
  {
    "date": "2026-01-22",
    "category": "肉",
    "region": "東北",
    "sales": 200569,
    "name": "仙台店"
  },
  {
    "date": "2026-01-22",
    "category": "果物",
    "region": "東北",
    "sales": 90854,
    "name": "仙台店"
  },
  {
    "date": "2026-01-22",
    "category": "魚",
    "region": "東北",
    "sales": 61176,
    "name": "仙台店"
  },
  {
    "date": "2026-01-22",
    "category": "飲料",
    "region": "東北",
    "sales": 312813,
    "name": "仙台店"
  },
  {
    "date": "2026-01-22",
    "category": "野菜",
    "region": "東北",
    "sales": 105961,
    "name": "青森店"
  },
  {
    "date": "2026-01-22",
    "category": "肉",
    "region": "東北",
    "sales": 290941,
    "name": "青森店"
  },
  {
    "date": "2026-01-22",
    "category": "果物",
    "region": "東北",
    "sales": 267178,
    "name": "青森店"
  },
  {
    "date": "2026-01-22",
    "category": "魚",
    "region": "東北",
    "sales": 325557,
    "name": "青森店"
  },
  {
    "date": "2026-01-22",
    "category": "飲料",
    "region": "東北",
    "sales": 70339,
    "name": "青森店"
  },
  {
    "date": "2026-01-22",
    "category": "野菜",
    "region": "九州",
    "sales": 333622,
    "name": "福岡店"
  },
  {
    "date": "2026-01-22",
    "category": "肉",
    "region": "九州",
    "sales": 313151,
    "name": "福岡店"
  },
  {
    "date": "2026-01-22",
    "category": "果物",
    "region": "九州",
    "sales": 323259,
    "name": "福岡店"
  },
  {
    "date": "2026-01-22",
    "category": "魚",
    "region": "九州",
    "sales": 174276,
    "name": "福岡店"
  },
  {
    "date": "2026-01-22",
    "category": "飲料",
    "region": "九州",
    "sales": 84439,
    "name": "福岡店"
  },
  {
    "date": "2026-01-22",
    "category": "野菜",
    "region": "九州",
    "sales": 89424,
    "name": "熊本店"
  },
  {
    "date": "2026-01-22",
    "category": "肉",
    "region": "九州",
    "sales": 296177,
    "name": "熊本店"
  },
  {
    "date": "2026-01-22",
    "category": "果物",
    "region": "九州",
    "sales": 284962,
    "name": "熊本店"
  },
  {
    "date": "2026-01-22",
    "category": "魚",
    "region": "九州",
    "sales": 122254,
    "name": "熊本店"
  },
  {
    "date": "2026-01-22",
    "category": "飲料",
    "region": "九州",
    "sales": 440358,
    "name": "熊本店"
  },
  {
    "date": "2026-02-21",
    "category": "野菜",
    "region": "関東",
    "sales": 251028,
    "name": "東京店"
  },
  {
    "date": "2026-02-21",
    "category": "肉",
    "region": "関東",
    "sales": 327115,
    "name": "東京店"
  },
  {
    "date": "2026-02-21",
    "category": "果物",
    "region": "関東",
    "sales": 421696,
    "name": "東京店"
  },
  {
    "date": "2026-02-21",
    "category": "魚",
    "region": "関東",
    "sales": 227703,
    "name": "東京店"
  },
  {
    "date": "2026-02-21",
    "category": "飲料",
    "region": "関東",
    "sales": 185045,
    "name": "東京店"
  },
  {
    "date": "2026-02-21",
    "category": "野菜",
    "region": "関東",
    "sales": 382018,
    "name": "千葉店"
  },
  {
    "date": "2026-02-21",
    "category": "肉",
    "region": "関東",
    "sales": 408536,
    "name": "千葉店"
  },
  {
    "date": "2026-02-21",
    "category": "果物",
    "region": "関東",
    "sales": 101410,
    "name": "千葉店"
  },
  {
    "date": "2026-02-21",
    "category": "魚",
    "region": "関東",
    "sales": 336921,
    "name": "千葉店"
  },
  {
    "date": "2026-02-21",
    "category": "飲料",
    "region": "関東",
    "sales": 456651,
    "name": "千葉店"
  },
  {
    "date": "2026-02-21",
    "category": "野菜",
    "region": "関東",
    "sales": 248530,
    "name": "神奈川店"
  },
  {
    "date": "2026-02-21",
    "category": "肉",
    "region": "関東",
    "sales": 400566,
    "name": "神奈川店"
  },
  {
    "date": "2026-02-21",
    "category": "果物",
    "region": "関東",
    "sales": 467284,
    "name": "神奈川店"
  },
  {
    "date": "2026-02-21",
    "category": "魚",
    "region": "関東",
    "sales": 82594,
    "name": "神奈川店"
  },
  {
    "date": "2026-02-21",
    "category": "飲料",
    "region": "関東",
    "sales": 252450,
    "name": "神奈川店"
  },
  {
    "date": "2026-02-21",
    "category": "野菜",
    "region": "関西",
    "sales": 312698,
    "name": "大阪店"
  },
  {
    "date": "2026-02-21",
    "category": "肉",
    "region": "関西",
    "sales": 410472,
    "name": "大阪店"
  },
  {
    "date": "2026-02-21",
    "category": "果物",
    "region": "関西",
    "sales": 244251,
    "name": "大阪店"
  },
  {
    "date": "2026-02-21",
    "category": "魚",
    "region": "関西",
    "sales": 423340,
    "name": "大阪店"
  },
  {
    "date": "2026-02-21",
    "category": "飲料",
    "region": "関西",
    "sales": 179953,
    "name": "大阪店"
  },
  {
    "date": "2026-02-21",
    "category": "野菜",
    "region": "関西",
    "sales": 364044,
    "name": "京都店"
  },
  {
    "date": "2026-02-21",
    "category": "肉",
    "region": "関西",
    "sales": 66945,
    "name": "京都店"
  },
  {
    "date": "2026-02-21",
    "category": "果物",
    "region": "関西",
    "sales": 93645,
    "name": "京都店"
  },
  {
    "date": "2026-02-21",
    "category": "魚",
    "region": "関西",
    "sales": 202053,
    "name": "京都店"
  },
  {
    "date": "2026-02-21",
    "category": "飲料",
    "region": "関西",
    "sales": 284726,
    "name": "京都店"
  },
  {
    "date": "2026-02-21",
    "category": "野菜",
    "region": "関西",
    "sales": 157083,
    "name": "兵庫店"
  },
  {
    "date": "2026-02-21",
    "category": "肉",
    "region": "関西",
    "sales": 248897,
    "name": "兵庫店"
  },
  {
    "date": "2026-02-21",
    "category": "果物",
    "region": "関西",
    "sales": 78735,
    "name": "兵庫店"
  },
  {
    "date": "2026-02-21",
    "category": "魚",
    "region": "関西",
    "sales": 460103,
    "name": "兵庫店"
  },
  {
    "date": "2026-02-21",
    "category": "飲料",
    "region": "関西",
    "sales": 166739,
    "name": "兵庫店"
  },
  {
    "date": "2026-02-21",
    "category": "野菜",
    "region": "中部",
    "sales": 122289,
    "name": "名古屋店"
  },
  {
    "date": "2026-02-21",
    "category": "肉",
    "region": "中部",
    "sales": 457404,
    "name": "名古屋店"
  },
  {
    "date": "2026-02-21",
    "category": "果物",
    "region": "中部",
    "sales": 337704,
    "name": "名古屋店"
  },
  {
    "date": "2026-02-21",
    "category": "魚",
    "region": "中部",
    "sales": 127210,
    "name": "名古屋店"
  },
  {
    "date": "2026-02-21",
    "category": "飲料",
    "region": "中部",
    "sales": 419093,
    "name": "名古屋店"
  },
  {
    "date": "2026-02-21",
    "category": "野菜",
    "region": "中部",
    "sales": 80893,
    "name": "静岡店"
  },
  {
    "date": "2026-02-21",
    "category": "肉",
    "region": "中部",
    "sales": 133869,
    "name": "静岡店"
  },
  {
    "date": "2026-02-21",
    "category": "果物",
    "region": "中部",
    "sales": 489343,
    "name": "静岡店"
  },
  {
    "date": "2026-02-21",
    "category": "魚",
    "region": "中部",
    "sales": 499333,
    "name": "静岡店"
  },
  {
    "date": "2026-02-21",
    "category": "飲料",
    "region": "中部",
    "sales": 188662,
    "name": "静岡店"
  },
  {
    "date": "2026-02-21",
    "category": "野菜",
    "region": "東北",
    "sales": 418045,
    "name": "仙台店"
  },
  {
    "date": "2026-02-21",
    "category": "肉",
    "region": "東北",
    "sales": 454015,
    "name": "仙台店"
  },
  {
    "date": "2026-02-21",
    "category": "果物",
    "region": "東北",
    "sales": 178532,
    "name": "仙台店"
  },
  {
    "date": "2026-02-21",
    "category": "魚",
    "region": "東北",
    "sales": 446378,
    "name": "仙台店"
  },
  {
    "date": "2026-02-21",
    "category": "飲料",
    "region": "東北",
    "sales": 393167,
    "name": "仙台店"
  },
  {
    "date": "2026-02-21",
    "category": "野菜",
    "region": "東北",
    "sales": 390278,
    "name": "青森店"
  },
  {
    "date": "2026-02-21",
    "category": "肉",
    "region": "東北",
    "sales": 65823,
    "name": "青森店"
  },
  {
    "date": "2026-02-21",
    "category": "果物",
    "region": "東北",
    "sales": 473758,
    "name": "青森店"
  },
  {
    "date": "2026-02-21",
    "category": "魚",
    "region": "東北",
    "sales": 321829,
    "name": "青森店"
  },
  {
    "date": "2026-02-21",
    "category": "飲料",
    "region": "東北",
    "sales": 247693,
    "name": "青森店"
  },
  {
    "date": "2026-02-21",
    "category": "野菜",
    "region": "九州",
    "sales": 368388,
    "name": "福岡店"
  },
  {
    "date": "2026-02-21",
    "category": "肉",
    "region": "九州",
    "sales": 116117,
    "name": "福岡店"
  },
  {
    "date": "2026-02-21",
    "category": "果物",
    "region": "九州",
    "sales": 436136,
    "name": "福岡店"
  },
  {
    "date": "2026-02-21",
    "category": "魚",
    "region": "九州",
    "sales": 246215,
    "name": "福岡店"
  },
  {
    "date": "2026-02-21",
    "category": "飲料",
    "region": "九州",
    "sales": 433120,
    "name": "福岡店"
  },
  {
    "date": "2026-02-21",
    "category": "野菜",
    "region": "九州",
    "sales": 491152,
    "name": "熊本店"
  },
  {
    "date": "2026-02-21",
    "category": "肉",
    "region": "九州",
    "sales": 399519,
    "name": "熊本店"
  },
  {
    "date": "2026-02-21",
    "category": "果物",
    "region": "九州",
    "sales": 144325,
    "name": "熊本店"
  },
  {
    "date": "2026-02-21",
    "category": "魚",
    "region": "九州",
    "sales": 253665,
    "name": "熊本店"
  },
  {
    "date": "2026-02-21",
    "category": "飲料",
    "region": "九州",
    "sales": 219049,
    "name": "熊本店"
  },
  {
    "date": "2026-03-23",
    "category": "野菜",
    "region": "関東",
    "sales": 342242,
    "name": "東京店"
  },
  {
    "date": "2026-03-23",
    "category": "肉",
    "region": "関東",
    "sales": 331864,
    "name": "東京店"
  },
  {
    "date": "2026-03-23",
    "category": "果物",
    "region": "関東",
    "sales": 347646,
    "name": "東京店"
  },
  {
    "date": "2026-03-23",
    "category": "魚",
    "region": "関東",
    "sales": 106418,
    "name": "東京店"
  },
  {
    "date": "2026-03-23",
    "category": "飲料",
    "region": "関東",
    "sales": 212741,
    "name": "東京店"
  },
  {
    "date": "2026-03-23",
    "category": "野菜",
    "region": "関東",
    "sales": 93238,
    "name": "千葉店"
  },
  {
    "date": "2026-03-23",
    "category": "肉",
    "region": "関東",
    "sales": 305281,
    "name": "千葉店"
  },
  {
    "date": "2026-03-23",
    "category": "果物",
    "region": "関東",
    "sales": 135785,
    "name": "千葉店"
  },
  {
    "date": "2026-03-23",
    "category": "魚",
    "region": "関東",
    "sales": 113527,
    "name": "千葉店"
  },
  {
    "date": "2026-03-23",
    "category": "飲料",
    "region": "関東",
    "sales": 254515,
    "name": "千葉店"
  },
  {
    "date": "2026-03-23",
    "category": "野菜",
    "region": "関東",
    "sales": 369577,
    "name": "神奈川店"
  },
  {
    "date": "2026-03-23",
    "category": "肉",
    "region": "関東",
    "sales": 462114,
    "name": "神奈川店"
  },
  {
    "date": "2026-03-23",
    "category": "果物",
    "region": "関東",
    "sales": 90924,
    "name": "神奈川店"
  },
  {
    "date": "2026-03-23",
    "category": "魚",
    "region": "関東",
    "sales": 240325,
    "name": "神奈川店"
  },
  {
    "date": "2026-03-23",
    "category": "飲料",
    "region": "関東",
    "sales": 373949,
    "name": "神奈川店"
  },
  {
    "date": "2026-03-23",
    "category": "野菜",
    "region": "関西",
    "sales": 197743,
    "name": "大阪店"
  },
  {
    "date": "2026-03-23",
    "category": "肉",
    "region": "関西",
    "sales": 224397,
    "name": "大阪店"
  },
  {
    "date": "2026-03-23",
    "category": "果物",
    "region": "関西",
    "sales": 325214,
    "name": "大阪店"
  },
  {
    "date": "2026-03-23",
    "category": "魚",
    "region": "関西",
    "sales": 216103,
    "name": "大阪店"
  },
  {
    "date": "2026-03-23",
    "category": "飲料",
    "region": "関西",
    "sales": 419674,
    "name": "大阪店"
  },
  {
    "date": "2026-03-23",
    "category": "野菜",
    "region": "関西",
    "sales": 251671,
    "name": "京都店"
  },
  {
    "date": "2026-03-23",
    "category": "肉",
    "region": "関西",
    "sales": 331266,
    "name": "京都店"
  },
  {
    "date": "2026-03-23",
    "category": "果物",
    "region": "関西",
    "sales": 54941,
    "name": "京都店"
  },
  {
    "date": "2026-03-23",
    "category": "魚",
    "region": "関西",
    "sales": 330982,
    "name": "京都店"
  },
  {
    "date": "2026-03-23",
    "category": "飲料",
    "region": "関西",
    "sales": 89879,
    "name": "京都店"
  },
  {
    "date": "2026-03-23",
    "category": "野菜",
    "region": "関西",
    "sales": 229505,
    "name": "兵庫店"
  },
  {
    "date": "2026-03-23",
    "category": "肉",
    "region": "関西",
    "sales": 396411,
    "name": "兵庫店"
  },
  {
    "date": "2026-03-23",
    "category": "果物",
    "region": "関西",
    "sales": 152392,
    "name": "兵庫店"
  },
  {
    "date": "2026-03-23",
    "category": "魚",
    "region": "関西",
    "sales": 164239,
    "name": "兵庫店"
  },
  {
    "date": "2026-03-23",
    "category": "飲料",
    "region": "関西",
    "sales": 158696,
    "name": "兵庫店"
  },
  {
    "date": "2026-03-23",
    "category": "野菜",
    "region": "中部",
    "sales": 334987,
    "name": "名古屋店"
  },
  {
    "date": "2026-03-23",
    "category": "肉",
    "region": "中部",
    "sales": 429915,
    "name": "名古屋店"
  },
  {
    "date": "2026-03-23",
    "category": "果物",
    "region": "中部",
    "sales": 369275,
    "name": "名古屋店"
  },
  {
    "date": "2026-03-23",
    "category": "魚",
    "region": "中部",
    "sales": 143542,
    "name": "名古屋店"
  },
  {
    "date": "2026-03-23",
    "category": "飲料",
    "region": "中部",
    "sales": 275436,
    "name": "名古屋店"
  },
  {
    "date": "2026-03-23",
    "category": "野菜",
    "region": "中部",
    "sales": 241184,
    "name": "静岡店"
  },
  {
    "date": "2026-03-23",
    "category": "肉",
    "region": "中部",
    "sales": 143199,
    "name": "静岡店"
  },
  {
    "date": "2026-03-23",
    "category": "果物",
    "region": "中部",
    "sales": 308070,
    "name": "静岡店"
  },
  {
    "date": "2026-03-23",
    "category": "魚",
    "region": "中部",
    "sales": 219275,
    "name": "静岡店"
  },
  {
    "date": "2026-03-23",
    "category": "飲料",
    "region": "中部",
    "sales": 497256,
    "name": "静岡店"
  },
  {
    "date": "2026-03-23",
    "category": "野菜",
    "region": "東北",
    "sales": 232148,
    "name": "仙台店"
  },
  {
    "date": "2026-03-23",
    "category": "肉",
    "region": "東北",
    "sales": 474342,
    "name": "仙台店"
  },
  {
    "date": "2026-03-23",
    "category": "果物",
    "region": "東北",
    "sales": 416334,
    "name": "仙台店"
  },
  {
    "date": "2026-03-23",
    "category": "魚",
    "region": "東北",
    "sales": 479555,
    "name": "仙台店"
  },
  {
    "date": "2026-03-23",
    "category": "飲料",
    "region": "東北",
    "sales": 147710,
    "name": "仙台店"
  },
  {
    "date": "2026-03-23",
    "category": "野菜",
    "region": "東北",
    "sales": 162244,
    "name": "青森店"
  },
  {
    "date": "2026-03-23",
    "category": "肉",
    "region": "東北",
    "sales": 370475,
    "name": "青森店"
  },
  {
    "date": "2026-03-23",
    "category": "果物",
    "region": "東北",
    "sales": 473636,
    "name": "青森店"
  },
  {
    "date": "2026-03-23",
    "category": "魚",
    "region": "東北",
    "sales": 330072,
    "name": "青森店"
  },
  {
    "date": "2026-03-23",
    "category": "飲料",
    "region": "東北",
    "sales": 332759,
    "name": "青森店"
  },
  {
    "date": "2026-03-23",
    "category": "野菜",
    "region": "九州",
    "sales": 239739,
    "name": "福岡店"
  },
  {
    "date": "2026-03-23",
    "category": "肉",
    "region": "九州",
    "sales": 276991,
    "name": "福岡店"
  },
  {
    "date": "2026-03-23",
    "category": "果物",
    "region": "九州",
    "sales": 187532,
    "name": "福岡店"
  },
  {
    "date": "2026-03-23",
    "category": "魚",
    "region": "九州",
    "sales": 371567,
    "name": "福岡店"
  },
  {
    "date": "2026-03-23",
    "category": "飲料",
    "region": "九州",
    "sales": 80851,
    "name": "福岡店"
  },
  {
    "date": "2026-03-23",
    "category": "野菜",
    "region": "九州",
    "sales": 210052,
    "name": "熊本店"
  },
  {
    "date": "2026-03-23",
    "category": "肉",
    "region": "九州",
    "sales": 131912,
    "name": "熊本店"
  },
  {
    "date": "2026-03-23",
    "category": "果物",
    "region": "九州",
    "sales": 203840,
    "name": "熊本店"
  },
  {
    "date": "2026-03-23",
    "category": "魚",
    "region": "九州",
    "sales": 437635,
    "name": "熊本店"
  },
  {
    "date": "2026-03-23",
    "category": "飲料",
    "region": "九州",
    "sales": 221807,
    "name": "熊本店"
  },
  {
    "date": "2026-04-22",
    "category": "野菜",
    "region": "関東",
    "sales": 404883,
    "name": "東京店"
  },
  {
    "date": "2026-04-22",
    "category": "肉",
    "region": "関東",
    "sales": 391943,
    "name": "東京店"
  },
  {
    "date": "2026-04-22",
    "category": "果物",
    "region": "関東",
    "sales": 311042,
    "name": "東京店"
  },
  {
    "date": "2026-04-22",
    "category": "魚",
    "region": "関東",
    "sales": 264391,
    "name": "東京店"
  },
  {
    "date": "2026-04-22",
    "category": "飲料",
    "region": "関東",
    "sales": 482888,
    "name": "東京店"
  },
  {
    "date": "2026-04-22",
    "category": "野菜",
    "region": "関東",
    "sales": 135589,
    "name": "千葉店"
  },
  {
    "date": "2026-04-22",
    "category": "肉",
    "region": "関東",
    "sales": 421843,
    "name": "千葉店"
  },
  {
    "date": "2026-04-22",
    "category": "果物",
    "region": "関東",
    "sales": 133750,
    "name": "千葉店"
  },
  {
    "date": "2026-04-22",
    "category": "魚",
    "region": "関東",
    "sales": 187867,
    "name": "千葉店"
  },
  {
    "date": "2026-04-22",
    "category": "飲料",
    "region": "関東",
    "sales": 397711,
    "name": "千葉店"
  },
  {
    "date": "2026-04-22",
    "category": "野菜",
    "region": "関東",
    "sales": 216203,
    "name": "神奈川店"
  },
  {
    "date": "2026-04-22",
    "category": "肉",
    "region": "関東",
    "sales": 169032,
    "name": "神奈川店"
  },
  {
    "date": "2026-04-22",
    "category": "果物",
    "region": "関東",
    "sales": 367550,
    "name": "神奈川店"
  },
  {
    "date": "2026-04-22",
    "category": "魚",
    "region": "関東",
    "sales": 256602,
    "name": "神奈川店"
  },
  {
    "date": "2026-04-22",
    "category": "飲料",
    "region": "関東",
    "sales": 409734,
    "name": "神奈川店"
  },
  {
    "date": "2026-04-22",
    "category": "野菜",
    "region": "関西",
    "sales": 189433,
    "name": "大阪店"
  },
  {
    "date": "2026-04-22",
    "category": "肉",
    "region": "関西",
    "sales": 155524,
    "name": "大阪店"
  },
  {
    "date": "2026-04-22",
    "category": "果物",
    "region": "関西",
    "sales": 84796,
    "name": "大阪店"
  },
  {
    "date": "2026-04-22",
    "category": "魚",
    "region": "関西",
    "sales": 284184,
    "name": "大阪店"
  },
  {
    "date": "2026-04-22",
    "category": "飲料",
    "region": "関西",
    "sales": 184677,
    "name": "大阪店"
  },
  {
    "date": "2026-04-22",
    "category": "野菜",
    "region": "関西",
    "sales": 411243,
    "name": "京都店"
  },
  {
    "date": "2026-04-22",
    "category": "肉",
    "region": "関西",
    "sales": 486661,
    "name": "京都店"
  },
  {
    "date": "2026-04-22",
    "category": "果物",
    "region": "関西",
    "sales": 345909,
    "name": "京都店"
  },
  {
    "date": "2026-04-22",
    "category": "魚",
    "region": "関西",
    "sales": 268223,
    "name": "京都店"
  },
  {
    "date": "2026-04-22",
    "category": "飲料",
    "region": "関西",
    "sales": 296270,
    "name": "京都店"
  },
  {
    "date": "2026-04-22",
    "category": "野菜",
    "region": "関西",
    "sales": 215329,
    "name": "兵庫店"
  },
  {
    "date": "2026-04-22",
    "category": "肉",
    "region": "関西",
    "sales": 64874,
    "name": "兵庫店"
  },
  {
    "date": "2026-04-22",
    "category": "果物",
    "region": "関西",
    "sales": 325114,
    "name": "兵庫店"
  },
  {
    "date": "2026-04-22",
    "category": "魚",
    "region": "関西",
    "sales": 346340,
    "name": "兵庫店"
  },
  {
    "date": "2026-04-22",
    "category": "飲料",
    "region": "関西",
    "sales": 243782,
    "name": "兵庫店"
  },
  {
    "date": "2026-04-22",
    "category": "野菜",
    "region": "中部",
    "sales": 328427,
    "name": "名古屋店"
  },
  {
    "date": "2026-04-22",
    "category": "肉",
    "region": "中部",
    "sales": 452395,
    "name": "名古屋店"
  },
  {
    "date": "2026-04-22",
    "category": "果物",
    "region": "中部",
    "sales": 221100,
    "name": "名古屋店"
  },
  {
    "date": "2026-04-22",
    "category": "魚",
    "region": "中部",
    "sales": 286434,
    "name": "名古屋店"
  },
  {
    "date": "2026-04-22",
    "category": "飲料",
    "region": "中部",
    "sales": 494228,
    "name": "名古屋店"
  },
  {
    "date": "2026-04-22",
    "category": "野菜",
    "region": "中部",
    "sales": 88146,
    "name": "静岡店"
  },
  {
    "date": "2026-04-22",
    "category": "肉",
    "region": "中部",
    "sales": 360108,
    "name": "静岡店"
  },
  {
    "date": "2026-04-22",
    "category": "果物",
    "region": "中部",
    "sales": 134070,
    "name": "静岡店"
  },
  {
    "date": "2026-04-22",
    "category": "魚",
    "region": "中部",
    "sales": 86588,
    "name": "静岡店"
  },
  {
    "date": "2026-04-22",
    "category": "飲料",
    "region": "中部",
    "sales": 55114,
    "name": "静岡店"
  },
  {
    "date": "2026-04-22",
    "category": "野菜",
    "region": "東北",
    "sales": 328862,
    "name": "仙台店"
  },
  {
    "date": "2026-04-22",
    "category": "肉",
    "region": "東北",
    "sales": 85841,
    "name": "仙台店"
  },
  {
    "date": "2026-04-22",
    "category": "果物",
    "region": "東北",
    "sales": 460511,
    "name": "仙台店"
  },
  {
    "date": "2026-04-22",
    "category": "魚",
    "region": "東北",
    "sales": 410777,
    "name": "仙台店"
  },
  {
    "date": "2026-04-22",
    "category": "飲料",
    "region": "東北",
    "sales": 457910,
    "name": "仙台店"
  },
  {
    "date": "2026-04-22",
    "category": "野菜",
    "region": "東北",
    "sales": 117044,
    "name": "青森店"
  },
  {
    "date": "2026-04-22",
    "category": "肉",
    "region": "東北",
    "sales": 499423,
    "name": "青森店"
  },
  {
    "date": "2026-04-22",
    "category": "果物",
    "region": "東北",
    "sales": 326766,
    "name": "青森店"
  },
  {
    "date": "2026-04-22",
    "category": "魚",
    "region": "東北",
    "sales": 60820,
    "name": "青森店"
  },
  {
    "date": "2026-04-22",
    "category": "飲料",
    "region": "東北",
    "sales": 167040,
    "name": "青森店"
  },
  {
    "date": "2026-04-22",
    "category": "野菜",
    "region": "九州",
    "sales": 111630,
    "name": "福岡店"
  },
  {
    "date": "2026-04-22",
    "category": "肉",
    "region": "九州",
    "sales": 499013,
    "name": "福岡店"
  },
  {
    "date": "2026-04-22",
    "category": "果物",
    "region": "九州",
    "sales": 304200,
    "name": "福岡店"
  },
  {
    "date": "2026-04-22",
    "category": "魚",
    "region": "九州",
    "sales": 86267,
    "name": "福岡店"
  },
  {
    "date": "2026-04-22",
    "category": "飲料",
    "region": "九州",
    "sales": 179249,
    "name": "福岡店"
  },
  {
    "date": "2026-04-22",
    "category": "野菜",
    "region": "九州",
    "sales": 469336,
    "name": "熊本店"
  },
  {
    "date": "2026-04-22",
    "category": "肉",
    "region": "九州",
    "sales": 464089,
    "name": "熊本店"
  },
  {
    "date": "2026-04-22",
    "category": "果物",
    "region": "九州",
    "sales": 268522,
    "name": "熊本店"
  },
  {
    "date": "2026-04-22",
    "category": "魚",
    "region": "九州",
    "sales": 92205,
    "name": "熊本店"
  },
  {
    "date": "2026-04-22",
    "category": "飲料",
    "region": "九州",
    "sales": 456720,
    "name": "熊本店"
  }
]