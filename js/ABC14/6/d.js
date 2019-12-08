'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  let G = [...new Array(N)].map(a => [])
  let vp = new Array()
  
  inp.forEach(r => {
    r = r.split(' ').map(n => n - 1)
    G[r[0]].push(r[1])
    G[r[1]].push(r[0])
    vp.push(r[0]+'-'+r[1])
  })

  let K = 0; // 色数
  let I = new Object() // 辺の色
  let cs = new Array(N).fill(0)
  let used = new Array(N).fill(0)
  let que = [0]

  used[0] = 1
  while(que.length) {
    let v = que.shift()
    if (K < G[v].length) K = G[v].length
    let color = 1
    for (const u of G[v]) {
      if (used[u]) continue;
      if (color === cs[v]) color++
      cs[u] = I[u+'-'+v] = I[v+'-'+u] = color++
      used[u] = 1
      que.push(u)
    }
  }

  console.log(K)
  vp.forEach(v => {
    console.log(I[v])
  })
}
main(`8
1 2
2 3
2 4
2 5
4 7
5 6
6 8
`);
