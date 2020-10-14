/*
  Contiguous Subarrays
  
  You are given an array arr of N integers. For each index i, you are required to determine the number of contiguous subarrays that fulfills the following conditions:
    The value at index i must be the maximum element in the contiguous subarrays, and
    These contiguous subarrays must either start from or end on index i.

  Example:
    arr = [3, 4, 1, 6, 2]
    output = [1, 3, 1, 5, 1]

    For index 0 - [3] is the only contiguous subarray that starts (or ends) with 3, and the maximum value in this subarray is 3.
    For index 1 - [4], [3, 4], [4, 1]
    For index 2 - [1]
    For index 3 - [6], [6, 2], [1, 6], [4, 1, 6], [3, 4, 1, 6]
    For index 4 - [2]

    So, the answer for the above input is [1, 3, 1, 5, 1]
*/


// Add any extra import statements you may need here


// Add any helper functions you may need here

function leftHelper(arr, start, end) {
  let counter = 0;

  let j = end - 1 < 0 ? 0 : end;
    
  for ( j; j >= start; j -- ) {
    if ( arr[j] <= arr[end] ) {
      counter ++;

    } else {

      break;
    }
  }
  
  return counter;
}

function rightHelper(arr, start, end) {
  let counter = 0;
  
  let j = start + 1 > end ? end : start;

  for ( j; j <= end; j ++ ) {
    if ( arr[j] <= arr[start] ) {
      counter ++;

    } else {

      break;
    }
  }
  
  return counter - 1;
}

function countSubarrays(arr) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    const left  = leftHelper(arr, 0, i);
    const right = rightHelper(arr, i, arr.length - 1);
    
    output.push(left + right);
  }
  
  return output;
}


const test     = [3, 4, 1, 6, 2];
const expected = [1, 3, 1, 5, 1];
const output   = countSubarrays(test);
