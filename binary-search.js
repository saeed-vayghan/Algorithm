/*
  Binary Search,

  Array must be sorted;
*/


function BinarySearch(arr, target, left, right) {
  if (left > right) {
    return null;
  }

  const mid = Math.floor((left + right) / 2);

  if ( arr[mid] === target ) {
    return mid;
  }

  if ( arr[mid] > target ) {
    return BinarySearch(arr, 7, left, mid - 1);
  }

  return BinarySearch(arr, 7, mid + 1, right);
}

const arr = [1,2,3,4,5,6,7,8,9];
const result = BinarySearch(arr, 7, 0, arr.length -1);
console.log('Result:', result);
