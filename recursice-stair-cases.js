/*
  Recursice StairCases
*/


function stepPerms (n, memo) {
  if ( n < 0 ) {
    return 0;
  }

  if ( n === 0 ) {
    return 1;
  }

  if (!memo[n]) {
    memo[n] = stepPerms(n-1, memo) + stepPerms(n-2, memo) + stepPerms(n-3, memo);
  }

  return memo[n];
}

function stepPerms_alt (n) {
  if ( n < 0 ) {
    return 0;
  }

  if ( n <= 1 ) {
    return 1;
  }

  const memo = {};
  memo[0] = 1;
  memo[1] = 1;
  memo[2] = 2;

  for (let i=3; i<=n; i++) {
    memo[i] = memo[i-1] + memo[i-2] + memo[i-3];
  }

  return memo[n];
}



const ways = stepPerms_alt(7);
console.log('Num of ways:', ways);
