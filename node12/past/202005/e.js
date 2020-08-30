'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const [N, M, Q] = inp.shift().split(' ').map(n => Number(n))

  const graph = ('0 ' + inp[M])
    .split(' ').map(n => ({color: Number(n), route: []}))


  for (let i = 0; i < M; i++) {
    const temp = inp[i].split(' ')
    graph[temp[0]].route.push(temp[1])
    graph[temp[1]].route.push(temp[0])
  }

  const command = [
    null,
    (x) => {
      graph[x].route.forEach(n => {
        graph[n].color = graph[x].color
      })
    },
    (x, y) => {
      graph[x].color = y
    }
  ]

  for (let i = M + 1; i < M + 1 + Q; i++) {
    const [com, x, y] = inp[i].split(' ').map(n => Number(n))
    console.log(graph[x].color)
    command[com](x, y)
  }
}

main(`30 10 20
11 13
30 14
6 4
7 23
30 8
17 4
6 23
24 18
26 25
9 3
18 4 36 46 28 16 34 19 37 23 25 7 24 16 17 41 24 38 6 29 10 33 38 25 47 8 13 8 42 40
2 1 9
1 8
1 9
2 20 24
2 26 18
1 20
1 26
2 24 31
1 4
2 21 27
1 25
1 29
2 10 14
2 2 19
2 15 36
2 28 6
2 13 5
1 12
1 11
2 14 43
`)