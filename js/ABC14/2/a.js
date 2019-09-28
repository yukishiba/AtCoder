'use strict'
function main(inp) {
  inp = Number(inp.trim())
  if (inp === 1) {
    console.log(1)
  } else if (inp === 0) {
    console.log(0)
  } else {
    console.log(inp%2 ? Math.ceil(inp/2)/inp : 0.5)
  }
}

main(`0`);
