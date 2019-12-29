'use strict'

function main(inp) {
  inp = inp.trim()
  console.log(inp)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
