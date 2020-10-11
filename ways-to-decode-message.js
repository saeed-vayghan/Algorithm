/*

How many ways to decode a message?

Mapping:

Null ==> ""
1 ==> a
2 ==> b
3 ==> c
...
15 ==> n
...
26 ==> z

*/


const compute = (data, pointer, memo) => {
  if ( pointer === 0 ) {
    return 1;
  }

  charIndex = data.length - pointer;

  if ( data[charIndex] === '0' ) {
    return 0;
  }

  if ( memo[pointer] !== null ) {
    return memo[pointer];
  }

  let result = compute(data, pointer-1, memo);

  const 
  if ( pointer >= 2 && data.slice(charIndex, charIndex+2) <= 26 ) {
    result += compute(data, pointer-2, memo);
  }

  memo[k] = result;

  return result;
}

const numOfWays = (data) => {
  const memo = [];

  return compute(data, data.length, memo);
}
