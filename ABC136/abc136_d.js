// D - Gathering Children
// WA でした
'use strict'
function main(inp) {
  inp = inp.trim().split('RL')
  let ans = ''
  for (let i = 0; i < inp.length - 1; i++) {
    let a = 1;
    let b = 1;
    if (inp[i][inp[i].length - 1] === 'R') {
      let split = inp[i].split('L')
      a += split[split.length - 1].length
    }
    if (inp[i+1][0] === 'L') {
      b += inp[i+1].split('R')[0].length
    }
    if (Math.max(a, b) % 2 === 0) {
      let temp = a
      a = b
      b = temp
    }
    let sum = a + b
    if (a - b > 1) {
      a = Math.ceil(sum / 2)
      b = Math.floor(sum / 2)
    } else if (b - a > 1) {
      a = Math.floor(sum / 2)
      b = Math.ceil(sum / 2)
    }
    ans += new Array(inp[i].length).fill(0).join('') + a + b
  }
  ans += new Array(inp[inp.length-1].length).fill(0).join('')
  console.log(ans.split('').join(' '))
}

main(`RRLRL`) // 0 1 2 1 1

main(`RRLLLLRLRRLL`) // 0 3 3 0 0 0 1 1 0 2 2 0

main(`RRRLLRLLRRRLLLLL`) // 0 0 3 2 0 2 1 0 0 0 4 4 0 0 0 0
