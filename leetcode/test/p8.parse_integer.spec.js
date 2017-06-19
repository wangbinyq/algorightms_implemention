/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const x = parseInt(str) || 0
  if (x >= Math.pow(2, 31)) {
    return Math.pow(2, 31) - 1
  }
  if (x <= -Math.pow(2, 31)) {
    return -Math.pow(2, 31)
  }
  return x
}
