// D - Summer Vacation 
'use strict'
// 参考 https://atcoder.jp/contests/abc137/submissions/6813834

class PriorityQueue {
  constructor () {
    this.heap = []
  }
  push (n) {
    let i = this.heap.length++, j
    while (i) {
      j = i - 1 >> 1
      if (this.heap[j] <= n) break
      this.heap[i] = this.heap[j]
      i = j
    }
    this.heap[i] = n
  }
  pop () {
    const dest = this.top()
    const last = this.heap.pop()
    const k = this.size() >> 1
    let i = 0, j
    while (i < k) {
      j = (i << 1) + 1
      if (this.heap[j+1] < this.heap[j]) ++j
      if (last <= this.heap[j]) break
      this.heap[i] = this.heap[j]
      i = j
    }
    if (this.size()) this.heap[i] = last
    return dest
  }
  size () {return this.heap.length}
  top () {return this.heap[0]}
}

function main(inp) {
  inp = inp.trim().split('\n')
  const NM = inp.shift().split(' ').map(n => Number(n))
  inp = inp.map(r => r.split(' ').map(n => Number(n)))
  inp.push([1e9,0])
  inp.sort((a,b)=>a[0]-b[0])

  let ans = 0
  let j = 0
  let pq = new PriorityQueue()
  for (let i = 1; i <= NM[1]; i++) {
    while (inp[j][0] <= i) {
      pq.push(-inp[j][1])
      j++
    }
    if (pq.size()) ans -= pq.pop()
  }
  console.log(ans)
}

main(`3 4
4 3
4 1
2 2`) // 5

main(`5 3
1 2
1 3
1 4
2 1
2 3`) // 10

main(`1 1
2 1`) // 0
