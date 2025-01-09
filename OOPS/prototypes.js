//prototypes are the special mechanisma by which the js object inherits the methods and properties from another objects.

//jab ek js object dusre prototype object ke methods and functions ko inherit kar lete hai tab its called prototypal inheritance.

let arr = [1,2,3]; 
console.log(arr);
arr.getlength = ()=>{
    return arr.length;
}

//every object in js has a built in prototype and which is common for all.

//we can initialise js prototype to another obj

const p = {
    push : (el) =>{
        console.log("pushing the element",el);
    },
    pop:function(){
        console.log("removing the last element of the array");
    }
}
arr.__proto__ = p ; //initializing the arr prototype to another object 

console.log(Array.prototype); //every datatype has different common prototypes
console.log(String.prototype);
console.log(Object.prototype); 