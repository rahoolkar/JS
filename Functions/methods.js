//methods in js
//funtions that can be performed on any object //functions that are defined inside a object is also called methods

//functions in object
const calculator = { 
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    },
    dvd : function(a,b){
        return a/b;
    }
};

let ans  = calculator.dvd(2,3);
console.log(ans);
