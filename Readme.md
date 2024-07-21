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

