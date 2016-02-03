'use strict';

// Write a function that takes an array of number as an argument,
// and returns a new filtered array with only the even numbers.
 function filterEvens(array) {
   var newArray = [];
   array.forEach(function(number) {
     if(number % 2 === 0) {
       newArray.push(number);
     }
   })
   return newArray;
 }


console.log(filterEvens([1, 8, 3, 6, 2])); // [8, 6, 2]
