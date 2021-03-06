// 日本でよく使われる紙幣は、10000 円札、5000 円札、1000 円札です。
// 以下、「お札」とはこれらのみを指します。
// 青橋くんが言うには、彼が祖父から受け取ったお年玉袋にはお札が N 枚入っていて、
// 合計で Y 円だったそうですが、嘘かもしれません。このような状況がありうるか判定し、
// ありうる場合はお年玉袋の中身の候補を一つ見つけてください。
// なお、彼の祖父は十分裕福であり、お年玉袋は十分大きかったものとします。

'use strict'
function main(input) {
  input = input.split(' ')
  const num = Number(input.shift())
  const amount = Number(input.shift())

  const type = [10000, 5000, 1000]
  const wrong = '-1 -1 -1'
  let result = [0, 0, 0]

  const calc = result => {
    let arr = type.map((val, index) => val * result[index])
    return arr[0] + arr[1] + arr[2]
  }
  const remainMoney = result => amount - calc(result)
  const remainNum = result => num - (result[0] + result[1] + result[2])

  const comparison = (a, b, max) => Math.min(Math.floor(a / b), max)
  const isCorrect = result => {
    return (remainMoney(result) === 0 && remainNum(result) === 0)
  }

  // 大きい紙幣から割り当てていく。これだと残額ゼロになっても枚数が余る。
  for (let i = 0; i < type.length; i++) {
    result[i] = Math.min(Math.floor(remainMoney(result) / type[i]), remainNum(result))
  }

  if (remainNum(result) > 0) {
    // 枚数が余る場合、小さい紙幣に割り当てを変更する。割合の大きい順に移動する。
    let manToSen = comparison(remainNum(result), 9, result[0])
    result[0] -= manToSen
    result[2] += manToSen * 10
  
    let gosenToSen = comparison(remainNum(result), 4, result[1])
    result[1] -= gosenToSen
    result[2] += gosenToSen * 5
  
    let manToGosen =comparison(remainNum(result), 1, result[0])
    result[0] -= manToGosen
    result[1] += manToGosen * 2
  }

  console.log(isCorrect(result) ? result.join(' ') : wrong)
}

main('9 45000') // 4 0 5
main('20 196000') // -1 -1 -1
main('1000 1234000') // 14 27 959
main('1000 4962000') // 14 959 27
main('2000 20000000') // 2000 0 0