exports.ListNode = class {
  constructor(val, next) {
    this.val = val == null ? 0 : val;
    this.next = next == null ? null : next;
  }
};

module.exports.printList = (head) => {
  let curr = head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
};
