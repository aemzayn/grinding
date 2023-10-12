import { createHead, head, ListNode } from "./nodes.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  let curr = head.next;
  let sum = 0;
  let newHead = null;
  let currentNode = newHead;

  while (curr) {
    if (!curr) break;
    if (curr.val === 0) {
      if (newHead) {
        if (!newHead.next) {
          newHead.next = new ListNode(sum);
          currentNode = newHead.next;
        } else {
          currentNode.next = new ListNode(sum);
          currentNode = currentNode.next;
        }
      } else {
        newHead ??= new ListNode(sum);
        currentNode = newHead;
      }

      sum = 0;
    } else {
      sum += curr.val;
      // console.log(curr.val, sum);
    }
    curr = curr.next;
  }

  return newHead;
};

let t1 = [0, 3, 1, 0, 4, 5, 2, 0];
let t2 = [
  0, 333, 711, 0, 941, 0, 614, 0, 387, 0, 245, 573, 0, 162, 710, 101, 0, 709,
  795, 774, 0, 198, 773, 0, 731, 0, 962, 0, 881, 891, 886, 955, 294, 0, 601,
  374, 0, 625, 0, 271, 0, 665, 0, 651, 413, 0, 767, 0, 617, 0, 837, 0, 521, 0,
  476, 114, 0, 364, 154, 0, 744, 0, 13, 967, 0, 908, 149, 219, 0, 109, 483, 731,
  688, 962, 0, 289, 894, 0, 292, 846, 130, 0, 107, 0, 175, 0,
];

let nh = mergeNodes(createHead(t1));
console.log(nh);
