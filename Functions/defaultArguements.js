//when we donot pass default parameter 

function sum (a,b){
    return a+b;
}

let add = sum(1) //here a =1 , but b is not given any value so its value is not defined 
console.log(add);

//when we pass default arguments in the function 
function product(a=2,b=3){
    return a*b;
}

let ans = product();
console.log(ans);

let mul = product(12,5);
console.log(mul);
