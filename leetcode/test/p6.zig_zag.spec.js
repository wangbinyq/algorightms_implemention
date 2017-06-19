import { testcase } from '../src'

var convert = function (s, numRows) {
  if (numRows < 2) {
    return s
  }

  const res = []
  let down = true
  let row = 0
  s.split('').forEach((c, i) => {
    const s = res[row] || (res[row] = [])
    s.push(c)
    if (down) {
      if (++row === numRows) {
        row -= 2
        down = row === 0
      }
    } else {
      if (--row === 0) {
        down = true
      }
    }
  })

  return res.map((s) => s.join('')).join('')
}

describe('zig zag', () => {
  testcase([
    convert('', 1),
    convert('PAYPALISHIRING', 3),
    convert('AB', 1),
    convert('ABCD', 2)
  ], ['', 'PAHNAPLSIIGYIR', 'AB', 'ACBD'], (e, a, i) => {
    it(`pass ${i} test`, () => {
      expect(e).toBe(a)
    })
  })
})
