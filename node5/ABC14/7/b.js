'use strict'
function main(inp) {
  inp = inp.trim()
  let ans = 0
  for (let i = 0; i < inp.length / 2; i++) {
    if (inp[i] !== inp[inp.length - i - 1]) ans++
  }
  console.log(ans)
}
main(`abcabc
`);
