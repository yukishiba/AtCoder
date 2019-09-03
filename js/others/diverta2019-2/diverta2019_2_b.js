// B
// TLE

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const N = Number(input.shift())
  if (N < 3) return console.log(1)

  input = input.map(v => v.split(' ')
    .map(n => Number(n)))
    .sort((a, b) => {
      let re = a[0] - b[0]
      if (re === 0) re = a[1] - b[1]
      return re
    })


  const cDiff = (i, j) => {
    return input[j][0] - input[i][0] + input[j][1] - input[i][1]
  }

  let ans = 1
  let count = 1
  let check = new Array(N)
  let current = null

  let now = 0
  let next = 1

  while(count < N) {
    while (next < N) {
      while(1) {
        if (!check[next]) break
        next++
      }
      if (next === N) break
      let diff = cDiff(now, next)
      if (!current || diff === current) {
        count++
        current = diff
        check[now] = true
        now = next
      } else {
        next++
      }
    }
    if (count < N) {
      ans++
      now = 0
      while(1) {
        if (!check[now]) break
        now++
      }
      next = now + 1
    }
  }

  console.log(ans)
}

main(`2
1 1
2 2`) // 1

main(`3
1 4
4 6
7 8`) // 1

main(`4
1 1
1 2
2 1
2 2`) // 2
