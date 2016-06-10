// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
var motorcycle = new Motorcycle('Triumph', 'Rocket III Roadster', 2016, 'white', ['Johnny Rocket']);

console.log('Testing if motorcycle is an instanceof Motorcycle');
assert.strictEqual(motorcycle instanceof Motorcycle, true, "motorcycle should be an instance of Motorcycle");
success();

console.log('Testing if motorcycle is an instanceof Car');
assert.strictEqual(motorcycle instanceof Car, true, "motorcycle should be an instance of Car");
success();

console.log('Testing if motorcycle has make property');
assert.strictEqual(motorcycle.make, 'Triumph', "motorcycle should have a make property");
success();

console.log('Testing if motorcycle has model property');
assert.strictEqual(motorcycle.model, 'Rocket III Roadster', "motorcycle should have a model property");
success();

console.log('Testing if motorcycle has year property');
assert.strictEqual(motorcycle.year, 2016, "motorcycle should have a year property");
success();

console.log('Testing if motorcycle has color property');
assert.strictEqual(motorcycle.color, 'white', "motorcycle should have a color property");
success();

console.log('Testing if motorcycle has 2 seats');
assert.strictEqual(motorcycle.seats, 2, "motorcycle should have 3 seats");
success();

console.log('Testing if motorcycle has model passengers');
assert.deepEqual(motorcycle.passengers, ['Johnny Rocket'], "motorcycle should have passengers");
success();

// Wheelie function tests

console.log('testing if motorcycle does a wheelie when not running');
assert.strictEqual(motorcycle.wheelie(), false, "motorcycle should not perform a wheelie when not running");
success();

console.log('testing if motorcycle does a wheelie when running');
motorcycle.start();
assert.strictEqual(motorcycle.wheelie(), true, "motorcycle should not perform a wheelie when not running");
success();

console.log('Testing if wheelie function is attached to Car.prototype');
assert.strictEqual(typeof Car.prototype.wheelie === 'function', true, 'wheelie function should be attached to Car.prototype');
success();

