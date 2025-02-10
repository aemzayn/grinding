/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  const allNumbers = [];

  function loopTree(node, fn) {
    fn(node);

    console.log(node.val, node.left, node.right);

    if (node.left) {
      loopTree(node.left, fn);
    }
    if (node.right) {
      loopTree(node.right, fn);
    }
  }

  loopTree(root, (node) => {
    allNumbers.push(node.val);
  });

  console.log(allNumbers);

  function getSumAndAssign(node) {
    const value = node.val;
    const allGreaterValue = allNumbers.reduce((acc, curr) => {
      if (curr >= value) {
        acc += curr;
      }
      return acc;
    }, 0);
    node.val = allGreaterValue;
  }

  loopTree(root, getSumAndAssign);

  return root;
};

const consoleTree = (node) => {
  console.log(node.val);
  if (node.left) consoleTree(node.left);
  if (node.right) consoleTree(node.right);
};

const tree0 = new TreeNode(0);
const tree3 = new TreeNode(3);
const tree2 = new TreeNode(2, null, tree3);
const tree1 = new TreeNode(1, tree0, tree2);

const tree5 = new TreeNode(5);
const tree8 = new TreeNode(8);
const tree7 = new TreeNode(7, null, tree8);
const tree6 = new TreeNode(6, tree5, tree7);

const root = new TreeNode(4, tree1, tree6);

consoleTree(root);

bstToGst(root);

console.log("\n");

consoleTree(root);
