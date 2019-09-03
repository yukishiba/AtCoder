// C - GeT AC
// TLEしたので解説参照した

'use strict'
function main(input) {
  input = input.trim().split('\n')
  const NQ = input.shift().split(' ').map(v => Number(v))
  const S = input.shift()
  const ans = []
  const count = [0]

  for (let i = 1; i < NQ[0]; i++) {
    let newCount = count[i-1]
    if (S[i-1]==='A'&&S[i]==='C') newCount++
    count.push(newCount)
  }

  input.forEach(val => {
    const LR = val.split(' ').map(v => Number(v))
    ans.push(count[LR[1]-1] - count[LR[0]-1])
  })

  console.log(ans.join('\n'));
}

main(`8 3
ACACTACG
3 7
2 3
1 8`)

/*
2
0
3
*/