// D - Gathering Children
// 参考 https://atcoder.jp/contests/abc136/submissions/6697694
'use strict'
function main(inp) {
  inp = inp.trim()
  let L = []
  let R = []
  let ans = []
  let temp = 0

  for (let i = 0; i < inp.length; i++) {
    R[i] = 0
    if (inp[i] === 'R') {
      temp++
    } else if (temp > 0) {
      R[i] = Math.floor(temp / 2)
      R[i - 1] = temp - R[i]
      temp = 0
    }
  }
  temp = 0

  for (let i = inp.length - 1; i >= 0; i--) {
    L[i] = 0
    if (inp[i] === 'L') {
      temp++
    } else if (temp > 0) {
      L[i] = Math.floor(temp / 2)
      L[i + 1] = temp - L[i]
      temp = 0
    }
  }

  for (let i = 0; i < inp.length; i++) {
    ans[i] = R[i] + L[i]
  }
  console.log(ans.join(' '))
}

main(`RRLRL`) // 0 1 2 1 1

main(`RRLLLLRLRRLL`) // 0 3 3 0 0 0 1 1 0 2 2 0

main(`RRRLLRLLRRRLLLLL`) // 0 0 3 2 0 2 1 0 0 0 4 4 0 0 0 0
