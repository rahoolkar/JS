//arrow functions 
// without arguements 
const hello = () => {
    console.log("print")
}

//with arguments 
const sum = (a,b) => {
    let r = a+b; 
    console.log(r);
    
}

//implicit return in arrow function
const mul = (a,b) => (  //when we use the implcit return we donot use the {} instead we use () brackets 
    a*b //implicit return 
)
//we use implicit return statement when our function doesnot nothing except return the some value either by calculating or soemthing in the next statement 

//calling the arrow functions 
hello();
sum(3,2);
console.log(mul(2,4));
