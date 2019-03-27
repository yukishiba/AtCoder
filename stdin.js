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
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
