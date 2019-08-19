// D - Preparing Boxes

'use strict'

const divisors = n => {
  let dest = []
  for (let i = 1; i < Math.floor(Math.pow(n, 0.5) + 1); i++) {
    if (n % i === 0) {
      dest.push(i)
      if (Math.floor(n / i) !== i) {
        dest.push(Math.floor(n / i))
      }
    }
  }
  return dest.sort((a, b) => a - b)
}

function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp[0].split(' ').map(n => Number(n));
  inp.unshift(0)

  let ans = []
  let allBalls = new Array(N+1).fill(0)

  for (let i = N; i > 0; i--) {
    if (inp[i] > 1) return console.log(-1)
    if (allBalls[i] % 2 !== inp[i]) {
      ans.push(i)
      
      let arr = divisors(i)
      for (let j = 0; j < arr.length; j++) {
        allBalls[arr[j]]++
      }
    }
  }
  if (ans.length) {
    console.log(ans.length)
    console.log(ans.reverse().join(' '))
  } else {
    console.log(0)
  }
}

main(`3
1 1 1`) 

main(`3
1 0 0`) 

/*
1
1
*/

main(`5
0 0 0 0 0`)

/*
0
*/