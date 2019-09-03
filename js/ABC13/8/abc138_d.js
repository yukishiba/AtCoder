// D - Ki
// TLE
'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const NQ = inp.shift().split(' ').map(n => Number(n))
  let ans = new Array(NQ[0]+1).fill(0)
  let ab = {}
  let px = {}

  for (let i = 0; i < inp.length; i++) {
    const arr = inp[i].split(' ').map(n => Number(n))
    let j = arr[0]
    if (i < NQ[0] - 1) {
      if(!(j in ab)) ab[j] = []
      ab[j].push(arr[1])
    } else {
      if(!(j in px)) px[j] = 0
      px[j] += arr[1]
    }
  }

  let stack = [1]
  const countup = n => {
    if (n in px) ans[n] += px[n]
    if (n in ab) {
      for (let i = 0; i < ab[n].length; i++) {
        let j = ab[n][i]
        ans[j] += ans[n]
        stack.push(j)
      }
    }
  }
  while(stack.length) {
    countup(stack.pop())
  }
  ans.shift()

  console.log(ans.join(' '))
}

main(`6 2
1 2
1 3
2 4
3 6
2 5
1 10
1 10`)