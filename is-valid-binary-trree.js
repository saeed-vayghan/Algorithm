/*

Check if a Binary Tree is a valid one.


Node: {
  data number,
  left Node,
  right Node
}

*/


const checkNode = (node, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
  if ( node === null ) {
    return true;
  }


  if ( node.data < min || node.data > max ) {
    return false;
  }

  return checkNode(node.left, min, node.data - 1) && checkNode(node.right, node.data + 1, max);
}

const isValidBinaryTree = (root) => {
  checkNode(root)
}
