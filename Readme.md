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



# Array destructuring in javascript

<p>Before ES6 module when we want to fetch the data from the array, we need to access the array value by passing index value or we can call it by slicing...::::::::</p> 

```javascript

    let myarr = [1,2,3,4,5]

    const firstNum = myarr[0]
    const secondNum = myarr[2]
    const thirdNum = myarr[3]
    const fourthNum = myarr[4]
    const fifthNum = myarr[5]

```

<p>After  desctructuring concept is introduced in ES6 module, it makes the programmers life much more easier and handy.....we can simple access the array value by this way:::::: </p>

```javascript

    let myarr = [1,2,3,4,5]

    const [num1,num2,num3,num4,num5] = myarr
    console.log(num1)
    console.log(num2)
    console.log(num3)
    console.log(num4)
    console.log(num5)



```


# Event Delegation/propagation in Javascript
<p>Event delegation in javascript consists of three main phases:::::</p>
<ul>
    <li>Event capturing</li>
    <li>Event target</li>
    <li>Event bubbling</li>

</ul>

# Event Capturing

<p> Event capturing is when the event pass down to the element , event target is when the event reach the element and event bubbling is when the event moves upward from the element </p>

# example to demonstrate event propagation in javascript

```javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event propogation</title>
    <style>
        .main-div{
            background-color: bisque;
            height: 400px;
            width: 400px;
            margin: 20px auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 5px;
        }
        .first-div{
            height: 100px;
            width: 100px;
            background-color: blue;
            color: white;
        }
        .second-div{
            height: 100px;
            width: 100px;
            background-color: red;
            color: white;
            margin-top: 5px;
        }.third-div{
            height: 100px;
            width: 100px;
            background-color:green;
            color: white;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <h2>this one is an example to demonstrate event bubbling in javascript</h2>
    <div class="main-div">
        <div class="first-div"> first div</div>
        <div class="second-div">second div</div>
        <div class="third-div">third div</div>

    </div>

    
</body>
<script>
    document.querySelector(".main-div").addEventListener('click',function(){
        console.log('clicked inside the main div')
    },true)


    document.querySelector(".third-div").addEventListener('click',function(){
        console.log('clicked inside the third div')
    },true)
</script>
</html>


```

<h2> Notes: third parameter inside the addEventlistener is for event propagation. By default we uses event bubbling which means the third parameter is false by default and we can explicitly gives false as a third parameter. If we change the third parameter to true, then it represents event capturing which means execution of the programs from top to the down...</h2>