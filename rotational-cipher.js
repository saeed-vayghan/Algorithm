/*
  Rotational Cipher

  One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount.
  Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.
*/

function rotate (leftBoundary, rightBoundary, index, factor) {
  /*
    [0,1,2,3,4,5,6,7,8,9]
    
    arr.length = boundary = 10
    index = 8
    factor = 3 or 13
    new index would be: 1
  */
  const boundary      = rightBoundary - leftBoundary + 1
  const updatedFactor = factor % boundary;
  
  let newIndex = index + updatedFactor;
  
  if ( newIndex > rightBoundary ) {
    newIndex = newIndex - boundary;
  }
  
  return newIndex;
}

function rotateNumber (input, factor) {
  const leftBoundary  = '0'.charCodeAt(0);
  const rightBoundary = '9'.charCodeAt(0);
  const index = input.charCodeAt(0);
  
  return String.fromCharCode(rotate(leftBoundary, rightBoundary, index, factor));
}

function rotateLowerAlpha (input, factor) {
  const leftBoundary  = 'a'.charCodeAt(0);
  const rightBoundary = 'z'.charCodeAt(0);
  const index = input.charCodeAt(0);
  
  return String.fromCharCode(rotate(leftBoundary, rightBoundary, index, factor));
}

function rotateUpperAlpha (input, factor) {
  const leftBoundary  = 'A'.charCodeAt(0);
  const rightBoundary = 'Z'.charCodeAt(0);
  const index = input.charCodeAt(0);
  
  return String.fromCharCode(rotate(leftBoundary, rightBoundary, index, factor));
}

function isNumber (input) {
  const ascii = input.charCodeAt(0);
  
  return ascii >= '0'.charCodeAt(0) && ascii <= '9'.charCodeAt(0);
}

function isLowerAlphabetic (input) {
  const ascii = input.charCodeAt(0);
  
  return ascii >= 'a'.charCodeAt(0) && ascii <= 'z'.charCodeAt(0);
}

function isUpperAlphabetic (input) {
  const ascii = input.charCodeAt(0);
  
  return ascii >= 'A'.charCodeAt(0) && ascii <= 'Z'.charCodeAt(0);
}


function rotationalCipher(input, rotationFactor) {
  let output = '';
  
  for (let i = 0; i < input.length; i ++) {
    if (isNumber(input[i])) {

      output += rotateNumber(input[i], rotationFactor);

    } else if (isLowerAlphabetic(input[i])) {

      output += rotateLowerAlpha(input[i], rotationFactor);
      
    } else if (isUpperAlphabetic(input[i])) {

      output += rotateUpperAlpha(input[i], rotationFactor);

    } else {
      
      output += String(input[i]);
    }
  }
  
  return output;
}




var input = 'All-convoYs-9-be:Alert1.';
var rotationFactor = 4;
var expected = 'Epp-gsrzsCw-3-fi:Epivx5.';
var output = rotationalCipher(input, rotationFactor);
console.log(output)
