/*
  Buuble Sort
  Javascript Implementation
*/


const bubbleSort = (arr) => {
  if ( arr.length === 1 ) {
    return arr;
  }


  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {

      if ( arr[j] > arr[j+1] ) {
        temp     = arr[j];
        arr[j]   = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }

  return arr;
}


console.log( bubbleSort([1,23,87,4,3,8,79,46,15,48,6,2,9,47,68,97,42,45,14,356,17]) );
