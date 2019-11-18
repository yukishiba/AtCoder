'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const a = inp[1].substr(0, inp[0] / 2)
  console.log(a + a === inp[1] ? 'Yes' : 'No')
}
main(`6
abcabc
`);
