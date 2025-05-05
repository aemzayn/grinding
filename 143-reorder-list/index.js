const { printList, ListNode } = require("../ListNode");

const l4 = new ListNode(4);
const l3 = new ListNode(3, l4);
const l2 = new ListNode(2, l3);
const l1 = new ListNode(1, l2);

var reorderList = function (head) {
  // reorder list
  // 1 -> 2 -> 3 -> 4
  // 1 -> 4 -> 2 -> 3

  // find middle node
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // half = 3
  // second half = 3 -> 4

  // reverse second half
  // 4 -> 3
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

printList(reorderList(l1));
