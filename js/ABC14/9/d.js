'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  inp[0] = inp[0].split(' ').map(n => Number(n));
  inp[1] = inp[1].split(' ').map(n => Number(n));

  const hand = ['r', 's', 'p']

  const N = inp[0][0]
  const K = inp[0][1]

  const point = inp[1]

  let T = inp[2]
  let W = ''
  let ans = 0
  
  for (let i = 0; i < T.length; i++) {
    let index = hand.indexOf(T[i])
    let next = hand[index ? index - 1 : 2]
    if (W.length >= K && W[W.length - K] === next) {
      W += '0'
    } else {
      W += next
      ans += point[hand.indexOf(next)]

    }
  }
  console.log(ans)
}

main(`30 5
325 234 123
rspsspspsrpspsppprpsprpssprpsr


`)
