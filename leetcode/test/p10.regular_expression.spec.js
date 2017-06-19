import { testcase } from '../src'

var isMatch = function (s, p) {
  let j = 0
  let repeat = ''
  for (let i = 0; i < p.length; i++) {
    repeat = ''
    if (p[i] === '*') {
      continue
    }
    if (p[i + 1] === '*') {
      repeat = p[i]
    }
    if (repeat) {
      while ((s[j] === repeat || p[i] === '.') && j < s.length) {
        j++
      }
      let k = 2
      while (p[i + k] === p[i]) {
        j--
        k++
      }
    } else if (s[j] === p[i] || p[i] === '.') {
      j++
    } else {
      return false
    }
  }
  return j === s.length
}

describe(' integreverseer', () => {
  testcase([
    isMatch('aa', 'a'),
    isMatch('aa', 'aa'),
    isMatch('aaa', 'aa'),
    isMatch('aa', 'a*'),
    isMatch('aa', '.*'),
    isMatch('ab', '.*'),
    isMatch('aab', 'c*a*b'),
    isMatch('aaa', 'a*a'),
    isMatch('aaa', 'ab*a*c*a')
  ], [false, true, false, true, true, true, true, true, true], (e, a, i) => {
    it(`pass ${i} test`, () => {
      expect(e).toBe(a)
    })
  })
})
