const ListNode = require("../ListNode");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  if (!head.next) return head;

  const newList = new ListNode(head.val);
  let tail = newList;
  let current = head;

  while (current != null) {
    const next = current.next;
    if (!next) break;
    const currentValue = current.val;
    const nextValue = next.val;

    const divisor = getCommonDivisor(currentValue, nextValue);

    tail.next = new ListNode(divisor, next);
    tail = next;
    current = next;
  }

  return newList;
};

function getCommonDivisor(a, b) {
  if (b) {
    return getCommonDivisor(b, a % b);
  }
  return Math.abs(a);
}

const node3 = new ListNode(3);
const node10 = new ListNode(10, node3);
const node6 = new ListNode(6, node10);
const node18 = new ListNode(18, node6);
const node7 = new ListNode(7);

const printNode = (node) => {
  let output = "";
  let curr = node;

  while (curr != null) {
    output += `${curr.val}`;
    curr = curr.next;
    if (curr) output += " -> ";
  }
  return output;
};

console.log(printNode(insertGreatestCommonDivisors(node18)));
console.log(printNode(insertGreatestCommonDivisors(node7)));
