
// //sync : is blocking in nature, it will wait for the task to complete before moving on to the next line of code
// //async : is non-blocking in nature, it will not wait for the task to complete before moving on to the next line of code

// console.log(1);
// console.log(2);

// for(let i=0; i<10000; i++){
//     //some time consuming task
// }

// console.log(3);
// console.log(4);

// //async example

// let a;
// console.log(a); //undefined

// setTimeout(() => {
//     a = 10;
//     console.log(a); //10
// }, 5000);

// console.log(a); //undefined

let today = new Date();
console.log(today.toLocaleTimeString()); //current date and time

setInterval(() => {
    let today = new Date();
    console.log(today.toLocaleTimeString()); //current date and time
}, 1000); //every 1 second

console.log(3);

// setInterval(() => {
//     let today = new Date();
//     console.log(today.toLocaleTimeString()); //current date and time
// }, 1000); //every 1 second

