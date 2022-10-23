
const verifyCardModule = require("./verifyCard");
//1. verify card

// function placeOrder(){
//     //1.verify
//     verifyCard();
//     //2. deduct amount
//     deductAmount();
// }
// //async
// function verifyCard(){
//     setTimeout(()=>{
//         console.log("Card Verified");
//     }, 4000);
//     }
// function deductAmount(){
// console.log("Amount deducted")
// }

// placeOrder();

function placeOrder(){
    //1. verify card
    verifyCardModule.verifyCard(deductAmount);
    // 2. deduct amount
    // deductAmount();
}

function deductAmount(){
    console.log("Amount deducted");
}

placeOrder();