// シカのAtCoDeerくんは二つの正整数 a,b を見つけました。 a と b の積が偶数か奇数か判定してください。

function main(input) {
  const nums = input.split(' ').map(num => Number(num))
  console.log(nums[0] * nums[1] % 2 ? 'Odd' : 'Even')
}

main('3 3')