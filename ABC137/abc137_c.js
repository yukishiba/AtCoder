// C - Green Bin 

'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  inp = inp.map(S => {
    return S.split('').sort().join('')
  }).sort();

  let ans = 0
  let obj = {}

  for (let i = 0; i < N; i++) {
    if (!(inp[i] in obj)) obj[inp[i]] = 0
    obj[inp[i]]++
  }

  Object.keys(obj).forEach(key => {
    if(obj[key] > 1) {
      ans += obj[key] * (obj[key] - 1) / 2
    }
  })
  console.log(ans)
}

main(`3
acornistnt
peanutbomb
constraint`) // 1

main(`2
oneplustwo
ninemodsix`) // 0

main(`5
abaaaaaaaa
oneplustwo
aaaaaaaaba
twoplusone
aaaabaaaaa`) // 4
