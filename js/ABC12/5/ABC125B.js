// B - Resale

'use strict'
function main(input) {
  input = input.split('\n')
  const value = input[1].split(' ')
  const cost = input[2].split(' ')
  let result = 0
  value.forEach((val, i) => {
    const temp = Number(val) - Number(cost[i])
    if (temp > 0) result += temp
  })
  console.log(result)
}

main(`3
10 2 5
6 3 4`) // 5

main(`4
13 21 6 19
11 30 6 15`) // 6

main(`1
1
50`) // 0
