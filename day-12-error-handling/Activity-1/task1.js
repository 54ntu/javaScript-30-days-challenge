//task 1 : write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function test(a,b){
    try {
        if(b==0){
            throw new Error("division by zero....>!!!!!")
        }
        let result = a/b;
        console.log(`the output of a/b is : ${result}`)
    } catch (error) {
        console.log("division by 0 is not allowed..!!!!")
        
    }

}

test(10,0)