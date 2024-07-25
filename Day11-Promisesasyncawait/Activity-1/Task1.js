//create a promise that resolves with a message afte a 2-second timeout and log the message to the  console.


const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('this is a resolved message after 2 seconds!!!'),2000
    })
})


myPromise.then((message)=>{
    console.log(message)
})


console.log("user email is setup")