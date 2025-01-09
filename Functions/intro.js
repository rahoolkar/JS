//defining the function 
function sum (a,b){
    let res = a+b ; 
    return res;
}

//calling the function 
let r = sum ; //this will print the reference of the function 
console.log(r)  
let s = sum(3,4); //this will add the 2 numbers 
console.log(s); 


//rolling a dice function 
function rollDice(){
    let numberOnDice = Math.round((Math.random()*6)+1);
    console.log("number on dice is" , numberOnDice);
    
}

rollDice();


//passing arguments to the function 
function printInfo(name,age){  //parameters
    console.log(name, "is the name");
    console.log(age, "is the age");  
}

//calling the function 
printInfo("rahul",23);
printInfo("udayan") //here age will be undefined because the paramters we miss to defined are assingned with a value of undefined 

//return keyword
function printHello(){
    console.log("Hello Namaste");
    console.log("Hello Namaste");
    return ; //return keyword ke baad function exit ho jaega and anycode written after this is not considered
    console.log("Hello Namaste2");
    console.log("Hello Namaste2");
}

