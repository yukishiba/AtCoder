function main(input) {
  const match = String(input).match(/1/g)
  console.log(match ? match.length : 0)
}

main('111')