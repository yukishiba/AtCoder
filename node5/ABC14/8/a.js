'use strict'

function main(inp) {
  inp = inp.trim().split('\n');
  console.log(inp)
  let ans = 0
  for (let i = 1; i <= 3; i++) {
    if (inp.indexOf(String(i)) === -1) ans = i
  }
  console.log(ans)
}
main(`2
1
`);
