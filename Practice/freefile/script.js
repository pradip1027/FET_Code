let a = 10;
document.write(a);

let num1 = 10;
let num2 = 20;
document.write("addition of the number : " + (num1 + num2));

console.log("This is a console based output");
console.error("This is a error message");
console.warn("This is a watn message");

let name = "Pradip";
console.log("My name is :",name);

let age = 20;
console.log("My age is :",age);

let phone = 123456789n
console.log(phone)
console.log("Type of phone :", typeof(phone))

let arr = [1, "Pradip",28,true];

let obj = {
    'S. No.:':1,
    'fname':'pradip',
    'age':28
}

function add(){
    console.log("This is a function");
}

add();

let p = undefined;
let q = null;

console.log("Type of p :",typeof(p) );
console.log("Type of q :",typeof(q) );

document.write("This is new thing");

document.write("<h1>This is h1</h1>");

console.table(["Pradip",20],["Kavy",17],["Varun",21]);

document.write(`<img src="https://i.ibb.co/pv2LWWXm/m-kv-1.webp">`)

function add(num1,numb){
    console.log("Addition :", (num1 + num2));
}
function sub(num1,numb){
    console.log("Sub :", (num1 - num2));
}
function mul(num1,numb){
    console.log("Mul :", (num1 * num2));
}
function div(num1,numb){
    console.log("Div :", (num1 / num2));
}

let func = [add(10,20) ,sub(30,20), mul(9,3), div(10,2)];