'use strict'
function main(inp) {
  inp = Number(inp.trim())
  const sqrt = Math.floor(Math.sqrt(inp))
  for (let i = sqrt; i > 0; i--) {
    if (inp % i == 0) {
      console.log(i + (inp / i) - 2)
      break;
    }
  }
}
main('10000000019');
