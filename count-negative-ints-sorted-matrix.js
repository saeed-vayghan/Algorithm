/*
Count Negative Integers in Row/Column Wise Sorted Matrix

Sample Matrix:
[ -7, -5, -3, -2, 1, 0]
[ -5, -2, -1,  0, 2, 3]
[ -3, -1,  0,  3, 4, 5]
[  2,  0,  1,  4, 5, 8]
[  4,  5,  6,  7, 8, 9]
*/


const find_max = (matrix, n, m) {
  let count = 0;


  let i = 0; // row pointer
  let j = 0; // coulumn pointer

  while ( J >= 0 && i < n ) {

    if ( matrix[i][j] < 0 ) {
      count += (j+1);
      i ++;

    } else {

      j --;
    }
  }

  return count;
}
