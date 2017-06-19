import { testcase } from '../src'

// split nums1(A) and nums2(B)
// when len(LA + LB) === len(RA + RB)
// and max(LA, LB) <= max(RA, RB)
// then we found the median is
// (max(LA, LB) + min(RA, RB))/2

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }
  let m = nums1.length
  let n = nums2.length

  let imin = 0
  let imax = m
  let halfLen = Math.floor((n + m + 1) / 2)

  while (imin <= imax) {
    let i = Math.floor((imin + imax) / 2)
    let j = halfLen - i

    if (i < m && nums2[j - 1] > nums1[i]) {
      imin = i + 1
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      imax = i - 1
    } else {
      let maxOfLeft, minOfRight
      if (i === 0) {
        maxOfLeft = nums2[j - 1]
      } else if (j === 0) {
        maxOfLeft = nums1[i - 1]
      } else {
        maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1])
      }

      if ((m + n) % 2 === 1) {
        return maxOfLeft
      }

      if (i === m) {
        minOfRight = nums2[j]
      } else if (j === n) {
        minOfRight = nums1[i]
      } else {
        minOfRight = Math.min(nums1[i], nums2[j])
      }

      return (maxOfLeft + minOfRight) / 2
    }
  }
}

describe('median', () => {
  testcase([
    findMedianSortedArrays([1, 3], [2]),
    findMedianSortedArrays([1, 2], [3, 4])
  ], [2, 2.5], (e, a, i) => {
    it(`pass ${i} test`, () => {
      expect(e).toBe(a)
    })
  })
})
