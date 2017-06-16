import { testcase } from '../src'

var lengthOfLongestSubstring = function (s) {
  let find = {}
  let start = 0
  let count = 0
  let maxCount = 0
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (find[c] === undefined || find[c] < start) {
      count++
    } else {
      maxCount = Math.max(count, maxCount)
      start = find[c] + 1
      count = i - start + 1
    }
    find[c] = i
  }
  return Math.max(count, maxCount)
}

describe('', () => {
  testcase([
    lengthOfLongestSubstring('abcabcbb'),
    lengthOfLongestSubstring('bbbbb'),
    lengthOfLongestSubstring('pwwkew'),
    lengthOfLongestSubstring('c'),
    lengthOfLongestSubstring(''),
    lengthOfLongestSubstring('au'),
    lengthOfLongestSubstring('dvdf')
  ], [3, 1, 3, 1, 0, 2, 3], (e, a, i) => {
    it(`pass ${i} test`, () => {
      expect(e).toBe(a)
    })
  })
})
