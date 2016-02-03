'use strict';

// Create a function that takes a list of cars than, counts them by color,
// and returns an object that has the colors as keys and the counts as values.

function countColors (cars) {
  var output = {};
  cars.forEach(function(car) {
    if (!(car.color in output)) {
      output[car.color] = 0;
    }
    output[car.color]++;
  });
  return output;
}

var cars = [
  {type: 'Toyota', color: 'yellow'},
  {type: 'Subaru', color: 'blue'},
  {type: 'Ford', color: 'red'},
  {type: 'Volkswagen', color: 'red'},
  {type: 'Audi', color: 'green'},
  {type: 'Mercedes', color: 'blue'},
  {type: 'BMW', color: 'red'}
];

console.log(countColors(cars)); // {yellow: 1, blue: 2, red: 3, green: 1}
