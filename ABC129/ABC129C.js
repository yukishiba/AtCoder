// C - Typical Stairs
'use strict'
function main(input) {
  input = input.trim().split('\n')
  const NM = input.shift().split(' ').map(v => Number(v))
  input = input.map(v => Number(v))
  
  let ans = new Array(NM[0]+1).fill(1)
  let broken = -1
  let NG = false

  input.forEach(n => {
    if (broken + 1 === n) { NG = true }
    ans[n] = 0
    broken = n
  })
  if (NG) { console.log(0); return }
  
  for (let n = 2; n <= NM[0]; n++) {
    ans[n] = ans[n] * (ans[n-2] + ans[n-1]) % 1000000007
  }
  console.log(ans[NM[0]])
}

main(`6 1
3`) // 4

main(`10 2
4
5`) // 0

main(`100 5
1
23
45
67
89`) // 608200469
