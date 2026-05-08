import PromptSync from "prompt-sync";

const prompt = PromptSync();

// let num1: number = Number(prompt("Enter number 1 :: "));
// let num2: number = parseInt(prompt("Enter number 2 :: "));

// console.log(`Sum :: ${num1 + num2}`);

// console.log(`typeof num1 :: ${typeof num1}`);
// console.log(`typeof num2 :: ${typeof num2}`);

// console.log(
//   `Use of backticks, its also used in the replacement of the double quote`,
// );

let arrayVariable: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(`${typeof arrayVariable}`);

// for (const element of arrayVariable) {
//   console.log(`forof loop :: ${element}`);
// }
// console.log(`\n`);

// for (const element in arrayVariable) {
//   console.log(`forin loop :: ${arrayVariable[element]}`);
// }
arrayVariable.forEach((element) => {
  console.log(element + 10);
});
