/*
  Merge Sort
  Javascript Implementation
*/


const merge = (left, right) => {
  const temp = [];

  while (left.length && right.length) {
    if ( left[0] > right[0] ) {
      temp.push(right.shift());
    } else {
      temp.push(left.shift());
    }
  }


  // When code reaches here, eithe left or right is empty.

  while (left.length) {
    temp.push(left.shift());
  }

  while (right.length) {
    temp.push(right.shift());
  }

  return temp;
}

const mergeSort = (arr) => {
  if ( arr.length === 1 ) {
    return arr;
  }

  const half = Math.round(arr.length /2);

  let left  = arr.splice(0, half);
  let right = arr;

  left  = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}


console.log( mergeSort([1,23,87,4,3,8,79,46,15,48,6,2,9,47,68,97,42,45,14,356,17]) );
