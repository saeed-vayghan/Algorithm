/*
  Pair Sums

  Given a list of n integers arr[0..(n-1)], determine the number of different pairs of elements within it which sum to k.
*/

function numberOfWays(arr, k) {
  // Write your code here

  const map = {};
  
  for (const val of arr) {
    if ( !map[val] ) {
      map[val] = 1;
    } else {
      map[val] += 1;
    }
  }

  let result = 0;

  console.log(map)
  

  for (const val of arr) {

    if ( map[k-val] ) {
      result += map[k-val];
    }

    // if (arr[i], arr[i]) pair matches the condition, then we should not count it
    if ( k - val === val ) {
      result --; 
    }
  }

  return result / 2;
}

function alternative(arr, k) {
  // Write your code here

  let result = 0;
  
  for ( let i = 0; i < arr.length; i ++ ) {
    for ( let j = i+1; j < arr.length; j ++ ) {
      if ( arr[i] + arr[j] === k ) {
        result ++;
      }
    }
  }
  
  return result;
}


const k = 2;
const arr = [1, 1, 1];
const output = numberOfWays(arr, k);
console.log(output); // 3
