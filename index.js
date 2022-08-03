const Web3 = require('web3');

const url =  'https://mainnet.infura.io/v3/58f00dd6f0b646d1b65a9fdadfd60963';
const web3 = new Web3(url);

const address = '0x2Ce9f4Fc52AF5498B99597141E66a4273Aa74983';


// new Promise((res, rej)=> {
//     web3.eth.getBalance(address, (err, bal) => res(bal));
// }).then((result)=> console.log("hello", result));

web3.eth.getBalance(address, (err, bal) => console.log("balance",bal));