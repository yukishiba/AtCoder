'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const N = inp.shift()
  inp = inp.sort()
  
  let ans = []
  let num = 0
  let count = 0
  for (let i = 0; i < inp.length; i++) {
    count++;
    if ((i + 1 === N) || inp[i] !== inp[i+1]) {
      if (count === num) {
        ans.push(inp[i])
      } else if (count > num) {
        num = count
        ans = [inp[i]]
      }
      count = 0
    }
  }

  console.log(ans.join('\n'))
}

main(`7
beat
vet
beet
bed
vet
bet
beet

`)
