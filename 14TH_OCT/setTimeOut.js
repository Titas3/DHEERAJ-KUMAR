// console.log("task 1");

// setTimeout(() =>{console.log('Task 2 -Async task done.')}, 0);

// console.log("Task 3");

// console.log("task 4");

// o/p:-->

// task 1
// setTimeOut.js:1
// Task 3
// setTimeOut.js:5
// task 4
// setTimeOut.js:7
// Task 2 -Async task done.


module.exports.verifyCard = (cb)=>{
    setTimeout(()=>{
        console.log("Card Verified");
        cb();
    }, 4000);
}