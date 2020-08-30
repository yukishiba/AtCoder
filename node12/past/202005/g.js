'use strict'

function main(inp) {
  inp = inp.trim().split('\n')
  const [N, X, Y] = inp.shift().split(' ').map(n => n - 0)

  const BOM = {}
  for (let i = 0; i < N; i++) {
    const temp = inp[i].split(' ').map(n => n - 0)
    if (!(temp[0] in BOM)) {
      BOM[temp[0]] = {}
    }
    BOM[temp[0]][temp[1]] = 1
  }

  const noBom = (x, y)=> {
    return !(BOM[x] && BOM[x][y])
  }

  let x = 0;
  let y = 0;
  let ans = 0

  const prio = (x, y) => {
    return Math.abs(x - X) + Math.abs(y - Y)
  }
  
  const move = (x, y, n, bom) => {
    if (x === x && y === Y) {
      return n
    }
    let moveTo = [
      [x+1, y+1, noBom(x+1, y+1) ? prio(x+1, y+1) : 1e9],
      [x, y+1, noBom(x, y+1) ? prio(x, y+1) : 1e9],
      [x-1, y+1, noBom(x-1, y+1) ? prio(x-1, y+1) : 1e9],
      [x+1, y, noBom(x+1, y) ? prio(x+1, y) : 1e9],
      [x-1, y, noBom(x-1, y) ? prio(x-1, y) : 1e9],
      [x, y-1, noBom(x, y-1) ? prio(x, y-1) : 1e9]
    ]
    moveTo.sort((a, b) => a[2] - b[2])
    console.log(moveTo)

    if (moveTo[0][2] === 1e9) {
      return -1
    }

    let ans = 1e9
    for (let i = 0; i < moveTo.length; i++) {
      let temp = JSON.parse(JSON.stringify(bom))
      if (!(moveTo[0] in temp)) {
        temp[moveTo[0]] = {}
      }
      temp[moveTo[0]][moveTo[1]] = 1
      let result = move(moveTo[i][0], moveTo[i][1], n+1, temp)
      if (result != -1) {
        ans = Math.min(ans, result)
      }
    }
    return ans
  }

  console.log(move(x, y, 0, BOM))
}

main(`1 2 2
1 1
`);
