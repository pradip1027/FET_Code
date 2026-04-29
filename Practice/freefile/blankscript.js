const prr = [1, 2, 3, 4, 5];
console.log(
  "Array element displayed in the format of: value,index, and whole array element<br>",
);

prr.forEach((value, index, prr) => {
  //   prr[index] = value * 2;
  //   console.log(value + " " + index + " " + prr);
  console.log(value, prr, index);
});

console.log("Array element after calculation:<br>");
console.log(prr);
