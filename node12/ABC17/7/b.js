'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const diff = inp[0].length - inp[1].length;
  let ans = inp[1].length
  for (let i = 0; i <= diff; i++) {
    let num = 0;
    for (let j = 0; j < inp[1].length; j++) {
      if (inp[0][i+j] !== inp[1][j]) num++
    }
    ans = Math.min(ans, num)
  }
  console.log(ans)
}

main(`cabacc
abc`)

main(`codeforces
atcoder`)