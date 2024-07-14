//day 1 variables and data types

//Tasks/Activities
//Activity 1: Variables Declaration
 
//Task 1: Declare a variable using var, assign it a number and log the value to the console
//Task 2: Declare a variable using let, assign it a number and log the value to the console


var num1 = 10
console.log(num1)

let num2 = 10;
console.log(num1);


//Activity 2: constant declaration
//Task 3: declare a variable using const, assign it a boolean value, and log the value to the console
const status= true

console.log(status)

//activity 3: data types
//Task 4: create variables of different data types (number, string, boolean, object,array) and log each variable's type using the typeof operator

var num1 = 20
let str1 = "helllo"
let states= false
let obj1 = {'name':'lol1','age':30}
let arr1= ['hello','hiii','how are you']

console.log(typeof(num1))
console.log(typeof (str1));
console.log(typeof( states));
console.log(typeof (obj1));
console.log(typeof (arr1));



//Activity 4 ;Reassigning variables
//task 5 : declare a variable using let, assign it an initial value, reassign a new value and log both values to the console

let num5 = num1
 num5 = 50

console.log(num5)
console.log(num5);




//Task 6 ;try reassigning a variable declared with const and observe the error

const test = "hello"
test = "lol"

console.log(test)