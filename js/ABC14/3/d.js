'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp[0].split(' ').map(n => Number(n)).sort((a, b) => a - b)

  let list = []
  let ans = 0
  for (let i = 0; i < N - 1; i++) {
    const plus = inp[i+1] + inp[i]
    const minus = inp[i+1] - inp[i] 
    if (i > 0) {
      list[i] = list[i - 1].map(num => {
        if (num > inp[i + 1]) {
          if (num > inp[N - 1]) {
            ans += N - i - 1
          } else {
            let left = i + 1
            let right = N - 1
            let j = Math.floor((right - left) / 2) + left
            while(1) {
              if (num > inp[j] && num <= inp[j+1]) {
                break
              } else if (num > inp[j]) {
                left = j + 1
                j = Math.floor((right - left) / 2) + left
              } else {
                right = j
                j = Math.floor((right - left) / 2) + left
              }
            }
            ans += j - i
          }
        }
        return num + minus
      })
    } else {
      list[i] = []
    }
    list[i].push(plus)
  }
  console.log(ans)
}

main(`7
218 786 704 233 645 728 389
`);

[ 218, 233, 389, 645, 704, 728, 786 ]