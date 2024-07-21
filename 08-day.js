//day 8: ES6 + features


//Tasks/Activities:
//activity 1: Template literals
//Task 1: Use template literals to create a string that includes variabes for a person's name and age , and log  the string to the console.
    let name = "jack";
    let age = 20;
    console.log(` Happy birthday ${name}. you are now ${age} years old....`);


//task 2: create a multi-line string using template literals and log it to the console

let multiLineStr = `create 
a
 multi-line
  string 
  using 
  template
   literals`;

// console.log(`multi-line string is : ${multiLineStr}`)


//Activity 2: Destructuring 
//task 3: use array desctructuring to extract the first and second elements from an array of numbers and  log them to the console.

let myarr=[1,2,3,4]


const [first,second] = myarr
console.log(first);
console.log(second);


//task 4 : use object destructuring to extract the title and author from a book object and log them to the console.


let book = {
    title:'rich dad poor dad',
    author:'robert T kiyosaki'
}



const {title, author}= book
console.log(`title : ${title}`);
console.log(`author : ${author}`);



//Activity 3: spread and rest operators:

//task 5: use the spread operator to create a new array that includes all elements of an existing array plus  addiotional elements ,  and log the new array  to the console.

let arr1 = [1,2,3,4]
const newarr = [...arr1,5,6]
console.log(`newarr : ${newarr}`)



///task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them  and return the result.
function sum(...rest){
    let total=0;
    for( let num of rest){
        total = total+num

    }
    console.log(total)

}


sum(1,2,3,4,5)




//Activity 4: default parameters

//task 7: write a function that takes two parameters and returns their product, with the second parameter having a default value  of 1. Log the result of calling this function with and without the second parameter.

function productOfTwoNumbers(num1,num2=1){
    return num1*num2
}


console.log(productOfTwoNumbers(2));
console.log(productOfTwoNumbers(2,10));



//Activity 5: Enhanced object Literals

//task 8: use enhanced object literals to create an object with methods and properties, and log the object to  the console.

const person1 ={
    name:'lol',
    age:'20',
    gender:'male',

    greet : function(){

        return `welcom Mr.${this.name}.   you are ${age} years old...`
    }
}


console.log(person1.greet())


//task 9: create an object with computed property names based on variables and log the object to the console.
function createPerson(name, age) {
  return {
    name,
    age,
    [`is${name}Adult`]: age >= 18,
  };
}

const person =createPerson("John", 25);
console.log(person);