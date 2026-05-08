// function goodmorning(usrname: string, callback: Function) {
//   console.log(`Hello...Good Morning !! ${usrname}`);

//   setTimeout(() => {
//     console.log(`Time to depart`);
//     callback();
//   }, 5000);
// }

// function goodnight() {
//   console.log("Bye...Good Night");
// }

// goodmorning(`Pradip`, goodnight);

function funcName(argument1: any, callback1: Function, callback2: Function) {
  console.log("Hello:" + argument1 + "");
  setTimeout(() => {
    callback1();
    callback2();
  }, 4000);
}
function callbackFunc1() {
  console.log("Hi..");
}
function callbackFunc2() {
  console.log("Bye..");
}
funcName("value1", callbackFunc1, callbackFunc2);
