pragma solidity ^0.4.17;  // Specifies the version of solidity that our code is written in

contract Inbox {
    string public message;
    
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public{
        message = newMessage;
    }
    
    function getMessage() public view returns(string){
        return message;
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


*/