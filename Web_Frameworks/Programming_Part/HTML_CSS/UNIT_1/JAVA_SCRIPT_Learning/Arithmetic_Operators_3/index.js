// arithmetic operator = Operands (values,variables etc.)
//              operators (+ - * /)
//              ex.11 = x + 5

let students=30

//Addition
console.log("Addition");
students=students+3;
console.log(students);

//Subtraction
console.log("Subtraction");
students=students-2;
console.log(students);

//multiplication
console.log("Multiplication");
students=students*2;
console.log(students);

//division
console.log("Division");
students=students/2;
console.log(students);

//power
console.log("Power(Exponent)");
students=students**2;
console.log(students);

//modulus
console.log("Remainder or modulo operator");
students=students%2;
console.log(students);

console.log("Experiment");
let extraStudents=students%3;
console.log(extraStudents);

// augumented assignment operator
console.log("Augumented Assignment operator");
students+=3;
console.log(students);
students-=1;
console.log(students);
students*=2;
console.log(students);
students/=2;
console.log(students);
students%=2;
console.log(students);
students**=5;
console.log(students);


//increment operator
console.log("Increment_Operator");
students++;
console.log(students);

// decrement operator
console.log("Decrement Operator");
students--;
console.log(students);


/* 
    Operatot Precedence
    1. Paranthesis()
    2. Exponents
    3. Multiplication and division and modulo
    4. Addition and subtraction
*/

let Problem1 = 1+2 *3 + 4 ** 2;
console.log(Problem1);

let Problem2 = 12%5+8/2;
console.log(Problem2)

let Problem3=6/2**(2+5);
console.log(Problem3)