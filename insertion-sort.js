/*
  Insertion Sort
  Javascript Implementation
*/


const insertionSort = (arr) => {
  if ( arr.length === 1 ) {
    return arr;
  }


  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j-1] > arr[j]) {
      temp     = arr[j];
      arr[j]   = arr[j-1];
      arr[j-1] = temp;

      j -= 1;
    }

  }

  return arr;
}


console.log( insertionSort([1,23,87,4,3,8,79,46,15,48,6,2,9,47,68,97,42,45,14,356,17]) );
