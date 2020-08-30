'use strict'
function main(inp) {
  inp = Number(inp.trim())
  let ans = 0
  for (let i = 1; i < 10; i++) {
    if ((inp % i == 0) && (inp / i < 10)) {
      ans++
    }
  }
  console.log(ans ? 'Yes' : 'No')
}
main('27');
