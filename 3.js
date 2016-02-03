'use strict';

// Create a Cube constructor that creates a cube object:
// it should take the cube's size as a parameter
// it should have a "getSurfaceArea" method that returns it's surface area
// it should have a "getVolume" method that returns it's volume
// it should have a "toString" method that returns it's stats as a string like:
// 'Size: 4, Surface area: 96, Volume: 64'

function Cube(size) {
  this.size = size;

  this.getSurfaceArea = function () {
    return Math.pow(this.size, 2) * 6;
  };

  this.getVolume = function () {
    return Math.pow(this.size, 3);
  };

  this.toString = function () {
    return 'Size: '+ this.size + ', ' + 'Surface area: ' + this.getSurfaceArea() + ', ' + 'Volume: ' + this.getVolume();
  };

}

var cube = new Cube(4);
console.log(cube.getSurfaceArea());
console.log(cube.getVolume());
console.log(cube.toString());
