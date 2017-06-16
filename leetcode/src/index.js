export function testcase (expects, actuals, func) {
  expects.forEach((expect, i) => {
    const actual = actuals[i]
    func(expect, actual, i)
  })
}
