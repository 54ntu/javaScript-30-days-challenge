//day 2: Operators

//Tasks/Activities


//Activity 1: Arithmetic Operations

//task 1 : write a program to add two numbers and log the result to the console
//task 2 : write a program to subtract two numbers and log the result to the console
//task 3 : write a program to multiply two numbers and log the result to the console
//task 4 : write a program to divide two numbers and log the result to the console
//task 5 : write a program to find the remainder when one number is divided by another and log the result to the console


function AddTwoNumbers(num1,num2){
    console.log(num1+num2)

}

function subtractTwoNumbers(num1, num2) {
  console.log(num1 -num2);
}

function multiplyTwoNumbers(num1, num2) {
  console.log(num1* num2);
}

function divideTwoNumbers(num1, num2) {
  console.log(num1/num2);
}

function remainderOfTwoNumbers(num1, num2) {
  console.log(num1 %num2);
}


AddTwoNumbers(20,10)
subtractTwoNumbers(20, 10);
multiplyTwoNumbers(20, 10);
divideTwoNumbers(20, 10);
remainderOfTwoNumbers(25, 10);



//activity 2 : Assignment operators

// task  6 : use the += operator to add a number to a variable and log the result to the console
//task 7 : Use the -= operator to subtract a number from a varibale and log the result to the console

let a= 20
let b = 10
b+=a

a-=b
console.log(" final value of b is : ", b)
console.log(" final value of a is : ", a);


//Activity 3: comparison operators
//task 8 : write a program to compare two numbers using > and < and log the result to the console

//task 9 : write a program to compare two numbers using >= and =< and log the result to the console

function compareNumbers(a,b,c){
    if(a>b && a>c){
        console.log("a is greater than b and c");
    }
    
    else if(a<b && c<b){
        console.log("b is greater than a and c")
    }
    else{
        console.log('c is greater')
    }

}

compareNumbers(10,20,30)

//task 10 : write a program to compare two numbers using == and === and log the result to the console

let a1 = 20 
let b1 = 30

let number1 = 10
let number2 = "10"

console.log(a1 == b1)
console.log(a1 === b1);


console.log(number1 == number2);
console.log(number1 === number2);


///activity 4 : logical operators
//task 11 : write a program to uses the && operator to comnine two conditions and log the result to the console


//task 12 : write a program that uses the || operator to combine two conditions and log the result to the console
// task 13: write a program that uses the ! operator to negate a condition and log the result to the console



//Activity 5 : Ternary operator 

//task 14 : write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console

let number3=50
let number4 = 30;

number3 >number4 ? console.log('number3 is greater than number4') : console.log(" number4 is greater than number3")
