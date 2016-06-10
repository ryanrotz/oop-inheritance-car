var Car = require('./Car.js');

// Implement your Truck here
function Truck(make, model, year, color, passengers) {
  Car.call(this, make, model, year, color, 3, passengers);
  // this.make = 'Chevy';
  // this.model = 'Silverado';
  // this.year = 2016;
  // this.color = 'black';
  // this.seats = 3;
  // this.passengers = ['Hank Hill'];
}

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

module.exports = Truck;
