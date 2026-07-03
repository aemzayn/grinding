const TreeNode = require("../TreeNode");

// const node7 = new TreeNode(7);
// const node15 = new TreeNode(15);
// const node20 = new TreeNode(20, node15, node7);
// const node9 = new TreeNode(9);
// const node3 = new TreeNode(3, node9, node20);

const node5 = new TreeNode(5);
const node4 = new TreeNode(4);
const node3 = new TreeNode(3);
const node2 = new TreeNode(2, node4, node5);
const node1 = new TreeNode(1, node2, node3);
const root = node1;

var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [{ node: root, depth: 1 }];
  let maxDepth = -Infinity;

  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) continue;
    const { node, depth } = item;
    maxDepth = Math.max(depth, maxDepth);

    if (node?.left) queue.push({ node: node.left, depth: depth + 1 });
    if (node?.right) queue.push({ node: node.right, depth: depth + 1 });
  }
  return maxDepth;
};

const depth = maxDepth(root);
console.log(depth);
// maxDepth(node3);
