/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const TreeNode = require("../TreeNode");
const { visualizeTree } = require("../visualize-tree");

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
  if (!root) return root;
  function dfs(left, right, level) {
    if (!left) return null;
    if (level ^ 1) {
      const temp = left.val;
      left.val = right.val;
      right.val = temp;
    }
    dfs(left.left, right.right, level ^ 1);
    dfs(left.right, right.left, level ^ 1);
  }

  dfs(root.left, root.right, 0);

  return root;
};

const node8 = new TreeNode(8);
const node13 = new TreeNode(13);
const node3 = new TreeNode(3, node8, node13);

const node21 = new TreeNode(21);
const node34 = new TreeNode(34);
const node5 = new TreeNode(5, node21, node34);

const node2 = new TreeNode(2, node3, node5);

// visualizeTree(node2);
visualizeTree(reverseOddLevels(node2));
