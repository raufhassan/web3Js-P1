const abi = require("./jsonInterface.json");
const Web3 = require("web3");

// etherium blockchain node access from infura
const url = "https://mainnet.infura.io/v3/58f00dd6f0b646d1b65a9fdadfd60963";
const web3 = new Web3(url);

/*
 * Etherscan accounts info --> usage of basic eth functions
 */
const accountAddress = "0x2Ce9f4Fc52AF5498B99597141E66a4273Aa74983";

web3.eth.getBalance(accountAddress, (err, bal) => console.log("balance", bal));

/*
 * Etherscan contract info --> usage of Smart contract functions
 */
const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

var contract = new web3.eth.Contract(abi, contractAddress);

new Promise((res, rej) => {
  contract.methods.symbol().name((err, name) => res(name));
}).then((result) => console.log("Smart contract name", result));
