const maxSubArraySum = (arr) => {
  const length = arr.length;

  let start = 0;
  let end   = 0;

  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < length; i++) {

    if (arr[i] > maxEndingHere + arr[i]) {

      start = i;
      maxEndingHere = arr[i];

    } else {

      maxEndingHere = maxEndingHere + arr[i];
    }

    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
      end = i;
    }
  }


  return maxSoFar;
}
