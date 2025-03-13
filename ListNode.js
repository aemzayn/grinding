module.exports = class ListNode {
  constructor(val, next) {
    this.val = val == null ? 0 : val;
    this.next = next == null ? null : next;
  }
};
