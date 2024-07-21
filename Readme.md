# Accessing last element in JavaScript is different than in other programming language
In javascript we can't access the last element of the array like other programming language by using [-1]....In javascript, [] is used to access both objects and arrays. Therefore, [-1] indicate the -1 position not the last element of the array.

so we can access the last element of the array in javascript using:
slice() method
pop() method
Reduce() method
Reverse() method
ForEach() method

# using pop() method

```javaScript
let arr = [1,2,3,4,5]
arr.pop()
console.log(arr)

//output : [1,2,3,4]

```
<p>Pop() method always remove the last element from the array.</p>

# using slice() method

```javaScript
let arr = [1,2,3,4,5]
arr.slice(0,-1)
console.log(arr)

//output : [1,2,3,4]


```

or 
<h2>we can do this by the following method:</h2>

```javaScript

let arr=[1,2,3,4,5]
const new_arr = arr[arr.length-1]
console.log(new_arr)

```



<p>In javascript we have built in Object.keys(object) and Object.values(object) method which returns the keys and values from the object given.....</p>



# ES6 Template strings and Template literals concept

<p>In ES6 module template strings and template literals concept is introduced.</p>
<h2>Syntax for template strings is : </h2>

```javascript

let mystr = `....`
//here we put the values
```
<p>This allows declaration and initialization of multiline string. In normal string initializing we can't assign string value in multiple line . </p>


```javascript

let mystr = "hehehhehe
heheheheh
hehehehe";
console.log(mystr)

//in this case we get an error

//but if we use template string we can define the string in multiple line

let myTemplateString = `hello
hhiiii
how
`

console.log(myTemplateString)


//it also accept double quotes inside this back-ticks (``)

let myNewStr = `hello how are "you"`

```

# string interpolation
<p>With the help of ES6 template string, the string interpolation concept has been introduced.....It makes easier to inject the value along with the string values.for ex: </p>

```javascript
    let name ="jack"
    let age = 20
    console.log(` Happy birthday ${name}. you are now ${age} years old`)

    //output : Happy birthday jack. you are now 20 years old

```
