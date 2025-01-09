//lexical scope

//it means the variable defined outside the function is accessible inside the another funtion, but the opposit is not true. 

//variables defined in the function are not accesible outside the function 


function outer(){
    let x = 9 ; 
    let y = 8 ;
    function inner(){
        let a = 90 ;
        console.log(x); //hum bhar vale variables ko andar use kar sakte hai but, 
        console.log(y); //andar vale variables ko bhar use nhi kar sakte hai
    }
    //console.log(a);
    inner();
}
//functions are also blocked scoped. we cannot call the inner function outside the outer funtion
outer();