// C - String Transformation

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const S = input[0]
  const T = input[1]
  const p = {}
  const r = {}

  for (let i = 0; i < S.length; i++) {
    const s = S[i]
    const t = T[i]
    if (!(s in p)) p[s] = t
    if (!(t in r)) r[t] = s
    if (p[s] !== t || r[t] !== s) {
      return console.log('No')
    }
  }
  console.log('Yes')
}

main(`azzel
apple`) // Yes

main(`chokudai
redcoder`) // No

main(`redcoder
chokudai`) // No

main(`abcdefghijklmnopqrstuvwxyz
ibyhqfrekavclxjstdwgpzmonu`) // Yes
