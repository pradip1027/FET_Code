// const myPromise = new Promise((resolve, reject) => {
//   resolve("i have fulfilled the promise");
// });
// myPromise.catch((err) => console.log("Rejected", err));

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Problem resoved");
//   }, 5000);
// });
// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

function add(a: any, b: any) {
  return new Promise((resolve) => {
    resolve(a + b);
  });
}
function subtract(a: any, b: any) {
  return new Promise((resolve) => {
    resolve(a - b);
  });
}
function multiply(a: any, b: any) {
  return new Promise((resolve) => {
    resolve(a * b);
  });
}
function divide(a: any, b: any) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Cannot divide by zero");
    } else {
      resolve(a / b);
    }
  });
}
add(10, 5)
  .then((result) => {
    console.log("Addition:", result);
    return subtract(result, 3);
  })
  .then((result) => {
    console.log("Subtraction:", result);
    return multiply(result, 2);
  })
  .then((result) => {
    console.log("Multiplication:", result);
    return divide(result, 4);
  })
  .then((result) => {
    console.log("Division:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

add(8, 4).then((r) => console.log("Add:", r));
subtract(8, 4).then((r) => console.log("Sub:", r));
multiply(8, 4).then((r) => console.log("Mul:", r));
divide(8, 4).then((r) => console.log("Div:", r));
