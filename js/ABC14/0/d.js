// D - Face Produces Unhappiness 

'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  inp[0] = inp[0].split(' ')
  const N = Number(inp[0][0]) // 全長
  const K = Number(inp[0][1]) // 最大操作数
  inp = inp[1]

  let b = 1 // 分割数
  for (let i = 0; i < N - 1; i++) {
    if (inp[i] !== inp[i+1]) b++
  }

  console.log(Math.min(N - b + (2 * K), N - 1))
}

main(`6 1
LRLRRL`)

// main(``)

// main(``)
