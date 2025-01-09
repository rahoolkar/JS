//if statement is used to check condition, if the condition is true then the code inside if will run other it will ignore 

let age = 28 ;

console.log("code before if statement");
if(age == 18){
    console.log("you are legal")
}
console.log("code after if statement");

//if-else is used when to check multiple statements

if(age>=18){
    console.log("you are legal")
}else if(age>60){
    console.log("you are dead");
}
else if(age<18){
    console.log("you are not legal")
}
//age pehle koi bhi statement galat ho gyi toh js will ignore jo bhi kuch niche likha hau hai 

if(age>=18){
    console.log("you are legal")
}else if(age>60){
    console.log("you are dead");
}
else if(age<18){
    console.log("you are not legal")
}else{
    console.log("Your age is not correct");
}
