const TreeNode = require("../TreeNode");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
  let result = 0;

  const getAverage = (arr) => {
    return Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length);
  };

  function getSubTreeAvg(node, parentNode) {
    const arr = [];
    if (node.left) {
      arr.push(...getSubTreeAvg(node.left));
    }

    if (node.right) {
      arr.push(...getSubTreeAvg(node.right));
    }

    const all = [...arr, node.val];
    const avg = getAverage(all);

    if (avg === node.val) {
      result += 1;
    }

    return [...arr, node.val];
  }

  getSubTreeAvg(root);

  return result;
};

const node0 = new TreeNode(0);
const node1 = new TreeNode(1);
const node8 = new TreeNode(8, node0, node1);

const node6 = new TreeNode(6);
const node5 = new TreeNode(5, null, node6);
const node4 = new TreeNode(4, node8, node5);

const result = averageOfSubtree(node4);
console.log(result);
