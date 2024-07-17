// //Day 5 : Functions
// //Activity 1 : function declaration

// //task 1 : write a function to check if a number is even or odd and log the result to the console.
// function checkNumber(num1) {
//   if (num1 % 2 === 0) {
//     console.log(`${num1} is even`);
//   } else {
//     console.log(`${num1} is odd`);
//   }
// }

// checkNumber(4);

// //task 2: write a function to calculate the square of a number and return the result:
// function squareOfNumber(num2) {
//   let result = num2 *num2
//   return result;
// }

// console.log(squareOfNumber(3))

// ///Activity 2 : function expresssion
// //task 3 : write a function expression to find the maximum of two numbers and log the reuslt to the console.
// function maxNumberCheck(a,b){
//   if(a>b){
//     return `a= ${a} is greater than b`
//   }else{
//     return `b= ${b} is greater than a`
//   }
// }

// console.log(maxNumberCheck(50,30));

// //task 4: write a function expression to concatenate two strins and return the result:

// function concatenateTwoString(str1,str2){
//   let final_str = str1+str2
//   return final_str;
// }

// console.log(concatenateTwoString("hello","hiiii"))

//Activity 3: Arrow functions

//task 5: write an arrow function to calculate the sum of two numbers and return the result

// sumOfTwoNumbers = (num3,num4) =>{
//   let result = num3 + num4
//   return result;
// }

// console.log(sumOfTwoNumbers(20,20));

//task 6 : write an arrow function to check if a string contains a specific character and return a boolean value.
checkString = (str3) => {
  let specialCharacters = ["@", "#", "$", "%"];
  for (let i = 0; i < specialCharacters.length; i++) {
    if (str3.includes(specialCharacters[i])) {
      return true;
    } else {
      return false;
    }
    // console.log(specialCharacters[i])
  }
};

console.log(checkString("hello"));
console.log(checkString("hello@@@@hhhh"));

// checkString("hello");

//////***************Note: in method is used to check whether certain character is present in the object not in string or integer.....instead we can use includes method to check whether the string contains the special characters */


// //Activity 4: function parameters and default values

// //task 7: write a funcction that takes two parameters and returns their product. Provide a default value for the second parameter.

// function productOfTwoNumbers(c,d=10){
//   let result = c*d;
//   return result;
// }


// console.log(productOfTwoNumbers(10))

// //task 8: write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

// function greet(name,age=20){
//    return `hello ${name}, you are ${age} years old now....`
// }

// console.log(greet("ram"));



//Activity 5: Higher-order functions

//task 9: write a higher-order function that takes a function and a number, and calls the function that many times.



function test(num7){
  console.log(`hello ${num7} times executed!!!!!!`)
}

function higherOrderFunction(func,a=10){
  for(let i =1;i<=a;i++){
    test(i)
  }

}


higherOrderFunction(test)

//task 10 : write a higher-order functions that takes two functions and a values, apllies the first function to the value,and then applies the second function to the result.

function test1(y){
  return y+2

}

function test2(y){
  return y*2

}

function secondHigherOrderFunction(func1,func2,value){
  return func2(func1(value));
}


console.log(secondHigherOrderFunction(test1,test2,10))