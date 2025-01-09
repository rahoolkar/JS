//factory functions are the function which creates objects

function personMaker(name,age){
    return {
        name:name,
        age:age,
        getDetails:function(){
            console.log(`my name is ${this.name} and my age is ${this.age}`);
        }
    }
}


let o1 = personMaker("rahul",22);
let o2 = personMaker("udayan",17);

console.log(o1);
console.log(o2);
 
o1.getDetails();
o2.getDetails();

//the main problem with factory function were that they created a new copy of every function defined in the object