// 日本でよく使われる紙幣は、10000 円札、5000 円札、1000 円札です。
// 以下、「お札」とはこれらのみを指します。
// 青橋くんが言うには、彼が祖父から受け取ったお年玉袋にはお札が N 枚入っていて、
// 合計で Y 円だったそうですが、嘘かもしれません。このような状況がありうるか判定し、
// ありうる場合はお年玉袋の中身の候補を一つ見つけてください。
// なお、彼の祖父は十分裕福であり、お年玉袋は十分大きかったものとします。

'use strict'
function main(input) {
  const type = [10000, 5000, 1000]
  const wrong = '-1 -1 -1'
  let result = [0, 0, 0]

  const calc = result => {
    let arr = type.map((val, index) => val * result[index])
    return arr[0] + arr[1] + arr[2]
  }
  const remainMoney = result => amount - calc(result)
  const remainNum = result => num - (result[0] + result[1] + result[2])

  const isCorrect = result => {
    return (remainMoney(result) === 0 && remainNum(result) === 0) 
  }
  
  input = input.split(' ')
  const num = Number(input.shift())
  const amount = Number(input.shift())

  for (let i = 0; i < type.length; i++) {
    result[i] = Math.min(Math.floor(remainMoney(result) / type[i]), remainNum(result))
  }

  while (remainNum(result) > 0) {
    let dist = [
      0,
      Math.round(remainNum(result) / 12 * 2),
      Math.round(remainNum(result) / 12 * 10)
    ]
    let decrease = [0, 0, 0]
    let shortfall = dist[1] * type[1] + dist[2] * type[2] - remainMoney(result)

    for (let i = 1; i >= 0; i--) {
      if (shortfall > 0) {
        decrease[i] = (shortfall / type[i]) > (result[i] + dist[i]) ? result[i] + dist[i] : Math.floor(shortfall / type[i])
        shortfall -= decrease[i] * type[i]
      }
    }

    if (shortfall > 0) {
      if (shortfall === type[2]) {
        decrease[2]++;
      } else if (shortfall < type[1]) {
        decrease[1]++; dist[2]++
      } else if (shortfall < type[0]) {
        decrease[0]++; dist[1]++
      }
    }

    for (let i = 2; i >= 0; i--) {
      result[i] = result[i] + dist[i] - decrease[i]
      if (result[i] < 0) result[i] = 0
    }
  }

  console.log(isCorrect(result) ? result.join(' ') : wrong)
}

main('9 45000') // 4 0 5
main('20 196000') // -1 -1 -1
main('1000 1234000') // 14 27 959
main('2000 20000000') // 2000 0 0