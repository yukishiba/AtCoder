'use strict'

function main(inp) {
  const [A, R, N] = inp.trim().split(' ')
  const MAX = 1e9;

  let num = Number(A)
  if (Number(R) === 1) {
    console.log(num > MAX ? 'large' : num)
  } else {
    for (let i = 0; i < N - 1; i++) {
      num *= Number(R)
      if (num > MAX) {
        num = 'large'
        break;
      }
    }
    console.log(num)
  }
}

main('1 1 1');
main('1 1 1e9');
main('1 1e9 1');
main('1e9 1 1');
main('1e9 1e9 1e9');
