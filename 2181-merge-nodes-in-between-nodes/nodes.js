export class ListNode {
  constructor(val, next) {
    this.val = val ?? null;
    this.next = next ?? null;
  }
}

let head = new ListNode(
  0,
  new ListNode(
    3,
    new ListNode(
      1,
      new ListNode(
        0,
        new ListNode(4, new ListNode(5, new ListNode(2, new ListNode(0))))
      )
    )
  )
);

function createHead(arr) {
  let head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

export { head, createHead };
