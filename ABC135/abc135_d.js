// D - Digits Parade
// 解説のコードを参考に書くも理屈が分からないまま。。
'use strict'
function main(inp) {
  inp = inp.trim()

  const MOD = 1000000007
  let dp = [new Array(13).fill(0)]
  dp[0][0] = 1
  
  for (let i = 0; i < inp.length; i++) {
    dp[i + 1] = new Array(13).fill(0)
    const c = inp[i] === '?' ? -1 : inp[i] - 0
    for (let j = 0; j < 10; j++) {
      if (c !== -1 && c !== j) continue
      for (let k = 0; k < 13; k++) {
        dp[i+1][(k * 10 + j) % 13] += dp[i][k]
      }
    }
    for (let j = 0; j < 13; j++) {
      dp[i+1][j] %= MOD
    }
  }
  console.log(dp[inp.length][5])
}

main(`??2??5`) // 768

main(`?44`) // 1

main(`7?4`) // 0

main(`?6?42???8??2??06243????9??3???7258??5??7???????774????4?1??17???9?5?70???76???`) // 153716888