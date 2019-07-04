// C - All Green

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const DG = input.shift().split(' ').map(v => Number(v))
  input = input.map(v => v.split(' ').map(v => Number(v)))
  let ans = -1
  for (let i = 0; i < Math.pow(2, DG[0]); i++) {
    let flag = ('0000000000' + i.toString(2)).slice(-1 * DG[0])
    let max = -1
    let score = DG[1]
    let count = 0
    for(let j = 0; j < DG[0]; j++) {
      if (flag[j] === '1') {
        let point = (j+1) * 100
        score -= point * input[j][0] + input[j][1]
        count += input[j][0]
      } else {
        max = j
      }
    }
    if (score > 0 && ~max) {
      let point = (max+1) * 100
      let num = Math.ceil(score / point)
      num = input[max][0] > num ? num : input[max][0]
      count += num
      score -= point * num
    }
    if (score <= 0 && (!~ans || ans > count)) {
      ans = count
    }
  }
  console.log(ans)
}

main(`2 700
3 500
5 800`) // 3

main(`2 2000
3 500
5 800`) // 7

main(`2 400
3 500
5 800`) // 2

main(`5 25000
20 1000
40 1000
50 1000
30 1000
1 1000`) // 66

main(`10 10550000
100 1000000
100 1000000
100 1000000
100 1000000
100 1000000
100 1000000
100 1000000
100 1000000
100 1000000
100 1000000`) // 1000 6235301