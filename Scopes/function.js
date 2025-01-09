//function scope
//variables defined in the function cannnot be acccesses outside the function 


let a = 90 ; //global scope can be accessed and used anywhere in the code 

function printHello(){
    let a = 10 ; //function scoped //iski range sirf function tak hi limit hai out the function we cannot access a =10 
    console.log(a); //here, function variable a shadows the value of global variable 
     //but if donot define the variable "a" in the function then it will acccess the value of a which is defined in the global space  
}

console.log(a); //this will show the value 90 
