// C - Build Stairs
'use strict'
function main(inp) {
  inp = inp.split('\n')
  const N = inp.shift() - 0
  inp = inp[0].split(' ').map(n => n - 0)
  let max = 0

  for (let i = 0; i < N; i++) {
    if (max < inp[i]) max = inp[i]
    if (max - 2 >= inp[i]) {
      console.log('No')
      return
    }
  }
  console.log('Yes')
}

main(`5
12332`) // Yes

main(`5
1 2 1 1 3`) // Yes

main(`4
1 3 2 1`) // No

main(`5
1 2 3 4 5`) // Yes

main(`1
1000000000`) // Yes
