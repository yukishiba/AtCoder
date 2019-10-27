'use strict'
function main(inp) {
  inp = inp.trim().split(' ').map(n => Number(n));
  const h = inp[2] / inp[0] / inp [1] * 2
  if (h > inp[0]) {
    console.log(Math.atan2(inp[1] - (inp[2] / inp[0] / inp[0]), (inp[0] / 2)) * 180 / Math.PI)
  } else {
    console.log(90 - (Math.atan2(h, inp[1]) * 180 / Math.PI))
  }
}
main(`3 1 8`);
