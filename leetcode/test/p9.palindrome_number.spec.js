import { testcase } from '../src'

var isPalindrome = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false
  let rev = 0
  while (x > rev) {
    rev = rev * 10 + x % 10
    x = Math.floor(x / 10)
  }
  return (x === rev || x === Math.floor(rev / 10))
}

describe(' integreverseer', () => {
  testcase([
    isPalindrome(1),
    isPalindrome(123),
    isPalindrome(-321),
    isPalindrome(Math.pow(2, 32) + 1),
    isPalindrome(1563847412),
    isPalindrome(12344321)
  ], [true, false, false, false, false, true], (e, a, i) => {
    it(`pass ${i} test`, () => {
      expect(e).toBe(a)
    })
  })
})
