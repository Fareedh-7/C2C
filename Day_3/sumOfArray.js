// Calculating the sum of numbers in a array

function sumOfArray(Array) {
  var sum = 0;
  for (i = 0; i < Array.length; i++) {
    sum += Array[i];
  }
  return sum;
}

var Array = [2, 4, 5, -9, 5, 7, 3, 56, 7];
var sum = sumOfArray(Array);
console.log(sum);
