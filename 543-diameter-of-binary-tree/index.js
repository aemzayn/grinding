/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { TreeNode } = require("../TreeNode");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let res = 0;

  function dfs(curr) {
    if (!curr) return 0;

    const left = dfs(curr.left);
    const right = dfs(curr.right);

    res = Math.max(res, left + right);
    return 1 + Math.max(left, right);
  }

  dfs(root);
  return res;
};

const n4 = new TreeNode(4);
const n5 = new TreeNode(5);
const n2 = new TreeNode(2, n4, n5);
const n3 = new TreeNode(3);
const n1 = new TreeNode(1, n2, n3);

console.log(diameterOfBinaryTree(n1));
