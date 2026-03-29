//variable = A container that stores a value behave as if it were the value it contains.

// 1.Declaration let x;
// 2.Assignment x=100;

let x;
x=100;
let price=210; //this includes declaration with assignment
let age=22;
let gpa=2.1
let firstname="RAVAN";
let email="RAVAN@gmail.com";
//console.log(b);
console.log(x);
console.log(typeof price);
console.log(typeof firstname);
console.log(firstname);
console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(`Your Gpa is :${gpa}`);


//BOOLEANS
let online=true;
let forsale=true;
let isStudent=true;
console.log(`RAVAN is online: ${online}`);
console.log(`Is this car for sale: ${forsale}`);
console.log(`Enrolled: ${isStudent}`);

//Combining Everything on the variables
let fullName="RAVANS MATRIX"
let ag_e=25;
let isstudent=false;

document.getElementById("p1").textContent=`Your name is: ${fullName}`;
document.getElementById("p2").textContent=`Your are ${ag_e} years old `;
document.getElementById("p3").textContent=`Enrolled ${isstudent}`;