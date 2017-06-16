var twoSum = function (nums, target) {
  let res
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

describe('two sum', () => {
  it('pass example', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  })
})
