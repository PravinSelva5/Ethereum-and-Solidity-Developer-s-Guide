const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'salad quit help round dice great elite speak spoon rail ghost wonder',
    'https://rinkeby.infura.io/v3/79ae44d2ea5d4885ba6eb6e733fbe70e'
);

const web3 = new Web3(provider);

// We're creating a function to use the async method
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi There!']})
        .send({gas: '1000000', from: accounts[0]});
    
    console.log('Contract deployed to', result.options.address);
};

deploy();