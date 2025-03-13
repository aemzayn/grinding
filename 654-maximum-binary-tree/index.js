/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  let head = null;

  const max = Math.max(nums);
  const maxIndex = nums.findIndex((n) => n === max);
};

constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]);
