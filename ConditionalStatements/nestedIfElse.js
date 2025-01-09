//nested if else is ek if else statement ke andr ek or if else 

let a = 90 ; 
let b = 78 ;
let c = 56 ;

if(a>b){
    if(a>c){
        console.log("a is greater" ,a);
    }else{
        console.log("c is greater" ,c);  
    }
}else{
    if(b>c){
        console.log("b is greater" ,b);
    }else{
        console.log("c is greater", c);
        
    }
}