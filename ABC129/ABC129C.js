// C - Typical Stairs
// WA
'use strict'
function main(input) {
  input = input.trim().split('\n')
  const NM = input.shift().split(' ').map(v => Number(v))
  input = [0, ...input.map(v => Number(v)), NM[0]]
  console.log(input)

  const calc = d => {
    return d < 2 ? 1 : (d - 1) * (d - 2) / 2 + 2
  }
  let ans = 1
  
  for (let m = 1; m <= NM[1] + 1; m++) {
    let diff = input[m] - input[m - 1] - 1
    console.log(m, diff, calc(diff))
    if (diff === 0 && m!==1) {
      console.log(0)
      return
    }
    ans = ans * (calc(diff))
  }
  console.log(ans % 1000000007)
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
