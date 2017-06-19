import { testcase } from '../src'

var reverse = function (x) {
  if (x > Math.pow(2, 31)) {
    return 0
  }

  const negative = x < 0
  const res = parseInt(('' + Math.abs(x)).split('').reverse().join(''))
  if (res > Math.pow(2, 31)) {
    return 0
  }
  return negative ? -res : res
}

describe('reverse integer', () => {
  testcase([
    reverse(123),
    reverse(-321),
    reverse(Math.pow(2, 32) + 1),
    reverse(1534236469),
    reverse(1563847412)
  ], [321, -123, 0, 0, 0], (e, a, i) => {
    it(`pass ${i} test`, () => {
      expect(e).toBe(a)
    })
  })
})
