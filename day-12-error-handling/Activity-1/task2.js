//create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle  this error.


function test(a,b){
    try {
        if(b==0){
            throw new Error("denominator can't be zero.,....>!!!")
            
        }
        let result = a/b;
        console.log(`the output is ${result}`)
    } catch (error) {
        console.log("denominator can not be zero....!!!!!")
        
    }
}


test(10,0)
test(10, 70);
