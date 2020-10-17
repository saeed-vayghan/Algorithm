/*
  Coin change problem

  how may ways are there to change 27 with a given coins.
  
  Money: 27
  Coins: { 25, 10, 5, 1 }

    ==> 27 { 10, 5, 1 } (without any 25cent coin)
      ==> 27 { 5, 1 }
      ==> 17 { 5, 1 }
      ==> 7  { 5, 1 }
        ==> 7 { 1 }
        ==> 2 { 1 }

    ==> 2  { 10, 5, 1 } (with one 25cent coin)




  The simples scenario:

  Money: 0
  Coins: {what -ever}
  result ==> 1 way

  Money: 5
  Coins: {}
  result ==> 0

  Money: 5
  Coins: { 5 }
  result ==> (5 % 5 === 0) ==> 1 way

  Money: 5
  Coins: { 1 }
  result ==> (5 % 1 === 0) ==> 1 way

  Money: 5
  Coins: { 2 }
  result ==> (5 % 2 !== 0) ==> 0 way

  Money: 5
  Coins: { 10 }
  result ==> 5 < 10 ==> 0 way

*/



const helper = (money, coins, i, memo) => {
  if ( money === 0 ) { 
    return 1;
  }

  if ( i >= coins.length ) {
    return 0;
  }

  let ways = 0;
  let temp = money;

  let key = `${money}:${i}`

  if ( memo[key] ) {
    return memo[key];
  }

  while ( temp >= 0 ) {
    ways += helper(temp, coins, i+1, memo);
    temp -= coins[i];
  }

  memo[key] = ways;

  return ways;
}

const changer = (money, coins) => {
  return helper(money, coins, 0, {});
}


const money = 4;
const coins = [1, 2, 3];
const ways = changer(money, coins);
console.log('Num of ways:', ways);
