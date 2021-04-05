const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'salad quit help round dice great elite speak spoon rail ghost wonder',
    'https://rinkeby.infura.io/v3/79ae44d2ea5d4885ba6eb6e733fbe70e'
);

const web3 = new Web3(provider);