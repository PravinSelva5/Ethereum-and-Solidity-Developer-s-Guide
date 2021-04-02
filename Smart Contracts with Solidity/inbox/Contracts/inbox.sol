pragma solidity ^0.4.17;  // Specifies the version of solidity that our code is written in

contract Inbox {
    string public message;
    
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public{
        message = newMessage;
    }
    

}


/*
----------------------------------
   Most common function types
----------------------------------

public - anyone can call this function  
private - only this contract can call this function
view - this function returns data and does not modify the contract's data
constant - This function returns data and does not modify the contract's data
pure - Function will not modify or even read the contract's data
payable - When someone call this function they might send ether along


** you can only use public or private in a function. Can't have a function that is both public and private.


** constructor functions are always called when you create a contract function. Which is why the funciton Inbox is named after the contract Inbox


There are two ways to run functions in a contract:

    1. Calling a function 
        - cannot modify the contract's data (ex: message function)
        - return data
        - runs instantly
        - free to do!
    
    2. Sending a transaction to a function  
        - can modify a contract's data
        - takes times to execute! 
        - returns the transaction hash 
        - costs money
        
        
    Wei is a very small unit of a ether:
        1 Ether == 1 000 000 000 000 000 000 Wei
        
        
        
    gasPrice = amount of Wei the sender is willing to pay per unit gas to get the transaction processed
    
    startGas/gasLimit = unit of gas that htis transaction can consume
    
    
    
    TRUFFLE
        - CLI that helps with contract creation, local testing, and deployment
    
    
    
    
    

    
*/