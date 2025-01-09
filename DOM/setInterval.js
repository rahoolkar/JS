//setInterval is used to run a peice of code repeatively after a fixed inteval of time 
//setInterval(callback,time);

function printHello(){
    console.log("hello goodmorning");
}

setInterval(printHello,3000);

//to the clear this loop running the code 
//method-1
clearInterval(printHello); 

//method-2
let id = setInterval(() => {
    console.log("Good Morning, have a great day");
    
}, 3000);
console.log(id); //we will be getting a number 

clearInterval(id);
