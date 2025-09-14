// Calculating the average of a array

function ArrayAverage(Array) {
  var sum = 0;
  for (i = 0; i < Array.length; i++) {
    sum += Array[i];
  }
  return sum / Array.length;
}
var Array = [2, 4, 5, 3, 5, 6, 4];
var Average = ArrayAverage(Array);
console.log(Average);
