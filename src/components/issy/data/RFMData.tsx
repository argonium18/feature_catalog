// utils/generateData.ts
export function generate3DData(size = 10) {
    const data = []
    for (let r = 0; r < size; r++) {
      const row = []
      for (let f = 0; f < size; f++) {
        const col = []
        for (let m = 0; m < size; m++) {
          // 仮データ：R + F + M に少しノイズを加えたもの
          col.push(r + f + m + Math.random() * 5)
        }
        row.push(col)
      }
      data.push(row)
    }
    return data
  }
  