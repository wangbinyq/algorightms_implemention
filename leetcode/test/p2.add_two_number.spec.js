class ListNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

var addTwoNumbers = function (l1, l2) {
  const res = new ListNode(0)
  let next = res
  let add = 0

  while (l1 || l2) {
    if (l1) {
      next.val += l1.val
      l1 = l1.next
    }
    if (l2) {
      next.val += l2.val
      l2 = l2.next
    }
    next.val += add
    add = Math.floor(next.val / 10)
    next.val = next.val % 10
    if (l1 || l2) {
      next = next.next = new ListNode(0)
    } else if (add) {
      next.next = new ListNode(add)
    }
  }

  return res
}

describe('add two numbers', () => {
  it('pass example', () => {
    const l1 = new ListNode(2)
    l1.next = new ListNode(4)
    l1.next.next = new ListNode(3)
    const l2 = new ListNode(5)
    l2.next = new ListNode(6)
    l2.next.next = new ListNode(4)

    const res = addTwoNumbers(l1, l2)
    expect(res.val).toBe(7)
    expect(res.next.val).toBe(0)
    expect(res.next.next.val).toBe(8)
    expect(res.next.next.next).toBeNull()
  })

  it('5 + 5 = 10', () => {
    const l1 = new ListNode(5)
    const l2 = new ListNode(5)

    const res = addTwoNumbers(l1, l2)
    expect(res.val).toBe(0)
    expect(res.next.val).toBe(1)
    expect(res.next.next).toBeNull()
  })
})
