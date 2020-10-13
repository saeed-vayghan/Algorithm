/*

Dynamic Programming, Find Sets Of Numbers That Add Up To X

Sample: arr = [2, 5, 7, 12], X = 19
Sets: {7, 12} / {2, 5, 12}

*/


const recursive = (arr, x, i, memo) => {
  const memoKey = `${x}:${i}`;

  if ( memo[key] !=== undefined ) {
    return memo[key];
  }

  if ( x === 0 ) {
    return 1;
  }

  if ( x < 0 ) {
    return 0;
  }

  if ( i < 0 ) {
    return 0;
  }


  let returnVal = 0;

  if ( x < arr[i] ) {
    returnVal = recursive(arr, x, i-1);

  } else {

    returnVal = recursive(arr, x, i-1) + recursive(arr, x - arr[i], i-1);
  }

  memo[key] = returnVal;

  return returnVal;
}

const findSets = (arr, x) => {
  const memo = {};

  return recursive(arr, x, arr.length - 1, memo);
}
