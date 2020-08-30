// A 	Ferris Wheel

'use strict'
function main(input) {
  input = input.trim().split(' ');
  const birth = Number(input[0]);
  const price = birth > 5
    ? birth <=12
      ? Number(input[1]) / 2
      : Number(input[1])
    : 0
  console.log(price)
}

main(`6 100`) // CAbA
