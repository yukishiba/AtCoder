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
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
