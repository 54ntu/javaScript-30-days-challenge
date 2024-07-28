//write a script that includes a try-catch block and  a finally block.
///log messages in the try,catch and finnally blocks to observe the execution flow...\

let myarr=[1,2,3,4,5]
function test(){
    try {
        for(let i=0; i <=myarr.length;i++){
            if(i==myarr.length){
                throw new Error("array index out of bound exception")
            }
            console.log(myarr[i])
        }
        
    } catch (error) {
        console.log("en error occurred ......!!!!!!")
    }finally{
        console.log("this one is finnally block ....!!!!")
    }
}



test()