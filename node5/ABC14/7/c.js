// WA

'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  const N = Number(inp.shift())
  let say = [...Array(N)].map(() => [])
  let mode = 0
  let count = -1
  inp.forEach(l => {
    l = l.split(' ').map(n => Number(n))
    if (mode) {
      say[count].push([l[0]-1, l[1]])
      mode--
    } else {
      mode = l
      count++
    }
  })
  console.log(say)

  let ans = 0
  let bit = Math.pow(2, N) - 1
  for (let i = 1; i <= bit; i++) {
    let people = new Array(N).fill(-1)
    let count = (i.toString(2).split('1').length) - 1
    let doubt = false
    console.log('\n正直と仮定', i.toString(2))
    for (let j = 1; j <= bit; j *= 2) {
      console.log(i, j)
      if (i & j) {
        let index = Math.log(j)/Math.log(2)
        console.log('彼が言うには', index)
        say[index].forEach(is => {
          console.log(is[0]+'は'+Boolean(is[1]))
          if (Boolean(Math.pow(2, is[0]) & i) == Boolean(is[1])) {
            if (people[is[0]] === -1) {
              people[is[0]] = is[1]
            }
            if (people[is[0]] !== is[1]) {
              doubt = true
              console.log('ダウト！')
            }
          } else {
            doubt = true
            console.log('ダウト！')
          }
        })
        if (doubt) break
      }
    }
    // console.log(people)
    if (!doubt) {
      console.log(count + '人の正直者がいました')
      if (ans < count) ans = count
    }
  }
  console.log(ans)
}

main(`
1
1
1 0
`)