// //Day 4: Loops

// //Tasks/Activities:

// //Activity 1: For loop
// //Task1 : write a program to print numbers from 1 to 10 using a for loop.

// for( let i =1;i <=10;i++){
//     console.log(i)
// }


// //Task 2 : write a program to print the multiplication tables of 5 using a for loop
// let number = 5;
// for( let i=1; i<=10;i++){
//     console.log(`${number} * ${i} = ${number * i}`)
// }



// //Activity 2: while loop

// //task 3: write a program to calculate the sum of numbers from 1 to 10 using a while loop.

// let i = 1;
// let result=0;
// while (i<=10){
    
//     result = result+i
//     i=i+1
// }
// console.log(result)



// //task 4: write a program to print numbers from 10 to 1 using a while loop.

// let num1 = 10;
// while (num1>=1){
//     console.log(num1)
//     num1 -=1
// }


// //activity 3: DO....while loop

// //task 5: write a program to print numbers from 1 to 5 using a do while loop.

// let num2 = 1;
// do {
//     console.log(num2);
//     num2+=1;
// } while (num2<=5);



///task 6: write a program to calculate the factorial of a number using a do...while loop
//5! =5*4*3*2*1


// let number = 5;
// let factorial =1;
// let i =1;

// do {
//     factorial*=i;
//     i++;
    
// } while (i<=number);

// console.log(factorial)


///activity 4: Nested loops
//task 7 : write a program to print a pattern using nested for loops:
let stars="";
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        stars=stars +" * ";
    }
    console.log(stars)
}




//activity 5 :Loop control statements
//Task 8 : write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

function printNumbers(){
   for(let i =1; i<=10;i++){
    if(i ==5){
        continue;
    }
    console.log(i)
   }

}

printNumbers()




//task 9 : write a program to print numbers from 1 to 10, ut stop the loop when the numbers is 7 using the break statement.

for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i)
}