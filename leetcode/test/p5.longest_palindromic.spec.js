import { testcase } from '../src'

var longestPalindrome = function (s) {
  function isPalindrome (s, i, j) {
    if (i < 0) {
      return false
    }
    while (i < j) {
      if (s[i++] !== s[j--]) {
        return false
      }
    }
    return true
  }

  let max = 0
  let rs = 0
  let re = 0
  for (let i = 0; i < s.length; i++) {
    if (isPalindrome(s, i - max - 1, i)) {
      rs = i - max - 1
      re = i
      max += 2
    } else if (isPalindrome(s, i - max, i)) {
      rs = i - max
      re = i
      max += 1
    }
  }
  return s.substring(rs, re + 1)
}

function s (s, length) {
  let r = s
  for (let i = 1; i < length; i++) {
    r += s
  }
  return r
}

describe('longest palindrome', () => {
  testcase([
    longestPalindrome('babad'),
    longestPalindrome('cbbd'),
    longestPalindrome('bb'),
    longestPalindrome('a'),
    longestPalindrome(s('a', 500) + 'bc' + s('a', 498))
  ], ['bab', 'bb', 'bb', 'a', s('a', 500)], (e, a, i) => {
    it(`pass ${i} test`, () => {
      expect(e).toBe(a)
    })
  })
})
