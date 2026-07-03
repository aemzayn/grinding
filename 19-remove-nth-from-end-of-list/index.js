const { ListNode, printList } = require("../ListNode");

const l5 = new ListNode(5);
const l4 = new ListNode(4, l5);
const l3 = new ListNode(3, l4);
const l2 = new ListNode(2, l3);
const l1 = new ListNode(1, l2);

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head.next) {
    return null;
  }

  const prevMaps = {};
  let curr = head;
  let index = 0;
  let prev = null;
  while (curr) {
    prevMaps[index] = prev;
    prev = curr;
    curr = curr.next;
    index++;
  }

  const length = Object.keys(prevMaps).length;

  const removedIndex = Math.max(length - n, 0);
  const removedNode = prevMaps[removedIndex];

  if (!removedNode) return head.next;

  removedNode.next = removedNode?.next?.next ?? null;

  return head;
};

printList(removeNthFromEnd(l1, 2));
