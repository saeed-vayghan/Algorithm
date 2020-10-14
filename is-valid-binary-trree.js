/*

Check if a Binary Tree is a valid one.


Node: {
  data number,
  left Node,
  right Node
}


        root(60)
      50            70
  30      55     65     80
25   35                     90


Rules:
  50 must be smaller than root;
  70 must be greater than root;

  30 < 50
  25 < 30
  50 < 55 < root
  30 < 35 < 50

  80 > 70
  90 > 80
  root < 65 < 70

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
