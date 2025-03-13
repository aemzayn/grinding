function visualizeTree(node, indent = 0) {
  if (node == null) {
    return;
  }

  console.log(" ".repeat(indent) + node?.val);
  visualizeTree(node.right, indent + 4);
  visualizeTree(node.left, indent + 4);
}

module.exports = {
  visualizeTree,
};
