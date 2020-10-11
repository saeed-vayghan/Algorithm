/*
Quick sort follows Divide and Conquer algorithm

- Select a pivot element. it is always advisable to pick the middle element.
- Compare all array elements with the pivot, elements less than the pivot are to it's left and greater than pivot is to it's right.
- Perform the same operations on left and right side elements.
*/


function swap(arr, lIndex, rIndex){
  const temp = arr[lIndex];

  arr[lIndex] = arr[rIndex];
  arr[rIndex] = temp;
}

function partition(arr, left, right) {
  const pivot = arr[Math.floor((right + left) / 2)];

  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i ++;
    }

    while (arr[j] > pivot) {
      j --;
    }

    if (i <= j) {
      swap(arr, i, j);

      i ++;
      j --;
    }
  }

  return i;
}

function quickSort(arr, left, right) {
  let index;

  if (arr.length > 1) {
    index = partition(arr, left, right);

    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }

    if (index < right) {
      quickSort(arr, index, right);
    }
  }

  return arr;
}


const arr = [5,3,7,6,2,9];
console.log( quickSort(arr, 0, arr.length - 1) );
