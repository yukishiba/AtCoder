// C - Energy Drink Collector 

'use strict'
function main(input) {
  input = input.trim().split('\n').map(r => r.split(' ').map(v => Number(v)))
  const NM = input.shift()
  input = input.sort((a, b) => a[0] - b[0])
  let count = NM[1]
  let pay = 0
  for (let i = 0; i < NM[0]; i++) {
    if (count >= input[i][1]) {
      count -= input[i][1]
      pay += input[i][1] * input[i][0]
    } else {
      pay += count * input[i][0]
      break
    }
  }
  console.log(pay);
}

main(`2 5
4 9
2 4`) // 12

main(`4 30
6 18
2 5
3 10
7 9`) // 130

main(`1 100000
1000000000 100000`) // 100000000000000
