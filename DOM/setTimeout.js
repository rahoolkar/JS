//setTimeout is used to run a function but after some time and its syntax goes like, 
//seTimeout(callback,time); //here callback is the function is the job that we want to perform.

console.log("hello1")

setTimeout(() => {
    console.log("hello")
}, 3000); //after 3 seconds

console.log("hello2")

//settimeout with parameters 

let a = 9 ;
let b = 2 ; 
setTimeout((x,y) => {
    console.log(x*y);
}, 3000,a,b); //when we want to pass the argument 
