/*

Dynamic Programming, Find Sets Of Numbers That Add Up To X

Sample: arr = [2, 5, 7, 12], X = 19
Sets: {7, 12} / {2, 5, 12}

*/


const returnVal = (arr, x, i, memo) => {
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
    returnVal = recursice(arr, x, i-1);

  } else {

    returnVal = recursice(arr, x, i-1) + recursice(arr, x - arr[i], i-1);
  }

  memo[key] = returnVal;

  return returnVal;
}

const findSets = (arr, x) => {
  const memo = {};

  return recursice(arr, x, arr.length - 1, memo);
}
