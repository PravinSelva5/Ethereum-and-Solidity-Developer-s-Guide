const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");   // constructor function that's why the const is capitalized. Because you are going to create instances from the Web3 library.
const web3 = new Web3(ganache.provider());  // this creates an instance of web3 and tells it to connect it to a local provider we have running on our machine








/*
// Example of a test

class Car {
    park() {
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}

let car; 


beforeEach( () => {
    car = new Car();
});

describe('Car', () => {

    it('can park', () => {
        
        assert.equal(car.park(), 'stopped');
    });

    it('can drive', () => {
        
        assert.equal(car.drive(), 'vroom');
    })
});



---------------------
3 functions in Mocha
---------------------

it -- run a test and make an assertion
describe -- Groups together 'it' functions
beforeEach -- Execute some general setup code

*/