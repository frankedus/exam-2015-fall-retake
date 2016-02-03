'use strict';

// Write a function that takes an array of numbers,
// and returns true if all the elements are higher than 3 and false otherwise


function isAllHigherThan3(array) {
  var output = true;
  array.forEach(function(number) {
    if (number < 3) {
      output = false;
    }
  });
  return output;
}

console.log(isAllHigherThan3([4, 6, 3, 2])); // false
console.log(isAllHigherThan3([7, 9, 4, 5])); // true
