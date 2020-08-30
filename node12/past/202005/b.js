'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const [N, M, Q] = inp.shift().split(' ').map(n => Number(n))

  const table = new Array(N + 1)

  table[0] = new Array(M).fill(N)
  for (let i = 1; i < N + 1; i++) {
    table[i] = new Array(M).fill(0)
  }
  
  const command = [
    null,
    (n) => {
      let score = 0
      for (let i = 0; i < M; i++) {
        if (table[n][i]) {
          score += table[0][i]
        }
      }
      console.log(score)
    },
    (n, m) => {
      table[n][m - 1] = 1
      table[0][m - 1] -= 1
    }
  ]

  for (let i = 0; i < Q; i++) {
    const [com, n, m] = inp[i].split(' ').map(n => Number(n))
    command[com](n, m)
  }
}

main(`5 5 30
1 3
2 3 5
1 3
2 2 1
2 4 5
2 5 2
2 2 3
1 4
2 4 1
2 2 2
1 1
1 5
2 5 3
2 4 4
1 4
1 2
2 3 3
2 4 3
1 3
1 5
1 3
2 1 3
1 1
2 2 4
1 1
1 4
1 5
1 4
1 1
1 5


`)