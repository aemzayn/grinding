import { root } from "./root.js";

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let maxDepth = 0;
  let values = [];
  function getDeepestValue(node, depth = 0) {
    maxDepth = Math.max(maxDepth, depth);
    values.push({ depth, value: node?.val });
    node?.left && getDeepestValue(node.left, depth + 1);
    node?.right && getDeepestValue(node.right, depth + 1);
  }

  getDeepestValue(root, 0);

  let sum = values.reduce((prev, curr) => {
    if (curr.depth === maxDepth) {
      return prev + curr.value;
    } else {
      return prev;
    }
  }, 0);
  console.log(sum);
  return sum;
};

let result = deepestLeavesSum(root);
