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


// Solution #1
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


// Solution #2
const powerSet = (array) => {
  const result = [[]];

  for (let val of array) {

    const length = result.length;

    for (let i = 0; i < length; i ++){

      // Make a clone of the val at index i  
      // let temp = result[i].slice(0);
      let temp = JSON.parse(JSON.stringify(result[i]));

      temp.push(val);
      result.push(temp);
    }
  }

  return result;
}




allSubsets([1, 2, 3]);
powerSet([1, 2, 3]);
