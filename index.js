const abi = require("./jsonInterface.json");
const Web3 = require("web3");

// etherium blockchain node access from infura or ganache
// const url = "https://mainnet.infura.io/v3/58f00dd6f0b646d1b65a9fdadfd60963";
const url = "http://127.0.0.1:7545";
const web3 = new Web3(url);

/*
 * Etherscan accounts info --> usage of basic eth functions
 */
const accountAddress = "0xe64ebEe74e141f4C02fE6Bf473E38C8d1a6A2265";

web3.eth.getBalance(accountAddress, (err, bal) => console.log("balance", bal));

/*
 * Etherscan contract info --> usage of Smart contract functions
 */
const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

var contract = new web3.eth.Contract(abi, contractAddress);

new Promise((res, rej) => {
  contract.methods.name().call((err, name) => res(name));
}).then((result) => console.log("Smart contract name", result));

/* 
Account transactions example
*/
const account1 = "0xA32eF50D595CD387e4856E9546Be21701F29994f";
const account2 = "0x8642855728a17eA7bBf3B4455586439E99F9296b";

/* 
code to transfer 1 eth from one account to another.
*/
web3.eth.sendTransaction({
  from: account1,
  to: account2,
  value: web3.utils.toWei("1"),
});
