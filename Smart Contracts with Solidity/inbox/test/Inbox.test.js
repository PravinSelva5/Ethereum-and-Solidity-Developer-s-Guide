const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");   // constructor function that's why the const is capitalized. Because you are going to create instances from the Web3 library.


const provider = ganache.provider();
const web3 = new Web3(provider);  // this creates an instance of web3 and tells it to connect it to a local provider we have running on our machine
const {interface, bytecode} = require("../compile");

// Mocha Starts

let accounts;
let inbox;


// beforeEach Statement [Deploy a new contract]
beforeEach( async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // Use one of those accounts to deploy the contract [need access to the bytecode that compile.js creates for us]
    // tells web3 about what metyhods an Inbox contract has
    inbox = await new web3.eth.Contract(JSON.parse(interface)) 

        // Tells web3 that we want to deploy a new copy of this contract
        .deploy({data: bytecode, arguments: ["Hi there!"]})  

        // Instructs web3 to send out a transaction that creates this contract
        .send({from: accounts[0], gas: '1000000'}); 

        inbox.setProvider(provider);
});

// it Statement [Manipulate the contract]

describe('Inbox', () => {
    
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        // this is an instance of the contract (inbox) , and we are referencing the message property in the Inbox contract we created
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
    });
})


// it Statement [ Make an assertion about the contract]

/*
 Example of a test

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

-------------------------
   Web3 with Contracts
-------------------------

Web3 also allows us to interact with a contract that has already been deployed AND create a contract.

If you want to interact with a contract, you need the ABI & address of deployed contract
If you want to create a contract, you need the ABI & Byetcode.
*/