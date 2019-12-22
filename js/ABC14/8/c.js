'use strict'
function main(inp) {
  const lcm = (a, b) => {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x%y);
    return (a * b) / gcd(a, b)
  }
  
  inp = inp.trim().split(' ').map(n => Number(n))
  
  console.log(lcm(...inp))
}
main(`123 456

`);
