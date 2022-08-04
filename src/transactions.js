import Tx from "@ethereumjs/tx";
import Web3 from "web3";
import { privateKey1, privateKey2 } from "../config.js";

//ropsten is a test network previously we were using main etherium network data.
const web3 = new Web3(
  "https://ropsten.infura.io/v3/58f00dd6f0b646d1b65a9fdadfd60963"
);

const account1 = "0x53a2a1e63EF2675A74e83bABA773BfDf93f6715b";

const account2 = "0x5742C31fd10CC557620691F990d991589BE23A6F";

/* 
  we can create accoutn using this or metamask extension
  web3.eth.accounts.create()
  */
const pk1 = Buffer.from(privateKey1, "hex");
const pk2 = Buffer.from(privateKey2, "hex");

/* web3.eth.getBalance(account1, (err, bal) =>
  console.log("balance 1 :", web3.utils.fromWei(bal, "ether"))
);

web3.eth.getBalance(account2, (err, bal) =>
  console.log("balance 2 :", web3.utils.fromWei(bal, "ether"))
); */

// all the units of transaction must be in hex
web3.eth.getTransactionCount(account1, (err, txCount) => {
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei("1", "ether")),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
  };

  // Sign the transaction
  const tx = new Tx(txObject);
  tx.sign(pk1);

  const serializedTransaction = tx.serialize();
  const raw = "0x" + serializedTransaction.toString("hex");

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log("txHash:", txHash);
  });
});
