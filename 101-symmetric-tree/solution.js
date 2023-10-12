class Tree {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let isSymmetric = function (root) {
  let issym = (left, right) => {
    if (!left && !right) return true;
    if ((!left && right) || (left && !right)) return false;
    if (left.val !== right.val) return false;
    return issym(left.left, right.right) && issym(left.right, right.left);
  };
  if (!root) return false;
  return issym(root.left, root.right);
};

// test code
// left
let leaf1 = new Tree(3);
let leaf2 = new Tree(4);
let node1 = new Tree(2, leaf1, leaf2);

//right
let leaf3 = new Tree(4);
let leaf4 = new Tree(3);
let node2 = new Tree(2, leaf3, leaf4);
//root
let root = new Tree(1, node1, node2);

let result = isSymmetric(root);

console.log(result);
