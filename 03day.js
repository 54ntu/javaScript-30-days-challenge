//Day 3: Control structures

//Tasks/Activities:

//Activity 1: if-else statements

//Task 1: write a program to check if a number is positive, negative,or zero and log the result to the console.

function checkNumber(num1){
    if(num1 ===0){
        console.log(`the number is zero`)
    }
    else if(num1<0){
        console.log(`the given number ${num1} is negative`)
    }
    else{
        console.log(`the number ${num1} is positive`)
    }
}

checkNumber(1)



//Task 2: write a program to check if a person is eligible to vote(age>=18) and log th eresult to the console.
function checkAge(age){
    if(age>=18){
        console.log('you are eligibe to vote')
    }
    else{
        console.log('you are not eligible to vote')
    }
}

checkAge(16)
checkAge(28);



//Activity 2 : Nested if-else statements
//Task 3: write a program to find the largest of three numbers using nested if-else statements
function checkThreeNumber(a,b,c){
    if(a>b){
        if(a>c){
            console.log('a is greater than other number')
        }
    }
    else if(b>a && b>c){
        console.log('b is greater than other number')
    }
    else{
        console.log("c is greater ")
    }

}

checkThreeNumber(10,30,20);

//Activity 3: switch case

console.log("task 4   ::::")
console.log("Task 4 : write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day  name to the console.");

let number = 4
switch (number) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
}   


//Task 5 : write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log  the grade to the console.  

// let total_marks= 70
// switch (total_marks) {
//   case total_marks >= 80:
//     console.log("grade is A");
//     break;
//   case total_marks < 80 && total_marks >= 70:
//     console.log("grade is B");
//     break;
//   case total_marks < 70 && total_marks >= 60:
//     console.log("grade is C");
//     break;
//   case total_marks < 60 && total_marks >= 50:
//     console.log("grade is D");
//     break;
//   case total_marks < 50:
//     console.log("grade is F");
//     break;
// }



//Activity 4: Conditional (Ternary) Operator
//Task 6: write a program that uses a ternary operator to check if a number is even or odd and log the result to the console

let number1 = 3;
(number1 % 2 == 0)? console.log(`the number ${number1} is even number`): console.log(`the number ${number1} is odd number`); 



//Activity 5: Combining Conditions
//Task 7: write a program to check if a year is a leap year using multiple conditions( divisible by 4  but not 100 unless also divisible by 400 ) and log the result to the console.
