class TreeNode {
  constructor(val, left, right) {
    this.val = val ?? null;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

let node7 = new TreeNode(7);

let node4 = new TreeNode(4, node7);
let node5 = new TreeNode(5);
let node2 = new TreeNode(2, node4, node5);

let node8 = new TreeNode(8);
let node6 = new TreeNode(6, null, node8);
let node3 = new TreeNode(3, null, node6);

let root = new TreeNode(1, node2, node3);

export { root };
