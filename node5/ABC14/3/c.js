'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp[0];
  
  let ans = 1
  for (let i = 1; i < N; i++) {
    if (inp[i] !== inp[i-1]) ans++
  }
  console.log(ans)
}

main(`20
xxzaffeeeeddfkkkkllq
`);
