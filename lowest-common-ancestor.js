/*

Lowest Common Ancestor:

LCA(root, 10, 6) ==> 6
LCA(root, 10, 7) ==> 4
LCA(root, 4, 4) ==> 4
LCA(root, 1, 2) ==> 1

         root
           |
           1
         /   \
        /     \
        4      5
      /   \     \
     /     \     \
     7       9
    /      /  \
   /      /    \
  null    6    null
        /   \
       /     \
      null   10

*/


const pathToNode = (root, val) {
  if ( root === null ) {
    return null;
  }

  if ( root.value === val ) {
    return [val];
  }

  const leftPath = pathToNode(root.left, val);

  if ( leftPath !== null ) {
    leftPath.push[root.value];
    return leftPath;
  }

  const rightPath = pathToNode(root.right, val);

  if ( rightPath !== null ) {
    rightPath.push[root.value];
    return rightPath;
  }

  return null
}

const lsa = (root, m, n) => {
  const pathToM = pathToNode(root, m);
  const pathToN = pathToNode(root, n);

  let lowest = null;

  while ( pathToM.length && pathToN.length ) {
    mPop = pathToM.pop();
    nPop = pathToN.pop();

    if ( mPop === nPop ) {
      lowest = mPop;
    } else {
      break;
    }
  }

  return lowest;
}
