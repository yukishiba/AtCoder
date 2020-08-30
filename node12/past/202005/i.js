'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  const Q = Number(inp.shift())

  const table = new Array(N)
  for (let i = 0; i < N; i++) {
    table[i] = []
    for (let j = 0; j < N; j++) {
      table[i][j] = BigInt(N * i + j)
    }
  }
  
  let trans = false
  const command = [
    null,
    // Queryi=1 A B のとき: 行列 a の A 行目と B 行目の要素を列番号を維持しながら交換せよ。
    (a, b) => {
      const temp = [...table[a - 1]]
      table[a - 1] = [...table[b - 1]]
      table[b - 1] = temp 
    },
    // Queryi=2 A B のとき: 行列 a の A 列目と B 列目の要素を行番号を維持しながら交換せよ。
    (a, b) => {
      let temp = ''
      for (let i = 0; i < N; i++) {
        temp = table[i][a - 1]
        table[i][a - 1] = table[i][b - 1]
        table[i][b - 1] = temp
      }
    },
    // Queryi=3 のとき: 行列を転置せよ。つまり ai,j の要素は転置後 aj,i に位置する。
    () => {
      trans = !trans
    },
    // Queryi=4 A B のとき: 行列 a の A 行 B 列に位置する要素を出力せよ。
    (a, b) => {
      console.log(table[a - 1][b - 1].toString())
    },
  ]

  for (let i = 0; i < Q; i++) {
    const [com, a, b] = inp[i].split(' ').map(n => Number(n))
    if (trans) {
      command[com](b, a)
    } else {
      command[com](a, b)
    }
  }
}

main(`2
19
4 1 1
4 1 2
4 2 1
4 2 2
3
4 1 1
4 1 2
4 2 1
4 2 2
1 1 2
4 1 1
4 1 2
4 2 1
4 2 2
2 2 1
4 1 1
4 1 2
4 2 1
4 2 2
`)