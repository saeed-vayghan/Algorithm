/*

All possible subsets of a set


set = {1, 2, 3}
size: 2 pow 3 = 8


         / {}  ==> {}, {3}
   / {}  - {2} ==> {2}, {2, 3}
{} 
   \ {1} - {1}    ==> {1}, {1, 3}
         \ {1, 2} ==> {1, 2}, {1, 2, 3}
*/


const allSubsets = (arr) => {
  recursive(arr, [], 0);
}

const recursive = (arr, subSet, i) => {
  if ( i === arr.length ) {
    console.log(i, subSet, 'pushing')

  } else {

    subSet[i] = null;
    recursive(arr, subSet, i+1);

    subSet[i] = arr[i];
    recursive(arr, subSet, i+1);
  }
}


const arr =  [1, 2, 3];

allSubsets(arr);
