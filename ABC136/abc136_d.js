// D - Gathering Children
// 参考 https://twitter.com/tempura_cpp/status/1158014535816679424/photo/1
// だが TLE がでる。。
'use strict'
function main(inp) {
  inp = inp.trim()
  const L = inp.length
  let next = new Array(L)
  let ans = new Array(L).fill(0)

  // L/R を具体的な移動先のindexにする。
  for (let i = 0; i < L; i++) {
    next[i] = inp[i] === 'R' ? i + 1 : i - 1
  }
  // 100 回程度でいいのか……
  for (let j = 0; j < 100; j++) {
    let newNext = new Array(L)
    // 移動先の移動先に更新する
    for (let k = 0; k < L; k++) {
      newNext[k] = next[next[k]]
    }
    next = [...newNext]
  }
  // 移動先に選ばれたマスをカウントアップする
  for (let l = 0; l < L; l++) {
    ans[next[l]]++
  }
  console.log(ans.join(' '))
}

main(`RRLRL`) // 0 1 2 1 1

main(`RRLLLLRLRRLL`) // 0 3 3 0 0 0 1 1 0 2 2 0

main(`RRRLLRLLRRRLLLLL`) // 0 0 3 2 0 2 1 0 0 0 4 4 0 0 0 0
