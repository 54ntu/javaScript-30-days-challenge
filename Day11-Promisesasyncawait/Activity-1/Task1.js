// //create a promise that resolves with a message afte a 2-second timeout and log the message to the  console.


// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('this is a resolved message after 2 seconds!!!'),2000
//     })
// })


// myPromise.then((message)=>{
//     console.log(message)
// })


// console.log("user email is setup")




//shallow copy and deep copy differrence 

//shallow copy creates new array refrencing the original array
//when changes is made in either original array or the new array .....changes reflected on the both copies

//but in case of deep copy..... both the array acts as an independent array 

let arr1 = [1,2,3,4,5]
let arr2 = arr1
console.log(`arr1 value is : ${arr1}`)
console.log(`arr2 value is : ${arr2}`);

arr2.pop()
console.log(`after removing last element from the arr2 : ${arr1}`)
console.log(`after removing last element from the arr2 : ${arr2}`);

///deep copy 


let myarr1= [1,2,3,4,5]
let myarr2;
myarr2.copy(myarr1)
console.log(`myarr2 value is : ${myarr2}`)