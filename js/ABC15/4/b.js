'use strict'

function main(inp) {
  inp = inp.trim()
  let ans = ''
  for (let index = 0; index < inp.length; index++) {
    ans += 'x'
  }
  console.log(ans)
}

main(`sardine`)
