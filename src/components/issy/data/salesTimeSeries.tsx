export type SalesData = {
  date: string;      // 日付（例: '2025-04-01'）
  category: string;  // 商品カテゴリ（例: '野菜', '肉'）
  sales: number;     // 売上金額（例: 1000）
};
export const rawData: SalesData[] = [
  {
    "date": "2023-06-01",
    "category": "野菜",
    "sales": 1047
  },
  {
    "date": "2023-06-01",
    "category": "肉",
    "sales": 1357
  },
  {
    "date": "2023-06-01",
    "category": "魚",
    "sales": 1509
  },
  {
    "date": "2023-06-01",
    "category": "飲料",
    "sales": 1073
  },
  {
    "date": "2023-06-02",
    "category": "野菜",
    "sales": 1236
  },
  {
    "date": "2023-06-02",
    "category": "肉",
    "sales": 1912
  },
  {
    "date": "2023-06-02",
    "category": "魚",
    "sales": 1014
  },
  {
    "date": "2023-06-02",
    "category": "飲料",
    "sales": 1014
  },
  {
    "date": "2023-06-03",
    "category": "野菜",
    "sales": 1866
  },
  {
    "date": "2023-06-03",
    "category": "肉",
    "sales": 1741
  },
  {
    "date": "2023-06-03",
    "category": "魚",
    "sales": 2118
  },
  {
    "date": "2023-06-03",
    "category": "飲料",
    "sales": 1361
  },
  {
    "date": "2023-06-04",
    "category": "野菜",
    "sales": 871
  },
  {
    "date": "2023-06-04",
    "category": "肉",
    "sales": 2200
  },
  {
    "date": "2023-06-04",
    "category": "魚",
    "sales": 2170
  },
  {
    "date": "2023-06-04",
    "category": "飲料",
    "sales": 658
  },
  {
    "date": "2023-06-05",
    "category": "野菜",
    "sales": 1081
  },
  {
    "date": "2023-06-05",
    "category": "肉",
    "sales": 1996
  },
  {
    "date": "2023-06-05",
    "category": "魚",
    "sales": 1532
  },
  {
    "date": "2023-06-05",
    "category": "飲料",
    "sales": 689
  },
  {
    "date": "2023-06-06",
    "category": "野菜",
    "sales": 860
  },
  {
    "date": "2023-06-06",
    "category": "肉",
    "sales": 1383
  },
  {
    "date": "2023-06-06",
    "category": "魚",
    "sales": 762
  },
  {
    "date": "2023-06-06",
    "category": "飲料",
    "sales": 892
  },
  {
    "date": "2023-06-07",
    "category": "野菜",
    "sales": 1244
  },
  {
    "date": "2023-06-07",
    "category": "肉",
    "sales": 1486
  },
  {
    "date": "2023-06-07",
    "category": "魚",
    "sales": 1180
  },
  {
    "date": "2023-06-07",
    "category": "飲料",
    "sales": 1382
  },
  {
    "date": "2023-06-08",
    "category": "野菜",
    "sales": 932
  },
  {
    "date": "2023-06-08",
    "category": "肉",
    "sales": 2005
  },
  {
    "date": "2023-06-08",
    "category": "魚",
    "sales": 1495
  },
  {
    "date": "2023-06-08",
    "category": "飲料",
    "sales": 1356
  },
  {
    "date": "2023-06-09",
    "category": "野菜",
    "sales": 631
  },
  {
    "date": "2023-06-09",
    "category": "肉",
    "sales": 1434
  },
  {
    "date": "2023-06-09",
    "category": "魚",
    "sales": 1435
  },
  {
    "date": "2023-06-09",
    "category": "飲料",
    "sales": 672
  },
  {
    "date": "2023-06-10",
    "category": "野菜",
    "sales": 1104
  },
  {
    "date": "2023-06-10",
    "category": "肉",
    "sales": 1522
  },
  {
    "date": "2023-06-10",
    "category": "魚",
    "sales": 1666
  },
  {
    "date": "2023-06-10",
    "category": "飲料",
    "sales": 1481
  },
  {
    "date": "2023-06-11",
    "category": "野菜",
    "sales": 939
  },
  {
    "date": "2023-06-11",
    "category": "肉",
    "sales": 1669
  },
  {
    "date": "2023-06-11",
    "category": "魚",
    "sales": 958
  },
  {
    "date": "2023-06-11",
    "category": "飲料",
    "sales": 637
  },
  {
    "date": "2023-06-12",
    "category": "野菜",
    "sales": 1287
  },
  {
    "date": "2023-06-12",
    "category": "肉",
    "sales": 1430
  },
  {
    "date": "2023-06-12",
    "category": "魚",
    "sales": 1297
  },
  {
    "date": "2023-06-12",
    "category": "飲料",
    "sales": 668
  },
  {
    "date": "2023-06-13",
    "category": "野菜",
    "sales": 1008
  },
  {
    "date": "2023-06-13",
    "category": "肉",
    "sales": 1457
  },
  {
    "date": "2023-06-13",
    "category": "魚",
    "sales": 1504
  },
  {
    "date": "2023-06-13",
    "category": "飲料",
    "sales": 1239
  },
  {
    "date": "2023-06-14",
    "category": "野菜",
    "sales": 1283
  },
  {
    "date": "2023-06-14",
    "category": "肉",
    "sales": 1580
  },
  {
    "date": "2023-06-14",
    "category": "魚",
    "sales": 1739
  },
  {
    "date": "2023-06-14",
    "category": "飲料",
    "sales": 1206
  },
  {
    "date": "2023-06-15",
    "category": "野菜",
    "sales": 1107
  },
  {
    "date": "2023-06-15",
    "category": "肉",
    "sales": 1390
  },
  {
    "date": "2023-06-15",
    "category": "魚",
    "sales": 1348
  },
  {
    "date": "2023-06-15",
    "category": "飲料",
    "sales": 643
  },
  {
    "date": "2023-06-16",
    "category": "野菜",
    "sales": 1297
  },
  {
    "date": "2023-06-16",
    "category": "肉",
    "sales": 1713
  },
  {
    "date": "2023-06-16",
    "category": "魚",
    "sales": 1238
  },
  {
    "date": "2023-06-16",
    "category": "飲料",
    "sales": 599
  },
  {
    "date": "2023-06-17",
    "category": "野菜",
    "sales": 1200
  },
  {
    "date": "2023-06-17",
    "category": "肉",
    "sales": 1902
  },
  {
    "date": "2023-06-17",
    "category": "魚",
    "sales": 2475
  },
  {
    "date": "2023-06-17",
    "category": "飲料",
    "sales": 1197
  },
  {
    "date": "2023-06-18",
    "category": "野菜",
    "sales": 1623
  },
  {
    "date": "2023-06-18",
    "category": "肉",
    "sales": 1717
  },
  {
    "date": "2023-06-18",
    "category": "魚",
    "sales": 1396
  },
  {
    "date": "2023-06-18",
    "category": "飲料",
    "sales": 1231
  },
  {
    "date": "2023-06-19",
    "category": "野菜",
    "sales": 1202
  },
  {
    "date": "2023-06-19",
    "category": "肉",
    "sales": 1586
  },
  {
    "date": "2023-06-19",
    "category": "魚",
    "sales": 1479
  },
  {
    "date": "2023-06-19",
    "category": "飲料",
    "sales": 1190
  },
  {
    "date": "2023-06-20",
    "category": "野菜",
    "sales": 918
  },
  {
    "date": "2023-06-20",
    "category": "肉",
    "sales": 1600
  },
  {
    "date": "2023-06-20",
    "category": "魚",
    "sales": 801
  },
  {
    "date": "2023-06-20",
    "category": "飲料",
    "sales": 1290
  },
  {
    "date": "2023-06-21",
    "category": "野菜",
    "sales": 1121
  },
  {
    "date": "2023-06-21",
    "category": "肉",
    "sales": 1445
  },
  {
    "date": "2023-06-21",
    "category": "魚",
    "sales": 1348
  },
  {
    "date": "2023-06-21",
    "category": "飲料",
    "sales": 813
  },
  {
    "date": "2023-06-22",
    "category": "野菜",
    "sales": 1542
  },
  {
    "date": "2023-06-22",
    "category": "肉",
    "sales": 1789
  },
  {
    "date": "2023-06-22",
    "category": "魚",
    "sales": 1261
  },
  {
    "date": "2023-06-22",
    "category": "飲料",
    "sales": 829
  },
  {
    "date": "2023-06-23",
    "category": "野菜",
    "sales": 985
  },
  {
    "date": "2023-06-23",
    "category": "肉",
    "sales": 1770
  },
  {
    "date": "2023-06-23",
    "category": "魚",
    "sales": 1203
  },
  {
    "date": "2023-06-23",
    "category": "飲料",
    "sales": 921
  },
  {
    "date": "2023-06-24",
    "category": "野菜",
    "sales": 676
  },
  {
    "date": "2023-06-24",
    "category": "肉",
    "sales": 1546
  },
  {
    "date": "2023-06-24",
    "category": "魚",
    "sales": 1515
  },
  {
    "date": "2023-06-24",
    "category": "飲料",
    "sales": 903
  },
  {
    "date": "2023-06-25",
    "category": "野菜",
    "sales": 1126
  },
  {
    "date": "2023-06-25",
    "category": "肉",
    "sales": 2069
  },
  {
    "date": "2023-06-25",
    "category": "魚",
    "sales": 1904
  },
  {
    "date": "2023-06-25",
    "category": "飲料",
    "sales": 1403
  },
  {
    "date": "2023-06-26",
    "category": "野菜",
    "sales": 1442
  },
  {
    "date": "2023-06-26",
    "category": "肉",
    "sales": 1359
  },
  {
    "date": "2023-06-26",
    "category": "魚",
    "sales": 1495
  },
  {
    "date": "2023-06-26",
    "category": "飲料",
    "sales": 751
  },
  {
    "date": "2023-06-27",
    "category": "野菜",
    "sales": 931
  },
  {
    "date": "2023-06-27",
    "category": "肉",
    "sales": 1857
  },
  {
    "date": "2023-06-27",
    "category": "魚",
    "sales": 1457
  },
  {
    "date": "2023-06-27",
    "category": "飲料",
    "sales": 556
  },
  {
    "date": "2023-06-28",
    "category": "野菜",
    "sales": 1498
  },
  {
    "date": "2023-06-28",
    "category": "肉",
    "sales": 1106
  },
  {
    "date": "2023-06-28",
    "category": "魚",
    "sales": 1180
  },
  {
    "date": "2023-06-28",
    "category": "飲料",
    "sales": 850
  },
  {
    "date": "2023-06-29",
    "category": "野菜",
    "sales": 871
  },
  {
    "date": "2023-06-29",
    "category": "肉",
    "sales": 941
  },
  {
    "date": "2023-06-29",
    "category": "魚",
    "sales": 969
  },
  {
    "date": "2023-06-29",
    "category": "飲料",
    "sales": 786
  },
  {
    "date": "2023-06-30",
    "category": "野菜",
    "sales": 1205
  },
  {
    "date": "2023-06-30",
    "category": "肉",
    "sales": 1801
  },
  {
    "date": "2023-06-30",
    "category": "魚",
    "sales": 1523
  },
  {
    "date": "2023-06-30",
    "category": "飲料",
    "sales": 879
  },
  {
    "date": "2023-07-01",
    "category": "野菜",
    "sales": 1307
  },
  {
    "date": "2023-07-01",
    "category": "肉",
    "sales": 1791
  },
  {
    "date": "2023-07-01",
    "category": "魚",
    "sales": 1859
  },
  {
    "date": "2023-07-01",
    "category": "飲料",
    "sales": 648
  },
  {
    "date": "2023-07-02",
    "category": "野菜",
    "sales": 1354
  },
  {
    "date": "2023-07-02",
    "category": "肉",
    "sales": 1758
  },
  {
    "date": "2023-07-02",
    "category": "魚",
    "sales": 1454
  },
  {
    "date": "2023-07-02",
    "category": "飲料",
    "sales": 801
  },
  {
    "date": "2023-07-03",
    "category": "野菜",
    "sales": 870
  },
  {
    "date": "2023-07-03",
    "category": "肉",
    "sales": 1762
  },
  {
    "date": "2023-07-03",
    "category": "魚",
    "sales": 1543
  },
  {
    "date": "2023-07-03",
    "category": "飲料",
    "sales": 743
  },
  {
    "date": "2023-07-04",
    "category": "野菜",
    "sales": 1184
  },
  {
    "date": "2023-07-04",
    "category": "肉",
    "sales": 1678
  },
  {
    "date": "2023-07-04",
    "category": "魚",
    "sales": 974
  },
  {
    "date": "2023-07-04",
    "category": "飲料",
    "sales": 958
  },
  {
    "date": "2023-07-05",
    "category": "野菜",
    "sales": 984
  },
  {
    "date": "2023-07-05",
    "category": "肉",
    "sales": 1659
  },
  {
    "date": "2023-07-05",
    "category": "魚",
    "sales": 1436
  },
  {
    "date": "2023-07-05",
    "category": "飲料",
    "sales": 1224
  },
  {
    "date": "2023-07-06",
    "category": "野菜",
    "sales": 1182
  },
  {
    "date": "2023-07-06",
    "category": "肉",
    "sales": 1233
  },
  {
    "date": "2023-07-06",
    "category": "魚",
    "sales": 1354
  },
  {
    "date": "2023-07-06",
    "category": "飲料",
    "sales": 618
  },
  {
    "date": "2023-07-07",
    "category": "野菜",
    "sales": 921
  },
  {
    "date": "2023-07-07",
    "category": "肉",
    "sales": 1689
  },
  {
    "date": "2023-07-07",
    "category": "魚",
    "sales": 1724
  },
  {
    "date": "2023-07-07",
    "category": "飲料",
    "sales": 719
  },
  {
    "date": "2023-07-08",
    "category": "野菜",
    "sales": 558
  },
  {
    "date": "2023-07-08",
    "category": "肉",
    "sales": 1801
  },
  {
    "date": "2023-07-08",
    "category": "魚",
    "sales": 1709
  },
  {
    "date": "2023-07-08",
    "category": "飲料",
    "sales": 692
  },
  {
    "date": "2023-07-09",
    "category": "野菜",
    "sales": 1272
  },
  {
    "date": "2023-07-09",
    "category": "肉",
    "sales": 1674
  },
  {
    "date": "2023-07-09",
    "category": "魚",
    "sales": 1291
  },
  {
    "date": "2023-07-09",
    "category": "飲料",
    "sales": 563
  },
  {
    "date": "2023-07-10",
    "category": "野菜",
    "sales": 902
  },
  {
    "date": "2023-07-10",
    "category": "肉",
    "sales": 1197
  },
  {
    "date": "2023-07-10",
    "category": "魚",
    "sales": 1666
  },
  {
    "date": "2023-07-10",
    "category": "飲料",
    "sales": 1239
  },
  {
    "date": "2023-07-11",
    "category": "野菜",
    "sales": 779
  },
  {
    "date": "2023-07-11",
    "category": "肉",
    "sales": 991
  },
  {
    "date": "2023-07-11",
    "category": "魚",
    "sales": 1412
  },
  {
    "date": "2023-07-11",
    "category": "飲料",
    "sales": 1060
  },
  {
    "date": "2023-07-12",
    "category": "野菜",
    "sales": 601
  },
  {
    "date": "2023-07-12",
    "category": "肉",
    "sales": 2157
  },
  {
    "date": "2023-07-12",
    "category": "魚",
    "sales": 1085
  },
  {
    "date": "2023-07-12",
    "category": "飲料",
    "sales": 730
  },
  {
    "date": "2023-07-13",
    "category": "野菜",
    "sales": 1274
  },
  {
    "date": "2023-07-13",
    "category": "肉",
    "sales": 1426
  },
  {
    "date": "2023-07-13",
    "category": "魚",
    "sales": 924
  },
  {
    "date": "2023-07-13",
    "category": "飲料",
    "sales": 940
  },
  {
    "date": "2023-07-14",
    "category": "野菜",
    "sales": 955
  },
  {
    "date": "2023-07-14",
    "category": "肉",
    "sales": 1293
  },
  {
    "date": "2023-07-14",
    "category": "魚",
    "sales": 1360
  },
  {
    "date": "2023-07-14",
    "category": "飲料",
    "sales": 917
  },
  {
    "date": "2023-07-15",
    "category": "野菜",
    "sales": 1091
  },
  {
    "date": "2023-07-15",
    "category": "肉",
    "sales": 1800
  },
  {
    "date": "2023-07-15",
    "category": "魚",
    "sales": 1341
  },
  {
    "date": "2023-07-15",
    "category": "飲料",
    "sales": 1194
  },
  {
    "date": "2023-07-16",
    "category": "野菜",
    "sales": 1169
  },
  {
    "date": "2023-07-16",
    "category": "肉",
    "sales": 2027
  },
  {
    "date": "2023-07-16",
    "category": "魚",
    "sales": 1713
  },
  {
    "date": "2023-07-16",
    "category": "飲料",
    "sales": 1147
  },
  {
    "date": "2023-07-17",
    "category": "野菜",
    "sales": 718
  },
  {
    "date": "2023-07-17",
    "category": "肉",
    "sales": 1490
  },
  {
    "date": "2023-07-17",
    "category": "魚",
    "sales": 576
  },
  {
    "date": "2023-07-17",
    "category": "飲料",
    "sales": 435
  },
  {
    "date": "2023-07-18",
    "category": "野菜",
    "sales": 1007
  },
  {
    "date": "2023-07-18",
    "category": "肉",
    "sales": 1467
  },
  {
    "date": "2023-07-18",
    "category": "魚",
    "sales": 1625
  },
  {
    "date": "2023-07-18",
    "category": "飲料",
    "sales": 983
  },
  {
    "date": "2023-07-19",
    "category": "野菜",
    "sales": 956
  },
  {
    "date": "2023-07-19",
    "category": "肉",
    "sales": 1261
  },
  {
    "date": "2023-07-19",
    "category": "魚",
    "sales": 960
  },
  {
    "date": "2023-07-19",
    "category": "飲料",
    "sales": 767
  },
  {
    "date": "2023-07-20",
    "category": "野菜",
    "sales": 669
  },
  {
    "date": "2023-07-20",
    "category": "肉",
    "sales": 1379
  },
  {
    "date": "2023-07-20",
    "category": "魚",
    "sales": 1166
  },
  {
    "date": "2023-07-20",
    "category": "飲料",
    "sales": 963
  },
  {
    "date": "2023-07-21",
    "category": "野菜",
    "sales": 1064
  },
  {
    "date": "2023-07-21",
    "category": "肉",
    "sales": 1411
  },
  {
    "date": "2023-07-21",
    "category": "魚",
    "sales": 925
  },
  {
    "date": "2023-07-21",
    "category": "飲料",
    "sales": 875
  },
  {
    "date": "2023-07-22",
    "category": "野菜",
    "sales": 1319
  },
  {
    "date": "2023-07-22",
    "category": "肉",
    "sales": 1681
  },
  {
    "date": "2023-07-22",
    "category": "魚",
    "sales": 1357
  },
  {
    "date": "2023-07-22",
    "category": "飲料",
    "sales": 1801
  },
  {
    "date": "2023-07-23",
    "category": "野菜",
    "sales": 747
  },
  {
    "date": "2023-07-23",
    "category": "肉",
    "sales": 1473
  },
  {
    "date": "2023-07-23",
    "category": "魚",
    "sales": 1861
  },
  {
    "date": "2023-07-23",
    "category": "飲料",
    "sales": 1010
  },
  {
    "date": "2023-07-24",
    "category": "野菜",
    "sales": 1263
  },
  {
    "date": "2023-07-24",
    "category": "肉",
    "sales": 1465
  },
  {
    "date": "2023-07-24",
    "category": "魚",
    "sales": 834
  },
  {
    "date": "2023-07-24",
    "category": "飲料",
    "sales": 611
  },
  {
    "date": "2023-07-25",
    "category": "野菜",
    "sales": 1086
  },
  {
    "date": "2023-07-25",
    "category": "肉",
    "sales": 2080
  },
  {
    "date": "2023-07-25",
    "category": "魚",
    "sales": 1263
  },
  {
    "date": "2023-07-25",
    "category": "飲料",
    "sales": 250
  },
  {
    "date": "2023-07-26",
    "category": "野菜",
    "sales": 1549
  },
  {
    "date": "2023-07-26",
    "category": "肉",
    "sales": 1693
  },
  {
    "date": "2023-07-26",
    "category": "魚",
    "sales": 403
  },
  {
    "date": "2023-07-26",
    "category": "飲料",
    "sales": 1002
  },
  {
    "date": "2023-07-27",
    "category": "野菜",
    "sales": 1131
  },
  {
    "date": "2023-07-27",
    "category": "肉",
    "sales": 793
  },
  {
    "date": "2023-07-27",
    "category": "魚",
    "sales": 1317
  },
  {
    "date": "2023-07-27",
    "category": "飲料",
    "sales": 999
  },
  {
    "date": "2023-07-28",
    "category": "野菜",
    "sales": 1005
  },
  {
    "date": "2023-07-28",
    "category": "肉",
    "sales": 1406
  },
  {
    "date": "2023-07-28",
    "category": "魚",
    "sales": 1541
  },
  {
    "date": "2023-07-28",
    "category": "飲料",
    "sales": 537
  },
  {
    "date": "2023-07-29",
    "category": "野菜",
    "sales": 1286
  },
  {
    "date": "2023-07-29",
    "category": "肉",
    "sales": 1838
  },
  {
    "date": "2023-07-29",
    "category": "魚",
    "sales": 1358
  },
  {
    "date": "2023-07-29",
    "category": "飲料",
    "sales": 769
  },
  {
    "date": "2023-07-30",
    "category": "野菜",
    "sales": 1158
  },
  {
    "date": "2023-07-30",
    "category": "肉",
    "sales": 1767
  },
  {
    "date": "2023-07-30",
    "category": "魚",
    "sales": 1036
  },
  {
    "date": "2023-07-30",
    "category": "飲料",
    "sales": 493
  },
  {
    "date": "2023-07-31",
    "category": "野菜",
    "sales": 767
  },
  {
    "date": "2023-07-31",
    "category": "肉",
    "sales": 1240
  },
  {
    "date": "2023-07-31",
    "category": "魚",
    "sales": 1812
  },
  {
    "date": "2023-07-31",
    "category": "飲料",
    "sales": 745
  },
  {
    "date": "2023-08-01",
    "category": "野菜",
    "sales": 1283
  },
  {
    "date": "2023-08-01",
    "category": "肉",
    "sales": 1217
  },
  {
    "date": "2023-08-01",
    "category": "魚",
    "sales": 1649
  },
  {
    "date": "2023-08-01",
    "category": "飲料",
    "sales": 549
  },
  {
    "date": "2023-08-02",
    "category": "野菜",
    "sales": 1130
  },
  {
    "date": "2023-08-02",
    "category": "肉",
    "sales": 1243
  },
  {
    "date": "2023-08-02",
    "category": "魚",
    "sales": 1144
  },
  {
    "date": "2023-08-02",
    "category": "飲料",
    "sales": 498
  },
  {
    "date": "2023-08-03",
    "category": "野菜",
    "sales": 995
  },
  {
    "date": "2023-08-03",
    "category": "肉",
    "sales": 1317
  },
  {
    "date": "2023-08-03",
    "category": "魚",
    "sales": 1160
  },
  {
    "date": "2023-08-03",
    "category": "飲料",
    "sales": 664
  },
  {
    "date": "2023-08-04",
    "category": "野菜",
    "sales": 793
  },
  {
    "date": "2023-08-04",
    "category": "肉",
    "sales": 1369
  },
  {
    "date": "2023-08-04",
    "category": "魚",
    "sales": 168
  },
  {
    "date": "2023-08-04",
    "category": "飲料",
    "sales": 816
  },
  {
    "date": "2023-08-05",
    "category": "野菜",
    "sales": 1140
  },
  {
    "date": "2023-08-05",
    "category": "肉",
    "sales": 1591
  },
  {
    "date": "2023-08-05",
    "category": "魚",
    "sales": 1291
  },
  {
    "date": "2023-08-05",
    "category": "飲料",
    "sales": 1120
  },
  {
    "date": "2023-08-06",
    "category": "野菜",
    "sales": 1372
  },
  {
    "date": "2023-08-06",
    "category": "肉",
    "sales": 1470
  },
  {
    "date": "2023-08-06",
    "category": "魚",
    "sales": 1167
  },
  {
    "date": "2023-08-06",
    "category": "飲料",
    "sales": 781
  },
  {
    "date": "2023-08-07",
    "category": "野菜",
    "sales": 673
  },
  {
    "date": "2023-08-07",
    "category": "肉",
    "sales": 1439
  },
  {
    "date": "2023-08-07",
    "category": "魚",
    "sales": 1253
  },
  {
    "date": "2023-08-07",
    "category": "飲料",
    "sales": 1198
  },
  {
    "date": "2023-08-08",
    "category": "野菜",
    "sales": 648
  },
  {
    "date": "2023-08-08",
    "category": "肉",
    "sales": 1160
  },
  {
    "date": "2023-08-08",
    "category": "魚",
    "sales": 650
  },
  {
    "date": "2023-08-08",
    "category": "飲料",
    "sales": 480
  },
  {
    "date": "2023-08-09",
    "category": "野菜",
    "sales": 743
  },
  {
    "date": "2023-08-09",
    "category": "肉",
    "sales": 797
  },
  {
    "date": "2023-08-09",
    "category": "魚",
    "sales": 709
  },
  {
    "date": "2023-08-09",
    "category": "飲料",
    "sales": 695
  },
  {
    "date": "2023-08-10",
    "category": "野菜",
    "sales": 1245
  },
  {
    "date": "2023-08-10",
    "category": "肉",
    "sales": 914
  },
  {
    "date": "2023-08-10",
    "category": "魚",
    "sales": 1172
  },
  {
    "date": "2023-08-10",
    "category": "飲料",
    "sales": 362
  },
  {
    "date": "2023-08-11",
    "category": "野菜",
    "sales": 753
  },
  {
    "date": "2023-08-11",
    "category": "肉",
    "sales": 1121
  },
  {
    "date": "2023-08-11",
    "category": "魚",
    "sales": 923
  },
  {
    "date": "2023-08-11",
    "category": "飲料",
    "sales": 908
  },
  {
    "date": "2023-08-12",
    "category": "野菜",
    "sales": 735
  },
  {
    "date": "2023-08-12",
    "category": "肉",
    "sales": 1269
  },
  {
    "date": "2023-08-12",
    "category": "魚",
    "sales": 1456
  },
  {
    "date": "2023-08-12",
    "category": "飲料",
    "sales": 1102
  },
  {
    "date": "2023-08-13",
    "category": "野菜",
    "sales": 1001
  },
  {
    "date": "2023-08-13",
    "category": "肉",
    "sales": 2094
  },
  {
    "date": "2023-08-13",
    "category": "魚",
    "sales": 1138
  },
  {
    "date": "2023-08-13",
    "category": "飲料",
    "sales": 803
  },
  {
    "date": "2023-08-14",
    "category": "野菜",
    "sales": 1051
  },
  {
    "date": "2023-08-14",
    "category": "肉",
    "sales": 945
  },
  {
    "date": "2023-08-14",
    "category": "魚",
    "sales": 1020
  },
  {
    "date": "2023-08-14",
    "category": "飲料",
    "sales": 629
  },
  {
    "date": "2023-08-15",
    "category": "野菜",
    "sales": 611
  },
  {
    "date": "2023-08-15",
    "category": "肉",
    "sales": 1218
  },
  {
    "date": "2023-08-15",
    "category": "魚",
    "sales": 1461
  },
  {
    "date": "2023-08-15",
    "category": "飲料",
    "sales": 865
  },
  {
    "date": "2023-08-16",
    "category": "野菜",
    "sales": 870
  },
  {
    "date": "2023-08-16",
    "category": "肉",
    "sales": 1265
  },
  {
    "date": "2023-08-16",
    "category": "魚",
    "sales": 767
  },
  {
    "date": "2023-08-16",
    "category": "飲料",
    "sales": 427
  },
  {
    "date": "2023-08-17",
    "category": "野菜",
    "sales": 374
  },
  {
    "date": "2023-08-17",
    "category": "肉",
    "sales": 1525
  },
  {
    "date": "2023-08-17",
    "category": "魚",
    "sales": 915
  },
  {
    "date": "2023-08-17",
    "category": "飲料",
    "sales": 444
  },
  {
    "date": "2023-08-18",
    "category": "野菜",
    "sales": 230
  },
  {
    "date": "2023-08-18",
    "category": "肉",
    "sales": 663
  },
  {
    "date": "2023-08-18",
    "category": "魚",
    "sales": 1295
  },
  {
    "date": "2023-08-18",
    "category": "飲料",
    "sales": 1186
  },
  {
    "date": "2023-08-19",
    "category": "野菜",
    "sales": 965
  },
  {
    "date": "2023-08-19",
    "category": "肉",
    "sales": 1568
  },
  {
    "date": "2023-08-19",
    "category": "魚",
    "sales": 352
  },
  {
    "date": "2023-08-19",
    "category": "飲料",
    "sales": 610
  },
  {
    "date": "2023-08-20",
    "category": "野菜",
    "sales": 907
  },
  {
    "date": "2023-08-20",
    "category": "肉",
    "sales": 1440
  },
  {
    "date": "2023-08-20",
    "category": "魚",
    "sales": 1240
  },
  {
    "date": "2023-08-20",
    "category": "飲料",
    "sales": 806
  },
  {
    "date": "2023-08-21",
    "category": "野菜",
    "sales": 988
  },
  {
    "date": "2023-08-21",
    "category": "肉",
    "sales": 1603
  },
  {
    "date": "2023-08-21",
    "category": "魚",
    "sales": 1165
  },
  {
    "date": "2023-08-21",
    "category": "飲料",
    "sales": 1025
  },
  {
    "date": "2023-08-22",
    "category": "野菜",
    "sales": 808
  },
  {
    "date": "2023-08-22",
    "category": "肉",
    "sales": 1221
  },
  {
    "date": "2023-08-22",
    "category": "魚",
    "sales": 601
  },
  {
    "date": "2023-08-22",
    "category": "飲料",
    "sales": 744
  },
  {
    "date": "2023-08-23",
    "category": "野菜",
    "sales": 576
  },
  {
    "date": "2023-08-23",
    "category": "肉",
    "sales": 767
  },
  {
    "date": "2023-08-23",
    "category": "魚",
    "sales": 680
  },
  {
    "date": "2023-08-23",
    "category": "飲料",
    "sales": 910
  },
  {
    "date": "2023-08-24",
    "category": "野菜",
    "sales": 779
  },
  {
    "date": "2023-08-24",
    "category": "肉",
    "sales": 1862
  },
  {
    "date": "2023-08-24",
    "category": "魚",
    "sales": 1583
  },
  {
    "date": "2023-08-24",
    "category": "飲料",
    "sales": 302
  },
  {
    "date": "2023-08-25",
    "category": "野菜",
    "sales": 658
  },
  {
    "date": "2023-08-25",
    "category": "肉",
    "sales": 906
  },
  {
    "date": "2023-08-25",
    "category": "魚",
    "sales": 1091
  },
  {
    "date": "2023-08-25",
    "category": "飲料",
    "sales": 0
  },
  {
    "date": "2023-08-26",
    "category": "野菜",
    "sales": 1372
  },
  {
    "date": "2023-08-26",
    "category": "肉",
    "sales": 1922
  },
  {
    "date": "2023-08-26",
    "category": "魚",
    "sales": 744
  },
  {
    "date": "2023-08-26",
    "category": "飲料",
    "sales": 522
  },
  {
    "date": "2023-08-27",
    "category": "野菜",
    "sales": 1367
  },
  {
    "date": "2023-08-27",
    "category": "肉",
    "sales": 1206
  },
  {
    "date": "2023-08-27",
    "category": "魚",
    "sales": 433
  },
  {
    "date": "2023-08-27",
    "category": "飲料",
    "sales": 767
  },
  {
    "date": "2023-08-28",
    "category": "野菜",
    "sales": 786
  },
  {
    "date": "2023-08-28",
    "category": "肉",
    "sales": 1799
  },
  {
    "date": "2023-08-28",
    "category": "魚",
    "sales": 848
  },
  {
    "date": "2023-08-28",
    "category": "飲料",
    "sales": 719
  },
  {
    "date": "2023-08-29",
    "category": "野菜",
    "sales": 1191
  },
  {
    "date": "2023-08-29",
    "category": "肉",
    "sales": 1071
  },
  {
    "date": "2023-08-29",
    "category": "魚",
    "sales": 1091
  },
  {
    "date": "2023-08-29",
    "category": "飲料",
    "sales": 1021
  },
  {
    "date": "2023-08-30",
    "category": "野菜",
    "sales": 983
  },
  {
    "date": "2023-08-30",
    "category": "肉",
    "sales": 1262
  },
  {
    "date": "2023-08-30",
    "category": "魚",
    "sales": 872
  },
  {
    "date": "2023-08-30",
    "category": "飲料",
    "sales": 598
  },
  {
    "date": "2023-08-31",
    "category": "野菜",
    "sales": 1932
  },
  {
    "date": "2023-08-31",
    "category": "肉",
    "sales": 796
  },
  {
    "date": "2023-08-31",
    "category": "魚",
    "sales": 791
  },
  {
    "date": "2023-08-31",
    "category": "飲料",
    "sales": 341
  },
  {
    "date": "2023-09-01",
    "category": "野菜",
    "sales": 851
  },
  {
    "date": "2023-09-01",
    "category": "肉",
    "sales": 1450
  },
  {
    "date": "2023-09-01",
    "category": "魚",
    "sales": 730
  },
  {
    "date": "2023-09-01",
    "category": "飲料",
    "sales": 0
  },
  {
    "date": "2023-09-02",
    "category": "野菜",
    "sales": 742
  },
  {
    "date": "2023-09-02",
    "category": "肉",
    "sales": 1249
  },
  {
    "date": "2023-09-02",
    "category": "魚",
    "sales": 1554
  },
  {
    "date": "2023-09-02",
    "category": "飲料",
    "sales": 511
  },
  {
    "date": "2023-09-03",
    "category": "野菜",
    "sales": 1699
  },
  {
    "date": "2023-09-03",
    "category": "肉",
    "sales": 1182
  },
  {
    "date": "2023-09-03",
    "category": "魚",
    "sales": 1212
  },
  {
    "date": "2023-09-03",
    "category": "飲料",
    "sales": 508
  },
  {
    "date": "2023-09-04",
    "category": "野菜",
    "sales": 583
  },
  {
    "date": "2023-09-04",
    "category": "肉",
    "sales": 1263
  },
  {
    "date": "2023-09-04",
    "category": "魚",
    "sales": 1220
  },
  {
    "date": "2023-09-04",
    "category": "飲料",
    "sales": 540
  },
  {
    "date": "2023-09-05",
    "category": "野菜",
    "sales": 543
  },
  {
    "date": "2023-09-05",
    "category": "肉",
    "sales": 724
  },
  {
    "date": "2023-09-05",
    "category": "魚",
    "sales": 792
  },
  {
    "date": "2023-09-05",
    "category": "飲料",
    "sales": 0
  },
  {
    "date": "2023-09-06",
    "category": "野菜",
    "sales": 1161
  },
  {
    "date": "2023-09-06",
    "category": "肉",
    "sales": 1366
  },
  {
    "date": "2023-09-06",
    "category": "魚",
    "sales": 778
  },
  {
    "date": "2023-09-06",
    "category": "飲料",
    "sales": 831
  },
  {
    "date": "2023-09-07",
    "category": "野菜",
    "sales": 503
  },
  {
    "date": "2023-09-07",
    "category": "肉",
    "sales": 1145
  },
  {
    "date": "2023-09-07",
    "category": "魚",
    "sales": 623
  },
  {
    "date": "2023-09-07",
    "category": "飲料",
    "sales": 554
  },
  {
    "date": "2023-09-08",
    "category": "野菜",
    "sales": 907
  },
  {
    "date": "2023-09-08",
    "category": "肉",
    "sales": 1291
  },
  {
    "date": "2023-09-08",
    "category": "魚",
    "sales": 938
  },
  {
    "date": "2023-09-08",
    "category": "飲料",
    "sales": 536
  },
  {
    "date": "2023-09-09",
    "category": "野菜",
    "sales": 655
  },
  {
    "date": "2023-09-09",
    "category": "肉",
    "sales": 1324
  },
  {
    "date": "2023-09-09",
    "category": "魚",
    "sales": 506
  },
  {
    "date": "2023-09-09",
    "category": "飲料",
    "sales": 944
  },
  {
    "date": "2023-09-10",
    "category": "野菜",
    "sales": 622
  },
  {
    "date": "2023-09-10",
    "category": "肉",
    "sales": 1224
  },
  {
    "date": "2023-09-10",
    "category": "魚",
    "sales": 1459
  },
  {
    "date": "2023-09-10",
    "category": "飲料",
    "sales": 775
  },
  {
    "date": "2023-09-11",
    "category": "野菜",
    "sales": 788
  },
  {
    "date": "2023-09-11",
    "category": "肉",
    "sales": 1152
  },
  {
    "date": "2023-09-11",
    "category": "魚",
    "sales": 762
  },
  {
    "date": "2023-09-11",
    "category": "飲料",
    "sales": 348
  },
  {
    "date": "2023-09-12",
    "category": "野菜",
    "sales": 959
  },
  {
    "date": "2023-09-12",
    "category": "肉",
    "sales": 1329
  },
  {
    "date": "2023-09-12",
    "category": "魚",
    "sales": 719
  },
  {
    "date": "2023-09-12",
    "category": "飲料",
    "sales": 237
  },
  {
    "date": "2023-09-13",
    "category": "野菜",
    "sales": 571
  },
  {
    "date": "2023-09-13",
    "category": "肉",
    "sales": 994
  },
  {
    "date": "2023-09-13",
    "category": "魚",
    "sales": 897
  },
  {
    "date": "2023-09-13",
    "category": "飲料",
    "sales": 106
  },
  {
    "date": "2023-09-14",
    "category": "野菜",
    "sales": 491
  },
  {
    "date": "2023-09-14",
    "category": "肉",
    "sales": 1042
  },
  {
    "date": "2023-09-14",
    "category": "魚",
    "sales": 404
  },
  {
    "date": "2023-09-14",
    "category": "飲料",
    "sales": 833
  },
  {
    "date": "2023-09-15",
    "category": "野菜",
    "sales": 811
  },
  {
    "date": "2023-09-15",
    "category": "肉",
    "sales": 1586
  },
  {
    "date": "2023-09-15",
    "category": "魚",
    "sales": 882
  },
  {
    "date": "2023-09-15",
    "category": "飲料",
    "sales": 901
  },
  {
    "date": "2023-09-16",
    "category": "野菜",
    "sales": 914
  },
  {
    "date": "2023-09-16",
    "category": "肉",
    "sales": 1900
  },
  {
    "date": "2023-09-16",
    "category": "魚",
    "sales": 1133
  },
  {
    "date": "2023-09-16",
    "category": "飲料",
    "sales": 537
  },
  {
    "date": "2023-09-17",
    "category": "野菜",
    "sales": 1297
  },
  {
    "date": "2023-09-17",
    "category": "肉",
    "sales": 1395
  },
  {
    "date": "2023-09-17",
    "category": "魚",
    "sales": 688
  },
  {
    "date": "2023-09-17",
    "category": "飲料",
    "sales": 991
  },
  {
    "date": "2023-09-18",
    "category": "野菜",
    "sales": 670
  },
  {
    "date": "2023-09-18",
    "category": "肉",
    "sales": 391
  },
  {
    "date": "2023-09-18",
    "category": "魚",
    "sales": 1003
  },
  {
    "date": "2023-09-18",
    "category": "飲料",
    "sales": 838
  },
  {
    "date": "2023-09-19",
    "category": "野菜",
    "sales": 661
  },
  {
    "date": "2023-09-19",
    "category": "肉",
    "sales": 1006
  },
  {
    "date": "2023-09-19",
    "category": "魚",
    "sales": 798
  },
  {
    "date": "2023-09-19",
    "category": "飲料",
    "sales": 743
  },
  {
    "date": "2023-09-20",
    "category": "野菜",
    "sales": 344
  },
  {
    "date": "2023-09-20",
    "category": "肉",
    "sales": 952
  },
  {
    "date": "2023-09-20",
    "category": "魚",
    "sales": 825
  },
  {
    "date": "2023-09-20",
    "category": "飲料",
    "sales": 437
  },
  {
    "date": "2023-09-21",
    "category": "野菜",
    "sales": 1387
  },
  {
    "date": "2023-09-21",
    "category": "肉",
    "sales": 1032
  },
  {
    "date": "2023-09-21",
    "category": "魚",
    "sales": 1155
  },
  {
    "date": "2023-09-21",
    "category": "飲料",
    "sales": 155
  },
  {
    "date": "2023-09-22",
    "category": "野菜",
    "sales": 635
  },
  {
    "date": "2023-09-22",
    "category": "肉",
    "sales": 739
  },
  {
    "date": "2023-09-22",
    "category": "魚",
    "sales": 1068
  },
  {
    "date": "2023-09-22",
    "category": "飲料",
    "sales": 881
  },
  {
    "date": "2023-09-23",
    "category": "野菜",
    "sales": 1063
  },
  {
    "date": "2023-09-23",
    "category": "肉",
    "sales": 865
  },
  {
    "date": "2023-09-23",
    "category": "魚",
    "sales": 1213
  },
  {
    "date": "2023-09-23",
    "category": "飲料",
    "sales": 866
  },
  {
    "date": "2023-09-24",
    "category": "野菜",
    "sales": 1206
  },
  {
    "date": "2023-09-24",
    "category": "肉",
    "sales": 1915
  },
  {
    "date": "2023-09-24",
    "category": "魚",
    "sales": 1270
  },
  {
    "date": "2023-09-24",
    "category": "飲料",
    "sales": 360
  },
  {
    "date": "2023-09-25",
    "category": "野菜",
    "sales": 885
  },
  {
    "date": "2023-09-25",
    "category": "肉",
    "sales": 498
  },
  {
    "date": "2023-09-25",
    "category": "魚",
    "sales": 677
  },
  {
    "date": "2023-09-25",
    "category": "飲料",
    "sales": 501
  },
  {
    "date": "2023-09-26",
    "category": "野菜",
    "sales": 864
  },
  {
    "date": "2023-09-26",
    "category": "肉",
    "sales": 669
  },
  {
    "date": "2023-09-26",
    "category": "魚",
    "sales": 874
  },
  {
    "date": "2023-09-26",
    "category": "飲料",
    "sales": 824
  },
  {
    "date": "2023-09-27",
    "category": "野菜",
    "sales": 183
  },
  {
    "date": "2023-09-27",
    "category": "肉",
    "sales": 666
  },
  {
    "date": "2023-09-27",
    "category": "魚",
    "sales": 589
  },
  {
    "date": "2023-09-27",
    "category": "飲料",
    "sales": 559
  },
  {
    "date": "2023-09-28",
    "category": "野菜",
    "sales": 716
  },
  {
    "date": "2023-09-28",
    "category": "肉",
    "sales": 1185
  },
  {
    "date": "2023-09-28",
    "category": "魚",
    "sales": 721
  },
  {
    "date": "2023-09-28",
    "category": "飲料",
    "sales": 356
  },
  {
    "date": "2023-09-29",
    "category": "野菜",
    "sales": 978
  },
  {
    "date": "2023-09-29",
    "category": "肉",
    "sales": 1409
  },
  {
    "date": "2023-09-29",
    "category": "魚",
    "sales": 696
  },
  {
    "date": "2023-09-29",
    "category": "飲料",
    "sales": 638
  },
  {
    "date": "2023-09-30",
    "category": "野菜",
    "sales": 399
  },
  {
    "date": "2023-09-30",
    "category": "肉",
    "sales": 996
  },
  {
    "date": "2023-09-30",
    "category": "魚",
    "sales": 999
  },
  {
    "date": "2023-09-30",
    "category": "飲料",
    "sales": 724
  },
  {
    "date": "2023-10-01",
    "category": "野菜",
    "sales": 1255
  },
  {
    "date": "2023-10-01",
    "category": "肉",
    "sales": 1141
  },
  {
    "date": "2023-10-01",
    "category": "魚",
    "sales": 1405
  },
  {
    "date": "2023-10-01",
    "category": "飲料",
    "sales": 596
  },
  {
    "date": "2023-10-02",
    "category": "野菜",
    "sales": 924
  },
  {
    "date": "2023-10-02",
    "category": "肉",
    "sales": 1009
  },
  {
    "date": "2023-10-02",
    "category": "魚",
    "sales": 1196
  },
  {
    "date": "2023-10-02",
    "category": "飲料",
    "sales": 701
  },
  {
    "date": "2023-10-03",
    "category": "野菜",
    "sales": 1140
  },
  {
    "date": "2023-10-03",
    "category": "肉",
    "sales": 951
  },
  {
    "date": "2023-10-03",
    "category": "魚",
    "sales": 847
  },
  {
    "date": "2023-10-03",
    "category": "飲料",
    "sales": 584
  },
  {
    "date": "2023-10-04",
    "category": "野菜",
    "sales": 940
  },
  {
    "date": "2023-10-04",
    "category": "肉",
    "sales": 1540
  },
  {
    "date": "2023-10-04",
    "category": "魚",
    "sales": 959
  },
  {
    "date": "2023-10-04",
    "category": "飲料",
    "sales": 342
  },
  {
    "date": "2023-10-05",
    "category": "野菜",
    "sales": 767
  },
  {
    "date": "2023-10-05",
    "category": "肉",
    "sales": 1263
  },
  {
    "date": "2023-10-05",
    "category": "魚",
    "sales": 678
  },
  {
    "date": "2023-10-05",
    "category": "飲料",
    "sales": 786
  },
  {
    "date": "2023-10-06",
    "category": "野菜",
    "sales": 1215
  },
  {
    "date": "2023-10-06",
    "category": "肉",
    "sales": 1178
  },
  {
    "date": "2023-10-06",
    "category": "魚",
    "sales": 870
  },
  {
    "date": "2023-10-06",
    "category": "飲料",
    "sales": 902
  },
  {
    "date": "2023-10-07",
    "category": "野菜",
    "sales": 687
  },
  {
    "date": "2023-10-07",
    "category": "肉",
    "sales": 1606
  },
  {
    "date": "2023-10-07",
    "category": "魚",
    "sales": 734
  },
  {
    "date": "2023-10-07",
    "category": "飲料",
    "sales": 717
  },
  {
    "date": "2023-10-08",
    "category": "野菜",
    "sales": 907
  },
  {
    "date": "2023-10-08",
    "category": "肉",
    "sales": 1754
  },
  {
    "date": "2023-10-08",
    "category": "魚",
    "sales": 395
  },
  {
    "date": "2023-10-08",
    "category": "飲料",
    "sales": 223
  },
  {
    "date": "2023-10-09",
    "category": "野菜",
    "sales": 1249
  },
  {
    "date": "2023-10-09",
    "category": "肉",
    "sales": 1258
  },
  {
    "date": "2023-10-09",
    "category": "魚",
    "sales": 804
  },
  {
    "date": "2023-10-09",
    "category": "飲料",
    "sales": 1048
  },
  {
    "date": "2023-10-10",
    "category": "野菜",
    "sales": 799
  },
  {
    "date": "2023-10-10",
    "category": "肉",
    "sales": 463
  },
  {
    "date": "2023-10-10",
    "category": "魚",
    "sales": 895
  },
  {
    "date": "2023-10-10",
    "category": "飲料",
    "sales": 413
  },
  {
    "date": "2023-10-11",
    "category": "野菜",
    "sales": 747
  },
  {
    "date": "2023-10-11",
    "category": "肉",
    "sales": 902
  },
  {
    "date": "2023-10-11",
    "category": "魚",
    "sales": 805
  },
  {
    "date": "2023-10-11",
    "category": "飲料",
    "sales": 1025
  },
  {
    "date": "2023-10-12",
    "category": "野菜",
    "sales": 659
  },
  {
    "date": "2023-10-12",
    "category": "肉",
    "sales": 830
  },
  {
    "date": "2023-10-12",
    "category": "魚",
    "sales": 990
  },
  {
    "date": "2023-10-12",
    "category": "飲料",
    "sales": 561
  },
  {
    "date": "2023-10-13",
    "category": "野菜",
    "sales": 774
  },
  {
    "date": "2023-10-13",
    "category": "肉",
    "sales": 889
  },
  {
    "date": "2023-10-13",
    "category": "魚",
    "sales": 1193
  },
  {
    "date": "2023-10-13",
    "category": "飲料",
    "sales": 666
  },
  {
    "date": "2023-10-14",
    "category": "野菜",
    "sales": 1050
  },
  {
    "date": "2023-10-14",
    "category": "肉",
    "sales": 1560
  },
  {
    "date": "2023-10-14",
    "category": "魚",
    "sales": 920
  },
  {
    "date": "2023-10-14",
    "category": "飲料",
    "sales": 893
  },
  {
    "date": "2023-10-15",
    "category": "野菜",
    "sales": 916
  },
  {
    "date": "2023-10-15",
    "category": "肉",
    "sales": 1311
  },
  {
    "date": "2023-10-15",
    "category": "魚",
    "sales": 931
  },
  {
    "date": "2023-10-15",
    "category": "飲料",
    "sales": 1032
  },
  {
    "date": "2023-10-16",
    "category": "野菜",
    "sales": 851
  },
  {
    "date": "2023-10-16",
    "category": "肉",
    "sales": 429
  },
  {
    "date": "2023-10-16",
    "category": "魚",
    "sales": 525
  },
  {
    "date": "2023-10-16",
    "category": "飲料",
    "sales": 724
  },
  {
    "date": "2023-10-17",
    "category": "野菜",
    "sales": 393
  },
  {
    "date": "2023-10-17",
    "category": "肉",
    "sales": 1028
  },
  {
    "date": "2023-10-17",
    "category": "魚",
    "sales": 1299
  },
  {
    "date": "2023-10-17",
    "category": "飲料",
    "sales": 813
  },
  {
    "date": "2023-10-18",
    "category": "野菜",
    "sales": 1147
  },
  {
    "date": "2023-10-18",
    "category": "肉",
    "sales": 639
  },
  {
    "date": "2023-10-18",
    "category": "魚",
    "sales": 1022
  },
  {
    "date": "2023-10-18",
    "category": "飲料",
    "sales": 895
  },
  {
    "date": "2023-10-19",
    "category": "野菜",
    "sales": 500
  },
  {
    "date": "2023-10-19",
    "category": "肉",
    "sales": 1521
  },
  {
    "date": "2023-10-19",
    "category": "魚",
    "sales": 975
  },
  {
    "date": "2023-10-19",
    "category": "飲料",
    "sales": 745
  },
  {
    "date": "2023-10-20",
    "category": "野菜",
    "sales": 1180
  },
  {
    "date": "2023-10-20",
    "category": "肉",
    "sales": 1412
  },
  {
    "date": "2023-10-20",
    "category": "魚",
    "sales": 575
  },
  {
    "date": "2023-10-20",
    "category": "飲料",
    "sales": 590
  },
  {
    "date": "2023-10-21",
    "category": "野菜",
    "sales": 1474
  },
  {
    "date": "2023-10-21",
    "category": "肉",
    "sales": 1395
  },
  {
    "date": "2023-10-21",
    "category": "魚",
    "sales": 1044
  },
  {
    "date": "2023-10-21",
    "category": "飲料",
    "sales": 665
  },
  {
    "date": "2023-10-22",
    "category": "野菜",
    "sales": 610
  },
  {
    "date": "2023-10-22",
    "category": "肉",
    "sales": 861
  },
  {
    "date": "2023-10-22",
    "category": "魚",
    "sales": 989
  },
  {
    "date": "2023-10-22",
    "category": "飲料",
    "sales": 978
  },
  {
    "date": "2023-10-23",
    "category": "野菜",
    "sales": 511
  },
  {
    "date": "2023-10-23",
    "category": "肉",
    "sales": 1199
  },
  {
    "date": "2023-10-23",
    "category": "魚",
    "sales": 807
  },
  {
    "date": "2023-10-23",
    "category": "飲料",
    "sales": 382
  },
  {
    "date": "2023-10-24",
    "category": "野菜",
    "sales": 900
  },
  {
    "date": "2023-10-24",
    "category": "肉",
    "sales": 1048
  },
  {
    "date": "2023-10-24",
    "category": "魚",
    "sales": 1277
  },
  {
    "date": "2023-10-24",
    "category": "飲料",
    "sales": 792
  },
  {
    "date": "2023-10-25",
    "category": "野菜",
    "sales": 900
  },
  {
    "date": "2023-10-25",
    "category": "肉",
    "sales": 492
  },
  {
    "date": "2023-10-25",
    "category": "魚",
    "sales": 1494
  },
  {
    "date": "2023-10-25",
    "category": "飲料",
    "sales": 423
  },
  {
    "date": "2023-10-26",
    "category": "野菜",
    "sales": 1079
  },
  {
    "date": "2023-10-26",
    "category": "肉",
    "sales": 1693
  },
  {
    "date": "2023-10-26",
    "category": "魚",
    "sales": 828
  },
  {
    "date": "2023-10-26",
    "category": "飲料",
    "sales": 0
  },
  {
    "date": "2023-10-27",
    "category": "野菜",
    "sales": 1272
  },
  {
    "date": "2023-10-27",
    "category": "肉",
    "sales": 811
  },
  {
    "date": "2023-10-27",
    "category": "魚",
    "sales": 1074
  },
  {
    "date": "2023-10-27",
    "category": "飲料",
    "sales": 314
  },
  {
    "date": "2023-10-28",
    "category": "野菜",
    "sales": 1871
  },
  {
    "date": "2023-10-28",
    "category": "肉",
    "sales": 1786
  },
  {
    "date": "2023-10-28",
    "category": "魚",
    "sales": 1032
  },
  {
    "date": "2023-10-28",
    "category": "飲料",
    "sales": 790
  },
  {
    "date": "2023-10-29",
    "category": "野菜",
    "sales": 1260
  },
  {
    "date": "2023-10-29",
    "category": "肉",
    "sales": 1368
  },
  {
    "date": "2023-10-29",
    "category": "魚",
    "sales": 920
  },
  {
    "date": "2023-10-29",
    "category": "飲料",
    "sales": 1111
  },
  {
    "date": "2023-10-30",
    "category": "野菜",
    "sales": 1111
  },
  {
    "date": "2023-10-30",
    "category": "肉",
    "sales": 1224
  },
  {
    "date": "2023-10-30",
    "category": "魚",
    "sales": 795
  },
  {
    "date": "2023-10-30",
    "category": "飲料",
    "sales": 840
  },
  {
    "date": "2023-10-31",
    "category": "野菜",
    "sales": 729
  },
  {
    "date": "2023-10-31",
    "category": "肉",
    "sales": 1159
  },
  {
    "date": "2023-10-31",
    "category": "魚",
    "sales": 1328
  },
  {
    "date": "2023-10-31",
    "category": "飲料",
    "sales": 523
  },
  {
    "date": "2023-11-01",
    "category": "野菜",
    "sales": 860
  },
  {
    "date": "2023-11-01",
    "category": "肉",
    "sales": 1204
  },
  {
    "date": "2023-11-01",
    "category": "魚",
    "sales": 649
  },
  {
    "date": "2023-11-01",
    "category": "飲料",
    "sales": 975
  },
  {
    "date": "2023-11-02",
    "category": "野菜",
    "sales": 364
  },
  {
    "date": "2023-11-02",
    "category": "肉",
    "sales": 1223
  },
  {
    "date": "2023-11-02",
    "category": "魚",
    "sales": 1108
  },
  {
    "date": "2023-11-02",
    "category": "飲料",
    "sales": 373
  },
  {
    "date": "2023-11-03",
    "category": "野菜",
    "sales": 678
  },
  {
    "date": "2023-11-03",
    "category": "肉",
    "sales": 733
  },
  {
    "date": "2023-11-03",
    "category": "魚",
    "sales": 1101
  },
  {
    "date": "2023-11-03",
    "category": "飲料",
    "sales": 778
  },
  {
    "date": "2023-11-04",
    "category": "野菜",
    "sales": 1288
  },
  {
    "date": "2023-11-04",
    "category": "肉",
    "sales": 1194
  },
  {
    "date": "2023-11-04",
    "category": "魚",
    "sales": 1033
  },
  {
    "date": "2023-11-04",
    "category": "飲料",
    "sales": 904
  },
  {
    "date": "2023-11-05",
    "category": "野菜",
    "sales": 686
  },
  {
    "date": "2023-11-05",
    "category": "肉",
    "sales": 1956
  },
  {
    "date": "2023-11-05",
    "category": "魚",
    "sales": 1792
  },
  {
    "date": "2023-11-05",
    "category": "飲料",
    "sales": 621
  },
  {
    "date": "2023-11-06",
    "category": "野菜",
    "sales": 624
  },
  {
    "date": "2023-11-06",
    "category": "肉",
    "sales": 1554
  },
  {
    "date": "2023-11-06",
    "category": "魚",
    "sales": 1178
  },
  {
    "date": "2023-11-06",
    "category": "飲料",
    "sales": 573
  },
  {
    "date": "2023-11-07",
    "category": "野菜",
    "sales": 1179
  },
  {
    "date": "2023-11-07",
    "category": "肉",
    "sales": 999
  },
  {
    "date": "2023-11-07",
    "category": "魚",
    "sales": 920
  },
  {
    "date": "2023-11-07",
    "category": "飲料",
    "sales": 984
  },
  {
    "date": "2023-11-08",
    "category": "野菜",
    "sales": 567
  },
  {
    "date": "2023-11-08",
    "category": "肉",
    "sales": 826
  },
  {
    "date": "2023-11-08",
    "category": "魚",
    "sales": 1280
  },
  {
    "date": "2023-11-08",
    "category": "飲料",
    "sales": 675
  },
  {
    "date": "2023-11-09",
    "category": "野菜",
    "sales": 852
  },
  {
    "date": "2023-11-09",
    "category": "肉",
    "sales": 1842
  },
  {
    "date": "2023-11-09",
    "category": "魚",
    "sales": 999
  },
  {
    "date": "2023-11-09",
    "category": "飲料",
    "sales": 510
  },
  {
    "date": "2023-11-10",
    "category": "野菜",
    "sales": 1211
  },
  {
    "date": "2023-11-10",
    "category": "肉",
    "sales": 1645
  },
  {
    "date": "2023-11-10",
    "category": "魚",
    "sales": 1527
  },
  {
    "date": "2023-11-10",
    "category": "飲料",
    "sales": 589
  },
  {
    "date": "2023-11-11",
    "category": "野菜",
    "sales": 969
  },
  {
    "date": "2023-11-11",
    "category": "肉",
    "sales": 1482
  },
  {
    "date": "2023-11-11",
    "category": "魚",
    "sales": 1411
  },
  {
    "date": "2023-11-11",
    "category": "飲料",
    "sales": 664
  },
  {
    "date": "2023-11-12",
    "category": "野菜",
    "sales": 1219
  },
  {
    "date": "2023-11-12",
    "category": "肉",
    "sales": 1887
  },
  {
    "date": "2023-11-12",
    "category": "魚",
    "sales": 1143
  },
  {
    "date": "2023-11-12",
    "category": "飲料",
    "sales": 489
  },
  {
    "date": "2023-11-13",
    "category": "野菜",
    "sales": 982
  },
  {
    "date": "2023-11-13",
    "category": "肉",
    "sales": 688
  },
  {
    "date": "2023-11-13",
    "category": "魚",
    "sales": 1238
  },
  {
    "date": "2023-11-13",
    "category": "飲料",
    "sales": 808
  },
  {
    "date": "2023-11-14",
    "category": "野菜",
    "sales": 991
  },
  {
    "date": "2023-11-14",
    "category": "肉",
    "sales": 1688
  },
  {
    "date": "2023-11-14",
    "category": "魚",
    "sales": 1288
  },
  {
    "date": "2023-11-14",
    "category": "飲料",
    "sales": 800
  },
  {
    "date": "2023-11-15",
    "category": "野菜",
    "sales": 1149
  },
  {
    "date": "2023-11-15",
    "category": "肉",
    "sales": 664
  },
  {
    "date": "2023-11-15",
    "category": "魚",
    "sales": 1194
  },
  {
    "date": "2023-11-15",
    "category": "飲料",
    "sales": 897
  },
  {
    "date": "2023-11-16",
    "category": "野菜",
    "sales": 667
  },
  {
    "date": "2023-11-16",
    "category": "肉",
    "sales": 1341
  },
  {
    "date": "2023-11-16",
    "category": "魚",
    "sales": 1173
  },
  {
    "date": "2023-11-16",
    "category": "飲料",
    "sales": 420
  },
  {
    "date": "2023-11-17",
    "category": "野菜",
    "sales": 773
  },
  {
    "date": "2023-11-17",
    "category": "肉",
    "sales": 931
  },
  {
    "date": "2023-11-17",
    "category": "魚",
    "sales": 595
  },
  {
    "date": "2023-11-17",
    "category": "飲料",
    "sales": 839
  },
  {
    "date": "2023-11-18",
    "category": "野菜",
    "sales": 800
  },
  {
    "date": "2023-11-18",
    "category": "肉",
    "sales": 1995
  },
  {
    "date": "2023-11-18",
    "category": "魚",
    "sales": 1530
  },
  {
    "date": "2023-11-18",
    "category": "飲料",
    "sales": 823
  },
  {
    "date": "2023-11-19",
    "category": "野菜",
    "sales": 1232
  },
  {
    "date": "2023-11-19",
    "category": "肉",
    "sales": 1656
  },
  {
    "date": "2023-11-19",
    "category": "魚",
    "sales": 1602
  },
  {
    "date": "2023-11-19",
    "category": "飲料",
    "sales": 814
  },
  {
    "date": "2023-11-20",
    "category": "野菜",
    "sales": 733
  },
  {
    "date": "2023-11-20",
    "category": "肉",
    "sales": 908
  },
  {
    "date": "2023-11-20",
    "category": "魚",
    "sales": 939
  },
  {
    "date": "2023-11-20",
    "category": "飲料",
    "sales": 593
  },
  {
    "date": "2023-11-21",
    "category": "野菜",
    "sales": 1232
  },
  {
    "date": "2023-11-21",
    "category": "肉",
    "sales": 1467
  },
  {
    "date": "2023-11-21",
    "category": "魚",
    "sales": 432
  },
  {
    "date": "2023-11-21",
    "category": "飲料",
    "sales": 793
  },
  {
    "date": "2023-11-22",
    "category": "野菜",
    "sales": 852
  },
  {
    "date": "2023-11-22",
    "category": "肉",
    "sales": 1861
  },
  {
    "date": "2023-11-22",
    "category": "魚",
    "sales": 703
  },
  {
    "date": "2023-11-22",
    "category": "飲料",
    "sales": 842
  },
  {
    "date": "2023-11-23",
    "category": "野菜",
    "sales": 607
  },
  {
    "date": "2023-11-23",
    "category": "肉",
    "sales": 1375
  },
  {
    "date": "2023-11-23",
    "category": "魚",
    "sales": 957
  },
  {
    "date": "2023-11-23",
    "category": "飲料",
    "sales": 1020
  },
  {
    "date": "2023-11-24",
    "category": "野菜",
    "sales": 723
  },
  {
    "date": "2023-11-24",
    "category": "肉",
    "sales": 1340
  },
  {
    "date": "2023-11-24",
    "category": "魚",
    "sales": 1006
  },
  {
    "date": "2023-11-24",
    "category": "飲料",
    "sales": 1537
  },
  {
    "date": "2023-11-25",
    "category": "野菜",
    "sales": 1078
  },
  {
    "date": "2023-11-25",
    "category": "肉",
    "sales": 2165
  },
  {
    "date": "2023-11-25",
    "category": "魚",
    "sales": 1239
  },
  {
    "date": "2023-11-25",
    "category": "飲料",
    "sales": 860
  },
  {
    "date": "2023-11-26",
    "category": "野菜",
    "sales": 612
  },
  {
    "date": "2023-11-26",
    "category": "肉",
    "sales": 1621
  },
  {
    "date": "2023-11-26",
    "category": "魚",
    "sales": 1607
  },
  {
    "date": "2023-11-26",
    "category": "飲料",
    "sales": 426
  },
  {
    "date": "2023-11-27",
    "category": "野菜",
    "sales": 1239
  },
  {
    "date": "2023-11-27",
    "category": "肉",
    "sales": 1044
  },
  {
    "date": "2023-11-27",
    "category": "魚",
    "sales": 1240
  },
  {
    "date": "2023-11-27",
    "category": "飲料",
    "sales": 879
  },
  {
    "date": "2023-11-28",
    "category": "野菜",
    "sales": 1108
  },
  {
    "date": "2023-11-28",
    "category": "肉",
    "sales": 1484
  },
  {
    "date": "2023-11-28",
    "category": "魚",
    "sales": 586
  },
  {
    "date": "2023-11-28",
    "category": "飲料",
    "sales": 67
  },
  {
    "date": "2023-11-29",
    "category": "野菜",
    "sales": 546
  },
  {
    "date": "2023-11-29",
    "category": "肉",
    "sales": 1510
  },
  {
    "date": "2023-11-29",
    "category": "魚",
    "sales": 1322
  },
  {
    "date": "2023-11-29",
    "category": "飲料",
    "sales": 742
  },
  {
    "date": "2023-11-30",
    "category": "野菜",
    "sales": 808
  },
  {
    "date": "2023-11-30",
    "category": "肉",
    "sales": 899
  },
  {
    "date": "2023-11-30",
    "category": "魚",
    "sales": 1290
  },
  {
    "date": "2023-11-30",
    "category": "飲料",
    "sales": 883
  },
  {
    "date": "2023-12-01",
    "category": "野菜",
    "sales": 1135
  },
  {
    "date": "2023-12-01",
    "category": "肉",
    "sales": 1644
  },
  {
    "date": "2023-12-01",
    "category": "魚",
    "sales": 1079
  },
  {
    "date": "2023-12-01",
    "category": "飲料",
    "sales": 820
  },
  {
    "date": "2023-12-02",
    "category": "野菜",
    "sales": 1358
  },
  {
    "date": "2023-12-02",
    "category": "肉",
    "sales": 1791
  },
  {
    "date": "2023-12-02",
    "category": "魚",
    "sales": 1405
  },
  {
    "date": "2023-12-02",
    "category": "飲料",
    "sales": 623
  },
  {
    "date": "2023-12-03",
    "category": "野菜",
    "sales": 1177
  },
  {
    "date": "2023-12-03",
    "category": "肉",
    "sales": 1738
  },
  {
    "date": "2023-12-03",
    "category": "魚",
    "sales": 1423
  },
  {
    "date": "2023-12-03",
    "category": "飲料",
    "sales": 548
  },
  {
    "date": "2023-12-04",
    "category": "野菜",
    "sales": 1140
  },
  {
    "date": "2023-12-04",
    "category": "肉",
    "sales": 1306
  },
  {
    "date": "2023-12-04",
    "category": "魚",
    "sales": 661
  },
  {
    "date": "2023-12-04",
    "category": "飲料",
    "sales": 947
  },
  {
    "date": "2023-12-05",
    "category": "野菜",
    "sales": 914
  },
  {
    "date": "2023-12-05",
    "category": "肉",
    "sales": 1504
  },
  {
    "date": "2023-12-05",
    "category": "魚",
    "sales": 1363
  },
  {
    "date": "2023-12-05",
    "category": "飲料",
    "sales": 1413
  },
  {
    "date": "2023-12-06",
    "category": "野菜",
    "sales": 1083
  },
  {
    "date": "2023-12-06",
    "category": "肉",
    "sales": 1270
  },
  {
    "date": "2023-12-06",
    "category": "魚",
    "sales": 912
  },
  {
    "date": "2023-12-06",
    "category": "飲料",
    "sales": 812
  },
  {
    "date": "2023-12-07",
    "category": "野菜",
    "sales": 1123
  },
  {
    "date": "2023-12-07",
    "category": "肉",
    "sales": 1282
  },
  {
    "date": "2023-12-07",
    "category": "魚",
    "sales": 1172
  },
  {
    "date": "2023-12-07",
    "category": "飲料",
    "sales": 1253
  },
  {
    "date": "2023-12-08",
    "category": "野菜",
    "sales": 796
  },
  {
    "date": "2023-12-08",
    "category": "肉",
    "sales": 1320
  },
  {
    "date": "2023-12-08",
    "category": "魚",
    "sales": 973
  },
  {
    "date": "2023-12-08",
    "category": "飲料",
    "sales": 1101
  },
  {
    "date": "2023-12-09",
    "category": "野菜",
    "sales": 1073
  },
  {
    "date": "2023-12-09",
    "category": "肉",
    "sales": 1739
  },
  {
    "date": "2023-12-09",
    "category": "魚",
    "sales": 1950
  },
  {
    "date": "2023-12-09",
    "category": "飲料",
    "sales": 1229
  },
  {
    "date": "2023-12-10",
    "category": "野菜",
    "sales": 1088
  },
  {
    "date": "2023-12-10",
    "category": "肉",
    "sales": 2352
  },
  {
    "date": "2023-12-10",
    "category": "魚",
    "sales": 1441
  },
  {
    "date": "2023-12-10",
    "category": "飲料",
    "sales": 1131
  },
  {
    "date": "2023-12-11",
    "category": "野菜",
    "sales": 648
  },
  {
    "date": "2023-12-11",
    "category": "肉",
    "sales": 1751
  },
  {
    "date": "2023-12-11",
    "category": "魚",
    "sales": 1458
  },
  {
    "date": "2023-12-11",
    "category": "飲料",
    "sales": 788
  },
  {
    "date": "2023-12-12",
    "category": "野菜",
    "sales": 898
  },
  {
    "date": "2023-12-12",
    "category": "肉",
    "sales": 1678
  },
  {
    "date": "2023-12-12",
    "category": "魚",
    "sales": 949
  },
  {
    "date": "2023-12-12",
    "category": "飲料",
    "sales": 845
  },
  {
    "date": "2023-12-13",
    "category": "野菜",
    "sales": 1225
  },
  {
    "date": "2023-12-13",
    "category": "肉",
    "sales": 1515
  },
  {
    "date": "2023-12-13",
    "category": "魚",
    "sales": 1458
  },
  {
    "date": "2023-12-13",
    "category": "飲料",
    "sales": 922
  },
  {
    "date": "2023-12-14",
    "category": "野菜",
    "sales": 1301
  },
  {
    "date": "2023-12-14",
    "category": "肉",
    "sales": 1037
  },
  {
    "date": "2023-12-14",
    "category": "魚",
    "sales": 1628
  },
  {
    "date": "2023-12-14",
    "category": "飲料",
    "sales": 564
  },
  {
    "date": "2023-12-15",
    "category": "野菜",
    "sales": 922
  },
  {
    "date": "2023-12-15",
    "category": "肉",
    "sales": 2287
  },
  {
    "date": "2023-12-15",
    "category": "魚",
    "sales": 604
  },
  {
    "date": "2023-12-15",
    "category": "飲料",
    "sales": 802
  },
  {
    "date": "2023-12-16",
    "category": "野菜",
    "sales": 1014
  },
  {
    "date": "2023-12-16",
    "category": "肉",
    "sales": 1497
  },
  {
    "date": "2023-12-16",
    "category": "魚",
    "sales": 1570
  },
  {
    "date": "2023-12-16",
    "category": "飲料",
    "sales": 898
  },
  {
    "date": "2023-12-17",
    "category": "野菜",
    "sales": 1117
  },
  {
    "date": "2023-12-17",
    "category": "肉",
    "sales": 1984
  },
  {
    "date": "2023-12-17",
    "category": "魚",
    "sales": 1862
  },
  {
    "date": "2023-12-17",
    "category": "飲料",
    "sales": 886
  },
  {
    "date": "2023-12-18",
    "category": "野菜",
    "sales": 1407
  },
  {
    "date": "2023-12-18",
    "category": "肉",
    "sales": 1955
  },
  {
    "date": "2023-12-18",
    "category": "魚",
    "sales": 1455
  },
  {
    "date": "2023-12-18",
    "category": "飲料",
    "sales": 955
  },
  {
    "date": "2023-12-19",
    "category": "野菜",
    "sales": 1032
  },
  {
    "date": "2023-12-19",
    "category": "肉",
    "sales": 1364
  },
  {
    "date": "2023-12-19",
    "category": "魚",
    "sales": 1029
  },
  {
    "date": "2023-12-19",
    "category": "飲料",
    "sales": 1019
  },
  {
    "date": "2023-12-20",
    "category": "野菜",
    "sales": 1325
  },
  {
    "date": "2023-12-20",
    "category": "肉",
    "sales": 1387
  },
  {
    "date": "2023-12-20",
    "category": "魚",
    "sales": 1469
  },
  {
    "date": "2023-12-20",
    "category": "飲料",
    "sales": 626
  },
  {
    "date": "2023-12-21",
    "category": "野菜",
    "sales": 1103
  },
  {
    "date": "2023-12-21",
    "category": "肉",
    "sales": 1245
  },
  {
    "date": "2023-12-21",
    "category": "魚",
    "sales": 1613
  },
  {
    "date": "2023-12-21",
    "category": "飲料",
    "sales": 775
  },
  {
    "date": "2023-12-22",
    "category": "野菜",
    "sales": 1172
  },
  {
    "date": "2023-12-22",
    "category": "肉",
    "sales": 1410
  },
  {
    "date": "2023-12-22",
    "category": "魚",
    "sales": 1600
  },
  {
    "date": "2023-12-22",
    "category": "飲料",
    "sales": 1084
  },
  {
    "date": "2023-12-23",
    "category": "野菜",
    "sales": 1718
  },
  {
    "date": "2023-12-23",
    "category": "肉",
    "sales": 2045
  },
  {
    "date": "2023-12-23",
    "category": "魚",
    "sales": 1744
  },
  {
    "date": "2023-12-23",
    "category": "飲料",
    "sales": 1133
  },
  {
    "date": "2023-12-24",
    "category": "野菜",
    "sales": 1439
  },
  {
    "date": "2023-12-24",
    "category": "肉",
    "sales": 1888
  },
  {
    "date": "2023-12-24",
    "category": "魚",
    "sales": 1534
  },
  {
    "date": "2023-12-24",
    "category": "飲料",
    "sales": 1586
  },
  {
    "date": "2023-12-25",
    "category": "野菜",
    "sales": 1132
  },
  {
    "date": "2023-12-25",
    "category": "肉",
    "sales": 1247
  },
  {
    "date": "2023-12-25",
    "category": "魚",
    "sales": 1324
  },
  {
    "date": "2023-12-25",
    "category": "飲料",
    "sales": 709
  },
  {
    "date": "2023-12-26",
    "category": "野菜",
    "sales": 692
  },
  {
    "date": "2023-12-26",
    "category": "肉",
    "sales": 1747
  },
  {
    "date": "2023-12-26",
    "category": "魚",
    "sales": 1189
  },
  {
    "date": "2023-12-26",
    "category": "飲料",
    "sales": 140
  },
  {
    "date": "2023-12-27",
    "category": "野菜",
    "sales": 729
  },
  {
    "date": "2023-12-27",
    "category": "肉",
    "sales": 1744
  },
  {
    "date": "2023-12-27",
    "category": "魚",
    "sales": 1037
  },
  {
    "date": "2023-12-27",
    "category": "飲料",
    "sales": 725
  },
  {
    "date": "2023-12-28",
    "category": "野菜",
    "sales": 450
  },
  {
    "date": "2023-12-28",
    "category": "肉",
    "sales": 1681
  },
  {
    "date": "2023-12-28",
    "category": "魚",
    "sales": 1813
  },
  {
    "date": "2023-12-28",
    "category": "飲料",
    "sales": 1650
  },
  {
    "date": "2023-12-29",
    "category": "野菜",
    "sales": 1230
  },
  {
    "date": "2023-12-29",
    "category": "肉",
    "sales": 2081
  },
  {
    "date": "2023-12-29",
    "category": "魚",
    "sales": 1042
  },
  {
    "date": "2023-12-29",
    "category": "飲料",
    "sales": 920
  },
  {
    "date": "2023-12-30",
    "category": "野菜",
    "sales": 1385
  },
  {
    "date": "2023-12-30",
    "category": "肉",
    "sales": 1683
  },
  {
    "date": "2023-12-30",
    "category": "魚",
    "sales": 1720
  },
  {
    "date": "2023-12-30",
    "category": "飲料",
    "sales": 666
  },
  {
    "date": "2023-12-31",
    "category": "野菜",
    "sales": 1080
  },
  {
    "date": "2023-12-31",
    "category": "肉",
    "sales": 2728
  },
  {
    "date": "2023-12-31",
    "category": "魚",
    "sales": 1665
  },
  {
    "date": "2023-12-31",
    "category": "飲料",
    "sales": 1136
  },
  {
    "date": "2024-01-01",
    "category": "野菜",
    "sales": 1514
  },
  {
    "date": "2024-01-01",
    "category": "肉",
    "sales": 1529
  },
  {
    "date": "2024-01-01",
    "category": "魚",
    "sales": 1010
  },
  {
    "date": "2024-01-01",
    "category": "飲料",
    "sales": 489
  },
  {
    "date": "2024-01-02",
    "category": "野菜",
    "sales": 1282
  },
  {
    "date": "2024-01-02",
    "category": "肉",
    "sales": 1370
  },
  {
    "date": "2024-01-02",
    "category": "魚",
    "sales": 896
  },
  {
    "date": "2024-01-02",
    "category": "飲料",
    "sales": 731
  },
  {
    "date": "2024-01-03",
    "category": "野菜",
    "sales": 1230
  },
  {
    "date": "2024-01-03",
    "category": "肉",
    "sales": 1999
  },
  {
    "date": "2024-01-03",
    "category": "魚",
    "sales": 930
  },
  {
    "date": "2024-01-03",
    "category": "飲料",
    "sales": 1240
  },
  {
    "date": "2024-01-04",
    "category": "野菜",
    "sales": 532
  },
  {
    "date": "2024-01-04",
    "category": "肉",
    "sales": 1287
  },
  {
    "date": "2024-01-04",
    "category": "魚",
    "sales": 1304
  },
  {
    "date": "2024-01-04",
    "category": "飲料",
    "sales": 883
  },
  {
    "date": "2024-01-05",
    "category": "野菜",
    "sales": 1303
  },
  {
    "date": "2024-01-05",
    "category": "肉",
    "sales": 1792
  },
  {
    "date": "2024-01-05",
    "category": "魚",
    "sales": 1144
  },
  {
    "date": "2024-01-05",
    "category": "飲料",
    "sales": 563
  },
  {
    "date": "2024-01-06",
    "category": "野菜",
    "sales": 2003
  },
  {
    "date": "2024-01-06",
    "category": "肉",
    "sales": 2004
  },
  {
    "date": "2024-01-06",
    "category": "魚",
    "sales": 2090
  },
  {
    "date": "2024-01-06",
    "category": "飲料",
    "sales": 1088
  },
  {
    "date": "2024-01-07",
    "category": "野菜",
    "sales": 1522
  },
  {
    "date": "2024-01-07",
    "category": "肉",
    "sales": 2123
  },
  {
    "date": "2024-01-07",
    "category": "魚",
    "sales": 1556
  },
  {
    "date": "2024-01-07",
    "category": "飲料",
    "sales": 1363
  },
  {
    "date": "2024-01-08",
    "category": "野菜",
    "sales": 1105
  },
  {
    "date": "2024-01-08",
    "category": "肉",
    "sales": 1986
  },
  {
    "date": "2024-01-08",
    "category": "魚",
    "sales": 1155
  },
  {
    "date": "2024-01-08",
    "category": "飲料",
    "sales": 980
  },
  {
    "date": "2024-01-09",
    "category": "野菜",
    "sales": 1595
  },
  {
    "date": "2024-01-09",
    "category": "肉",
    "sales": 1680
  },
  {
    "date": "2024-01-09",
    "category": "魚",
    "sales": 1318
  },
  {
    "date": "2024-01-09",
    "category": "飲料",
    "sales": 1218
  },
  {
    "date": "2024-01-10",
    "category": "野菜",
    "sales": 1485
  },
  {
    "date": "2024-01-10",
    "category": "肉",
    "sales": 1951
  },
  {
    "date": "2024-01-10",
    "category": "魚",
    "sales": 1365
  },
  {
    "date": "2024-01-10",
    "category": "飲料",
    "sales": 1124
  },
  {
    "date": "2024-01-11",
    "category": "野菜",
    "sales": 1064
  },
  {
    "date": "2024-01-11",
    "category": "肉",
    "sales": 2087
  },
  {
    "date": "2024-01-11",
    "category": "魚",
    "sales": 1795
  },
  {
    "date": "2024-01-11",
    "category": "飲料",
    "sales": 878
  },
  {
    "date": "2024-01-12",
    "category": "野菜",
    "sales": 738
  },
  {
    "date": "2024-01-12",
    "category": "肉",
    "sales": 1527
  },
  {
    "date": "2024-01-12",
    "category": "魚",
    "sales": 1300
  },
  {
    "date": "2024-01-12",
    "category": "飲料",
    "sales": 1206
  },
  {
    "date": "2024-01-13",
    "category": "野菜",
    "sales": 1612
  },
  {
    "date": "2024-01-13",
    "category": "肉",
    "sales": 2405
  },
  {
    "date": "2024-01-13",
    "category": "魚",
    "sales": 1844
  },
  {
    "date": "2024-01-13",
    "category": "飲料",
    "sales": 1140
  },
  {
    "date": "2024-01-14",
    "category": "野菜",
    "sales": 1682
  },
  {
    "date": "2024-01-14",
    "category": "肉",
    "sales": 2194
  },
  {
    "date": "2024-01-14",
    "category": "魚",
    "sales": 2271
  },
  {
    "date": "2024-01-14",
    "category": "飲料",
    "sales": 1402
  },
  {
    "date": "2024-01-15",
    "category": "野菜",
    "sales": 1141
  },
  {
    "date": "2024-01-15",
    "category": "肉",
    "sales": 1976
  },
  {
    "date": "2024-01-15",
    "category": "魚",
    "sales": 1400
  },
  {
    "date": "2024-01-15",
    "category": "飲料",
    "sales": 1052
  },
  {
    "date": "2024-01-16",
    "category": "野菜",
    "sales": 873
  },
  {
    "date": "2024-01-16",
    "category": "肉",
    "sales": 2170
  },
  {
    "date": "2024-01-16",
    "category": "魚",
    "sales": 1474
  },
  {
    "date": "2024-01-16",
    "category": "飲料",
    "sales": 1447
  },
  {
    "date": "2024-01-17",
    "category": "野菜",
    "sales": 1568
  },
  {
    "date": "2024-01-17",
    "category": "肉",
    "sales": 1986
  },
  {
    "date": "2024-01-17",
    "category": "魚",
    "sales": 1430
  },
  {
    "date": "2024-01-17",
    "category": "飲料",
    "sales": 475
  },
  {
    "date": "2024-01-18",
    "category": "野菜",
    "sales": 1404
  },
  {
    "date": "2024-01-18",
    "category": "肉",
    "sales": 2263
  },
  {
    "date": "2024-01-18",
    "category": "魚",
    "sales": 1851
  },
  {
    "date": "2024-01-18",
    "category": "飲料",
    "sales": 774
  },
  {
    "date": "2024-01-19",
    "category": "野菜",
    "sales": 1815
  },
  {
    "date": "2024-01-19",
    "category": "肉",
    "sales": 1934
  },
  {
    "date": "2024-01-19",
    "category": "魚",
    "sales": 1606
  },
  {
    "date": "2024-01-19",
    "category": "飲料",
    "sales": 1092
  },
  {
    "date": "2024-01-20",
    "category": "野菜",
    "sales": 1920
  },
  {
    "date": "2024-01-20",
    "category": "肉",
    "sales": 2209
  },
  {
    "date": "2024-01-20",
    "category": "魚",
    "sales": 2241
  },
  {
    "date": "2024-01-20",
    "category": "飲料",
    "sales": 1209
  },
  {
    "date": "2024-01-21",
    "category": "野菜",
    "sales": 1837
  },
  {
    "date": "2024-01-21",
    "category": "肉",
    "sales": 2451
  },
  {
    "date": "2024-01-21",
    "category": "魚",
    "sales": 1618
  },
  {
    "date": "2024-01-21",
    "category": "飲料",
    "sales": 1336
  },
  {
    "date": "2024-01-22",
    "category": "野菜",
    "sales": 1667
  },
  {
    "date": "2024-01-22",
    "category": "肉",
    "sales": 1886
  },
  {
    "date": "2024-01-22",
    "category": "魚",
    "sales": 1156
  },
  {
    "date": "2024-01-22",
    "category": "飲料",
    "sales": 854
  },
  {
    "date": "2024-01-23",
    "category": "野菜",
    "sales": 1693
  },
  {
    "date": "2024-01-23",
    "category": "肉",
    "sales": 1676
  },
  {
    "date": "2024-01-23",
    "category": "魚",
    "sales": 1545
  },
  {
    "date": "2024-01-23",
    "category": "飲料",
    "sales": 1169
  },
  {
    "date": "2024-01-24",
    "category": "野菜",
    "sales": 1502
  },
  {
    "date": "2024-01-24",
    "category": "肉",
    "sales": 1881
  },
  {
    "date": "2024-01-24",
    "category": "魚",
    "sales": 1358
  },
  {
    "date": "2024-01-24",
    "category": "飲料",
    "sales": 1116
  },
  {
    "date": "2024-01-25",
    "category": "野菜",
    "sales": 775
  },
  {
    "date": "2024-01-25",
    "category": "肉",
    "sales": 1721
  },
  {
    "date": "2024-01-25",
    "category": "魚",
    "sales": 1874
  },
  {
    "date": "2024-01-25",
    "category": "飲料",
    "sales": 634
  },
  {
    "date": "2024-01-26",
    "category": "野菜",
    "sales": 1394
  },
  {
    "date": "2024-01-26",
    "category": "肉",
    "sales": 1870
  },
  {
    "date": "2024-01-26",
    "category": "魚",
    "sales": 1865
  },
  {
    "date": "2024-01-26",
    "category": "飲料",
    "sales": 1231
  },
  {
    "date": "2024-01-27",
    "category": "野菜",
    "sales": 1154
  },
  {
    "date": "2024-01-27",
    "category": "肉",
    "sales": 2611
  },
  {
    "date": "2024-01-27",
    "category": "魚",
    "sales": 1871
  },
  {
    "date": "2024-01-27",
    "category": "飲料",
    "sales": 1014
  },
  {
    "date": "2024-01-28",
    "category": "野菜",
    "sales": 1572
  },
  {
    "date": "2024-01-28",
    "category": "肉",
    "sales": 3153
  },
  {
    "date": "2024-01-28",
    "category": "魚",
    "sales": 1652
  },
  {
    "date": "2024-01-28",
    "category": "飲料",
    "sales": 1088
  },
  {
    "date": "2024-01-29",
    "category": "野菜",
    "sales": 1430
  },
  {
    "date": "2024-01-29",
    "category": "肉",
    "sales": 2032
  },
  {
    "date": "2024-01-29",
    "category": "魚",
    "sales": 1680
  },
  {
    "date": "2024-01-29",
    "category": "飲料",
    "sales": 887
  },
  {
    "date": "2024-01-30",
    "category": "野菜",
    "sales": 1021
  },
  {
    "date": "2024-01-30",
    "category": "肉",
    "sales": 2215
  },
  {
    "date": "2024-01-30",
    "category": "魚",
    "sales": 1835
  },
  {
    "date": "2024-01-30",
    "category": "飲料",
    "sales": 945
  },
  {
    "date": "2024-01-31",
    "category": "野菜",
    "sales": 1699
  },
  {
    "date": "2024-01-31",
    "category": "肉",
    "sales": 2267
  },
  {
    "date": "2024-01-31",
    "category": "魚",
    "sales": 1292
  },
  {
    "date": "2024-01-31",
    "category": "飲料",
    "sales": 701
  },
  {
    "date": "2024-02-01",
    "category": "野菜",
    "sales": 1146
  },
  {
    "date": "2024-02-01",
    "category": "肉",
    "sales": 2131
  },
  {
    "date": "2024-02-01",
    "category": "魚",
    "sales": 1993
  },
  {
    "date": "2024-02-01",
    "category": "飲料",
    "sales": 1162
  },
  {
    "date": "2024-02-02",
    "category": "野菜",
    "sales": 1234
  },
  {
    "date": "2024-02-02",
    "category": "肉",
    "sales": 2026
  },
  {
    "date": "2024-02-02",
    "category": "魚",
    "sales": 1706
  },
  {
    "date": "2024-02-02",
    "category": "飲料",
    "sales": 1345
  },
  {
    "date": "2024-02-03",
    "category": "野菜",
    "sales": 1596
  },
  {
    "date": "2024-02-03",
    "category": "肉",
    "sales": 3177
  },
  {
    "date": "2024-02-03",
    "category": "魚",
    "sales": 2157
  },
  {
    "date": "2024-02-03",
    "category": "飲料",
    "sales": 1660
  },
  {
    "date": "2024-02-04",
    "category": "野菜",
    "sales": 1375
  },
  {
    "date": "2024-02-04",
    "category": "肉",
    "sales": 2224
  },
  {
    "date": "2024-02-04",
    "category": "魚",
    "sales": 2300
  },
  {
    "date": "2024-02-04",
    "category": "飲料",
    "sales": 1244
  },
  {
    "date": "2024-02-05",
    "category": "野菜",
    "sales": 1356
  },
  {
    "date": "2024-02-05",
    "category": "肉",
    "sales": 2034
  },
  {
    "date": "2024-02-05",
    "category": "魚",
    "sales": 1465
  },
  {
    "date": "2024-02-05",
    "category": "飲料",
    "sales": 1172
  },
  {
    "date": "2024-02-06",
    "category": "野菜",
    "sales": 1047
  },
  {
    "date": "2024-02-06",
    "category": "肉",
    "sales": 2101
  },
  {
    "date": "2024-02-06",
    "category": "魚",
    "sales": 1255
  },
  {
    "date": "2024-02-06",
    "category": "飲料",
    "sales": 1467
  },
  {
    "date": "2024-02-07",
    "category": "野菜",
    "sales": 1122
  },
  {
    "date": "2024-02-07",
    "category": "肉",
    "sales": 2100
  },
  {
    "date": "2024-02-07",
    "category": "魚",
    "sales": 1384
  },
  {
    "date": "2024-02-07",
    "category": "飲料",
    "sales": 1876
  },
  {
    "date": "2024-02-08",
    "category": "野菜",
    "sales": 1718
  },
  {
    "date": "2024-02-08",
    "category": "肉",
    "sales": 1921
  },
  {
    "date": "2024-02-08",
    "category": "魚",
    "sales": 1849
  },
  {
    "date": "2024-02-08",
    "category": "飲料",
    "sales": 1535
  },
  {
    "date": "2024-02-09",
    "category": "野菜",
    "sales": 1555
  },
  {
    "date": "2024-02-09",
    "category": "肉",
    "sales": 2500
  },
  {
    "date": "2024-02-09",
    "category": "魚",
    "sales": 1759
  },
  {
    "date": "2024-02-09",
    "category": "飲料",
    "sales": 929
  },
  {
    "date": "2024-02-10",
    "category": "野菜",
    "sales": 2131
  },
  {
    "date": "2024-02-10",
    "category": "肉",
    "sales": 2263
  },
  {
    "date": "2024-02-10",
    "category": "魚",
    "sales": 1800
  },
  {
    "date": "2024-02-10",
    "category": "飲料",
    "sales": 1026
  },
  {
    "date": "2024-02-11",
    "category": "野菜",
    "sales": 1376
  },
  {
    "date": "2024-02-11",
    "category": "肉",
    "sales": 2304
  },
  {
    "date": "2024-02-11",
    "category": "魚",
    "sales": 2467
  },
  {
    "date": "2024-02-11",
    "category": "飲料",
    "sales": 1782
  },
  {
    "date": "2024-02-12",
    "category": "野菜",
    "sales": 1736
  },
  {
    "date": "2024-02-12",
    "category": "肉",
    "sales": 2069
  },
  {
    "date": "2024-02-12",
    "category": "魚",
    "sales": 1941
  },
  {
    "date": "2024-02-12",
    "category": "飲料",
    "sales": 1057
  },
  {
    "date": "2024-02-13",
    "category": "野菜",
    "sales": 1394
  },
  {
    "date": "2024-02-13",
    "category": "肉",
    "sales": 2472
  },
  {
    "date": "2024-02-13",
    "category": "魚",
    "sales": 1851
  },
  {
    "date": "2024-02-13",
    "category": "飲料",
    "sales": 1060
  },
  {
    "date": "2024-02-14",
    "category": "野菜",
    "sales": 1489
  },
  {
    "date": "2024-02-14",
    "category": "肉",
    "sales": 2388
  },
  {
    "date": "2024-02-14",
    "category": "魚",
    "sales": 1724
  },
  {
    "date": "2024-02-14",
    "category": "飲料",
    "sales": 385
  },
  {
    "date": "2024-02-15",
    "category": "野菜",
    "sales": 1205
  },
  {
    "date": "2024-02-15",
    "category": "肉",
    "sales": 2327
  },
  {
    "date": "2024-02-15",
    "category": "魚",
    "sales": 1367
  },
  {
    "date": "2024-02-15",
    "category": "飲料",
    "sales": 547
  },
  {
    "date": "2024-02-16",
    "category": "野菜",
    "sales": 1254
  },
  {
    "date": "2024-02-16",
    "category": "肉",
    "sales": 2339
  },
  {
    "date": "2024-02-16",
    "category": "魚",
    "sales": 1521
  },
  {
    "date": "2024-02-16",
    "category": "飲料",
    "sales": 1441
  },
  {
    "date": "2024-02-17",
    "category": "野菜",
    "sales": 1879
  },
  {
    "date": "2024-02-17",
    "category": "肉",
    "sales": 2610
  },
  {
    "date": "2024-02-17",
    "category": "魚",
    "sales": 1746
  },
  {
    "date": "2024-02-17",
    "category": "飲料",
    "sales": 1329
  },
  {
    "date": "2024-02-18",
    "category": "野菜",
    "sales": 1910
  },
  {
    "date": "2024-02-18",
    "category": "肉",
    "sales": 3025
  },
  {
    "date": "2024-02-18",
    "category": "魚",
    "sales": 2073
  },
  {
    "date": "2024-02-18",
    "category": "飲料",
    "sales": 1515
  },
  {
    "date": "2024-02-19",
    "category": "野菜",
    "sales": 1525
  },
  {
    "date": "2024-02-19",
    "category": "肉",
    "sales": 2321
  },
  {
    "date": "2024-02-19",
    "category": "魚",
    "sales": 1808
  },
  {
    "date": "2024-02-19",
    "category": "飲料",
    "sales": 1236
  },
  {
    "date": "2024-02-20",
    "category": "野菜",
    "sales": 1465
  },
  {
    "date": "2024-02-20",
    "category": "肉",
    "sales": 2351
  },
  {
    "date": "2024-02-20",
    "category": "魚",
    "sales": 1915
  },
  {
    "date": "2024-02-20",
    "category": "飲料",
    "sales": 1449
  },
  {
    "date": "2024-02-21",
    "category": "野菜",
    "sales": 1336
  },
  {
    "date": "2024-02-21",
    "category": "肉",
    "sales": 2384
  },
  {
    "date": "2024-02-21",
    "category": "魚",
    "sales": 1865
  },
  {
    "date": "2024-02-21",
    "category": "飲料",
    "sales": 1244
  },
  {
    "date": "2024-02-22",
    "category": "野菜",
    "sales": 1459
  },
  {
    "date": "2024-02-22",
    "category": "肉",
    "sales": 1973
  },
  {
    "date": "2024-02-22",
    "category": "魚",
    "sales": 2004
  },
  {
    "date": "2024-02-22",
    "category": "飲料",
    "sales": 1216
  },
  {
    "date": "2024-02-23",
    "category": "野菜",
    "sales": 1087
  },
  {
    "date": "2024-02-23",
    "category": "肉",
    "sales": 1968
  },
  {
    "date": "2024-02-23",
    "category": "魚",
    "sales": 1829
  },
  {
    "date": "2024-02-23",
    "category": "飲料",
    "sales": 1075
  },
  {
    "date": "2024-02-24",
    "category": "野菜",
    "sales": 1203
  },
  {
    "date": "2024-02-24",
    "category": "肉",
    "sales": 2040
  },
  {
    "date": "2024-02-24",
    "category": "魚",
    "sales": 2037
  },
  {
    "date": "2024-02-24",
    "category": "飲料",
    "sales": 889
  },
  {
    "date": "2024-02-25",
    "category": "野菜",
    "sales": 1993
  },
  {
    "date": "2024-02-25",
    "category": "肉",
    "sales": 2907
  },
  {
    "date": "2024-02-25",
    "category": "魚",
    "sales": 2196
  },
  {
    "date": "2024-02-25",
    "category": "飲料",
    "sales": 1112
  },
  {
    "date": "2024-02-26",
    "category": "野菜",
    "sales": 1766
  },
  {
    "date": "2024-02-26",
    "category": "肉",
    "sales": 2149
  },
  {
    "date": "2024-02-26",
    "category": "魚",
    "sales": 1821
  },
  {
    "date": "2024-02-26",
    "category": "飲料",
    "sales": 1399
  },
  {
    "date": "2024-02-27",
    "category": "野菜",
    "sales": 1522
  },
  {
    "date": "2024-02-27",
    "category": "肉",
    "sales": 2341
  },
  {
    "date": "2024-02-27",
    "category": "魚",
    "sales": 2039
  },
  {
    "date": "2024-02-27",
    "category": "飲料",
    "sales": 1256
  },
  {
    "date": "2024-02-28",
    "category": "野菜",
    "sales": 1191
  },
  {
    "date": "2024-02-28",
    "category": "肉",
    "sales": 2446
  },
  {
    "date": "2024-02-28",
    "category": "魚",
    "sales": 1412
  },
  {
    "date": "2024-02-28",
    "category": "飲料",
    "sales": 987
  },
  {
    "date": "2024-02-29",
    "category": "野菜",
    "sales": 1286
  },
  {
    "date": "2024-02-29",
    "category": "肉",
    "sales": 1915
  },
  {
    "date": "2024-02-29",
    "category": "魚",
    "sales": 981
  },
  {
    "date": "2024-02-29",
    "category": "飲料",
    "sales": 1298
  },
  {
    "date": "2024-03-01",
    "category": "野菜",
    "sales": 1404
  },
  {
    "date": "2024-03-01",
    "category": "肉",
    "sales": 2924
  },
  {
    "date": "2024-03-01",
    "category": "魚",
    "sales": 1498
  },
  {
    "date": "2024-03-01",
    "category": "飲料",
    "sales": 1239
  },
  {
    "date": "2024-03-02",
    "category": "野菜",
    "sales": 1602
  },
  {
    "date": "2024-03-02",
    "category": "肉",
    "sales": 2447
  },
  {
    "date": "2024-03-02",
    "category": "魚",
    "sales": 2070
  },
  {
    "date": "2024-03-02",
    "category": "飲料",
    "sales": 1409
  },
  {
    "date": "2024-03-03",
    "category": "野菜",
    "sales": 1894
  },
  {
    "date": "2024-03-03",
    "category": "肉",
    "sales": 2527
  },
  {
    "date": "2024-03-03",
    "category": "魚",
    "sales": 2444
  },
  {
    "date": "2024-03-03",
    "category": "飲料",
    "sales": 1289
  },
  {
    "date": "2024-03-04",
    "category": "野菜",
    "sales": 1177
  },
  {
    "date": "2024-03-04",
    "category": "肉",
    "sales": 2391
  },
  {
    "date": "2024-03-04",
    "category": "魚",
    "sales": 1676
  },
  {
    "date": "2024-03-04",
    "category": "飲料",
    "sales": 1211
  },
  {
    "date": "2024-03-05",
    "category": "野菜",
    "sales": 1404
  },
  {
    "date": "2024-03-05",
    "category": "肉",
    "sales": 2634
  },
  {
    "date": "2024-03-05",
    "category": "魚",
    "sales": 1741
  },
  {
    "date": "2024-03-05",
    "category": "飲料",
    "sales": 1652
  },
  {
    "date": "2024-03-06",
    "category": "野菜",
    "sales": 1535
  },
  {
    "date": "2024-03-06",
    "category": "肉",
    "sales": 1923
  },
  {
    "date": "2024-03-06",
    "category": "魚",
    "sales": 1396
  },
  {
    "date": "2024-03-06",
    "category": "飲料",
    "sales": 798
  },
  {
    "date": "2024-03-07",
    "category": "野菜",
    "sales": 1917
  },
  {
    "date": "2024-03-07",
    "category": "肉",
    "sales": 2679
  },
  {
    "date": "2024-03-07",
    "category": "魚",
    "sales": 1810
  },
  {
    "date": "2024-03-07",
    "category": "飲料",
    "sales": 1550
  },
  {
    "date": "2024-03-08",
    "category": "野菜",
    "sales": 1492
  },
  {
    "date": "2024-03-08",
    "category": "肉",
    "sales": 3014
  },
  {
    "date": "2024-03-08",
    "category": "魚",
    "sales": 1917
  },
  {
    "date": "2024-03-08",
    "category": "飲料",
    "sales": 856
  },
  {
    "date": "2024-03-09",
    "category": "野菜",
    "sales": 2254
  },
  {
    "date": "2024-03-09",
    "category": "肉",
    "sales": 2633
  },
  {
    "date": "2024-03-09",
    "category": "魚",
    "sales": 2072
  },
  {
    "date": "2024-03-09",
    "category": "飲料",
    "sales": 706
  },
  {
    "date": "2024-03-10",
    "category": "野菜",
    "sales": 2295
  },
  {
    "date": "2024-03-10",
    "category": "肉",
    "sales": 2750
  },
  {
    "date": "2024-03-10",
    "category": "魚",
    "sales": 2472
  },
  {
    "date": "2024-03-10",
    "category": "飲料",
    "sales": 1454
  },
  {
    "date": "2024-03-11",
    "category": "野菜",
    "sales": 2064
  },
  {
    "date": "2024-03-11",
    "category": "肉",
    "sales": 2711
  },
  {
    "date": "2024-03-11",
    "category": "魚",
    "sales": 1572
  },
  {
    "date": "2024-03-11",
    "category": "飲料",
    "sales": 533
  },
  {
    "date": "2024-03-12",
    "category": "野菜",
    "sales": 1834
  },
  {
    "date": "2024-03-12",
    "category": "肉",
    "sales": 2108
  },
  {
    "date": "2024-03-12",
    "category": "魚",
    "sales": 1758
  },
  {
    "date": "2024-03-12",
    "category": "飲料",
    "sales": 910
  },
  {
    "date": "2024-03-13",
    "category": "野菜",
    "sales": 1320
  },
  {
    "date": "2024-03-13",
    "category": "肉",
    "sales": 2059
  },
  {
    "date": "2024-03-13",
    "category": "魚",
    "sales": 1665
  },
  {
    "date": "2024-03-13",
    "category": "飲料",
    "sales": 1005
  },
  {
    "date": "2024-03-14",
    "category": "野菜",
    "sales": 1987
  },
  {
    "date": "2024-03-14",
    "category": "肉",
    "sales": 2091
  },
  {
    "date": "2024-03-14",
    "category": "魚",
    "sales": 1501
  },
  {
    "date": "2024-03-14",
    "category": "飲料",
    "sales": 742
  },
  {
    "date": "2024-03-15",
    "category": "野菜",
    "sales": 1564
  },
  {
    "date": "2024-03-15",
    "category": "肉",
    "sales": 2315
  },
  {
    "date": "2024-03-15",
    "category": "魚",
    "sales": 1460
  },
  {
    "date": "2024-03-15",
    "category": "飲料",
    "sales": 1913
  },
  {
    "date": "2024-03-16",
    "category": "野菜",
    "sales": 1969
  },
  {
    "date": "2024-03-16",
    "category": "肉",
    "sales": 2451
  },
  {
    "date": "2024-03-16",
    "category": "魚",
    "sales": 2153
  },
  {
    "date": "2024-03-16",
    "category": "飲料",
    "sales": 1578
  },
  {
    "date": "2024-03-17",
    "category": "野菜",
    "sales": 1521
  },
  {
    "date": "2024-03-17",
    "category": "肉",
    "sales": 2812
  },
  {
    "date": "2024-03-17",
    "category": "魚",
    "sales": 1985
  },
  {
    "date": "2024-03-17",
    "category": "飲料",
    "sales": 1431
  },
  {
    "date": "2024-03-18",
    "category": "野菜",
    "sales": 1701
  },
  {
    "date": "2024-03-18",
    "category": "肉",
    "sales": 2346
  },
  {
    "date": "2024-03-18",
    "category": "魚",
    "sales": 1885
  },
  {
    "date": "2024-03-18",
    "category": "飲料",
    "sales": 1110
  },
  {
    "date": "2024-03-19",
    "category": "野菜",
    "sales": 1279
  },
  {
    "date": "2024-03-19",
    "category": "肉",
    "sales": 2800
  },
  {
    "date": "2024-03-19",
    "category": "魚",
    "sales": 2263
  },
  {
    "date": "2024-03-19",
    "category": "飲料",
    "sales": 1062
  },
  {
    "date": "2024-03-20",
    "category": "野菜",
    "sales": 1806
  },
  {
    "date": "2024-03-20",
    "category": "肉",
    "sales": 2074
  },
  {
    "date": "2024-03-20",
    "category": "魚",
    "sales": 1917
  },
  {
    "date": "2024-03-20",
    "category": "飲料",
    "sales": 1236
  },
  {
    "date": "2024-03-21",
    "category": "野菜",
    "sales": 1865
  },
  {
    "date": "2024-03-21",
    "category": "肉",
    "sales": 1881
  },
  {
    "date": "2024-03-21",
    "category": "魚",
    "sales": 2036
  },
  {
    "date": "2024-03-21",
    "category": "飲料",
    "sales": 1170
  },
  {
    "date": "2024-03-22",
    "category": "野菜",
    "sales": 1646
  },
  {
    "date": "2024-03-22",
    "category": "肉",
    "sales": 2277
  },
  {
    "date": "2024-03-22",
    "category": "魚",
    "sales": 2267
  },
  {
    "date": "2024-03-22",
    "category": "飲料",
    "sales": 1490
  },
  {
    "date": "2024-03-23",
    "category": "野菜",
    "sales": 1940
  },
  {
    "date": "2024-03-23",
    "category": "肉",
    "sales": 2589
  },
  {
    "date": "2024-03-23",
    "category": "魚",
    "sales": 2337
  },
  {
    "date": "2024-03-23",
    "category": "飲料",
    "sales": 1669
  },
  {
    "date": "2024-03-24",
    "category": "野菜",
    "sales": 1212
  },
  {
    "date": "2024-03-24",
    "category": "肉",
    "sales": 2763
  },
  {
    "date": "2024-03-24",
    "category": "魚",
    "sales": 2426
  },
  {
    "date": "2024-03-24",
    "category": "飲料",
    "sales": 1919
  },
  {
    "date": "2024-03-25",
    "category": "野菜",
    "sales": 1570
  },
  {
    "date": "2024-03-25",
    "category": "肉",
    "sales": 2712
  },
  {
    "date": "2024-03-25",
    "category": "魚",
    "sales": 1528
  },
  {
    "date": "2024-03-25",
    "category": "飲料",
    "sales": 1511
  },
  {
    "date": "2024-03-26",
    "category": "野菜",
    "sales": 1619
  },
  {
    "date": "2024-03-26",
    "category": "肉",
    "sales": 2125
  },
  {
    "date": "2024-03-26",
    "category": "魚",
    "sales": 1711
  },
  {
    "date": "2024-03-26",
    "category": "飲料",
    "sales": 842
  },
  {
    "date": "2024-03-27",
    "category": "野菜",
    "sales": 1867
  },
  {
    "date": "2024-03-27",
    "category": "肉",
    "sales": 2054
  },
  {
    "date": "2024-03-27",
    "category": "魚",
    "sales": 1535
  },
  {
    "date": "2024-03-27",
    "category": "飲料",
    "sales": 1079
  },
  {
    "date": "2024-03-28",
    "category": "野菜",
    "sales": 1595
  },
  {
    "date": "2024-03-28",
    "category": "肉",
    "sales": 1925
  },
  {
    "date": "2024-03-28",
    "category": "魚",
    "sales": 1366
  },
  {
    "date": "2024-03-28",
    "category": "飲料",
    "sales": 762
  },
  {
    "date": "2024-03-29",
    "category": "野菜",
    "sales": 1641
  },
  {
    "date": "2024-03-29",
    "category": "肉",
    "sales": 2605
  },
  {
    "date": "2024-03-29",
    "category": "魚",
    "sales": 2089
  },
  {
    "date": "2024-03-29",
    "category": "飲料",
    "sales": 1446
  },
  {
    "date": "2024-03-30",
    "category": "野菜",
    "sales": 2519
  },
  {
    "date": "2024-03-30",
    "category": "肉",
    "sales": 2682
  },
  {
    "date": "2024-03-30",
    "category": "魚",
    "sales": 2003
  },
  {
    "date": "2024-03-30",
    "category": "飲料",
    "sales": 1536
  },
  {
    "date": "2024-03-31",
    "category": "野菜",
    "sales": 2291
  },
  {
    "date": "2024-03-31",
    "category": "肉",
    "sales": 2956
  },
  {
    "date": "2024-03-31",
    "category": "魚",
    "sales": 1906
  },
  {
    "date": "2024-03-31",
    "category": "飲料",
    "sales": 1467
  },
  {
    "date": "2024-04-01",
    "category": "野菜",
    "sales": 1702
  },
  {
    "date": "2024-04-01",
    "category": "肉",
    "sales": 2050
  },
  {
    "date": "2024-04-01",
    "category": "魚",
    "sales": 1864
  },
  {
    "date": "2024-04-01",
    "category": "飲料",
    "sales": 1344
  },
  {
    "date": "2024-04-02",
    "category": "野菜",
    "sales": 1879
  },
  {
    "date": "2024-04-02",
    "category": "肉",
    "sales": 2411
  },
  {
    "date": "2024-04-02",
    "category": "魚",
    "sales": 1346
  },
  {
    "date": "2024-04-02",
    "category": "飲料",
    "sales": 1589
  },
  {
    "date": "2024-04-03",
    "category": "野菜",
    "sales": 1681
  },
  {
    "date": "2024-04-03",
    "category": "肉",
    "sales": 2739
  },
  {
    "date": "2024-04-03",
    "category": "魚",
    "sales": 2113
  },
  {
    "date": "2024-04-03",
    "category": "飲料",
    "sales": 1372
  },
  {
    "date": "2024-04-04",
    "category": "野菜",
    "sales": 1828
  },
  {
    "date": "2024-04-04",
    "category": "肉",
    "sales": 2753
  },
  {
    "date": "2024-04-04",
    "category": "魚",
    "sales": 1159
  },
  {
    "date": "2024-04-04",
    "category": "飲料",
    "sales": 1265
  },
  {
    "date": "2024-04-05",
    "category": "野菜",
    "sales": 1521
  },
  {
    "date": "2024-04-05",
    "category": "肉",
    "sales": 2373
  },
  {
    "date": "2024-04-05",
    "category": "魚",
    "sales": 2153
  },
  {
    "date": "2024-04-05",
    "category": "飲料",
    "sales": 1478
  },
  {
    "date": "2024-04-06",
    "category": "野菜",
    "sales": 2263
  },
  {
    "date": "2024-04-06",
    "category": "肉",
    "sales": 2929
  },
  {
    "date": "2024-04-06",
    "category": "魚",
    "sales": 1765
  },
  {
    "date": "2024-04-06",
    "category": "飲料",
    "sales": 1740
  },
  {
    "date": "2024-04-07",
    "category": "野菜",
    "sales": 1755
  },
  {
    "date": "2024-04-07",
    "category": "肉",
    "sales": 2887
  },
  {
    "date": "2024-04-07",
    "category": "魚",
    "sales": 2231
  },
  {
    "date": "2024-04-07",
    "category": "飲料",
    "sales": 1028
  },
  {
    "date": "2024-04-08",
    "category": "野菜",
    "sales": 1236
  },
  {
    "date": "2024-04-08",
    "category": "肉",
    "sales": 2802
  },
  {
    "date": "2024-04-08",
    "category": "魚",
    "sales": 1947
  },
  {
    "date": "2024-04-08",
    "category": "飲料",
    "sales": 890
  },
  {
    "date": "2024-04-09",
    "category": "野菜",
    "sales": 1633
  },
  {
    "date": "2024-04-09",
    "category": "肉",
    "sales": 2595
  },
  {
    "date": "2024-04-09",
    "category": "魚",
    "sales": 2190
  },
  {
    "date": "2024-04-09",
    "category": "飲料",
    "sales": 1835
  },
  {
    "date": "2024-04-10",
    "category": "野菜",
    "sales": 1528
  },
  {
    "date": "2024-04-10",
    "category": "肉",
    "sales": 2287
  },
  {
    "date": "2024-04-10",
    "category": "魚",
    "sales": 1805
  },
  {
    "date": "2024-04-10",
    "category": "飲料",
    "sales": 1661
  },
  {
    "date": "2024-04-11",
    "category": "野菜",
    "sales": 1576
  },
  {
    "date": "2024-04-11",
    "category": "肉",
    "sales": 2199
  },
  {
    "date": "2024-04-11",
    "category": "魚",
    "sales": 1957
  },
  {
    "date": "2024-04-11",
    "category": "飲料",
    "sales": 1223
  },
  {
    "date": "2024-04-12",
    "category": "野菜",
    "sales": 1287
  },
  {
    "date": "2024-04-12",
    "category": "肉",
    "sales": 2091
  },
  {
    "date": "2024-04-12",
    "category": "魚",
    "sales": 1888
  },
  {
    "date": "2024-04-12",
    "category": "飲料",
    "sales": 1066
  },
  {
    "date": "2024-04-13",
    "category": "野菜",
    "sales": 2059
  },
  {
    "date": "2024-04-13",
    "category": "肉",
    "sales": 2758
  },
  {
    "date": "2024-04-13",
    "category": "魚",
    "sales": 2833
  },
  {
    "date": "2024-04-13",
    "category": "飲料",
    "sales": 1608
  },
  {
    "date": "2024-04-14",
    "category": "野菜",
    "sales": 1860
  },
  {
    "date": "2024-04-14",
    "category": "肉",
    "sales": 2990
  },
  {
    "date": "2024-04-14",
    "category": "魚",
    "sales": 1999
  },
  {
    "date": "2024-04-14",
    "category": "飲料",
    "sales": 782
  },
  {
    "date": "2024-04-15",
    "category": "野菜",
    "sales": 1746
  },
  {
    "date": "2024-04-15",
    "category": "肉",
    "sales": 2635
  },
  {
    "date": "2024-04-15",
    "category": "魚",
    "sales": 1497
  },
  {
    "date": "2024-04-15",
    "category": "飲料",
    "sales": 800
  },
  {
    "date": "2024-04-16",
    "category": "野菜",
    "sales": 1954
  },
  {
    "date": "2024-04-16",
    "category": "肉",
    "sales": 2711
  },
  {
    "date": "2024-04-16",
    "category": "魚",
    "sales": 1914
  },
  {
    "date": "2024-04-16",
    "category": "飲料",
    "sales": 1261
  },
  {
    "date": "2024-04-17",
    "category": "野菜",
    "sales": 1481
  },
  {
    "date": "2024-04-17",
    "category": "肉",
    "sales": 2681
  },
  {
    "date": "2024-04-17",
    "category": "魚",
    "sales": 2080
  },
  {
    "date": "2024-04-17",
    "category": "飲料",
    "sales": 1529
  },
  {
    "date": "2024-04-18",
    "category": "野菜",
    "sales": 1845
  },
  {
    "date": "2024-04-18",
    "category": "肉",
    "sales": 2588
  },
  {
    "date": "2024-04-18",
    "category": "魚",
    "sales": 2021
  },
  {
    "date": "2024-04-18",
    "category": "飲料",
    "sales": 1332
  },
  {
    "date": "2024-04-19",
    "category": "野菜",
    "sales": 1639
  },
  {
    "date": "2024-04-19",
    "category": "肉",
    "sales": 2263
  },
  {
    "date": "2024-04-19",
    "category": "魚",
    "sales": 1332
  },
  {
    "date": "2024-04-19",
    "category": "飲料",
    "sales": 1625
  },
  {
    "date": "2024-04-20",
    "category": "野菜",
    "sales": 1989
  },
  {
    "date": "2024-04-20",
    "category": "肉",
    "sales": 3255
  },
  {
    "date": "2024-04-20",
    "category": "魚",
    "sales": 1786
  },
  {
    "date": "2024-04-20",
    "category": "飲料",
    "sales": 1275
  },
  {
    "date": "2024-04-21",
    "category": "野菜",
    "sales": 1653
  },
  {
    "date": "2024-04-21",
    "category": "肉",
    "sales": 2774
  },
  {
    "date": "2024-04-21",
    "category": "魚",
    "sales": 2345
  },
  {
    "date": "2024-04-21",
    "category": "飲料",
    "sales": 1810
  },
  {
    "date": "2024-04-22",
    "category": "野菜",
    "sales": 1525
  },
  {
    "date": "2024-04-22",
    "category": "肉",
    "sales": 1984
  },
  {
    "date": "2024-04-22",
    "category": "魚",
    "sales": 1745
  },
  {
    "date": "2024-04-22",
    "category": "飲料",
    "sales": 1170
  },
  {
    "date": "2024-04-23",
    "category": "野菜",
    "sales": 1374
  },
  {
    "date": "2024-04-23",
    "category": "肉",
    "sales": 2048
  },
  {
    "date": "2024-04-23",
    "category": "魚",
    "sales": 1769
  },
  {
    "date": "2024-04-23",
    "category": "飲料",
    "sales": 1086
  },
  {
    "date": "2024-04-24",
    "category": "野菜",
    "sales": 1566
  },
  {
    "date": "2024-04-24",
    "category": "肉",
    "sales": 2433
  },
  {
    "date": "2024-04-24",
    "category": "魚",
    "sales": 1619
  },
  {
    "date": "2024-04-24",
    "category": "飲料",
    "sales": 1392
  },
  {
    "date": "2024-04-25",
    "category": "野菜",
    "sales": 1572
  },
  {
    "date": "2024-04-25",
    "category": "肉",
    "sales": 1723
  },
  {
    "date": "2024-04-25",
    "category": "魚",
    "sales": 2303
  },
  {
    "date": "2024-04-25",
    "category": "飲料",
    "sales": 1301
  },
  {
    "date": "2024-04-26",
    "category": "野菜",
    "sales": 1342
  },
  {
    "date": "2024-04-26",
    "category": "肉",
    "sales": 2323
  },
  {
    "date": "2024-04-26",
    "category": "魚",
    "sales": 2544
  },
  {
    "date": "2024-04-26",
    "category": "飲料",
    "sales": 884
  },
  {
    "date": "2024-04-27",
    "category": "野菜",
    "sales": 2139
  },
  {
    "date": "2024-04-27",
    "category": "肉",
    "sales": 3166
  },
  {
    "date": "2024-04-27",
    "category": "魚",
    "sales": 2149
  },
  {
    "date": "2024-04-27",
    "category": "飲料",
    "sales": 1481
  },
  {
    "date": "2024-04-28",
    "category": "野菜",
    "sales": 1934
  },
  {
    "date": "2024-04-28",
    "category": "肉",
    "sales": 2775
  },
  {
    "date": "2024-04-28",
    "category": "魚",
    "sales": 2171
  },
  {
    "date": "2024-04-28",
    "category": "飲料",
    "sales": 1036
  },
  {
    "date": "2024-04-29",
    "category": "野菜",
    "sales": 1547
  },
  {
    "date": "2024-04-29",
    "category": "肉",
    "sales": 2766
  },
  {
    "date": "2024-04-29",
    "category": "魚",
    "sales": 2267
  },
  {
    "date": "2024-04-29",
    "category": "飲料",
    "sales": 730
  },
  {
    "date": "2024-04-30",
    "category": "野菜",
    "sales": 1297
  },
  {
    "date": "2024-04-30",
    "category": "肉",
    "sales": 2525
  },
  {
    "date": "2024-04-30",
    "category": "魚",
    "sales": 2126
  },
  {
    "date": "2024-04-30",
    "category": "飲料",
    "sales": 1289
  },
  {
    "date": "2024-05-01",
    "category": "野菜",
    "sales": 1311
  },
  {
    "date": "2024-05-01",
    "category": "肉",
    "sales": 2299
  },
  {
    "date": "2024-05-01",
    "category": "魚",
    "sales": 2182
  },
  {
    "date": "2024-05-01",
    "category": "飲料",
    "sales": 913
  },
  {
    "date": "2024-05-02",
    "category": "野菜",
    "sales": 1769
  },
  {
    "date": "2024-05-02",
    "category": "肉",
    "sales": 2073
  },
  {
    "date": "2024-05-02",
    "category": "魚",
    "sales": 2155
  },
  {
    "date": "2024-05-02",
    "category": "飲料",
    "sales": 1315
  },
  {
    "date": "2024-05-03",
    "category": "野菜",
    "sales": 2185
  },
  {
    "date": "2024-05-03",
    "category": "肉",
    "sales": 2607
  },
  {
    "date": "2024-05-03",
    "category": "魚",
    "sales": 1691
  },
  {
    "date": "2024-05-03",
    "category": "飲料",
    "sales": 1197
  },
  {
    "date": "2024-05-04",
    "category": "野菜",
    "sales": 1534
  },
  {
    "date": "2024-05-04",
    "category": "肉",
    "sales": 2584
  },
  {
    "date": "2024-05-04",
    "category": "魚",
    "sales": 2545
  },
  {
    "date": "2024-05-04",
    "category": "飲料",
    "sales": 1705
  },
  {
    "date": "2024-05-05",
    "category": "野菜",
    "sales": 1718
  },
  {
    "date": "2024-05-05",
    "category": "肉",
    "sales": 3117
  },
  {
    "date": "2024-05-05",
    "category": "魚",
    "sales": 2248
  },
  {
    "date": "2024-05-05",
    "category": "飲料",
    "sales": 1952
  },
  {
    "date": "2024-05-06",
    "category": "野菜",
    "sales": 1818
  },
  {
    "date": "2024-05-06",
    "category": "肉",
    "sales": 1950
  },
  {
    "date": "2024-05-06",
    "category": "魚",
    "sales": 1825
  },
  {
    "date": "2024-05-06",
    "category": "飲料",
    "sales": 1458
  },
  {
    "date": "2024-05-07",
    "category": "野菜",
    "sales": 1459
  },
  {
    "date": "2024-05-07",
    "category": "肉",
    "sales": 2883
  },
  {
    "date": "2024-05-07",
    "category": "魚",
    "sales": 2211
  },
  {
    "date": "2024-05-07",
    "category": "飲料",
    "sales": 1269
  },
  {
    "date": "2024-05-08",
    "category": "野菜",
    "sales": 1606
  },
  {
    "date": "2024-05-08",
    "category": "肉",
    "sales": 2538
  },
  {
    "date": "2024-05-08",
    "category": "魚",
    "sales": 1796
  },
  {
    "date": "2024-05-08",
    "category": "飲料",
    "sales": 823
  },
  {
    "date": "2024-05-09",
    "category": "野菜",
    "sales": 1444
  },
  {
    "date": "2024-05-09",
    "category": "肉",
    "sales": 2143
  },
  {
    "date": "2024-05-09",
    "category": "魚",
    "sales": 2025
  },
  {
    "date": "2024-05-09",
    "category": "飲料",
    "sales": 1402
  },
  {
    "date": "2024-05-10",
    "category": "野菜",
    "sales": 1975
  },
  {
    "date": "2024-05-10",
    "category": "肉",
    "sales": 2214
  },
  {
    "date": "2024-05-10",
    "category": "魚",
    "sales": 1831
  },
  {
    "date": "2024-05-10",
    "category": "飲料",
    "sales": 925
  },
  {
    "date": "2024-05-11",
    "category": "野菜",
    "sales": 959
  },
  {
    "date": "2024-05-11",
    "category": "肉",
    "sales": 2992
  },
  {
    "date": "2024-05-11",
    "category": "魚",
    "sales": 2617
  },
  {
    "date": "2024-05-11",
    "category": "飲料",
    "sales": 1243
  },
  {
    "date": "2024-05-12",
    "category": "野菜",
    "sales": 2150
  },
  {
    "date": "2024-05-12",
    "category": "肉",
    "sales": 2817
  },
  {
    "date": "2024-05-12",
    "category": "魚",
    "sales": 2463
  },
  {
    "date": "2024-05-12",
    "category": "飲料",
    "sales": 1356
  },
  {
    "date": "2024-05-13",
    "category": "野菜",
    "sales": 2081
  },
  {
    "date": "2024-05-13",
    "category": "肉",
    "sales": 2173
  },
  {
    "date": "2024-05-13",
    "category": "魚",
    "sales": 1510
  },
  {
    "date": "2024-05-13",
    "category": "飲料",
    "sales": 1384
  },
  {
    "date": "2024-05-14",
    "category": "野菜",
    "sales": 2025
  },
  {
    "date": "2024-05-14",
    "category": "肉",
    "sales": 2056
  },
  {
    "date": "2024-05-14",
    "category": "魚",
    "sales": 1965
  },
  {
    "date": "2024-05-14",
    "category": "飲料",
    "sales": 1190
  },
  {
    "date": "2024-05-15",
    "category": "野菜",
    "sales": 1242
  },
  {
    "date": "2024-05-15",
    "category": "肉",
    "sales": 2327
  },
  {
    "date": "2024-05-15",
    "category": "魚",
    "sales": 2096
  },
  {
    "date": "2024-05-15",
    "category": "飲料",
    "sales": 1328
  },
  {
    "date": "2024-05-16",
    "category": "野菜",
    "sales": 1860
  },
  {
    "date": "2024-05-16",
    "category": "肉",
    "sales": 2355
  },
  {
    "date": "2024-05-16",
    "category": "魚",
    "sales": 1952
  },
  {
    "date": "2024-05-16",
    "category": "飲料",
    "sales": 780
  },
  {
    "date": "2024-05-17",
    "category": "野菜",
    "sales": 1491
  },
  {
    "date": "2024-05-17",
    "category": "肉",
    "sales": 2573
  },
  {
    "date": "2024-05-17",
    "category": "魚",
    "sales": 1946
  },
  {
    "date": "2024-05-17",
    "category": "飲料",
    "sales": 1447
  },
  {
    "date": "2024-05-18",
    "category": "野菜",
    "sales": 2001
  },
  {
    "date": "2024-05-18",
    "category": "肉",
    "sales": 2538
  },
  {
    "date": "2024-05-18",
    "category": "魚",
    "sales": 2047
  },
  {
    "date": "2024-05-18",
    "category": "飲料",
    "sales": 1440
  },
  {
    "date": "2024-05-19",
    "category": "野菜",
    "sales": 1770
  },
  {
    "date": "2024-05-19",
    "category": "肉",
    "sales": 2679
  },
  {
    "date": "2024-05-19",
    "category": "魚",
    "sales": 2602
  },
  {
    "date": "2024-05-19",
    "category": "飲料",
    "sales": 1967
  },
  {
    "date": "2024-05-20",
    "category": "野菜",
    "sales": 1178
  },
  {
    "date": "2024-05-20",
    "category": "肉",
    "sales": 1778
  },
  {
    "date": "2024-05-20",
    "category": "魚",
    "sales": 2028
  },
  {
    "date": "2024-05-20",
    "category": "飲料",
    "sales": 1072
  },
  {
    "date": "2024-05-21",
    "category": "野菜",
    "sales": 1537
  },
  {
    "date": "2024-05-21",
    "category": "肉",
    "sales": 2181
  },
  {
    "date": "2024-05-21",
    "category": "魚",
    "sales": 1628
  },
  {
    "date": "2024-05-21",
    "category": "飲料",
    "sales": 1017
  },
  {
    "date": "2024-05-22",
    "category": "野菜",
    "sales": 986
  },
  {
    "date": "2024-05-22",
    "category": "肉",
    "sales": 1981
  },
  {
    "date": "2024-05-22",
    "category": "魚",
    "sales": 1870
  },
  {
    "date": "2024-05-22",
    "category": "飲料",
    "sales": 1809
  },
  {
    "date": "2024-05-23",
    "category": "野菜",
    "sales": 812
  },
  {
    "date": "2024-05-23",
    "category": "肉",
    "sales": 2452
  },
  {
    "date": "2024-05-23",
    "category": "魚",
    "sales": 2176
  },
  {
    "date": "2024-05-23",
    "category": "飲料",
    "sales": 1115
  },
  {
    "date": "2024-05-24",
    "category": "野菜",
    "sales": 1293
  },
  {
    "date": "2024-05-24",
    "category": "肉",
    "sales": 2352
  },
  {
    "date": "2024-05-24",
    "category": "魚",
    "sales": 1367
  },
  {
    "date": "2024-05-24",
    "category": "飲料",
    "sales": 1101
  },
  {
    "date": "2024-05-25",
    "category": "野菜",
    "sales": 1691
  },
  {
    "date": "2024-05-25",
    "category": "肉",
    "sales": 2742
  },
  {
    "date": "2024-05-25",
    "category": "魚",
    "sales": 2148
  },
  {
    "date": "2024-05-25",
    "category": "飲料",
    "sales": 1414
  },
  {
    "date": "2024-05-26",
    "category": "野菜",
    "sales": 1454
  },
  {
    "date": "2024-05-26",
    "category": "肉",
    "sales": 3294
  },
  {
    "date": "2024-05-26",
    "category": "魚",
    "sales": 2754
  },
  {
    "date": "2024-05-26",
    "category": "飲料",
    "sales": 920
  },
  {
    "date": "2024-05-27",
    "category": "野菜",
    "sales": 1215
  },
  {
    "date": "2024-05-27",
    "category": "肉",
    "sales": 2195
  },
  {
    "date": "2024-05-27",
    "category": "魚",
    "sales": 2182
  },
  {
    "date": "2024-05-27",
    "category": "飲料",
    "sales": 1510
  },
  {
    "date": "2024-05-28",
    "category": "野菜",
    "sales": 1701
  },
  {
    "date": "2024-05-28",
    "category": "肉",
    "sales": 2170
  },
  {
    "date": "2024-05-28",
    "category": "魚",
    "sales": 1526
  },
  {
    "date": "2024-05-28",
    "category": "飲料",
    "sales": 1031
  },
  {
    "date": "2024-05-29",
    "category": "野菜",
    "sales": 1149
  },
  {
    "date": "2024-05-29",
    "category": "肉",
    "sales": 3105
  },
  {
    "date": "2024-05-29",
    "category": "魚",
    "sales": 2155
  },
  {
    "date": "2024-05-29",
    "category": "飲料",
    "sales": 1270
  },
  {
    "date": "2024-05-30",
    "category": "野菜",
    "sales": 1610
  },
  {
    "date": "2024-05-30",
    "category": "肉",
    "sales": 2431
  },
  {
    "date": "2024-05-30",
    "category": "魚",
    "sales": 1328
  },
  {
    "date": "2024-05-30",
    "category": "飲料",
    "sales": 1423
  },
  {
    "date": "2024-05-31",
    "category": "野菜",
    "sales": 1958
  },
  {
    "date": "2024-05-31",
    "category": "肉",
    "sales": 2301
  },
  {
    "date": "2024-05-31",
    "category": "魚",
    "sales": 1723
  },
  {
    "date": "2024-05-31",
    "category": "飲料",
    "sales": 1198
  },
  {
    "date": "2024-06-01",
    "category": "野菜",
    "sales": 1744
  },
  {
    "date": "2024-06-01",
    "category": "肉",
    "sales": 2631
  },
  {
    "date": "2024-06-01",
    "category": "魚",
    "sales": 2091
  },
  {
    "date": "2024-06-01",
    "category": "飲料",
    "sales": 819
  },
  {
    "date": "2024-06-02",
    "category": "野菜",
    "sales": 2144
  },
  {
    "date": "2024-06-02",
    "category": "肉",
    "sales": 2996
  },
  {
    "date": "2024-06-02",
    "category": "魚",
    "sales": 1942
  },
  {
    "date": "2024-06-02",
    "category": "飲料",
    "sales": 1799
  },
  {
    "date": "2024-06-03",
    "category": "野菜",
    "sales": 1467
  },
  {
    "date": "2024-06-03",
    "category": "肉",
    "sales": 2827
  },
  {
    "date": "2024-06-03",
    "category": "魚",
    "sales": 1996
  },
  {
    "date": "2024-06-03",
    "category": "飲料",
    "sales": 935
  },
  {
    "date": "2024-06-04",
    "category": "野菜",
    "sales": 1442
  },
  {
    "date": "2024-06-04",
    "category": "肉",
    "sales": 2246
  },
  {
    "date": "2024-06-04",
    "category": "魚",
    "sales": 1654
  },
  {
    "date": "2024-06-04",
    "category": "飲料",
    "sales": 760
  },
  {
    "date": "2024-06-05",
    "category": "野菜",
    "sales": 1979
  },
  {
    "date": "2024-06-05",
    "category": "肉",
    "sales": 2152
  },
  {
    "date": "2024-06-05",
    "category": "魚",
    "sales": 1656
  },
  {
    "date": "2024-06-05",
    "category": "飲料",
    "sales": 1348
  },
  {
    "date": "2024-06-06",
    "category": "野菜",
    "sales": 1185
  },
  {
    "date": "2024-06-06",
    "category": "肉",
    "sales": 2372
  },
  {
    "date": "2024-06-06",
    "category": "魚",
    "sales": 1919
  },
  {
    "date": "2024-06-06",
    "category": "飲料",
    "sales": 2173
  },
  {
    "date": "2024-06-07",
    "category": "野菜",
    "sales": 1314
  },
  {
    "date": "2024-06-07",
    "category": "肉",
    "sales": 2075
  },
  {
    "date": "2024-06-07",
    "category": "魚",
    "sales": 1466
  },
  {
    "date": "2024-06-07",
    "category": "飲料",
    "sales": 1065
  },
  {
    "date": "2024-06-08",
    "category": "野菜",
    "sales": 1943
  },
  {
    "date": "2024-06-08",
    "category": "肉",
    "sales": 2049
  },
  {
    "date": "2024-06-08",
    "category": "魚",
    "sales": 2168
  },
  {
    "date": "2024-06-08",
    "category": "飲料",
    "sales": 1612
  },
  {
    "date": "2024-06-09",
    "category": "野菜",
    "sales": 1939
  },
  {
    "date": "2024-06-09",
    "category": "肉",
    "sales": 2090
  },
  {
    "date": "2024-06-09",
    "category": "魚",
    "sales": 1536
  },
  {
    "date": "2024-06-09",
    "category": "飲料",
    "sales": 1136
  },
  {
    "date": "2024-06-10",
    "category": "野菜",
    "sales": 1407
  },
  {
    "date": "2024-06-10",
    "category": "肉",
    "sales": 1954
  },
  {
    "date": "2024-06-10",
    "category": "魚",
    "sales": 1554
  },
  {
    "date": "2024-06-10",
    "category": "飲料",
    "sales": 855
  },
  {
    "date": "2024-06-11",
    "category": "野菜",
    "sales": 1071
  },
  {
    "date": "2024-06-11",
    "category": "肉",
    "sales": 1929
  },
  {
    "date": "2024-06-11",
    "category": "魚",
    "sales": 1548
  },
  {
    "date": "2024-06-11",
    "category": "飲料",
    "sales": 811
  },
  {
    "date": "2024-06-12",
    "category": "野菜",
    "sales": 1414
  },
  {
    "date": "2024-06-12",
    "category": "肉",
    "sales": 2399
  },
  {
    "date": "2024-06-12",
    "category": "魚",
    "sales": 2129
  },
  {
    "date": "2024-06-12",
    "category": "飲料",
    "sales": 979
  },
  {
    "date": "2024-06-13",
    "category": "野菜",
    "sales": 1603
  },
  {
    "date": "2024-06-13",
    "category": "肉",
    "sales": 1947
  },
  {
    "date": "2024-06-13",
    "category": "魚",
    "sales": 1819
  },
  {
    "date": "2024-06-13",
    "category": "飲料",
    "sales": 730
  },
  {
    "date": "2024-06-14",
    "category": "野菜",
    "sales": 1018
  },
  {
    "date": "2024-06-14",
    "category": "肉",
    "sales": 2069
  },
  {
    "date": "2024-06-14",
    "category": "魚",
    "sales": 1890
  },
  {
    "date": "2024-06-14",
    "category": "飲料",
    "sales": 997
  },
  {
    "date": "2024-06-15",
    "category": "野菜",
    "sales": 1315
  },
  {
    "date": "2024-06-15",
    "category": "肉",
    "sales": 2943
  },
  {
    "date": "2024-06-15",
    "category": "魚",
    "sales": 1806
  },
  {
    "date": "2024-06-15",
    "category": "飲料",
    "sales": 1740
  },
  {
    "date": "2024-06-16",
    "category": "野菜",
    "sales": 1102
  },
  {
    "date": "2024-06-16",
    "category": "肉",
    "sales": 2456
  },
  {
    "date": "2024-06-16",
    "category": "魚",
    "sales": 2410
  },
  {
    "date": "2024-06-16",
    "category": "飲料",
    "sales": 1767
  },
  {
    "date": "2024-06-17",
    "category": "野菜",
    "sales": 1918
  },
  {
    "date": "2024-06-17",
    "category": "肉",
    "sales": 2270
  },
  {
    "date": "2024-06-17",
    "category": "魚",
    "sales": 1293
  },
  {
    "date": "2024-06-17",
    "category": "飲料",
    "sales": 1162
  },
  {
    "date": "2024-06-18",
    "category": "野菜",
    "sales": 1502
  },
  {
    "date": "2024-06-18",
    "category": "肉",
    "sales": 2028
  },
  {
    "date": "2024-06-18",
    "category": "魚",
    "sales": 1459
  },
  {
    "date": "2024-06-18",
    "category": "飲料",
    "sales": 819
  },
  {
    "date": "2024-06-19",
    "category": "野菜",
    "sales": 1441
  },
  {
    "date": "2024-06-19",
    "category": "肉",
    "sales": 1889
  },
  {
    "date": "2024-06-19",
    "category": "魚",
    "sales": 1739
  },
  {
    "date": "2024-06-19",
    "category": "飲料",
    "sales": 1268
  },
  {
    "date": "2024-06-20",
    "category": "野菜",
    "sales": 1612
  },
  {
    "date": "2024-06-20",
    "category": "肉",
    "sales": 2167
  },
  {
    "date": "2024-06-20",
    "category": "魚",
    "sales": 1686
  },
  {
    "date": "2024-06-20",
    "category": "飲料",
    "sales": 672
  },
  {
    "date": "2024-06-21",
    "category": "野菜",
    "sales": 1670
  },
  {
    "date": "2024-06-21",
    "category": "肉",
    "sales": 1988
  },
  {
    "date": "2024-06-21",
    "category": "魚",
    "sales": 1501
  },
  {
    "date": "2024-06-21",
    "category": "飲料",
    "sales": 991
  },
  {
    "date": "2024-06-22",
    "category": "野菜",
    "sales": 1355
  },
  {
    "date": "2024-06-22",
    "category": "肉",
    "sales": 2367
  },
  {
    "date": "2024-06-22",
    "category": "魚",
    "sales": 2222
  },
  {
    "date": "2024-06-22",
    "category": "飲料",
    "sales": 1379
  },
  {
    "date": "2024-06-23",
    "category": "野菜",
    "sales": 1993
  },
  {
    "date": "2024-06-23",
    "category": "肉",
    "sales": 2261
  },
  {
    "date": "2024-06-23",
    "category": "魚",
    "sales": 1640
  },
  {
    "date": "2024-06-23",
    "category": "飲料",
    "sales": 1633
  },
  {
    "date": "2024-06-24",
    "category": "野菜",
    "sales": 662
  },
  {
    "date": "2024-06-24",
    "category": "肉",
    "sales": 1960
  },
  {
    "date": "2024-06-24",
    "category": "魚",
    "sales": 1988
  },
  {
    "date": "2024-06-24",
    "category": "飲料",
    "sales": 591
  },
  {
    "date": "2024-06-25",
    "category": "野菜",
    "sales": 1555
  },
  {
    "date": "2024-06-25",
    "category": "肉",
    "sales": 1993
  },
  {
    "date": "2024-06-25",
    "category": "魚",
    "sales": 1580
  },
  {
    "date": "2024-06-25",
    "category": "飲料",
    "sales": 984
  },
  {
    "date": "2024-06-26",
    "category": "野菜",
    "sales": 870
  },
  {
    "date": "2024-06-26",
    "category": "肉",
    "sales": 1794
  },
  {
    "date": "2024-06-26",
    "category": "魚",
    "sales": 1247
  },
  {
    "date": "2024-06-26",
    "category": "飲料",
    "sales": 949
  },
  {
    "date": "2024-06-27",
    "category": "野菜",
    "sales": 936
  },
  {
    "date": "2024-06-27",
    "category": "肉",
    "sales": 2553
  },
  {
    "date": "2024-06-27",
    "category": "魚",
    "sales": 1736
  },
  {
    "date": "2024-06-27",
    "category": "飲料",
    "sales": 1324
  },
  {
    "date": "2024-06-28",
    "category": "野菜",
    "sales": 1421
  },
  {
    "date": "2024-06-28",
    "category": "肉",
    "sales": 2064
  },
  {
    "date": "2024-06-28",
    "category": "魚",
    "sales": 1938
  },
  {
    "date": "2024-06-28",
    "category": "飲料",
    "sales": 1550
  },
  {
    "date": "2024-06-29",
    "category": "野菜",
    "sales": 1665
  },
  {
    "date": "2024-06-29",
    "category": "肉",
    "sales": 1699
  },
  {
    "date": "2024-06-29",
    "category": "魚",
    "sales": 1953
  },
  {
    "date": "2024-06-29",
    "category": "飲料",
    "sales": 1344
  },
  {
    "date": "2024-06-30",
    "category": "野菜",
    "sales": 1282
  },
  {
    "date": "2024-06-30",
    "category": "肉",
    "sales": 3014
  },
  {
    "date": "2024-06-30",
    "category": "魚",
    "sales": 1428
  },
  {
    "date": "2024-06-30",
    "category": "飲料",
    "sales": 836
  },
  {
    "date": "2024-07-01",
    "category": "野菜",
    "sales": 939
  },
  {
    "date": "2024-07-01",
    "category": "肉",
    "sales": 1877
  },
  {
    "date": "2024-07-01",
    "category": "魚",
    "sales": 1626
  },
  {
    "date": "2024-07-01",
    "category": "飲料",
    "sales": 232
  },
  {
    "date": "2024-07-02",
    "category": "野菜",
    "sales": 923
  },
  {
    "date": "2024-07-02",
    "category": "肉",
    "sales": 1812
  },
  {
    "date": "2024-07-02",
    "category": "魚",
    "sales": 1345
  },
  {
    "date": "2024-07-02",
    "category": "飲料",
    "sales": 991
  },
  {
    "date": "2024-07-03",
    "category": "野菜",
    "sales": 1528
  },
  {
    "date": "2024-07-03",
    "category": "肉",
    "sales": 1546
  },
  {
    "date": "2024-07-03",
    "category": "魚",
    "sales": 1461
  },
  {
    "date": "2024-07-03",
    "category": "飲料",
    "sales": 1561
  },
  {
    "date": "2024-07-04",
    "category": "野菜",
    "sales": 1688
  },
  {
    "date": "2024-07-04",
    "category": "肉",
    "sales": 1492
  },
  {
    "date": "2024-07-04",
    "category": "魚",
    "sales": 1579
  },
  {
    "date": "2024-07-04",
    "category": "飲料",
    "sales": 971
  },
  {
    "date": "2024-07-05",
    "category": "野菜",
    "sales": 889
  },
  {
    "date": "2024-07-05",
    "category": "肉",
    "sales": 1777
  },
  {
    "date": "2024-07-05",
    "category": "魚",
    "sales": 1712
  },
  {
    "date": "2024-07-05",
    "category": "飲料",
    "sales": 1033
  },
  {
    "date": "2024-07-06",
    "category": "野菜",
    "sales": 1760
  },
  {
    "date": "2024-07-06",
    "category": "肉",
    "sales": 2190
  },
  {
    "date": "2024-07-06",
    "category": "魚",
    "sales": 2149
  },
  {
    "date": "2024-07-06",
    "category": "飲料",
    "sales": 1052
  },
  {
    "date": "2024-07-07",
    "category": "野菜",
    "sales": 1429
  },
  {
    "date": "2024-07-07",
    "category": "肉",
    "sales": 1850
  },
  {
    "date": "2024-07-07",
    "category": "魚",
    "sales": 2244
  },
  {
    "date": "2024-07-07",
    "category": "飲料",
    "sales": 484
  },
  {
    "date": "2024-07-08",
    "category": "野菜",
    "sales": 1959
  },
  {
    "date": "2024-07-08",
    "category": "肉",
    "sales": 1891
  },
  {
    "date": "2024-07-08",
    "category": "魚",
    "sales": 1868
  },
  {
    "date": "2024-07-08",
    "category": "飲料",
    "sales": 943
  },
  {
    "date": "2024-07-09",
    "category": "野菜",
    "sales": 1475
  },
  {
    "date": "2024-07-09",
    "category": "肉",
    "sales": 1609
  },
  {
    "date": "2024-07-09",
    "category": "魚",
    "sales": 1499
  },
  {
    "date": "2024-07-09",
    "category": "飲料",
    "sales": 1207
  },
  {
    "date": "2024-07-10",
    "category": "野菜",
    "sales": 1167
  },
  {
    "date": "2024-07-10",
    "category": "肉",
    "sales": 1828
  },
  {
    "date": "2024-07-10",
    "category": "魚",
    "sales": 1460
  },
  {
    "date": "2024-07-10",
    "category": "飲料",
    "sales": 1641
  },
  {
    "date": "2024-07-11",
    "category": "野菜",
    "sales": 1185
  },
  {
    "date": "2024-07-11",
    "category": "肉",
    "sales": 2139
  },
  {
    "date": "2024-07-11",
    "category": "魚",
    "sales": 1797
  },
  {
    "date": "2024-07-11",
    "category": "飲料",
    "sales": 1491
  },
  {
    "date": "2024-07-12",
    "category": "野菜",
    "sales": 1737
  },
  {
    "date": "2024-07-12",
    "category": "肉",
    "sales": 2046
  },
  {
    "date": "2024-07-12",
    "category": "魚",
    "sales": 1025
  },
  {
    "date": "2024-07-12",
    "category": "飲料",
    "sales": 919
  },
  {
    "date": "2024-07-13",
    "category": "野菜",
    "sales": 1831
  },
  {
    "date": "2024-07-13",
    "category": "肉",
    "sales": 2423
  },
  {
    "date": "2024-07-13",
    "category": "魚",
    "sales": 2292
  },
  {
    "date": "2024-07-13",
    "category": "飲料",
    "sales": 1484
  },
  {
    "date": "2024-07-14",
    "category": "野菜",
    "sales": 1492
  },
  {
    "date": "2024-07-14",
    "category": "肉",
    "sales": 1728
  },
  {
    "date": "2024-07-14",
    "category": "魚",
    "sales": 1898
  },
  {
    "date": "2024-07-14",
    "category": "飲料",
    "sales": 1419
  },
  {
    "date": "2024-07-15",
    "category": "野菜",
    "sales": 855
  },
  {
    "date": "2024-07-15",
    "category": "肉",
    "sales": 1146
  },
  {
    "date": "2024-07-15",
    "category": "魚",
    "sales": 1552
  },
  {
    "date": "2024-07-15",
    "category": "飲料",
    "sales": 707
  },
  {
    "date": "2024-07-16",
    "category": "野菜",
    "sales": 1389
  },
  {
    "date": "2024-07-16",
    "category": "肉",
    "sales": 1769
  },
  {
    "date": "2024-07-16",
    "category": "魚",
    "sales": 1388
  },
  {
    "date": "2024-07-16",
    "category": "飲料",
    "sales": 1707
  },
  {
    "date": "2024-07-17",
    "category": "野菜",
    "sales": 1480
  },
  {
    "date": "2024-07-17",
    "category": "肉",
    "sales": 1836
  },
  {
    "date": "2024-07-17",
    "category": "魚",
    "sales": 1226
  },
  {
    "date": "2024-07-17",
    "category": "飲料",
    "sales": 1012
  },
  {
    "date": "2024-07-18",
    "category": "野菜",
    "sales": 1000
  },
  {
    "date": "2024-07-18",
    "category": "肉",
    "sales": 1681
  },
  {
    "date": "2024-07-18",
    "category": "魚",
    "sales": 1782
  },
  {
    "date": "2024-07-18",
    "category": "飲料",
    "sales": 1043
  },
  {
    "date": "2024-07-19",
    "category": "野菜",
    "sales": 1019
  },
  {
    "date": "2024-07-19",
    "category": "肉",
    "sales": 1230
  },
  {
    "date": "2024-07-19",
    "category": "魚",
    "sales": 1927
  },
  {
    "date": "2024-07-19",
    "category": "飲料",
    "sales": 1109
  },
  {
    "date": "2024-07-20",
    "category": "野菜",
    "sales": 1552
  },
  {
    "date": "2024-07-20",
    "category": "肉",
    "sales": 1817
  },
  {
    "date": "2024-07-20",
    "category": "魚",
    "sales": 1618
  },
  {
    "date": "2024-07-20",
    "category": "飲料",
    "sales": 916
  },
  {
    "date": "2024-07-21",
    "category": "野菜",
    "sales": 1553
  },
  {
    "date": "2024-07-21",
    "category": "肉",
    "sales": 2128
  },
  {
    "date": "2024-07-21",
    "category": "魚",
    "sales": 1546
  },
  {
    "date": "2024-07-21",
    "category": "飲料",
    "sales": 1068
  },
  {
    "date": "2024-07-22",
    "category": "野菜",
    "sales": 1283
  },
  {
    "date": "2024-07-22",
    "category": "肉",
    "sales": 1970
  },
  {
    "date": "2024-07-22",
    "category": "魚",
    "sales": 1619
  },
  {
    "date": "2024-07-22",
    "category": "飲料",
    "sales": 814
  },
  {
    "date": "2024-07-23",
    "category": "野菜",
    "sales": 947
  },
  {
    "date": "2024-07-23",
    "category": "肉",
    "sales": 1974
  },
  {
    "date": "2024-07-23",
    "category": "魚",
    "sales": 1033
  },
  {
    "date": "2024-07-23",
    "category": "飲料",
    "sales": 402
  },
  {
    "date": "2024-07-24",
    "category": "野菜",
    "sales": 1249
  },
  {
    "date": "2024-07-24",
    "category": "肉",
    "sales": 1677
  },
  {
    "date": "2024-07-24",
    "category": "魚",
    "sales": 1383
  },
  {
    "date": "2024-07-24",
    "category": "飲料",
    "sales": 816
  },
  {
    "date": "2024-07-25",
    "category": "野菜",
    "sales": 981
  },
  {
    "date": "2024-07-25",
    "category": "肉",
    "sales": 2155
  },
  {
    "date": "2024-07-25",
    "category": "魚",
    "sales": 1537
  },
  {
    "date": "2024-07-25",
    "category": "飲料",
    "sales": 374
  },
  {
    "date": "2024-07-26",
    "category": "野菜",
    "sales": 744
  },
  {
    "date": "2024-07-26",
    "category": "肉",
    "sales": 1639
  },
  {
    "date": "2024-07-26",
    "category": "魚",
    "sales": 1684
  },
  {
    "date": "2024-07-26",
    "category": "飲料",
    "sales": 1150
  },
  {
    "date": "2024-07-27",
    "category": "野菜",
    "sales": 871
  },
  {
    "date": "2024-07-27",
    "category": "肉",
    "sales": 2156
  },
  {
    "date": "2024-07-27",
    "category": "魚",
    "sales": 1553
  },
  {
    "date": "2024-07-27",
    "category": "飲料",
    "sales": 895
  },
  {
    "date": "2024-07-28",
    "category": "野菜",
    "sales": 1694
  },
  {
    "date": "2024-07-28",
    "category": "肉",
    "sales": 1769
  },
  {
    "date": "2024-07-28",
    "category": "魚",
    "sales": 1644
  },
  {
    "date": "2024-07-28",
    "category": "飲料",
    "sales": 845
  },
  {
    "date": "2024-07-29",
    "category": "野菜",
    "sales": 621
  },
  {
    "date": "2024-07-29",
    "category": "肉",
    "sales": 1657
  },
  {
    "date": "2024-07-29",
    "category": "魚",
    "sales": 1397
  },
  {
    "date": "2024-07-29",
    "category": "飲料",
    "sales": 1335
  },
  {
    "date": "2024-07-30",
    "category": "野菜",
    "sales": 816
  },
  {
    "date": "2024-07-30",
    "category": "肉",
    "sales": 1299
  },
  {
    "date": "2024-07-30",
    "category": "魚",
    "sales": 1173
  },
  {
    "date": "2024-07-30",
    "category": "飲料",
    "sales": 1466
  },
  {
    "date": "2024-07-31",
    "category": "野菜",
    "sales": 1508
  },
  {
    "date": "2024-07-31",
    "category": "肉",
    "sales": 1608
  },
  {
    "date": "2024-07-31",
    "category": "魚",
    "sales": 1824
  },
  {
    "date": "2024-07-31",
    "category": "飲料",
    "sales": 715
  },
  {
    "date": "2024-08-01",
    "category": "野菜",
    "sales": 906
  },
  {
    "date": "2024-08-01",
    "category": "肉",
    "sales": 1388
  },
  {
    "date": "2024-08-01",
    "category": "魚",
    "sales": 1608
  },
  {
    "date": "2024-08-01",
    "category": "飲料",
    "sales": 944
  },
  {
    "date": "2024-08-02",
    "category": "野菜",
    "sales": 564
  },
  {
    "date": "2024-08-02",
    "category": "肉",
    "sales": 1464
  },
  {
    "date": "2024-08-02",
    "category": "魚",
    "sales": 1310
  },
  {
    "date": "2024-08-02",
    "category": "飲料",
    "sales": 869
  },
  {
    "date": "2024-08-03",
    "category": "野菜",
    "sales": 1791
  },
  {
    "date": "2024-08-03",
    "category": "肉",
    "sales": 1676
  },
  {
    "date": "2024-08-03",
    "category": "魚",
    "sales": 1774
  },
  {
    "date": "2024-08-03",
    "category": "飲料",
    "sales": 915
  },
  {
    "date": "2024-08-04",
    "category": "野菜",
    "sales": 1280
  },
  {
    "date": "2024-08-04",
    "category": "肉",
    "sales": 2316
  },
  {
    "date": "2024-08-04",
    "category": "魚",
    "sales": 1677
  },
  {
    "date": "2024-08-04",
    "category": "飲料",
    "sales": 894
  },
  {
    "date": "2024-08-05",
    "category": "野菜",
    "sales": 641
  },
  {
    "date": "2024-08-05",
    "category": "肉",
    "sales": 1745
  },
  {
    "date": "2024-08-05",
    "category": "魚",
    "sales": 722
  },
  {
    "date": "2024-08-05",
    "category": "飲料",
    "sales": 996
  },
  {
    "date": "2024-08-06",
    "category": "野菜",
    "sales": 1024
  },
  {
    "date": "2024-08-06",
    "category": "肉",
    "sales": 1618
  },
  {
    "date": "2024-08-06",
    "category": "魚",
    "sales": 1273
  },
  {
    "date": "2024-08-06",
    "category": "飲料",
    "sales": 1023
  },
  {
    "date": "2024-08-07",
    "category": "野菜",
    "sales": 985
  },
  {
    "date": "2024-08-07",
    "category": "肉",
    "sales": 1293
  },
  {
    "date": "2024-08-07",
    "category": "魚",
    "sales": 1245
  },
  {
    "date": "2024-08-07",
    "category": "飲料",
    "sales": 723
  },
  {
    "date": "2024-08-08",
    "category": "野菜",
    "sales": 798
  },
  {
    "date": "2024-08-08",
    "category": "肉",
    "sales": 1989
  },
  {
    "date": "2024-08-08",
    "category": "魚",
    "sales": 1018
  },
  {
    "date": "2024-08-08",
    "category": "飲料",
    "sales": 954
  },
  {
    "date": "2024-08-09",
    "category": "野菜",
    "sales": 1058
  },
  {
    "date": "2024-08-09",
    "category": "肉",
    "sales": 1718
  },
  {
    "date": "2024-08-09",
    "category": "魚",
    "sales": 1195
  },
  {
    "date": "2024-08-09",
    "category": "飲料",
    "sales": 941
  },
  {
    "date": "2024-08-10",
    "category": "野菜",
    "sales": 999
  },
  {
    "date": "2024-08-10",
    "category": "肉",
    "sales": 2057
  },
  {
    "date": "2024-08-10",
    "category": "魚",
    "sales": 1493
  },
  {
    "date": "2024-08-10",
    "category": "飲料",
    "sales": 1014
  },
  {
    "date": "2024-08-11",
    "category": "野菜",
    "sales": 1459
  },
  {
    "date": "2024-08-11",
    "category": "肉",
    "sales": 1844
  },
  {
    "date": "2024-08-11",
    "category": "魚",
    "sales": 1604
  },
  {
    "date": "2024-08-11",
    "category": "飲料",
    "sales": 1238
  },
  {
    "date": "2024-08-12",
    "category": "野菜",
    "sales": 1080
  },
  {
    "date": "2024-08-12",
    "category": "肉",
    "sales": 1129
  },
  {
    "date": "2024-08-12",
    "category": "魚",
    "sales": 1642
  },
  {
    "date": "2024-08-12",
    "category": "飲料",
    "sales": 911
  },
  {
    "date": "2024-08-13",
    "category": "野菜",
    "sales": 756
  },
  {
    "date": "2024-08-13",
    "category": "肉",
    "sales": 1531
  },
  {
    "date": "2024-08-13",
    "category": "魚",
    "sales": 1329
  },
  {
    "date": "2024-08-13",
    "category": "飲料",
    "sales": 934
  },
  {
    "date": "2024-08-14",
    "category": "野菜",
    "sales": 1210
  },
  {
    "date": "2024-08-14",
    "category": "肉",
    "sales": 1932
  },
  {
    "date": "2024-08-14",
    "category": "魚",
    "sales": 675
  },
  {
    "date": "2024-08-14",
    "category": "飲料",
    "sales": 836
  },
  {
    "date": "2024-08-15",
    "category": "野菜",
    "sales": 643
  },
  {
    "date": "2024-08-15",
    "category": "肉",
    "sales": 1324
  },
  {
    "date": "2024-08-15",
    "category": "魚",
    "sales": 779
  },
  {
    "date": "2024-08-15",
    "category": "飲料",
    "sales": 1013
  },
  {
    "date": "2024-08-16",
    "category": "野菜",
    "sales": 1609
  },
  {
    "date": "2024-08-16",
    "category": "肉",
    "sales": 2299
  },
  {
    "date": "2024-08-16",
    "category": "魚",
    "sales": 1380
  },
  {
    "date": "2024-08-16",
    "category": "飲料",
    "sales": 1120
  },
  {
    "date": "2024-08-17",
    "category": "野菜",
    "sales": 713
  },
  {
    "date": "2024-08-17",
    "category": "肉",
    "sales": 1547
  },
  {
    "date": "2024-08-17",
    "category": "魚",
    "sales": 1585
  },
  {
    "date": "2024-08-17",
    "category": "飲料",
    "sales": 830
  },
  {
    "date": "2024-08-18",
    "category": "野菜",
    "sales": 1214
  },
  {
    "date": "2024-08-18",
    "category": "肉",
    "sales": 1170
  },
  {
    "date": "2024-08-18",
    "category": "魚",
    "sales": 2268
  },
  {
    "date": "2024-08-18",
    "category": "飲料",
    "sales": 903
  },
  {
    "date": "2024-08-19",
    "category": "野菜",
    "sales": 920
  },
  {
    "date": "2024-08-19",
    "category": "肉",
    "sales": 1916
  },
  {
    "date": "2024-08-19",
    "category": "魚",
    "sales": 978
  },
  {
    "date": "2024-08-19",
    "category": "飲料",
    "sales": 776
  },
  {
    "date": "2024-08-20",
    "category": "野菜",
    "sales": 665
  },
  {
    "date": "2024-08-20",
    "category": "肉",
    "sales": 1729
  },
  {
    "date": "2024-08-20",
    "category": "魚",
    "sales": 1514
  },
  {
    "date": "2024-08-20",
    "category": "飲料",
    "sales": 705
  },
  {
    "date": "2024-08-21",
    "category": "野菜",
    "sales": 1127
  },
  {
    "date": "2024-08-21",
    "category": "肉",
    "sales": 1474
  },
  {
    "date": "2024-08-21",
    "category": "魚",
    "sales": 1478
  },
  {
    "date": "2024-08-21",
    "category": "飲料",
    "sales": 1341
  },
  {
    "date": "2024-08-22",
    "category": "野菜",
    "sales": 1017
  },
  {
    "date": "2024-08-22",
    "category": "肉",
    "sales": 1643
  },
  {
    "date": "2024-08-22",
    "category": "魚",
    "sales": 1039
  },
  {
    "date": "2024-08-22",
    "category": "飲料",
    "sales": 985
  },
  {
    "date": "2024-08-23",
    "category": "野菜",
    "sales": 800
  },
  {
    "date": "2024-08-23",
    "category": "肉",
    "sales": 1749
  },
  {
    "date": "2024-08-23",
    "category": "魚",
    "sales": 1234
  },
  {
    "date": "2024-08-23",
    "category": "飲料",
    "sales": 1044
  },
  {
    "date": "2024-08-24",
    "category": "野菜",
    "sales": 1344
  },
  {
    "date": "2024-08-24",
    "category": "肉",
    "sales": 1736
  },
  {
    "date": "2024-08-24",
    "category": "魚",
    "sales": 1948
  },
  {
    "date": "2024-08-24",
    "category": "飲料",
    "sales": 1138
  },
  {
    "date": "2024-08-25",
    "category": "野菜",
    "sales": 1274
  },
  {
    "date": "2024-08-25",
    "category": "肉",
    "sales": 1532
  },
  {
    "date": "2024-08-25",
    "category": "魚",
    "sales": 1316
  },
  {
    "date": "2024-08-25",
    "category": "飲料",
    "sales": 958
  },
  {
    "date": "2024-08-26",
    "category": "野菜",
    "sales": 972
  },
  {
    "date": "2024-08-26",
    "category": "肉",
    "sales": 1076
  },
  {
    "date": "2024-08-26",
    "category": "魚",
    "sales": 1104
  },
  {
    "date": "2024-08-26",
    "category": "飲料",
    "sales": 592
  },
  {
    "date": "2024-08-27",
    "category": "野菜",
    "sales": 1285
  },
  {
    "date": "2024-08-27",
    "category": "肉",
    "sales": 2621
  },
  {
    "date": "2024-08-27",
    "category": "魚",
    "sales": 1907
  },
  {
    "date": "2024-08-27",
    "category": "飲料",
    "sales": 313
  },
  {
    "date": "2024-08-28",
    "category": "野菜",
    "sales": 1173
  },
  {
    "date": "2024-08-28",
    "category": "肉",
    "sales": 1653
  },
  {
    "date": "2024-08-28",
    "category": "魚",
    "sales": 1378
  },
  {
    "date": "2024-08-28",
    "category": "飲料",
    "sales": 120
  },
  {
    "date": "2024-08-29",
    "category": "野菜",
    "sales": 1240
  },
  {
    "date": "2024-08-29",
    "category": "肉",
    "sales": 1354
  },
  {
    "date": "2024-08-29",
    "category": "魚",
    "sales": 874
  },
  {
    "date": "2024-08-29",
    "category": "飲料",
    "sales": 487
  },
  {
    "date": "2024-08-30",
    "category": "野菜",
    "sales": 495
  },
  {
    "date": "2024-08-30",
    "category": "肉",
    "sales": 1250
  },
  {
    "date": "2024-08-30",
    "category": "魚",
    "sales": 903
  },
  {
    "date": "2024-08-30",
    "category": "飲料",
    "sales": 871
  },
  {
    "date": "2024-08-31",
    "category": "野菜",
    "sales": 790
  },
  {
    "date": "2024-08-31",
    "category": "肉",
    "sales": 1547
  },
  {
    "date": "2024-08-31",
    "category": "魚",
    "sales": 1530
  },
  {
    "date": "2024-08-31",
    "category": "飲料",
    "sales": 850
  },
  {
    "date": "2024-09-01",
    "category": "野菜",
    "sales": 1397
  },
  {
    "date": "2024-09-01",
    "category": "肉",
    "sales": 1483
  },
  {
    "date": "2024-09-01",
    "category": "魚",
    "sales": 1036
  },
  {
    "date": "2024-09-01",
    "category": "飲料",
    "sales": 1273
  },
  {
    "date": "2024-09-02",
    "category": "野菜",
    "sales": 801
  },
  {
    "date": "2024-09-02",
    "category": "肉",
    "sales": 1949
  },
  {
    "date": "2024-09-02",
    "category": "魚",
    "sales": 1045
  },
  {
    "date": "2024-09-02",
    "category": "飲料",
    "sales": 805
  },
  {
    "date": "2024-09-03",
    "category": "野菜",
    "sales": 1635
  },
  {
    "date": "2024-09-03",
    "category": "肉",
    "sales": 1480
  },
  {
    "date": "2024-09-03",
    "category": "魚",
    "sales": 894
  },
  {
    "date": "2024-09-03",
    "category": "飲料",
    "sales": 988
  },
  {
    "date": "2024-09-04",
    "category": "野菜",
    "sales": 1143
  },
  {
    "date": "2024-09-04",
    "category": "肉",
    "sales": 1310
  },
  {
    "date": "2024-09-04",
    "category": "魚",
    "sales": 1314
  },
  {
    "date": "2024-09-04",
    "category": "飲料",
    "sales": 1321
  },
  {
    "date": "2024-09-05",
    "category": "野菜",
    "sales": 449
  },
  {
    "date": "2024-09-05",
    "category": "肉",
    "sales": 1746
  },
  {
    "date": "2024-09-05",
    "category": "魚",
    "sales": 734
  },
  {
    "date": "2024-09-05",
    "category": "飲料",
    "sales": 1151
  },
  {
    "date": "2024-09-06",
    "category": "野菜",
    "sales": 1495
  },
  {
    "date": "2024-09-06",
    "category": "肉",
    "sales": 1496
  },
  {
    "date": "2024-09-06",
    "category": "魚",
    "sales": 1071
  },
  {
    "date": "2024-09-06",
    "category": "飲料",
    "sales": 883
  },
  {
    "date": "2024-09-07",
    "category": "野菜",
    "sales": 1317
  },
  {
    "date": "2024-09-07",
    "category": "肉",
    "sales": 1408
  },
  {
    "date": "2024-09-07",
    "category": "魚",
    "sales": 1136
  },
  {
    "date": "2024-09-07",
    "category": "飲料",
    "sales": 1011
  },
  {
    "date": "2024-09-08",
    "category": "野菜",
    "sales": 1219
  },
  {
    "date": "2024-09-08",
    "category": "肉",
    "sales": 1895
  },
  {
    "date": "2024-09-08",
    "category": "魚",
    "sales": 1242
  },
  {
    "date": "2024-09-08",
    "category": "飲料",
    "sales": 1388
  },
  {
    "date": "2024-09-09",
    "category": "野菜",
    "sales": 862
  },
  {
    "date": "2024-09-09",
    "category": "肉",
    "sales": 1492
  },
  {
    "date": "2024-09-09",
    "category": "魚",
    "sales": 1202
  },
  {
    "date": "2024-09-09",
    "category": "飲料",
    "sales": 708
  },
  {
    "date": "2024-09-10",
    "category": "野菜",
    "sales": 1094
  },
  {
    "date": "2024-09-10",
    "category": "肉",
    "sales": 901
  },
  {
    "date": "2024-09-10",
    "category": "魚",
    "sales": 1552
  },
  {
    "date": "2024-09-10",
    "category": "飲料",
    "sales": 997
  },
  {
    "date": "2024-09-11",
    "category": "野菜",
    "sales": 1106
  },
  {
    "date": "2024-09-11",
    "category": "肉",
    "sales": 1745
  },
  {
    "date": "2024-09-11",
    "category": "魚",
    "sales": 1132
  },
  {
    "date": "2024-09-11",
    "category": "飲料",
    "sales": 630
  },
  {
    "date": "2024-09-12",
    "category": "野菜",
    "sales": 657
  },
  {
    "date": "2024-09-12",
    "category": "肉",
    "sales": 1405
  },
  {
    "date": "2024-09-12",
    "category": "魚",
    "sales": 1147
  },
  {
    "date": "2024-09-12",
    "category": "飲料",
    "sales": 377
  },
  {
    "date": "2024-09-13",
    "category": "野菜",
    "sales": 1122
  },
  {
    "date": "2024-09-13",
    "category": "肉",
    "sales": 1854
  },
  {
    "date": "2024-09-13",
    "category": "魚",
    "sales": 753
  },
  {
    "date": "2024-09-13",
    "category": "飲料",
    "sales": 1097
  },
  {
    "date": "2024-09-14",
    "category": "野菜",
    "sales": 1283
  },
  {
    "date": "2024-09-14",
    "category": "肉",
    "sales": 1381
  },
  {
    "date": "2024-09-14",
    "category": "魚",
    "sales": 1301
  },
  {
    "date": "2024-09-14",
    "category": "飲料",
    "sales": 735
  },
  {
    "date": "2024-09-15",
    "category": "野菜",
    "sales": 1200
  },
  {
    "date": "2024-09-15",
    "category": "肉",
    "sales": 1660
  },
  {
    "date": "2024-09-15",
    "category": "魚",
    "sales": 1458
  },
  {
    "date": "2024-09-15",
    "category": "飲料",
    "sales": 1024
  },
  {
    "date": "2024-09-16",
    "category": "野菜",
    "sales": 864
  },
  {
    "date": "2024-09-16",
    "category": "肉",
    "sales": 1360
  },
  {
    "date": "2024-09-16",
    "category": "魚",
    "sales": 725
  },
  {
    "date": "2024-09-16",
    "category": "飲料",
    "sales": 277
  },
  {
    "date": "2024-09-17",
    "category": "野菜",
    "sales": 911
  },
  {
    "date": "2024-09-17",
    "category": "肉",
    "sales": 940
  },
  {
    "date": "2024-09-17",
    "category": "魚",
    "sales": 1767
  },
  {
    "date": "2024-09-17",
    "category": "飲料",
    "sales": 771
  },
  {
    "date": "2024-09-18",
    "category": "野菜",
    "sales": 396
  },
  {
    "date": "2024-09-18",
    "category": "肉",
    "sales": 1416
  },
  {
    "date": "2024-09-18",
    "category": "魚",
    "sales": 1052
  },
  {
    "date": "2024-09-18",
    "category": "飲料",
    "sales": 297
  },
  {
    "date": "2024-09-19",
    "category": "野菜",
    "sales": 510
  },
  {
    "date": "2024-09-19",
    "category": "肉",
    "sales": 1162
  },
  {
    "date": "2024-09-19",
    "category": "魚",
    "sales": 1608
  },
  {
    "date": "2024-09-19",
    "category": "飲料",
    "sales": 800
  },
  {
    "date": "2024-09-20",
    "category": "野菜",
    "sales": 846
  },
  {
    "date": "2024-09-20",
    "category": "肉",
    "sales": 1275
  },
  {
    "date": "2024-09-20",
    "category": "魚",
    "sales": 1287
  },
  {
    "date": "2024-09-20",
    "category": "飲料",
    "sales": 710
  },
  {
    "date": "2024-09-21",
    "category": "野菜",
    "sales": 755
  },
  {
    "date": "2024-09-21",
    "category": "肉",
    "sales": 1588
  },
  {
    "date": "2024-09-21",
    "category": "魚",
    "sales": 1614
  },
  {
    "date": "2024-09-21",
    "category": "飲料",
    "sales": 1167
  },
  {
    "date": "2024-09-22",
    "category": "野菜",
    "sales": 847
  },
  {
    "date": "2024-09-22",
    "category": "肉",
    "sales": 1890
  },
  {
    "date": "2024-09-22",
    "category": "魚",
    "sales": 1273
  },
  {
    "date": "2024-09-22",
    "category": "飲料",
    "sales": 349
  },
  {
    "date": "2024-09-23",
    "category": "野菜",
    "sales": 643
  },
  {
    "date": "2024-09-23",
    "category": "肉",
    "sales": 1511
  },
  {
    "date": "2024-09-23",
    "category": "魚",
    "sales": 1442
  },
  {
    "date": "2024-09-23",
    "category": "飲料",
    "sales": 751
  },
  {
    "date": "2024-09-24",
    "category": "野菜",
    "sales": 638
  },
  {
    "date": "2024-09-24",
    "category": "肉",
    "sales": 1313
  },
  {
    "date": "2024-09-24",
    "category": "魚",
    "sales": 1286
  },
  {
    "date": "2024-09-24",
    "category": "飲料",
    "sales": 388
  },
  {
    "date": "2024-09-25",
    "category": "野菜",
    "sales": 1380
  },
  {
    "date": "2024-09-25",
    "category": "肉",
    "sales": 1263
  },
  {
    "date": "2024-09-25",
    "category": "魚",
    "sales": 1058
  },
  {
    "date": "2024-09-25",
    "category": "飲料",
    "sales": 646
  },
  {
    "date": "2024-09-26",
    "category": "野菜",
    "sales": 845
  },
  {
    "date": "2024-09-26",
    "category": "肉",
    "sales": 1248
  },
  {
    "date": "2024-09-26",
    "category": "魚",
    "sales": 875
  },
  {
    "date": "2024-09-26",
    "category": "飲料",
    "sales": 771
  },
  {
    "date": "2024-09-27",
    "category": "野菜",
    "sales": 1161
  },
  {
    "date": "2024-09-27",
    "category": "肉",
    "sales": 1447
  },
  {
    "date": "2024-09-27",
    "category": "魚",
    "sales": 1335
  },
  {
    "date": "2024-09-27",
    "category": "飲料",
    "sales": 476
  },
  {
    "date": "2024-09-28",
    "category": "野菜",
    "sales": 1202
  },
  {
    "date": "2024-09-28",
    "category": "肉",
    "sales": 1860
  },
  {
    "date": "2024-09-28",
    "category": "魚",
    "sales": 1260
  },
  {
    "date": "2024-09-28",
    "category": "飲料",
    "sales": 853
  },
  {
    "date": "2024-09-29",
    "category": "野菜",
    "sales": 1484
  },
  {
    "date": "2024-09-29",
    "category": "肉",
    "sales": 1592
  },
  {
    "date": "2024-09-29",
    "category": "魚",
    "sales": 1227
  },
  {
    "date": "2024-09-29",
    "category": "飲料",
    "sales": 955
  },
  {
    "date": "2024-09-30",
    "category": "野菜",
    "sales": 1104
  },
  {
    "date": "2024-09-30",
    "category": "肉",
    "sales": 1224
  },
  {
    "date": "2024-09-30",
    "category": "魚",
    "sales": 1683
  },
  {
    "date": "2024-09-30",
    "category": "飲料",
    "sales": 415
  },
  {
    "date": "2024-10-01",
    "category": "野菜",
    "sales": 942
  },
  {
    "date": "2024-10-01",
    "category": "肉",
    "sales": 1245
  },
  {
    "date": "2024-10-01",
    "category": "魚",
    "sales": 1301
  },
  {
    "date": "2024-10-01",
    "category": "飲料",
    "sales": 213
  },
  {
    "date": "2024-10-02",
    "category": "野菜",
    "sales": 951
  },
  {
    "date": "2024-10-02",
    "category": "肉",
    "sales": 1534
  },
  {
    "date": "2024-10-02",
    "category": "魚",
    "sales": 1432
  },
  {
    "date": "2024-10-02",
    "category": "飲料",
    "sales": 661
  },
  {
    "date": "2024-10-03",
    "category": "野菜",
    "sales": 966
  },
  {
    "date": "2024-10-03",
    "category": "肉",
    "sales": 1456
  },
  {
    "date": "2024-10-03",
    "category": "魚",
    "sales": 733
  },
  {
    "date": "2024-10-03",
    "category": "飲料",
    "sales": 339
  },
  {
    "date": "2024-10-04",
    "category": "野菜",
    "sales": 1460
  },
  {
    "date": "2024-10-04",
    "category": "肉",
    "sales": 1299
  },
  {
    "date": "2024-10-04",
    "category": "魚",
    "sales": 1242
  },
  {
    "date": "2024-10-04",
    "category": "飲料",
    "sales": 1158
  },
  {
    "date": "2024-10-05",
    "category": "野菜",
    "sales": 1101
  },
  {
    "date": "2024-10-05",
    "category": "肉",
    "sales": 1550
  },
  {
    "date": "2024-10-05",
    "category": "魚",
    "sales": 1611
  },
  {
    "date": "2024-10-05",
    "category": "飲料",
    "sales": 777
  },
  {
    "date": "2024-10-06",
    "category": "野菜",
    "sales": 1575
  },
  {
    "date": "2024-10-06",
    "category": "肉",
    "sales": 1414
  },
  {
    "date": "2024-10-06",
    "category": "魚",
    "sales": 1205
  },
  {
    "date": "2024-10-06",
    "category": "飲料",
    "sales": 1266
  },
  {
    "date": "2024-10-07",
    "category": "野菜",
    "sales": 1151
  },
  {
    "date": "2024-10-07",
    "category": "肉",
    "sales": 1161
  },
  {
    "date": "2024-10-07",
    "category": "魚",
    "sales": 836
  },
  {
    "date": "2024-10-07",
    "category": "飲料",
    "sales": 575
  },
  {
    "date": "2024-10-08",
    "category": "野菜",
    "sales": 1451
  },
  {
    "date": "2024-10-08",
    "category": "肉",
    "sales": 1458
  },
  {
    "date": "2024-10-08",
    "category": "魚",
    "sales": 869
  },
  {
    "date": "2024-10-08",
    "category": "飲料",
    "sales": 523
  },
  {
    "date": "2024-10-09",
    "category": "野菜",
    "sales": 274
  },
  {
    "date": "2024-10-09",
    "category": "肉",
    "sales": 1929
  },
  {
    "date": "2024-10-09",
    "category": "魚",
    "sales": 1194
  },
  {
    "date": "2024-10-09",
    "category": "飲料",
    "sales": 944
  },
  {
    "date": "2024-10-10",
    "category": "野菜",
    "sales": 1192
  },
  {
    "date": "2024-10-10",
    "category": "肉",
    "sales": 1044
  },
  {
    "date": "2024-10-10",
    "category": "魚",
    "sales": 1072
  },
  {
    "date": "2024-10-10",
    "category": "飲料",
    "sales": 903
  },
  {
    "date": "2024-10-11",
    "category": "野菜",
    "sales": 1529
  },
  {
    "date": "2024-10-11",
    "category": "肉",
    "sales": 1161
  },
  {
    "date": "2024-10-11",
    "category": "魚",
    "sales": 749
  },
  {
    "date": "2024-10-11",
    "category": "飲料",
    "sales": 966
  },
  {
    "date": "2024-10-12",
    "category": "野菜",
    "sales": 1176
  },
  {
    "date": "2024-10-12",
    "category": "肉",
    "sales": 1684
  },
  {
    "date": "2024-10-12",
    "category": "魚",
    "sales": 1899
  },
  {
    "date": "2024-10-12",
    "category": "飲料",
    "sales": 609
  },
  {
    "date": "2024-10-13",
    "category": "野菜",
    "sales": 1815
  },
  {
    "date": "2024-10-13",
    "category": "肉",
    "sales": 1798
  },
  {
    "date": "2024-10-13",
    "category": "魚",
    "sales": 1287
  },
  {
    "date": "2024-10-13",
    "category": "飲料",
    "sales": 747
  },
  {
    "date": "2024-10-14",
    "category": "野菜",
    "sales": 1178
  },
  {
    "date": "2024-10-14",
    "category": "肉",
    "sales": 1417
  },
  {
    "date": "2024-10-14",
    "category": "魚",
    "sales": 1189
  },
  {
    "date": "2024-10-14",
    "category": "飲料",
    "sales": 765
  },
  {
    "date": "2024-10-15",
    "category": "野菜",
    "sales": 1261
  },
  {
    "date": "2024-10-15",
    "category": "肉",
    "sales": 1585
  },
  {
    "date": "2024-10-15",
    "category": "魚",
    "sales": 1095
  },
  {
    "date": "2024-10-15",
    "category": "飲料",
    "sales": 727
  },
  {
    "date": "2024-10-16",
    "category": "野菜",
    "sales": 935
  },
  {
    "date": "2024-10-16",
    "category": "肉",
    "sales": 1426
  },
  {
    "date": "2024-10-16",
    "category": "魚",
    "sales": 605
  },
  {
    "date": "2024-10-16",
    "category": "飲料",
    "sales": 419
  },
  {
    "date": "2024-10-17",
    "category": "野菜",
    "sales": 1132
  },
  {
    "date": "2024-10-17",
    "category": "肉",
    "sales": 1633
  },
  {
    "date": "2024-10-17",
    "category": "魚",
    "sales": 764
  },
  {
    "date": "2024-10-17",
    "category": "飲料",
    "sales": 309
  },
  {
    "date": "2024-10-18",
    "category": "野菜",
    "sales": 468
  },
  {
    "date": "2024-10-18",
    "category": "肉",
    "sales": 1460
  },
  {
    "date": "2024-10-18",
    "category": "魚",
    "sales": 1037
  },
  {
    "date": "2024-10-18",
    "category": "飲料",
    "sales": 1036
  },
  {
    "date": "2024-10-19",
    "category": "野菜",
    "sales": 498
  },
  {
    "date": "2024-10-19",
    "category": "肉",
    "sales": 1226
  },
  {
    "date": "2024-10-19",
    "category": "魚",
    "sales": 1255
  },
  {
    "date": "2024-10-19",
    "category": "飲料",
    "sales": 1191
  },
  {
    "date": "2024-10-20",
    "category": "野菜",
    "sales": 1276
  },
  {
    "date": "2024-10-20",
    "category": "肉",
    "sales": 1946
  },
  {
    "date": "2024-10-20",
    "category": "魚",
    "sales": 1343
  },
  {
    "date": "2024-10-20",
    "category": "飲料",
    "sales": 913
  },
  {
    "date": "2024-10-21",
    "category": "野菜",
    "sales": 672
  },
  {
    "date": "2024-10-21",
    "category": "肉",
    "sales": 2031
  },
  {
    "date": "2024-10-21",
    "category": "魚",
    "sales": 625
  },
  {
    "date": "2024-10-21",
    "category": "飲料",
    "sales": 346
  },
  {
    "date": "2024-10-22",
    "category": "野菜",
    "sales": 665
  },
  {
    "date": "2024-10-22",
    "category": "肉",
    "sales": 1427
  },
  {
    "date": "2024-10-22",
    "category": "魚",
    "sales": 1070
  },
  {
    "date": "2024-10-22",
    "category": "飲料",
    "sales": 682
  },
  {
    "date": "2024-10-23",
    "category": "野菜",
    "sales": 802
  },
  {
    "date": "2024-10-23",
    "category": "肉",
    "sales": 1413
  },
  {
    "date": "2024-10-23",
    "category": "魚",
    "sales": 1692
  },
  {
    "date": "2024-10-23",
    "category": "飲料",
    "sales": 778
  },
  {
    "date": "2024-10-24",
    "category": "野菜",
    "sales": 596
  },
  {
    "date": "2024-10-24",
    "category": "肉",
    "sales": 1166
  },
  {
    "date": "2024-10-24",
    "category": "魚",
    "sales": 929
  },
  {
    "date": "2024-10-24",
    "category": "飲料",
    "sales": 931
  },
  {
    "date": "2024-10-25",
    "category": "野菜",
    "sales": 1155
  },
  {
    "date": "2024-10-25",
    "category": "肉",
    "sales": 1584
  },
  {
    "date": "2024-10-25",
    "category": "魚",
    "sales": 1326
  },
  {
    "date": "2024-10-25",
    "category": "飲料",
    "sales": 136
  },
  {
    "date": "2024-10-26",
    "category": "野菜",
    "sales": 1390
  },
  {
    "date": "2024-10-26",
    "category": "肉",
    "sales": 1900
  },
  {
    "date": "2024-10-26",
    "category": "魚",
    "sales": 1477
  },
  {
    "date": "2024-10-26",
    "category": "飲料",
    "sales": 1654
  },
  {
    "date": "2024-10-27",
    "category": "野菜",
    "sales": 1259
  },
  {
    "date": "2024-10-27",
    "category": "肉",
    "sales": 1915
  },
  {
    "date": "2024-10-27",
    "category": "魚",
    "sales": 1082
  },
  {
    "date": "2024-10-27",
    "category": "飲料",
    "sales": 887
  },
  {
    "date": "2024-10-28",
    "category": "野菜",
    "sales": 947
  },
  {
    "date": "2024-10-28",
    "category": "肉",
    "sales": 1236
  },
  {
    "date": "2024-10-28",
    "category": "魚",
    "sales": 1195
  },
  {
    "date": "2024-10-28",
    "category": "飲料",
    "sales": 1072
  },
  {
    "date": "2024-10-29",
    "category": "野菜",
    "sales": 974
  },
  {
    "date": "2024-10-29",
    "category": "肉",
    "sales": 1411
  },
  {
    "date": "2024-10-29",
    "category": "魚",
    "sales": 1006
  },
  {
    "date": "2024-10-29",
    "category": "飲料",
    "sales": 886
  },
  {
    "date": "2024-10-30",
    "category": "野菜",
    "sales": 588
  },
  {
    "date": "2024-10-30",
    "category": "肉",
    "sales": 1812
  },
  {
    "date": "2024-10-30",
    "category": "魚",
    "sales": 827
  },
  {
    "date": "2024-10-30",
    "category": "飲料",
    "sales": 1135
  },
  {
    "date": "2024-10-31",
    "category": "野菜",
    "sales": 1049
  },
  {
    "date": "2024-10-31",
    "category": "肉",
    "sales": 1302
  },
  {
    "date": "2024-10-31",
    "category": "魚",
    "sales": 1056
  },
  {
    "date": "2024-10-31",
    "category": "飲料",
    "sales": 735
  },
  {
    "date": "2024-11-01",
    "category": "野菜",
    "sales": 1440
  },
  {
    "date": "2024-11-01",
    "category": "肉",
    "sales": 1720
  },
  {
    "date": "2024-11-01",
    "category": "魚",
    "sales": 1374
  },
  {
    "date": "2024-11-01",
    "category": "飲料",
    "sales": 710
  },
  {
    "date": "2024-11-02",
    "category": "野菜",
    "sales": 1382
  },
  {
    "date": "2024-11-02",
    "category": "肉",
    "sales": 2173
  },
  {
    "date": "2024-11-02",
    "category": "魚",
    "sales": 1380
  },
  {
    "date": "2024-11-02",
    "category": "飲料",
    "sales": 1046
  },
  {
    "date": "2024-11-03",
    "category": "野菜",
    "sales": 1300
  },
  {
    "date": "2024-11-03",
    "category": "肉",
    "sales": 1817
  },
  {
    "date": "2024-11-03",
    "category": "魚",
    "sales": 1644
  },
  {
    "date": "2024-11-03",
    "category": "飲料",
    "sales": 1057
  },
  {
    "date": "2024-11-04",
    "category": "野菜",
    "sales": 667
  },
  {
    "date": "2024-11-04",
    "category": "肉",
    "sales": 928
  },
  {
    "date": "2024-11-04",
    "category": "魚",
    "sales": 1280
  },
  {
    "date": "2024-11-04",
    "category": "飲料",
    "sales": 1170
  },
  {
    "date": "2024-11-05",
    "category": "野菜",
    "sales": 708
  },
  {
    "date": "2024-11-05",
    "category": "肉",
    "sales": 1001
  },
  {
    "date": "2024-11-05",
    "category": "魚",
    "sales": 1709
  },
  {
    "date": "2024-11-05",
    "category": "飲料",
    "sales": 753
  },
  {
    "date": "2024-11-06",
    "category": "野菜",
    "sales": 1196
  },
  {
    "date": "2024-11-06",
    "category": "肉",
    "sales": 1138
  },
  {
    "date": "2024-11-06",
    "category": "魚",
    "sales": 1033
  },
  {
    "date": "2024-11-06",
    "category": "飲料",
    "sales": 1466
  },
  {
    "date": "2024-11-07",
    "category": "野菜",
    "sales": 1267
  },
  {
    "date": "2024-11-07",
    "category": "肉",
    "sales": 1609
  },
  {
    "date": "2024-11-07",
    "category": "魚",
    "sales": 1363
  },
  {
    "date": "2024-11-07",
    "category": "飲料",
    "sales": 592
  },
  {
    "date": "2024-11-08",
    "category": "野菜",
    "sales": 1191
  },
  {
    "date": "2024-11-08",
    "category": "肉",
    "sales": 1511
  },
  {
    "date": "2024-11-08",
    "category": "魚",
    "sales": 1180
  },
  {
    "date": "2024-11-08",
    "category": "飲料",
    "sales": 1043
  },
  {
    "date": "2024-11-09",
    "category": "野菜",
    "sales": 818
  },
  {
    "date": "2024-11-09",
    "category": "肉",
    "sales": 1832
  },
  {
    "date": "2024-11-09",
    "category": "魚",
    "sales": 979
  },
  {
    "date": "2024-11-09",
    "category": "飲料",
    "sales": 886
  },
  {
    "date": "2024-11-10",
    "category": "野菜",
    "sales": 1377
  },
  {
    "date": "2024-11-10",
    "category": "肉",
    "sales": 1952
  },
  {
    "date": "2024-11-10",
    "category": "魚",
    "sales": 1499
  },
  {
    "date": "2024-11-10",
    "category": "飲料",
    "sales": 1203
  },
  {
    "date": "2024-11-11",
    "category": "野菜",
    "sales": 1092
  },
  {
    "date": "2024-11-11",
    "category": "肉",
    "sales": 1034
  },
  {
    "date": "2024-11-11",
    "category": "魚",
    "sales": 1353
  },
  {
    "date": "2024-11-11",
    "category": "飲料",
    "sales": 1012
  },
  {
    "date": "2024-11-12",
    "category": "野菜",
    "sales": 1278
  },
  {
    "date": "2024-11-12",
    "category": "肉",
    "sales": 1592
  },
  {
    "date": "2024-11-12",
    "category": "魚",
    "sales": 1521
  },
  {
    "date": "2024-11-12",
    "category": "飲料",
    "sales": 849
  },
  {
    "date": "2024-11-13",
    "category": "野菜",
    "sales": 1119
  },
  {
    "date": "2024-11-13",
    "category": "肉",
    "sales": 1700
  },
  {
    "date": "2024-11-13",
    "category": "魚",
    "sales": 1203
  },
  {
    "date": "2024-11-13",
    "category": "飲料",
    "sales": 869
  },
  {
    "date": "2024-11-14",
    "category": "野菜",
    "sales": 846
  },
  {
    "date": "2024-11-14",
    "category": "肉",
    "sales": 1518
  },
  {
    "date": "2024-11-14",
    "category": "魚",
    "sales": 1317
  },
  {
    "date": "2024-11-14",
    "category": "飲料",
    "sales": 242
  },
  {
    "date": "2024-11-15",
    "category": "野菜",
    "sales": 915
  },
  {
    "date": "2024-11-15",
    "category": "肉",
    "sales": 1905
  },
  {
    "date": "2024-11-15",
    "category": "魚",
    "sales": 1165
  },
  {
    "date": "2024-11-15",
    "category": "飲料",
    "sales": 572
  },
  {
    "date": "2024-11-16",
    "category": "野菜",
    "sales": 1198
  },
  {
    "date": "2024-11-16",
    "category": "肉",
    "sales": 1877
  },
  {
    "date": "2024-11-16",
    "category": "魚",
    "sales": 1716
  },
  {
    "date": "2024-11-16",
    "category": "飲料",
    "sales": 733
  },
  {
    "date": "2024-11-17",
    "category": "野菜",
    "sales": 1293
  },
  {
    "date": "2024-11-17",
    "category": "肉",
    "sales": 2127
  },
  {
    "date": "2024-11-17",
    "category": "魚",
    "sales": 1569
  },
  {
    "date": "2024-11-17",
    "category": "飲料",
    "sales": 1139
  },
  {
    "date": "2024-11-18",
    "category": "野菜",
    "sales": 1318
  },
  {
    "date": "2024-11-18",
    "category": "肉",
    "sales": 1585
  },
  {
    "date": "2024-11-18",
    "category": "魚",
    "sales": 910
  },
  {
    "date": "2024-11-18",
    "category": "飲料",
    "sales": 631
  },
  {
    "date": "2024-11-19",
    "category": "野菜",
    "sales": 1116
  },
  {
    "date": "2024-11-19",
    "category": "肉",
    "sales": 1684
  },
  {
    "date": "2024-11-19",
    "category": "魚",
    "sales": 1357
  },
  {
    "date": "2024-11-19",
    "category": "飲料",
    "sales": 1098
  },
  {
    "date": "2024-11-20",
    "category": "野菜",
    "sales": 729
  },
  {
    "date": "2024-11-20",
    "category": "肉",
    "sales": 1772
  },
  {
    "date": "2024-11-20",
    "category": "魚",
    "sales": 1832
  },
  {
    "date": "2024-11-20",
    "category": "飲料",
    "sales": 1251
  },
  {
    "date": "2024-11-21",
    "category": "野菜",
    "sales": 1575
  },
  {
    "date": "2024-11-21",
    "category": "肉",
    "sales": 1355
  },
  {
    "date": "2024-11-21",
    "category": "魚",
    "sales": 1131
  },
  {
    "date": "2024-11-21",
    "category": "飲料",
    "sales": 802
  },
  {
    "date": "2024-11-22",
    "category": "野菜",
    "sales": 1148
  },
  {
    "date": "2024-11-22",
    "category": "肉",
    "sales": 1443
  },
  {
    "date": "2024-11-22",
    "category": "魚",
    "sales": 2134
  },
  {
    "date": "2024-11-22",
    "category": "飲料",
    "sales": 834
  },
  {
    "date": "2024-11-23",
    "category": "野菜",
    "sales": 1681
  },
  {
    "date": "2024-11-23",
    "category": "肉",
    "sales": 1900
  },
  {
    "date": "2024-11-23",
    "category": "魚",
    "sales": 1568
  },
  {
    "date": "2024-11-23",
    "category": "飲料",
    "sales": 470
  },
  {
    "date": "2024-11-24",
    "category": "野菜",
    "sales": 1193
  },
  {
    "date": "2024-11-24",
    "category": "肉",
    "sales": 1897
  },
  {
    "date": "2024-11-24",
    "category": "魚",
    "sales": 1485
  },
  {
    "date": "2024-11-24",
    "category": "飲料",
    "sales": 980
  },
  {
    "date": "2024-11-25",
    "category": "野菜",
    "sales": 742
  },
  {
    "date": "2024-11-25",
    "category": "肉",
    "sales": 2018
  },
  {
    "date": "2024-11-25",
    "category": "魚",
    "sales": 674
  },
  {
    "date": "2024-11-25",
    "category": "飲料",
    "sales": 649
  },
  {
    "date": "2024-11-26",
    "category": "野菜",
    "sales": 1250
  },
  {
    "date": "2024-11-26",
    "category": "肉",
    "sales": 1910
  },
  {
    "date": "2024-11-26",
    "category": "魚",
    "sales": 1650
  },
  {
    "date": "2024-11-26",
    "category": "飲料",
    "sales": 933
  },
  {
    "date": "2024-11-27",
    "category": "野菜",
    "sales": 807
  },
  {
    "date": "2024-11-27",
    "category": "肉",
    "sales": 2182
  },
  {
    "date": "2024-11-27",
    "category": "魚",
    "sales": 1160
  },
  {
    "date": "2024-11-27",
    "category": "飲料",
    "sales": 527
  },
  {
    "date": "2024-11-28",
    "category": "野菜",
    "sales": 1064
  },
  {
    "date": "2024-11-28",
    "category": "肉",
    "sales": 1804
  },
  {
    "date": "2024-11-28",
    "category": "魚",
    "sales": 1312
  },
  {
    "date": "2024-11-28",
    "category": "飲料",
    "sales": 739
  },
  {
    "date": "2024-11-29",
    "category": "野菜",
    "sales": 860
  },
  {
    "date": "2024-11-29",
    "category": "肉",
    "sales": 1685
  },
  {
    "date": "2024-11-29",
    "category": "魚",
    "sales": 1529
  },
  {
    "date": "2024-11-29",
    "category": "飲料",
    "sales": 893
  },
  {
    "date": "2024-11-30",
    "category": "野菜",
    "sales": 1273
  },
  {
    "date": "2024-11-30",
    "category": "肉",
    "sales": 2129
  },
  {
    "date": "2024-11-30",
    "category": "魚",
    "sales": 1550
  },
  {
    "date": "2024-11-30",
    "category": "飲料",
    "sales": 1531
  },
  {
    "date": "2024-12-01",
    "category": "野菜",
    "sales": 1188
  },
  {
    "date": "2024-12-01",
    "category": "肉",
    "sales": 1525
  },
  {
    "date": "2024-12-01",
    "category": "魚",
    "sales": 1634
  },
  {
    "date": "2024-12-01",
    "category": "飲料",
    "sales": 402
  },
  {
    "date": "2024-12-02",
    "category": "野菜",
    "sales": 1504
  },
  {
    "date": "2024-12-02",
    "category": "肉",
    "sales": 1699
  },
  {
    "date": "2024-12-02",
    "category": "魚",
    "sales": 1632
  },
  {
    "date": "2024-12-02",
    "category": "飲料",
    "sales": 632
  },
  {
    "date": "2024-12-03",
    "category": "野菜",
    "sales": 1165
  },
  {
    "date": "2024-12-03",
    "category": "肉",
    "sales": 1633
  },
  {
    "date": "2024-12-03",
    "category": "魚",
    "sales": 1378
  },
  {
    "date": "2024-12-03",
    "category": "飲料",
    "sales": 776
  },
  {
    "date": "2024-12-04",
    "category": "野菜",
    "sales": 1484
  },
  {
    "date": "2024-12-04",
    "category": "肉",
    "sales": 1565
  },
  {
    "date": "2024-12-04",
    "category": "魚",
    "sales": 1417
  },
  {
    "date": "2024-12-04",
    "category": "飲料",
    "sales": 1162
  },
  {
    "date": "2024-12-05",
    "category": "野菜",
    "sales": 1482
  },
  {
    "date": "2024-12-05",
    "category": "肉",
    "sales": 1917
  },
  {
    "date": "2024-12-05",
    "category": "魚",
    "sales": 1405
  },
  {
    "date": "2024-12-05",
    "category": "飲料",
    "sales": 639
  },
  {
    "date": "2024-12-06",
    "category": "野菜",
    "sales": 998
  },
  {
    "date": "2024-12-06",
    "category": "肉",
    "sales": 1442
  },
  {
    "date": "2024-12-06",
    "category": "魚",
    "sales": 1748
  },
  {
    "date": "2024-12-06",
    "category": "飲料",
    "sales": 1075
  },
  {
    "date": "2024-12-07",
    "category": "野菜",
    "sales": 1403
  },
  {
    "date": "2024-12-07",
    "category": "肉",
    "sales": 1595
  },
  {
    "date": "2024-12-07",
    "category": "魚",
    "sales": 1948
  },
  {
    "date": "2024-12-07",
    "category": "飲料",
    "sales": 478
  },
  {
    "date": "2024-12-08",
    "category": "野菜",
    "sales": 1636
  },
  {
    "date": "2024-12-08",
    "category": "肉",
    "sales": 2055
  },
  {
    "date": "2024-12-08",
    "category": "魚",
    "sales": 1938
  },
  {
    "date": "2024-12-08",
    "category": "飲料",
    "sales": 790
  },
  {
    "date": "2024-12-09",
    "category": "野菜",
    "sales": 1230
  },
  {
    "date": "2024-12-09",
    "category": "肉",
    "sales": 2012
  },
  {
    "date": "2024-12-09",
    "category": "魚",
    "sales": 1395
  },
  {
    "date": "2024-12-09",
    "category": "飲料",
    "sales": 1172
  },
  {
    "date": "2024-12-10",
    "category": "野菜",
    "sales": 906
  },
  {
    "date": "2024-12-10",
    "category": "肉",
    "sales": 1945
  },
  {
    "date": "2024-12-10",
    "category": "魚",
    "sales": 1266
  },
  {
    "date": "2024-12-10",
    "category": "飲料",
    "sales": 768
  },
  {
    "date": "2024-12-11",
    "category": "野菜",
    "sales": 1695
  },
  {
    "date": "2024-12-11",
    "category": "肉",
    "sales": 1671
  },
  {
    "date": "2024-12-11",
    "category": "魚",
    "sales": 866
  },
  {
    "date": "2024-12-11",
    "category": "飲料",
    "sales": 1212
  },
  {
    "date": "2024-12-12",
    "category": "野菜",
    "sales": 997
  },
  {
    "date": "2024-12-12",
    "category": "肉",
    "sales": 1884
  },
  {
    "date": "2024-12-12",
    "category": "魚",
    "sales": 1357
  },
  {
    "date": "2024-12-12",
    "category": "飲料",
    "sales": 1242
  },
  {
    "date": "2024-12-13",
    "category": "野菜",
    "sales": 1410
  },
  {
    "date": "2024-12-13",
    "category": "肉",
    "sales": 1715
  },
  {
    "date": "2024-12-13",
    "category": "魚",
    "sales": 1368
  },
  {
    "date": "2024-12-13",
    "category": "飲料",
    "sales": 1316
  },
  {
    "date": "2024-12-14",
    "category": "野菜",
    "sales": 1784
  },
  {
    "date": "2024-12-14",
    "category": "肉",
    "sales": 2028
  },
  {
    "date": "2024-12-14",
    "category": "魚",
    "sales": 1374
  },
  {
    "date": "2024-12-14",
    "category": "飲料",
    "sales": 1216
  },
  {
    "date": "2024-12-15",
    "category": "野菜",
    "sales": 1036
  },
  {
    "date": "2024-12-15",
    "category": "肉",
    "sales": 2162
  },
  {
    "date": "2024-12-15",
    "category": "魚",
    "sales": 1286
  },
  {
    "date": "2024-12-15",
    "category": "飲料",
    "sales": 1366
  },
  {
    "date": "2024-12-16",
    "category": "野菜",
    "sales": 1377
  },
  {
    "date": "2024-12-16",
    "category": "肉",
    "sales": 1900
  },
  {
    "date": "2024-12-16",
    "category": "魚",
    "sales": 1890
  },
  {
    "date": "2024-12-16",
    "category": "飲料",
    "sales": 1066
  },
  {
    "date": "2024-12-17",
    "category": "野菜",
    "sales": 1332
  },
  {
    "date": "2024-12-17",
    "category": "肉",
    "sales": 1700
  },
  {
    "date": "2024-12-17",
    "category": "魚",
    "sales": 1562
  },
  {
    "date": "2024-12-17",
    "category": "飲料",
    "sales": 968
  },
  {
    "date": "2024-12-18",
    "category": "野菜",
    "sales": 1073
  },
  {
    "date": "2024-12-18",
    "category": "肉",
    "sales": 1995
  },
  {
    "date": "2024-12-18",
    "category": "魚",
    "sales": 1742
  },
  {
    "date": "2024-12-18",
    "category": "飲料",
    "sales": 732
  },
  {
    "date": "2024-12-19",
    "category": "野菜",
    "sales": 1410
  },
  {
    "date": "2024-12-19",
    "category": "肉",
    "sales": 2258
  },
  {
    "date": "2024-12-19",
    "category": "魚",
    "sales": 1652
  },
  {
    "date": "2024-12-19",
    "category": "飲料",
    "sales": 1655
  },
  {
    "date": "2024-12-20",
    "category": "野菜",
    "sales": 1402
  },
  {
    "date": "2024-12-20",
    "category": "肉",
    "sales": 2339
  },
  {
    "date": "2024-12-20",
    "category": "魚",
    "sales": 1253
  },
  {
    "date": "2024-12-20",
    "category": "飲料",
    "sales": 1274
  },
  {
    "date": "2024-12-21",
    "category": "野菜",
    "sales": 1686
  },
  {
    "date": "2024-12-21",
    "category": "肉",
    "sales": 2383
  },
  {
    "date": "2024-12-21",
    "category": "魚",
    "sales": 1841
  },
  {
    "date": "2024-12-21",
    "category": "飲料",
    "sales": 1370
  },
  {
    "date": "2024-12-22",
    "category": "野菜",
    "sales": 1354
  },
  {
    "date": "2024-12-22",
    "category": "肉",
    "sales": 2191
  },
  {
    "date": "2024-12-22",
    "category": "魚",
    "sales": 1899
  },
  {
    "date": "2024-12-22",
    "category": "飲料",
    "sales": 1209
  },
  {
    "date": "2024-12-23",
    "category": "野菜",
    "sales": 821
  },
  {
    "date": "2024-12-23",
    "category": "肉",
    "sales": 2551
  },
  {
    "date": "2024-12-23",
    "category": "魚",
    "sales": 1350
  },
  {
    "date": "2024-12-23",
    "category": "飲料",
    "sales": 1464
  },
  {
    "date": "2024-12-24",
    "category": "野菜",
    "sales": 1418
  },
  {
    "date": "2024-12-24",
    "category": "肉",
    "sales": 1721
  },
  {
    "date": "2024-12-24",
    "category": "魚",
    "sales": 1646
  },
  {
    "date": "2024-12-24",
    "category": "飲料",
    "sales": 969
  },
  {
    "date": "2024-12-25",
    "category": "野菜",
    "sales": 1464
  },
  {
    "date": "2024-12-25",
    "category": "肉",
    "sales": 2230
  },
  {
    "date": "2024-12-25",
    "category": "魚",
    "sales": 2047
  },
  {
    "date": "2024-12-25",
    "category": "飲料",
    "sales": 386
  },
  {
    "date": "2024-12-26",
    "category": "野菜",
    "sales": 1874
  },
  {
    "date": "2024-12-26",
    "category": "肉",
    "sales": 1995
  },
  {
    "date": "2024-12-26",
    "category": "魚",
    "sales": 1686
  },
  {
    "date": "2024-12-26",
    "category": "飲料",
    "sales": 715
  },
  {
    "date": "2024-12-27",
    "category": "野菜",
    "sales": 1210
  },
  {
    "date": "2024-12-27",
    "category": "肉",
    "sales": 1441
  },
  {
    "date": "2024-12-27",
    "category": "魚",
    "sales": 1483
  },
  {
    "date": "2024-12-27",
    "category": "飲料",
    "sales": 819
  },
  {
    "date": "2024-12-28",
    "category": "野菜",
    "sales": 1554
  },
  {
    "date": "2024-12-28",
    "category": "肉",
    "sales": 2831
  },
  {
    "date": "2024-12-28",
    "category": "魚",
    "sales": 1580
  },
  {
    "date": "2024-12-28",
    "category": "飲料",
    "sales": 1385
  },
  {
    "date": "2024-12-29",
    "category": "野菜",
    "sales": 2313
  },
  {
    "date": "2024-12-29",
    "category": "肉",
    "sales": 2511
  },
  {
    "date": "2024-12-29",
    "category": "魚",
    "sales": 1783
  },
  {
    "date": "2024-12-29",
    "category": "飲料",
    "sales": 1177
  },
  {
    "date": "2024-12-30",
    "category": "野菜",
    "sales": 724
  },
  {
    "date": "2024-12-30",
    "category": "肉",
    "sales": 2579
  },
  {
    "date": "2024-12-30",
    "category": "魚",
    "sales": 1823
  },
  {
    "date": "2024-12-30",
    "category": "飲料",
    "sales": 1311
  },
  {
    "date": "2024-12-31",
    "category": "野菜",
    "sales": 1655
  },
  {
    "date": "2024-12-31",
    "category": "肉",
    "sales": 1837
  },
  {
    "date": "2024-12-31",
    "category": "魚",
    "sales": 1569
  },
  {
    "date": "2024-12-31",
    "category": "飲料",
    "sales": 1185
  },
  {
    "date": "2025-01-01",
    "category": "野菜",
    "sales": 1287
  },
  {
    "date": "2025-01-01",
    "category": "肉",
    "sales": 2022
  },
  {
    "date": "2025-01-01",
    "category": "魚",
    "sales": 1760
  },
  {
    "date": "2025-01-01",
    "category": "飲料",
    "sales": 1084
  },
  {
    "date": "2025-01-02",
    "category": "野菜",
    "sales": 1381
  },
  {
    "date": "2025-01-02",
    "category": "肉",
    "sales": 2037
  },
  {
    "date": "2025-01-02",
    "category": "魚",
    "sales": 1594
  },
  {
    "date": "2025-01-02",
    "category": "飲料",
    "sales": 1454
  },
  {
    "date": "2025-01-03",
    "category": "野菜",
    "sales": 1386
  },
  {
    "date": "2025-01-03",
    "category": "肉",
    "sales": 1967
  },
  {
    "date": "2025-01-03",
    "category": "魚",
    "sales": 1189
  },
  {
    "date": "2025-01-03",
    "category": "飲料",
    "sales": 843
  },
  {
    "date": "2025-01-04",
    "category": "野菜",
    "sales": 1400
  },
  {
    "date": "2025-01-04",
    "category": "肉",
    "sales": 2191
  },
  {
    "date": "2025-01-04",
    "category": "魚",
    "sales": 1902
  },
  {
    "date": "2025-01-04",
    "category": "飲料",
    "sales": 1091
  },
  {
    "date": "2025-01-05",
    "category": "野菜",
    "sales": 1484
  },
  {
    "date": "2025-01-05",
    "category": "肉",
    "sales": 2419
  },
  {
    "date": "2025-01-05",
    "category": "魚",
    "sales": 2270
  },
  {
    "date": "2025-01-05",
    "category": "飲料",
    "sales": 1240
  },
  {
    "date": "2025-01-06",
    "category": "野菜",
    "sales": 1234
  },
  {
    "date": "2025-01-06",
    "category": "肉",
    "sales": 1872
  },
  {
    "date": "2025-01-06",
    "category": "魚",
    "sales": 1720
  },
  {
    "date": "2025-01-06",
    "category": "飲料",
    "sales": 1307
  },
  {
    "date": "2025-01-07",
    "category": "野菜",
    "sales": 1348
  },
  {
    "date": "2025-01-07",
    "category": "肉",
    "sales": 2170
  },
  {
    "date": "2025-01-07",
    "category": "魚",
    "sales": 1044
  },
  {
    "date": "2025-01-07",
    "category": "飲料",
    "sales": 1724
  },
  {
    "date": "2025-01-08",
    "category": "野菜",
    "sales": 1696
  },
  {
    "date": "2025-01-08",
    "category": "肉",
    "sales": 1833
  },
  {
    "date": "2025-01-08",
    "category": "魚",
    "sales": 1752
  },
  {
    "date": "2025-01-08",
    "category": "飲料",
    "sales": 1229
  },
  {
    "date": "2025-01-09",
    "category": "野菜",
    "sales": 1593
  },
  {
    "date": "2025-01-09",
    "category": "肉",
    "sales": 1724
  },
  {
    "date": "2025-01-09",
    "category": "魚",
    "sales": 1813
  },
  {
    "date": "2025-01-09",
    "category": "飲料",
    "sales": 1319
  },
  {
    "date": "2025-01-10",
    "category": "野菜",
    "sales": 1338
  },
  {
    "date": "2025-01-10",
    "category": "肉",
    "sales": 2296
  },
  {
    "date": "2025-01-10",
    "category": "魚",
    "sales": 1954
  },
  {
    "date": "2025-01-10",
    "category": "飲料",
    "sales": 1178
  },
  {
    "date": "2025-01-11",
    "category": "野菜",
    "sales": 1861
  },
  {
    "date": "2025-01-11",
    "category": "肉",
    "sales": 2908
  },
  {
    "date": "2025-01-11",
    "category": "魚",
    "sales": 1934
  },
  {
    "date": "2025-01-11",
    "category": "飲料",
    "sales": 1146
  },
  {
    "date": "2025-01-12",
    "category": "野菜",
    "sales": 1984
  },
  {
    "date": "2025-01-12",
    "category": "肉",
    "sales": 2910
  },
  {
    "date": "2025-01-12",
    "category": "魚",
    "sales": 2074
  },
  {
    "date": "2025-01-12",
    "category": "飲料",
    "sales": 1224
  },
  {
    "date": "2025-01-13",
    "category": "野菜",
    "sales": 2040
  },
  {
    "date": "2025-01-13",
    "category": "肉",
    "sales": 2329
  },
  {
    "date": "2025-01-13",
    "category": "魚",
    "sales": 2287
  },
  {
    "date": "2025-01-13",
    "category": "飲料",
    "sales": 1302
  },
  {
    "date": "2025-01-14",
    "category": "野菜",
    "sales": 928
  },
  {
    "date": "2025-01-14",
    "category": "肉",
    "sales": 1732
  },
  {
    "date": "2025-01-14",
    "category": "魚",
    "sales": 1410
  },
  {
    "date": "2025-01-14",
    "category": "飲料",
    "sales": 1380
  },
  {
    "date": "2025-01-15",
    "category": "野菜",
    "sales": 1106
  },
  {
    "date": "2025-01-15",
    "category": "肉",
    "sales": 2388
  },
  {
    "date": "2025-01-15",
    "category": "魚",
    "sales": 2071
  },
  {
    "date": "2025-01-15",
    "category": "飲料",
    "sales": 1502
  },
  {
    "date": "2025-01-16",
    "category": "野菜",
    "sales": 1256
  },
  {
    "date": "2025-01-16",
    "category": "肉",
    "sales": 2136
  },
  {
    "date": "2025-01-16",
    "category": "魚",
    "sales": 1795
  },
  {
    "date": "2025-01-16",
    "category": "飲料",
    "sales": 1144
  },
  {
    "date": "2025-01-17",
    "category": "野菜",
    "sales": 1909
  },
  {
    "date": "2025-01-17",
    "category": "肉",
    "sales": 2226
  },
  {
    "date": "2025-01-17",
    "category": "魚",
    "sales": 1605
  },
  {
    "date": "2025-01-17",
    "category": "飲料",
    "sales": 1514
  },
  {
    "date": "2025-01-18",
    "category": "野菜",
    "sales": 1708
  },
  {
    "date": "2025-01-18",
    "category": "肉",
    "sales": 2996
  },
  {
    "date": "2025-01-18",
    "category": "魚",
    "sales": 2652
  },
  {
    "date": "2025-01-18",
    "category": "飲料",
    "sales": 995
  },
  {
    "date": "2025-01-19",
    "category": "野菜",
    "sales": 2352
  },
  {
    "date": "2025-01-19",
    "category": "肉",
    "sales": 2749
  },
  {
    "date": "2025-01-19",
    "category": "魚",
    "sales": 2803
  },
  {
    "date": "2025-01-19",
    "category": "飲料",
    "sales": 1312
  },
  {
    "date": "2025-01-20",
    "category": "野菜",
    "sales": 1380
  },
  {
    "date": "2025-01-20",
    "category": "肉",
    "sales": 2504
  },
  {
    "date": "2025-01-20",
    "category": "魚",
    "sales": 1716
  },
  {
    "date": "2025-01-20",
    "category": "飲料",
    "sales": 1105
  },
  {
    "date": "2025-01-21",
    "category": "野菜",
    "sales": 1863
  },
  {
    "date": "2025-01-21",
    "category": "肉",
    "sales": 2381
  },
  {
    "date": "2025-01-21",
    "category": "魚",
    "sales": 2025
  },
  {
    "date": "2025-01-21",
    "category": "飲料",
    "sales": 1075
  },
  {
    "date": "2025-01-22",
    "category": "野菜",
    "sales": 1719
  },
  {
    "date": "2025-01-22",
    "category": "肉",
    "sales": 2202
  },
  {
    "date": "2025-01-22",
    "category": "魚",
    "sales": 2033
  },
  {
    "date": "2025-01-22",
    "category": "飲料",
    "sales": 1233
  },
  {
    "date": "2025-01-23",
    "category": "野菜",
    "sales": 1488
  },
  {
    "date": "2025-01-23",
    "category": "肉",
    "sales": 2497
  },
  {
    "date": "2025-01-23",
    "category": "魚",
    "sales": 2175
  },
  {
    "date": "2025-01-23",
    "category": "飲料",
    "sales": 1252
  },
  {
    "date": "2025-01-24",
    "category": "野菜",
    "sales": 1474
  },
  {
    "date": "2025-01-24",
    "category": "肉",
    "sales": 2816
  },
  {
    "date": "2025-01-24",
    "category": "魚",
    "sales": 1745
  },
  {
    "date": "2025-01-24",
    "category": "飲料",
    "sales": 1089
  },
  {
    "date": "2025-01-25",
    "category": "野菜",
    "sales": 1768
  },
  {
    "date": "2025-01-25",
    "category": "肉",
    "sales": 2688
  },
  {
    "date": "2025-01-25",
    "category": "魚",
    "sales": 2617
  },
  {
    "date": "2025-01-25",
    "category": "飲料",
    "sales": 1247
  },
  {
    "date": "2025-01-26",
    "category": "野菜",
    "sales": 1383
  },
  {
    "date": "2025-01-26",
    "category": "肉",
    "sales": 2781
  },
  {
    "date": "2025-01-26",
    "category": "魚",
    "sales": 2196
  },
  {
    "date": "2025-01-26",
    "category": "飲料",
    "sales": 2404
  },
  {
    "date": "2025-01-27",
    "category": "野菜",
    "sales": 1639
  },
  {
    "date": "2025-01-27",
    "category": "肉",
    "sales": 2935
  },
  {
    "date": "2025-01-27",
    "category": "魚",
    "sales": 1810
  },
  {
    "date": "2025-01-27",
    "category": "飲料",
    "sales": 932
  },
  {
    "date": "2025-01-28",
    "category": "野菜",
    "sales": 1867
  },
  {
    "date": "2025-01-28",
    "category": "肉",
    "sales": 2709
  },
  {
    "date": "2025-01-28",
    "category": "魚",
    "sales": 1828
  },
  {
    "date": "2025-01-28",
    "category": "飲料",
    "sales": 122
  },
  {
    "date": "2025-01-29",
    "category": "野菜",
    "sales": 2139
  },
  {
    "date": "2025-01-29",
    "category": "肉",
    "sales": 2679
  },
  {
    "date": "2025-01-29",
    "category": "魚",
    "sales": 2323
  },
  {
    "date": "2025-01-29",
    "category": "飲料",
    "sales": 1723
  },
  {
    "date": "2025-01-30",
    "category": "野菜",
    "sales": 1832
  },
  {
    "date": "2025-01-30",
    "category": "肉",
    "sales": 2357
  },
  {
    "date": "2025-01-30",
    "category": "魚",
    "sales": 1761
  },
  {
    "date": "2025-01-30",
    "category": "飲料",
    "sales": 1302
  },
  {
    "date": "2025-01-31",
    "category": "野菜",
    "sales": 1282
  },
  {
    "date": "2025-01-31",
    "category": "肉",
    "sales": 2514
  },
  {
    "date": "2025-01-31",
    "category": "魚",
    "sales": 2341
  },
  {
    "date": "2025-01-31",
    "category": "飲料",
    "sales": 1962
  },
  {
    "date": "2025-02-01",
    "category": "野菜",
    "sales": 2165
  },
  {
    "date": "2025-02-01",
    "category": "肉",
    "sales": 2778
  },
  {
    "date": "2025-02-01",
    "category": "魚",
    "sales": 2376
  },
  {
    "date": "2025-02-01",
    "category": "飲料",
    "sales": 1240
  },
  {
    "date": "2025-02-02",
    "category": "野菜",
    "sales": 1960
  },
  {
    "date": "2025-02-02",
    "category": "肉",
    "sales": 3162
  },
  {
    "date": "2025-02-02",
    "category": "魚",
    "sales": 2350
  },
  {
    "date": "2025-02-02",
    "category": "飲料",
    "sales": 1330
  },
  {
    "date": "2025-02-03",
    "category": "野菜",
    "sales": 1739
  },
  {
    "date": "2025-02-03",
    "category": "肉",
    "sales": 2555
  },
  {
    "date": "2025-02-03",
    "category": "魚",
    "sales": 2216
  },
  {
    "date": "2025-02-03",
    "category": "飲料",
    "sales": 1715
  },
  {
    "date": "2025-02-04",
    "category": "野菜",
    "sales": 1296
  },
  {
    "date": "2025-02-04",
    "category": "肉",
    "sales": 1915
  },
  {
    "date": "2025-02-04",
    "category": "魚",
    "sales": 2142
  },
  {
    "date": "2025-02-04",
    "category": "飲料",
    "sales": 1707
  },
  {
    "date": "2025-02-05",
    "category": "野菜",
    "sales": 1380
  },
  {
    "date": "2025-02-05",
    "category": "肉",
    "sales": 3171
  },
  {
    "date": "2025-02-05",
    "category": "魚",
    "sales": 1966
  },
  {
    "date": "2025-02-05",
    "category": "飲料",
    "sales": 1851
  },
  {
    "date": "2025-02-06",
    "category": "野菜",
    "sales": 981
  },
  {
    "date": "2025-02-06",
    "category": "肉",
    "sales": 2423
  },
  {
    "date": "2025-02-06",
    "category": "魚",
    "sales": 2000
  },
  {
    "date": "2025-02-06",
    "category": "飲料",
    "sales": 1152
  },
  {
    "date": "2025-02-07",
    "category": "野菜",
    "sales": 1371
  },
  {
    "date": "2025-02-07",
    "category": "肉",
    "sales": 2086
  },
  {
    "date": "2025-02-07",
    "category": "魚",
    "sales": 1939
  },
  {
    "date": "2025-02-07",
    "category": "飲料",
    "sales": 1323
  },
  {
    "date": "2025-02-08",
    "category": "野菜",
    "sales": 2445
  },
  {
    "date": "2025-02-08",
    "category": "肉",
    "sales": 2891
  },
  {
    "date": "2025-02-08",
    "category": "魚",
    "sales": 2114
  },
  {
    "date": "2025-02-08",
    "category": "飲料",
    "sales": 1565
  },
  {
    "date": "2025-02-09",
    "category": "野菜",
    "sales": 1969
  },
  {
    "date": "2025-02-09",
    "category": "肉",
    "sales": 3287
  },
  {
    "date": "2025-02-09",
    "category": "魚",
    "sales": 2176
  },
  {
    "date": "2025-02-09",
    "category": "飲料",
    "sales": 1759
  },
  {
    "date": "2025-02-10",
    "category": "野菜",
    "sales": 1399
  },
  {
    "date": "2025-02-10",
    "category": "肉",
    "sales": 2001
  },
  {
    "date": "2025-02-10",
    "category": "魚",
    "sales": 2140
  },
  {
    "date": "2025-02-10",
    "category": "飲料",
    "sales": 1154
  },
  {
    "date": "2025-02-11",
    "category": "野菜",
    "sales": 1496
  },
  {
    "date": "2025-02-11",
    "category": "肉",
    "sales": 2341
  },
  {
    "date": "2025-02-11",
    "category": "魚",
    "sales": 2153
  },
  {
    "date": "2025-02-11",
    "category": "飲料",
    "sales": 1028
  },
  {
    "date": "2025-02-12",
    "category": "野菜",
    "sales": 1776
  },
  {
    "date": "2025-02-12",
    "category": "肉",
    "sales": 3136
  },
  {
    "date": "2025-02-12",
    "category": "魚",
    "sales": 1915
  },
  {
    "date": "2025-02-12",
    "category": "飲料",
    "sales": 1423
  },
  {
    "date": "2025-02-13",
    "category": "野菜",
    "sales": 2297
  },
  {
    "date": "2025-02-13",
    "category": "肉",
    "sales": 2816
  },
  {
    "date": "2025-02-13",
    "category": "魚",
    "sales": 1653
  },
  {
    "date": "2025-02-13",
    "category": "飲料",
    "sales": 1469
  },
  {
    "date": "2025-02-14",
    "category": "野菜",
    "sales": 1918
  },
  {
    "date": "2025-02-14",
    "category": "肉",
    "sales": 2179
  },
  {
    "date": "2025-02-14",
    "category": "魚",
    "sales": 1884
  },
  {
    "date": "2025-02-14",
    "category": "飲料",
    "sales": 1799
  },
  {
    "date": "2025-02-15",
    "category": "野菜",
    "sales": 2118
  },
  {
    "date": "2025-02-15",
    "category": "肉",
    "sales": 3077
  },
  {
    "date": "2025-02-15",
    "category": "魚",
    "sales": 2091
  },
  {
    "date": "2025-02-15",
    "category": "飲料",
    "sales": 1279
  },
  {
    "date": "2025-02-16",
    "category": "野菜",
    "sales": 2116
  },
  {
    "date": "2025-02-16",
    "category": "肉",
    "sales": 3545
  },
  {
    "date": "2025-02-16",
    "category": "魚",
    "sales": 3057
  },
  {
    "date": "2025-02-16",
    "category": "飲料",
    "sales": 1598
  },
  {
    "date": "2025-02-17",
    "category": "野菜",
    "sales": 1611
  },
  {
    "date": "2025-02-17",
    "category": "肉",
    "sales": 2107
  },
  {
    "date": "2025-02-17",
    "category": "魚",
    "sales": 2365
  },
  {
    "date": "2025-02-17",
    "category": "飲料",
    "sales": 915
  },
  {
    "date": "2025-02-18",
    "category": "野菜",
    "sales": 2365
  },
  {
    "date": "2025-02-18",
    "category": "肉",
    "sales": 2919
  },
  {
    "date": "2025-02-18",
    "category": "魚",
    "sales": 1584
  },
  {
    "date": "2025-02-18",
    "category": "飲料",
    "sales": 1641
  },
  {
    "date": "2025-02-19",
    "category": "野菜",
    "sales": 1992
  },
  {
    "date": "2025-02-19",
    "category": "肉",
    "sales": 2681
  },
  {
    "date": "2025-02-19",
    "category": "魚",
    "sales": 1850
  },
  {
    "date": "2025-02-19",
    "category": "飲料",
    "sales": 1415
  },
  {
    "date": "2025-02-20",
    "category": "野菜",
    "sales": 1952
  },
  {
    "date": "2025-02-20",
    "category": "肉",
    "sales": 2601
  },
  {
    "date": "2025-02-20",
    "category": "魚",
    "sales": 2214
  },
  {
    "date": "2025-02-20",
    "category": "飲料",
    "sales": 1270
  },
  {
    "date": "2025-02-21",
    "category": "野菜",
    "sales": 1668
  },
  {
    "date": "2025-02-21",
    "category": "肉",
    "sales": 2730
  },
  {
    "date": "2025-02-21",
    "category": "魚",
    "sales": 2254
  },
  {
    "date": "2025-02-21",
    "category": "飲料",
    "sales": 1303
  },
  {
    "date": "2025-02-22",
    "category": "野菜",
    "sales": 2230
  },
  {
    "date": "2025-02-22",
    "category": "肉",
    "sales": 2657
  },
  {
    "date": "2025-02-22",
    "category": "魚",
    "sales": 2647
  },
  {
    "date": "2025-02-22",
    "category": "飲料",
    "sales": 1535
  },
  {
    "date": "2025-02-23",
    "category": "野菜",
    "sales": 2696
  },
  {
    "date": "2025-02-23",
    "category": "肉",
    "sales": 3443
  },
  {
    "date": "2025-02-23",
    "category": "魚",
    "sales": 2694
  },
  {
    "date": "2025-02-23",
    "category": "飲料",
    "sales": 1750
  },
  {
    "date": "2025-02-24",
    "category": "野菜",
    "sales": 1993
  },
  {
    "date": "2025-02-24",
    "category": "肉",
    "sales": 3080
  },
  {
    "date": "2025-02-24",
    "category": "魚",
    "sales": 2305
  },
  {
    "date": "2025-02-24",
    "category": "飲料",
    "sales": 1561
  },
  {
    "date": "2025-02-25",
    "category": "野菜",
    "sales": 1261
  },
  {
    "date": "2025-02-25",
    "category": "肉",
    "sales": 2664
  },
  {
    "date": "2025-02-25",
    "category": "魚",
    "sales": 2496
  },
  {
    "date": "2025-02-25",
    "category": "飲料",
    "sales": 1503
  },
  {
    "date": "2025-02-26",
    "category": "野菜",
    "sales": 1998
  },
  {
    "date": "2025-02-26",
    "category": "肉",
    "sales": 2871
  },
  {
    "date": "2025-02-26",
    "category": "魚",
    "sales": 1933
  },
  {
    "date": "2025-02-26",
    "category": "飲料",
    "sales": 2090
  },
  {
    "date": "2025-02-27",
    "category": "野菜",
    "sales": 1673
  },
  {
    "date": "2025-02-27",
    "category": "肉",
    "sales": 2712
  },
  {
    "date": "2025-02-27",
    "category": "魚",
    "sales": 1702
  },
  {
    "date": "2025-02-27",
    "category": "飲料",
    "sales": 1759
  },
  {
    "date": "2025-02-28",
    "category": "野菜",
    "sales": 1922
  },
  {
    "date": "2025-02-28",
    "category": "肉",
    "sales": 2639
  },
  {
    "date": "2025-02-28",
    "category": "魚",
    "sales": 2434
  },
  {
    "date": "2025-02-28",
    "category": "飲料",
    "sales": 1163
  },
  {
    "date": "2025-03-01",
    "category": "野菜",
    "sales": 2508
  },
  {
    "date": "2025-03-01",
    "category": "肉",
    "sales": 3468
  },
  {
    "date": "2025-03-01",
    "category": "魚",
    "sales": 3220
  },
  {
    "date": "2025-03-01",
    "category": "飲料",
    "sales": 1860
  },
  {
    "date": "2025-03-02",
    "category": "野菜",
    "sales": 1958
  },
  {
    "date": "2025-03-02",
    "category": "肉",
    "sales": 3564
  },
  {
    "date": "2025-03-02",
    "category": "魚",
    "sales": 2608
  },
  {
    "date": "2025-03-02",
    "category": "飲料",
    "sales": 1811
  },
  {
    "date": "2025-03-03",
    "category": "野菜",
    "sales": 1194
  },
  {
    "date": "2025-03-03",
    "category": "肉",
    "sales": 2828
  },
  {
    "date": "2025-03-03",
    "category": "魚",
    "sales": 1661
  },
  {
    "date": "2025-03-03",
    "category": "飲料",
    "sales": 1880
  },
  {
    "date": "2025-03-04",
    "category": "野菜",
    "sales": 1631
  },
  {
    "date": "2025-03-04",
    "category": "肉",
    "sales": 2824
  },
  {
    "date": "2025-03-04",
    "category": "魚",
    "sales": 2346
  },
  {
    "date": "2025-03-04",
    "category": "飲料",
    "sales": 1214
  },
  {
    "date": "2025-03-05",
    "category": "野菜",
    "sales": 1790
  },
  {
    "date": "2025-03-05",
    "category": "肉",
    "sales": 2814
  },
  {
    "date": "2025-03-05",
    "category": "魚",
    "sales": 2301
  },
  {
    "date": "2025-03-05",
    "category": "飲料",
    "sales": 1915
  },
  {
    "date": "2025-03-06",
    "category": "野菜",
    "sales": 1699
  },
  {
    "date": "2025-03-06",
    "category": "肉",
    "sales": 2752
  },
  {
    "date": "2025-03-06",
    "category": "魚",
    "sales": 1936
  },
  {
    "date": "2025-03-06",
    "category": "飲料",
    "sales": 1519
  },
  {
    "date": "2025-03-07",
    "category": "野菜",
    "sales": 2221
  },
  {
    "date": "2025-03-07",
    "category": "肉",
    "sales": 2833
  },
  {
    "date": "2025-03-07",
    "category": "魚",
    "sales": 2260
  },
  {
    "date": "2025-03-07",
    "category": "飲料",
    "sales": 1981
  },
  {
    "date": "2025-03-08",
    "category": "野菜",
    "sales": 1955
  },
  {
    "date": "2025-03-08",
    "category": "肉",
    "sales": 3063
  },
  {
    "date": "2025-03-08",
    "category": "魚",
    "sales": 2706
  },
  {
    "date": "2025-03-08",
    "category": "飲料",
    "sales": 1836
  },
  {
    "date": "2025-03-09",
    "category": "野菜",
    "sales": 2368
  },
  {
    "date": "2025-03-09",
    "category": "肉",
    "sales": 3632
  },
  {
    "date": "2025-03-09",
    "category": "魚",
    "sales": 2732
  },
  {
    "date": "2025-03-09",
    "category": "飲料",
    "sales": 1821
  },
  {
    "date": "2025-03-10",
    "category": "野菜",
    "sales": 1456
  },
  {
    "date": "2025-03-10",
    "category": "肉",
    "sales": 2595
  },
  {
    "date": "2025-03-10",
    "category": "魚",
    "sales": 2055
  },
  {
    "date": "2025-03-10",
    "category": "飲料",
    "sales": 1418
  },
  {
    "date": "2025-03-11",
    "category": "野菜",
    "sales": 2076
  },
  {
    "date": "2025-03-11",
    "category": "肉",
    "sales": 2742
  },
  {
    "date": "2025-03-11",
    "category": "魚",
    "sales": 2089
  },
  {
    "date": "2025-03-11",
    "category": "飲料",
    "sales": 1791
  },
  {
    "date": "2025-03-12",
    "category": "野菜",
    "sales": 1871
  },
  {
    "date": "2025-03-12",
    "category": "肉",
    "sales": 3159
  },
  {
    "date": "2025-03-12",
    "category": "魚",
    "sales": 2629
  },
  {
    "date": "2025-03-12",
    "category": "飲料",
    "sales": 1992
  },
  {
    "date": "2025-03-13",
    "category": "野菜",
    "sales": 1835
  },
  {
    "date": "2025-03-13",
    "category": "肉",
    "sales": 2642
  },
  {
    "date": "2025-03-13",
    "category": "魚",
    "sales": 2337
  },
  {
    "date": "2025-03-13",
    "category": "飲料",
    "sales": 1682
  },
  {
    "date": "2025-03-14",
    "category": "野菜",
    "sales": 1799
  },
  {
    "date": "2025-03-14",
    "category": "肉",
    "sales": 2444
  },
  {
    "date": "2025-03-14",
    "category": "魚",
    "sales": 2268
  },
  {
    "date": "2025-03-14",
    "category": "飲料",
    "sales": 1285
  },
  {
    "date": "2025-03-15",
    "category": "野菜",
    "sales": 1695
  },
  {
    "date": "2025-03-15",
    "category": "肉",
    "sales": 3605
  },
  {
    "date": "2025-03-15",
    "category": "魚",
    "sales": 2897
  },
  {
    "date": "2025-03-15",
    "category": "飲料",
    "sales": 1603
  },
  {
    "date": "2025-03-16",
    "category": "野菜",
    "sales": 1711
  },
  {
    "date": "2025-03-16",
    "category": "肉",
    "sales": 3271
  },
  {
    "date": "2025-03-16",
    "category": "魚",
    "sales": 2351
  },
  {
    "date": "2025-03-16",
    "category": "飲料",
    "sales": 1637
  },
  {
    "date": "2025-03-17",
    "category": "野菜",
    "sales": 1683
  },
  {
    "date": "2025-03-17",
    "category": "肉",
    "sales": 1988
  },
  {
    "date": "2025-03-17",
    "category": "魚",
    "sales": 2148
  },
  {
    "date": "2025-03-17",
    "category": "飲料",
    "sales": 1455
  },
  {
    "date": "2025-03-18",
    "category": "野菜",
    "sales": 2222
  },
  {
    "date": "2025-03-18",
    "category": "肉",
    "sales": 3082
  },
  {
    "date": "2025-03-18",
    "category": "魚",
    "sales": 2399
  },
  {
    "date": "2025-03-18",
    "category": "飲料",
    "sales": 1770
  },
  {
    "date": "2025-03-19",
    "category": "野菜",
    "sales": 1974
  },
  {
    "date": "2025-03-19",
    "category": "肉",
    "sales": 3065
  },
  {
    "date": "2025-03-19",
    "category": "魚",
    "sales": 2372
  },
  {
    "date": "2025-03-19",
    "category": "飲料",
    "sales": 1317
  },
  {
    "date": "2025-03-20",
    "category": "野菜",
    "sales": 1502
  },
  {
    "date": "2025-03-20",
    "category": "肉",
    "sales": 2997
  },
  {
    "date": "2025-03-20",
    "category": "魚",
    "sales": 2764
  },
  {
    "date": "2025-03-20",
    "category": "飲料",
    "sales": 1187
  },
  {
    "date": "2025-03-21",
    "category": "野菜",
    "sales": 2093
  },
  {
    "date": "2025-03-21",
    "category": "肉",
    "sales": 2708
  },
  {
    "date": "2025-03-21",
    "category": "魚",
    "sales": 2757
  },
  {
    "date": "2025-03-21",
    "category": "飲料",
    "sales": 1361
  },
  {
    "date": "2025-03-22",
    "category": "野菜",
    "sales": 2673
  },
  {
    "date": "2025-03-22",
    "category": "肉",
    "sales": 3497
  },
  {
    "date": "2025-03-22",
    "category": "魚",
    "sales": 2132
  },
  {
    "date": "2025-03-22",
    "category": "飲料",
    "sales": 1391
  },
  {
    "date": "2025-03-23",
    "category": "野菜",
    "sales": 2574
  },
  {
    "date": "2025-03-23",
    "category": "肉",
    "sales": 3767
  },
  {
    "date": "2025-03-23",
    "category": "魚",
    "sales": 2425
  },
  {
    "date": "2025-03-23",
    "category": "飲料",
    "sales": 1972
  },
  {
    "date": "2025-03-24",
    "category": "野菜",
    "sales": 1846
  },
  {
    "date": "2025-03-24",
    "category": "肉",
    "sales": 2581
  },
  {
    "date": "2025-03-24",
    "category": "魚",
    "sales": 2574
  },
  {
    "date": "2025-03-24",
    "category": "飲料",
    "sales": 1543
  },
  {
    "date": "2025-03-25",
    "category": "野菜",
    "sales": 1665
  },
  {
    "date": "2025-03-25",
    "category": "肉",
    "sales": 2983
  },
  {
    "date": "2025-03-25",
    "category": "魚",
    "sales": 2423
  },
  {
    "date": "2025-03-25",
    "category": "飲料",
    "sales": 1234
  },
  {
    "date": "2025-03-26",
    "category": "野菜",
    "sales": 1522
  },
  {
    "date": "2025-03-26",
    "category": "肉",
    "sales": 2891
  },
  {
    "date": "2025-03-26",
    "category": "魚",
    "sales": 2778
  },
  {
    "date": "2025-03-26",
    "category": "飲料",
    "sales": 1878
  },
  {
    "date": "2025-03-27",
    "category": "野菜",
    "sales": 2043
  },
  {
    "date": "2025-03-27",
    "category": "肉",
    "sales": 2336
  },
  {
    "date": "2025-03-27",
    "category": "魚",
    "sales": 2676
  },
  {
    "date": "2025-03-27",
    "category": "飲料",
    "sales": 1538
  },
  {
    "date": "2025-03-28",
    "category": "野菜",
    "sales": 1642
  },
  {
    "date": "2025-03-28",
    "category": "肉",
    "sales": 2630
  },
  {
    "date": "2025-03-28",
    "category": "魚",
    "sales": 2358
  },
  {
    "date": "2025-03-28",
    "category": "飲料",
    "sales": 1559
  },
  {
    "date": "2025-03-29",
    "category": "野菜",
    "sales": 1948
  },
  {
    "date": "2025-03-29",
    "category": "肉",
    "sales": 3833
  },
  {
    "date": "2025-03-29",
    "category": "魚",
    "sales": 2873
  },
  {
    "date": "2025-03-29",
    "category": "飲料",
    "sales": 1483
  },
  {
    "date": "2025-03-30",
    "category": "野菜",
    "sales": 2365
  },
  {
    "date": "2025-03-30",
    "category": "肉",
    "sales": 3112
  },
  {
    "date": "2025-03-30",
    "category": "魚",
    "sales": 2232
  },
  {
    "date": "2025-03-30",
    "category": "飲料",
    "sales": 2270
  },
  {
    "date": "2025-03-31",
    "category": "野菜",
    "sales": 2065
  },
  {
    "date": "2025-03-31",
    "category": "肉",
    "sales": 2992
  },
  {
    "date": "2025-03-31",
    "category": "魚",
    "sales": 1767
  },
  {
    "date": "2025-03-31",
    "category": "飲料",
    "sales": 1791
  },
  {
    "date": "2025-04-01",
    "category": "野菜",
    "sales": 1678
  },
  {
    "date": "2025-04-01",
    "category": "肉",
    "sales": 2747
  },
  {
    "date": "2025-04-01",
    "category": "魚",
    "sales": 2691
  },
  {
    "date": "2025-04-01",
    "category": "飲料",
    "sales": 1376
  },
  {
    "date": "2025-04-02",
    "category": "野菜",
    "sales": 1898
  },
  {
    "date": "2025-04-02",
    "category": "肉",
    "sales": 3215
  },
  {
    "date": "2025-04-02",
    "category": "魚",
    "sales": 2160
  },
  {
    "date": "2025-04-02",
    "category": "飲料",
    "sales": 1783
  },
  {
    "date": "2025-04-03",
    "category": "野菜",
    "sales": 1962
  },
  {
    "date": "2025-04-03",
    "category": "肉",
    "sales": 3750
  },
  {
    "date": "2025-04-03",
    "category": "魚",
    "sales": 2018
  },
  {
    "date": "2025-04-03",
    "category": "飲料",
    "sales": 1257
  },
  {
    "date": "2025-04-04",
    "category": "野菜",
    "sales": 1783
  },
  {
    "date": "2025-04-04",
    "category": "肉",
    "sales": 3070
  },
  {
    "date": "2025-04-04",
    "category": "魚",
    "sales": 2651
  },
  {
    "date": "2025-04-04",
    "category": "飲料",
    "sales": 1375
  },
  {
    "date": "2025-04-05",
    "category": "野菜",
    "sales": 1914
  },
  {
    "date": "2025-04-05",
    "category": "肉",
    "sales": 3888
  },
  {
    "date": "2025-04-05",
    "category": "魚",
    "sales": 3064
  },
  {
    "date": "2025-04-05",
    "category": "飲料",
    "sales": 1840
  },
  {
    "date": "2025-04-06",
    "category": "野菜",
    "sales": 2535
  },
  {
    "date": "2025-04-06",
    "category": "肉",
    "sales": 3536
  },
  {
    "date": "2025-04-06",
    "category": "魚",
    "sales": 2497
  },
  {
    "date": "2025-04-06",
    "category": "飲料",
    "sales": 2488
  },
  {
    "date": "2025-04-07",
    "category": "野菜",
    "sales": 1542
  },
  {
    "date": "2025-04-07",
    "category": "肉",
    "sales": 2957
  },
  {
    "date": "2025-04-07",
    "category": "魚",
    "sales": 1995
  },
  {
    "date": "2025-04-07",
    "category": "飲料",
    "sales": 1402
  },
  {
    "date": "2025-04-08",
    "category": "野菜",
    "sales": 1930
  },
  {
    "date": "2025-04-08",
    "category": "肉",
    "sales": 3075
  },
  {
    "date": "2025-04-08",
    "category": "魚",
    "sales": 2272
  },
  {
    "date": "2025-04-08",
    "category": "飲料",
    "sales": 1866
  },
  {
    "date": "2025-04-09",
    "category": "野菜",
    "sales": 1913
  },
  {
    "date": "2025-04-09",
    "category": "肉",
    "sales": 3020
  },
  {
    "date": "2025-04-09",
    "category": "魚",
    "sales": 1913
  },
  {
    "date": "2025-04-09",
    "category": "飲料",
    "sales": 1537
  },
  {
    "date": "2025-04-10",
    "category": "野菜",
    "sales": 2074
  },
  {
    "date": "2025-04-10",
    "category": "肉",
    "sales": 3448
  },
  {
    "date": "2025-04-10",
    "category": "魚",
    "sales": 1893
  },
  {
    "date": "2025-04-10",
    "category": "飲料",
    "sales": 1386
  },
  {
    "date": "2025-04-11",
    "category": "野菜",
    "sales": 1978
  },
  {
    "date": "2025-04-11",
    "category": "肉",
    "sales": 2601
  },
  {
    "date": "2025-04-11",
    "category": "魚",
    "sales": 2270
  },
  {
    "date": "2025-04-11",
    "category": "飲料",
    "sales": 1221
  },
  {
    "date": "2025-04-12",
    "category": "野菜",
    "sales": 2573
  },
  {
    "date": "2025-04-12",
    "category": "肉",
    "sales": 3473
  },
  {
    "date": "2025-04-12",
    "category": "魚",
    "sales": 2483
  },
  {
    "date": "2025-04-12",
    "category": "飲料",
    "sales": 2022
  },
  {
    "date": "2025-04-13",
    "category": "野菜",
    "sales": 2068
  },
  {
    "date": "2025-04-13",
    "category": "肉",
    "sales": 3327
  },
  {
    "date": "2025-04-13",
    "category": "魚",
    "sales": 2741
  },
  {
    "date": "2025-04-13",
    "category": "飲料",
    "sales": 1517
  },
  {
    "date": "2025-04-14",
    "category": "野菜",
    "sales": 1556
  },
  {
    "date": "2025-04-14",
    "category": "肉",
    "sales": 3001
  },
  {
    "date": "2025-04-14",
    "category": "魚",
    "sales": 1883
  },
  {
    "date": "2025-04-14",
    "category": "飲料",
    "sales": 1644
  },
  {
    "date": "2025-04-15",
    "category": "野菜",
    "sales": 2054
  },
  {
    "date": "2025-04-15",
    "category": "肉",
    "sales": 2464
  },
  {
    "date": "2025-04-15",
    "category": "魚",
    "sales": 1935
  },
  {
    "date": "2025-04-15",
    "category": "飲料",
    "sales": 1468
  },
  {
    "date": "2025-04-16",
    "category": "野菜",
    "sales": 1968
  },
  {
    "date": "2025-04-16",
    "category": "肉",
    "sales": 3210
  },
  {
    "date": "2025-04-16",
    "category": "魚",
    "sales": 2471
  },
  {
    "date": "2025-04-16",
    "category": "飲料",
    "sales": 1857
  },
  {
    "date": "2025-04-17",
    "category": "野菜",
    "sales": 1519
  },
  {
    "date": "2025-04-17",
    "category": "肉",
    "sales": 2862
  },
  {
    "date": "2025-04-17",
    "category": "魚",
    "sales": 1276
  },
  {
    "date": "2025-04-17",
    "category": "飲料",
    "sales": 1409
  },
  {
    "date": "2025-04-18",
    "category": "野菜",
    "sales": 1688
  },
  {
    "date": "2025-04-18",
    "category": "肉",
    "sales": 2716
  },
  {
    "date": "2025-04-18",
    "category": "魚",
    "sales": 2643
  },
  {
    "date": "2025-04-18",
    "category": "飲料",
    "sales": 1336
  },
  {
    "date": "2025-04-19",
    "category": "野菜",
    "sales": 1929
  },
  {
    "date": "2025-04-19",
    "category": "肉",
    "sales": 3344
  },
  {
    "date": "2025-04-19",
    "category": "魚",
    "sales": 2553
  },
  {
    "date": "2025-04-19",
    "category": "飲料",
    "sales": 2284
  },
  {
    "date": "2025-04-20",
    "category": "野菜",
    "sales": 2071
  },
  {
    "date": "2025-04-20",
    "category": "肉",
    "sales": 2886
  },
  {
    "date": "2025-04-20",
    "category": "魚",
    "sales": 2834
  },
  {
    "date": "2025-04-20",
    "category": "飲料",
    "sales": 2025
  },
  {
    "date": "2025-04-21",
    "category": "野菜",
    "sales": 2264
  },
  {
    "date": "2025-04-21",
    "category": "肉",
    "sales": 2748
  },
  {
    "date": "2025-04-21",
    "category": "魚",
    "sales": 2292
  },
  {
    "date": "2025-04-21",
    "category": "飲料",
    "sales": 1370
  },
  {
    "date": "2025-04-22",
    "category": "野菜",
    "sales": 1879
  },
  {
    "date": "2025-04-22",
    "category": "肉",
    "sales": 2688
  },
  {
    "date": "2025-04-22",
    "category": "魚",
    "sales": 2430
  },
  {
    "date": "2025-04-22",
    "category": "飲料",
    "sales": 1522
  },
  {
    "date": "2025-04-23",
    "category": "野菜",
    "sales": 1831
  },
  {
    "date": "2025-04-23",
    "category": "肉",
    "sales": 2557
  },
  {
    "date": "2025-04-23",
    "category": "魚",
    "sales": 2183
  },
  {
    "date": "2025-04-23",
    "category": "飲料",
    "sales": 1034
  },
  {
    "date": "2025-04-24",
    "category": "野菜",
    "sales": 2391
  },
  {
    "date": "2025-04-24",
    "category": "肉",
    "sales": 2687
  },
  {
    "date": "2025-04-24",
    "category": "魚",
    "sales": 2425
  },
  {
    "date": "2025-04-24",
    "category": "飲料",
    "sales": 1180
  },
  {
    "date": "2025-04-25",
    "category": "野菜",
    "sales": 1664
  },
  {
    "date": "2025-04-25",
    "category": "肉",
    "sales": 2454
  },
  {
    "date": "2025-04-25",
    "category": "魚",
    "sales": 2469
  },
  {
    "date": "2025-04-25",
    "category": "飲料",
    "sales": 1659
  },
  {
    "date": "2025-04-26",
    "category": "野菜",
    "sales": 2255
  },
  {
    "date": "2025-04-26",
    "category": "肉",
    "sales": 3539
  },
  {
    "date": "2025-04-26",
    "category": "魚",
    "sales": 3091
  },
  {
    "date": "2025-04-26",
    "category": "飲料",
    "sales": 2290
  },
  {
    "date": "2025-04-27",
    "category": "野菜",
    "sales": 2119
  },
  {
    "date": "2025-04-27",
    "category": "肉",
    "sales": 4052
  },
  {
    "date": "2025-04-27",
    "category": "魚",
    "sales": 2977
  },
  {
    "date": "2025-04-27",
    "category": "飲料",
    "sales": 1901
  },
  {
    "date": "2025-04-28",
    "category": "野菜",
    "sales": 1913
  },
  {
    "date": "2025-04-28",
    "category": "肉",
    "sales": 2352
  },
  {
    "date": "2025-04-28",
    "category": "魚",
    "sales": 2532
  },
  {
    "date": "2025-04-28",
    "category": "飲料",
    "sales": 1786
  },
  {
    "date": "2025-04-29",
    "category": "野菜",
    "sales": 1698
  },
  {
    "date": "2025-04-29",
    "category": "肉",
    "sales": 2635
  },
  {
    "date": "2025-04-29",
    "category": "魚",
    "sales": 2020
  },
  {
    "date": "2025-04-29",
    "category": "飲料",
    "sales": 1741
  },
  {
    "date": "2025-04-30",
    "category": "野菜",
    "sales": 1888
  },
  {
    "date": "2025-04-30",
    "category": "肉",
    "sales": 3120
  },
  {
    "date": "2025-04-30",
    "category": "魚",
    "sales": 1831
  },
  {
    "date": "2025-04-30",
    "category": "飲料",
    "sales": 1592
  },
  {
    "date": "2025-05-01",
    "category": "野菜",
    "sales": 2171
  },
  {
    "date": "2025-05-01",
    "category": "肉",
    "sales": 2801
  },
  {
    "date": "2025-05-01",
    "category": "魚",
    "sales": 2387
  },
  {
    "date": "2025-05-01",
    "category": "飲料",
    "sales": 1684
  },
  {
    "date": "2025-05-02",
    "category": "野菜",
    "sales": 1591
  },
  {
    "date": "2025-05-02",
    "category": "肉",
    "sales": 3061
  },
  {
    "date": "2025-05-02",
    "category": "魚",
    "sales": 2279
  },
  {
    "date": "2025-05-02",
    "category": "飲料",
    "sales": 1488
  },
  {
    "date": "2025-05-03",
    "category": "野菜",
    "sales": 2036
  },
  {
    "date": "2025-05-03",
    "category": "肉",
    "sales": 2985
  },
  {
    "date": "2025-05-03",
    "category": "魚",
    "sales": 2898
  },
  {
    "date": "2025-05-03",
    "category": "飲料",
    "sales": 1290
  },
  {
    "date": "2025-05-04",
    "category": "野菜",
    "sales": 2500
  },
  {
    "date": "2025-05-04",
    "category": "肉",
    "sales": 3360
  },
  {
    "date": "2025-05-04",
    "category": "魚",
    "sales": 2724
  },
  {
    "date": "2025-05-04",
    "category": "飲料",
    "sales": 1733
  },
  {
    "date": "2025-05-05",
    "category": "野菜",
    "sales": 2098
  },
  {
    "date": "2025-05-05",
    "category": "肉",
    "sales": 2747
  },
  {
    "date": "2025-05-05",
    "category": "魚",
    "sales": 1998
  },
  {
    "date": "2025-05-05",
    "category": "飲料",
    "sales": 1807
  },
  {
    "date": "2025-05-06",
    "category": "野菜",
    "sales": 1789
  },
  {
    "date": "2025-05-06",
    "category": "肉",
    "sales": 2568
  },
  {
    "date": "2025-05-06",
    "category": "魚",
    "sales": 2386
  },
  {
    "date": "2025-05-06",
    "category": "飲料",
    "sales": 1428
  },
  {
    "date": "2025-05-07",
    "category": "野菜",
    "sales": 2417
  },
  {
    "date": "2025-05-07",
    "category": "肉",
    "sales": 2858
  },
  {
    "date": "2025-05-07",
    "category": "魚",
    "sales": 2625
  },
  {
    "date": "2025-05-07",
    "category": "飲料",
    "sales": 1014
  },
  {
    "date": "2025-05-08",
    "category": "野菜",
    "sales": 1637
  },
  {
    "date": "2025-05-08",
    "category": "肉",
    "sales": 2423
  },
  {
    "date": "2025-05-08",
    "category": "魚",
    "sales": 2187
  },
  {
    "date": "2025-05-08",
    "category": "飲料",
    "sales": 1643
  },
  {
    "date": "2025-05-09",
    "category": "野菜",
    "sales": 2201
  },
  {
    "date": "2025-05-09",
    "category": "肉",
    "sales": 2603
  },
  {
    "date": "2025-05-09",
    "category": "魚",
    "sales": 2341
  },
  {
    "date": "2025-05-09",
    "category": "飲料",
    "sales": 1536
  },
  {
    "date": "2025-05-10",
    "category": "野菜",
    "sales": 2085
  },
  {
    "date": "2025-05-10",
    "category": "肉",
    "sales": 3400
  },
  {
    "date": "2025-05-10",
    "category": "魚",
    "sales": 2862
  },
  {
    "date": "2025-05-10",
    "category": "飲料",
    "sales": 1502
  },
  {
    "date": "2025-05-11",
    "category": "野菜",
    "sales": 2017
  },
  {
    "date": "2025-05-11",
    "category": "肉",
    "sales": 3298
  },
  {
    "date": "2025-05-11",
    "category": "魚",
    "sales": 2420
  },
  {
    "date": "2025-05-11",
    "category": "飲料",
    "sales": 2142
  },
  {
    "date": "2025-05-12",
    "category": "野菜",
    "sales": 1709
  },
  {
    "date": "2025-05-12",
    "category": "肉",
    "sales": 2932
  },
  {
    "date": "2025-05-12",
    "category": "魚",
    "sales": 2277
  },
  {
    "date": "2025-05-12",
    "category": "飲料",
    "sales": 1730
  },
  {
    "date": "2025-05-13",
    "category": "野菜",
    "sales": 1189
  },
  {
    "date": "2025-05-13",
    "category": "肉",
    "sales": 2674
  },
  {
    "date": "2025-05-13",
    "category": "魚",
    "sales": 2374
  },
  {
    "date": "2025-05-13",
    "category": "飲料",
    "sales": 1507
  },
  {
    "date": "2025-05-14",
    "category": "野菜",
    "sales": 2196
  },
  {
    "date": "2025-05-14",
    "category": "肉",
    "sales": 2380
  },
  {
    "date": "2025-05-14",
    "category": "魚",
    "sales": 2345
  },
  {
    "date": "2025-05-14",
    "category": "飲料",
    "sales": 1196
  },
  {
    "date": "2025-05-15",
    "category": "野菜",
    "sales": 1707
  },
  {
    "date": "2025-05-15",
    "category": "肉",
    "sales": 3233
  },
  {
    "date": "2025-05-15",
    "category": "魚",
    "sales": 2246
  },
  {
    "date": "2025-05-15",
    "category": "飲料",
    "sales": 1647
  },
  {
    "date": "2025-05-16",
    "category": "野菜",
    "sales": 1414
  },
  {
    "date": "2025-05-16",
    "category": "肉",
    "sales": 2645
  },
  {
    "date": "2025-05-16",
    "category": "魚",
    "sales": 2397
  },
  {
    "date": "2025-05-16",
    "category": "飲料",
    "sales": 518
  },
  {
    "date": "2025-05-17",
    "category": "野菜",
    "sales": 1857
  },
  {
    "date": "2025-05-17",
    "category": "肉",
    "sales": 2822
  },
  {
    "date": "2025-05-17",
    "category": "魚",
    "sales": 2463
  },
  {
    "date": "2025-05-17",
    "category": "飲料",
    "sales": 1435
  },
  {
    "date": "2025-05-18",
    "category": "野菜",
    "sales": 1698
  },
  {
    "date": "2025-05-18",
    "category": "肉",
    "sales": 2987
  },
  {
    "date": "2025-05-18",
    "category": "魚",
    "sales": 2898
  },
  {
    "date": "2025-05-18",
    "category": "飲料",
    "sales": 1877
  },
  {
    "date": "2025-05-19",
    "category": "野菜",
    "sales": 2039
  },
  {
    "date": "2025-05-19",
    "category": "肉",
    "sales": 2669
  },
  {
    "date": "2025-05-19",
    "category": "魚",
    "sales": 2538
  },
  {
    "date": "2025-05-19",
    "category": "飲料",
    "sales": 964
  },
  {
    "date": "2025-05-20",
    "category": "野菜",
    "sales": 1935
  },
  {
    "date": "2025-05-20",
    "category": "肉",
    "sales": 3333
  },
  {
    "date": "2025-05-20",
    "category": "魚",
    "sales": 1628
  },
  {
    "date": "2025-05-20",
    "category": "飲料",
    "sales": 1675
  },
  {
    "date": "2025-05-21",
    "category": "野菜",
    "sales": 1291
  },
  {
    "date": "2025-05-21",
    "category": "肉",
    "sales": 2687
  },
  {
    "date": "2025-05-21",
    "category": "魚",
    "sales": 2491
  },
  {
    "date": "2025-05-21",
    "category": "飲料",
    "sales": 898
  },
  {
    "date": "2025-05-22",
    "category": "野菜",
    "sales": 1821
  },
  {
    "date": "2025-05-22",
    "category": "肉",
    "sales": 2441
  },
  {
    "date": "2025-05-22",
    "category": "魚",
    "sales": 2403
  },
  {
    "date": "2025-05-22",
    "category": "飲料",
    "sales": 1399
  },
  {
    "date": "2025-05-23",
    "category": "野菜",
    "sales": 2036
  },
  {
    "date": "2025-05-23",
    "category": "肉",
    "sales": 2896
  },
  {
    "date": "2025-05-23",
    "category": "魚",
    "sales": 1788
  },
  {
    "date": "2025-05-23",
    "category": "飲料",
    "sales": 1057
  },
  {
    "date": "2025-05-24",
    "category": "野菜",
    "sales": 1919
  },
  {
    "date": "2025-05-24",
    "category": "肉",
    "sales": 3386
  },
  {
    "date": "2025-05-24",
    "category": "魚",
    "sales": 2695
  },
  {
    "date": "2025-05-24",
    "category": "飲料",
    "sales": 1233
  },
  {
    "date": "2025-05-25",
    "category": "野菜",
    "sales": 2565
  },
  {
    "date": "2025-05-25",
    "category": "肉",
    "sales": 3004
  },
  {
    "date": "2025-05-25",
    "category": "魚",
    "sales": 2219
  },
  {
    "date": "2025-05-25",
    "category": "飲料",
    "sales": 1698
  },
  {
    "date": "2025-05-26",
    "category": "野菜",
    "sales": 1562
  },
  {
    "date": "2025-05-26",
    "category": "肉",
    "sales": 2666
  },
  {
    "date": "2025-05-26",
    "category": "魚",
    "sales": 2392
  },
  {
    "date": "2025-05-26",
    "category": "飲料",
    "sales": 1762
  },
  {
    "date": "2025-05-27",
    "category": "野菜",
    "sales": 1383
  },
  {
    "date": "2025-05-27",
    "category": "肉",
    "sales": 2350
  },
  {
    "date": "2025-05-27",
    "category": "魚",
    "sales": 1628
  },
  {
    "date": "2025-05-27",
    "category": "飲料",
    "sales": 1453
  },
  {
    "date": "2025-05-28",
    "category": "野菜",
    "sales": 1416
  },
  {
    "date": "2025-05-28",
    "category": "肉",
    "sales": 2918
  },
  {
    "date": "2025-05-28",
    "category": "魚",
    "sales": 2078
  },
  {
    "date": "2025-05-28",
    "category": "飲料",
    "sales": 2029
  },
  {
    "date": "2025-05-29",
    "category": "野菜",
    "sales": 1416
  },
  {
    "date": "2025-05-29",
    "category": "肉",
    "sales": 2409
  },
  {
    "date": "2025-05-29",
    "category": "魚",
    "sales": 2010
  },
  {
    "date": "2025-05-29",
    "category": "飲料",
    "sales": 1489
  },
  {
    "date": "2025-05-30",
    "category": "野菜",
    "sales": 1768
  },
  {
    "date": "2025-05-30",
    "category": "肉",
    "sales": 2692
  },
  {
    "date": "2025-05-30",
    "category": "魚",
    "sales": 2065
  },
  {
    "date": "2025-05-30",
    "category": "飲料",
    "sales": 1420
  },
  {
    "date": "2025-05-31",
    "category": "野菜",
    "sales": 2338
  },
  {
    "date": "2025-05-31",
    "category": "肉",
    "sales": 3066
  },
  {
    "date": "2025-05-31",
    "category": "魚",
    "sales": 2653
  },
  {
    "date": "2025-05-31",
    "category": "飲料",
    "sales": 1744
  }
]