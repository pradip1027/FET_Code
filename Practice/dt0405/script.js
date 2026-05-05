let a;
let b;
let res;

function add() {
  a = Number(document.getElementById("num1").value);
  b = Number(document.getElementById("num2").value);
  res = a + b;
  document.getElementById("result").value = res;
}

function sub() {
  a = Number(document.getElementById("num1").value);
  b = Number(document.getElementById("num2").value);

  res = a - b;
  document.getElementById("result").value = res;
}

function mul() {
  a = Number(document.getElementById("num1").value);
  b = Number(document.getElementById("num2").value);
  res = a * b;
  document.getElementById("result").value = res;
}

function div() {
  a = Number(document.getElementById("num1").value);
  b = Number(document.getElementById("num2").value);
  res = a / b;
  document.getElementById("result").value = res;
}

function arraydemo() {
  let arr1 = [10, 20, 30, "Pradip", "CSE"];
  let arr2 = new Array(10, 20, 30, "Parmar", "BDA");

  document.getElementById("arr").value = arr1;

  // document.write(arr1);
  // document.write("<br/>");
  // document.write(arr2);
  console.log(arr2);
}

function arrayinit() {
  let arr11 = Array.from({ length: 10 });
  let len = arr11.length;

  let arr12 = [
    [101, "Pradip", "B.Tech"],
    [102, "Sandip", "MBBS"],
  ];

  // console.table(arr12);

  arr13 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  // arr14 = arr13.reverse();
  // arr14 = arr13.shift();

  // for (const element of arr13) {
  //   arr14 = arr13.join(" ,,");
  //   console.log(arr13.join(" --"));
  // }

  // arr14 = delete arr13[2];
  // arr14 = arr13.slice(-5);
  arr14 = arr13.forEach((value, index, arr13) => {
    console.log(arr13);
  });

  // console.log("typeof 13 ::", typeof arr13);
  // console.log("typeof 14 ::", typeof arr14);
  // console.log(arr14);
  document.getElementById("arrinit").value = arr14;
  document.getElementById("arrinit2").value = arr13;
}

function validation() {
  let b = /^[A-Za-z]+$/;
  let a = document.getElementById("usrname").value;

  if (a == "") {
    window.alert("Blank Textbox");
  }
}

function validregex() {
  const email = document.getElementById("email").value.trim();
  const errorElement = document.getElementById("error");

  // Email regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    errorElement.innerHTML = "Invalid email format";
    return false;
  }

  // Clear error if valid
  errorElement.textContent = "";
  return true;
}

function addElement() {
  const div = document.createElement("div"); // create node
  div.textContent = "New Element"; // set content

  document.getElementById("container").appendChild(div); // insert
}
