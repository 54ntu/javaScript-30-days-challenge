// //Day 7: Objects
// //tasks/Activities:
// //activity 1: object creation and access

// //task 1: create an object representing a book with properties like title, author, and year and log the object to the console.
let book = {
    "title":"rich dad poor dad",
    "author":"Robert T kiyosaki",
    "year":2000
}


// console.log(typeof(book))
// console.log(book)


// //task 2 : access and log the title and author properties of the book object

// let book_title = book.title
// let book_author = book.author;
// console.log("book_title :", book_title);
// console.log("book_author :", book_author);



// //activity 2: object methods

// //task 3: add a method to the book object that returns a string with the book's title and author, and log the result of calling this method

// function getBookTitleAndAuthor(){
//     let b_title = book.title
//     let b_author= book.author
//     return `${b_title}-- ${b_author}`

// }


// console.log(getBookTitleAndAuthor())


// //task 4: add a method to the boook object that takes a parameter (year) and updates the book's year property, then log the  updated object.
// function updateYear(year){
//     console.log("before : ",book);
//     book.year= year
//     console.log(" updated book objects : ", book);
// }


// updateYear(2022);


// //Activity 3: Nested objects
// //task 5: create a nested object representing a library with properties like name and books (as array of book objects), and  log the  library object  to the console.
let library ={
    name:"my library",
    books:[{title:"rich dad poor dad",author:"Robert T kiyosaki",year:2022},
        {
            title:"who sold his ferrari",
            author:"robin sharma",
            year :2002
        }
    ]
}
// console.log(library)


//task 6: access and log the name of the library and the titles of all the books in the library.


let library_name = library.name
console.log(library_name)

let book1 = library.books
// console.log(book1)
book1.map(mybook=>
    // console.log(mybook)
    console.log(mybook.title)
)

//Activity 4: the "this" keyword

//task 7: add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result  of calling this method.

const book2={
    newFunc :function() {
        return ` new one : ${this.title} ---${this.year}`
        
    }
}


console.log(book2.newFunc.call(book))



//Activity 5: object iteration:

//task 8: use a for...in loop to iterate over the properties of the book object and log each peroperty and its value.


for ( let x in book){
    console.log(`${x}--${book[x]}`)
}


//task 9: use object.keys and object.values methods to log all the keys and values of the book object.

let keys = Object.keys(book)
console.log(`keys of the book object are : ${keys}`)
let values = Object.values(book);

console.log(`values of the book object are : ${values}`);
