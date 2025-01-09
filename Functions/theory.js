//function expression 

let sum = function(a,b){ //nameless function 
    let sum = a+ b;
    return sum ;
}

let result = sum(12,3);
console.log(result);


//function declaration

function sayHello(){
    console.log("hello world !");
}

//high order functions 
//1. functions that take one or more functions as an argument 
//2. returns function 


//function that take one or more function as an argument 

function hello () {
    console.log("hello");
}

function namaste(){
    console.log("namaste");
    
}

function printgreet(callback,n){
    for(let i=1;i<=n;i++){
        callback();
    }
}

printgreet(namaste,5);
printgreet(hello,5);

//function that returns function 





function evenOdd(r) {
    if(r == "odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(r = "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even ;
    }else{
        console.log("wrong request")
    }
}

let request = "odd";

let func = evenOdd(request);
console.log(func);
func(23);
