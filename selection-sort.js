/*
  Selection Sort
  Javascript Implementation
*/


const selectionSort = (arr) => {
  if ( arr.length === 1 ) {
    return arr;
  }


  for (let i = 0; i <= arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i+1; j <= arr.length; j++) {

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }


      if ( minIndex !== i ) {
        temp   = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  }

  return arr;
}


console.log( selectionSort([1,23,87,4,3,8,79,46,15,48,6,2,9,47,68,97,42,45,14,356,17]) );
