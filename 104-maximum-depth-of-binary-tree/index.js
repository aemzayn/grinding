const TreeNode = require("../TreeNode");

const node7 = new TreeNode(7);
const node15 = new TreeNode(15);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9)
const node3 = new TreeNode(3, node9, node20);



var maxDepth = function(root) {
  let depth = -1
  function checkDepth(node, currDepth) {
    if (node.left) {
      checkDepth(node.left, currDepth+1)
    }
    if (node.right) {
      checkDepth(node.right, currDepth+1)
    }
  }


}

maxDepth(node3)