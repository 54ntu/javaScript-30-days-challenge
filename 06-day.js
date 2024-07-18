// //Day 6 : Arrays

// //Tasks/activities:

// //Activity 1: Array creation and access

// //task 1: create an array of numbers from 1 to 5 and log the array to the console.
// let myarr = [1,2,3,4,5]
// console.log(myarr)
// console.log(typeof(myarr))

// //task 2: Access the first and last element of the array and log them to the console.
// console.log(`first element of the array is ${myarr[0]} and last element of the array is ${myarr[myarr.length-1]}`);


// //Activity 2: Array methods(basic)
// //task 3: use the push method to add a new number to the end of the array  and log the updated array

// myarr.push(6)
// console.log(myarr)

// //task 4 : use the pop method to remove the last element from the array and  log the updated array;
// myarr.pop()
// console.log(myarr)


// //task 5: use the shift method to remove the first element from the array and log the updated   array
// console.log(myarr.shift())
// console.log(myarr)



// //task 6: use the unshift method to add a new number to the beginning of the array and log the updated array
// myarr.unshift(9)
// console.log(myarr)


// //activity 3: Array methods (intermediate)

// //task 7: use the map method to create a new array where each number is doubled and log the new array.

// let newarr= [1,2,3,4,5]

// const doubledNumbers=newarr.map(number=>number*2)
// console.log(doubledNumbers)



// //task 8: use the filter method to create a new array with only even numbers and log the new array

// let mynewArr= [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// const evenNumbersArr = mynewArr.filter(test)

// function test(number){
//     return number %2==0;

// }

// console.log(evenNumbersArr)


// //task 9: use the reduce method to calculate the sum of all numbers in the array and log the result:

// let arr1=[1,2,3,4,5]
// const sumOfAllNumbers = arr1.reduce(getSum,0);


// function getSum(total,num){
//     return total +num
// }


// console.log(sumOfAllNumbers)


///activity 4: array iteration
//task 10 use a for loop to iterate over the array and log each element to the console.
let newarr1 =[1,2,3,4,'hello']
for(let i=0;i<newarr1.length;i++){
    console.log(newarr1[i])
}



//task 11 : use the forEach method to iterate over the array and log each element to the console.
let array1 =[1,2,3,4,5]
array1.forEach(element => {
    console.log(element)
    
});


///Activity 5: multi-dimensional arrays


//task 12 : create a two- dimensional array (matrix) and log the entire array to the console.
//task 13 : access and log a specific element from the two-dimensional array.