'use strict'
function main(inp) {
  inp = inp.trim().split(' ').map(n => Number(n));
  const gcd = (x, y) => y === 0 ? x : gcd(y, x%y)
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

  const G = gcd(...inp)
  let D = divisors(G)

  let arr = [1]
  for (let i = 1; i < D.length; i++) {
    let isSO = true
    for (let j = 1; j < arr.length; j++) {
      if (gcd(arr[j], D[i]) !== 1) {
        isSO = false
        break;
      }
    }
    if (isSO) arr.push(D[i])
  }
  console.log(arr.length);
}

main(`420 660`);
