'use strict'
function main(input) {
  input = input.split('\n')
  const coin = [500, 100, 50]
  let result = 0

  for (let a = 0; (coin[0] * a <= input[3]) && a <= input[0]; a++) {
    let aTotal = coin[0] * a
    for (let b = 0; (aTotal + coin[1] * b <= input[3]) && b <= input[1]; b++) {
      let remain = input[3] - (aTotal + coin[1] * b)
      let c = remain / coin[2]
      if ((remain - coin[2] * c === 0) && c <= input[2]) result++
    }
  }

  console.log(result)
}

main(`2
2
2
100`) // 2

main(`5
1
0
150`) // 0

main(`30
40
50
6000`) // 213