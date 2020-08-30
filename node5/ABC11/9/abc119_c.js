// C - Synthetic Kadomatsu 
// 解説みた

'use strict'
function main(input) {
  input = input.trim().split('\n')
  let ABC = input.shift().split(' ').map(v => Number(v))
  const N = ABC.shift()
  input = input.map(v => Number(v)).sort((a, b) => b - a)
  const INF = Math.pow(10, 9)
  console.log(N, ABC, input)

  const dfs = (cur, a, b, c) => {
    if (cur === N) {
      if (Math.min(a, b, c) > 0) {
        return Math.abs(a - ABC[0]) + Math.abs(b - ABC[1]) + Math.abs(c - ABC[2]) - 30
      }
      return INF
    }
    return Math.min(
      dfs(cur+1, a, b, c),
      dfs(cur+1, a + input[cur], b, c) + 10,
      dfs(cur+1, a, b + input[cur], c) + 10,
      dfs(cur+1, a, b, c + input[cur]) + 10
    )
  }
  console.log(dfs(0,0,0,0))
}

main(`5 100 90 80
98
40
30
21
80`) // 23

main(`8 100 90 80
100
100
90
90
90
80
80
80`) // 0

main(`8 1000 800 100
300
333
400
444
500
555
600
666`) // 243