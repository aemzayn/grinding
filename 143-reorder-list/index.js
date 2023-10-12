class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const l1 = new ListNode(1);
const l2 = new ListNode(2, l1);
const l3 = new ListNode(3, l2);
const l4 = new ListNode(4, l3);

var reorderList = function (head) {
  // reorder list
  // 1 -> 2 -> 3 -> 4 -> 5
  // 1 -> 5 -> 2 -> 4 -> 3

  // find middle node
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse second half
  let prev = null;
  let curr = slow;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // merge two lists
  let first = head;
  let second = prev;
  while (second.next) {
    let temp = first.next;
    first.next = second;
    first = temp;

    temp = second.next;
    second.next = first;
    second = temp;
  }

  return head;
};
