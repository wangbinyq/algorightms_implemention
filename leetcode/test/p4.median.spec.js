import { testcase } from '../src'

var findMedianSortedArrays = function (nums1, nums2) {

}

describe('', () => {
  testcase([
    findMedianSortedArrays([1, 2], [3, 4])
  ], [2.5], (e, a, i) => {
    it(`pass ${i} test`, () => {
      expect(e).toBe(a)
    })
  })
})
