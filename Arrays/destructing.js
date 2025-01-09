//destructing is used to store the value of array in different variables 

let names = ["rahul","udayan","amrita","utpal"];

let ammer = names[0];
let gareeb = names[1];
let mata = names[2];
let bappu = names[3];
console.log(ammer,gareeb,mata,bappu);

//but this is longer method and we can do it in a easy way 

//we will use the [] brackets because we are accessing the values from array
let [rich,poor,mother,father] = names;
console.log(rich,poor,mother,father);