//this keyword with arrow functions

//this works very differently with arrow functions, they refer to the parent scope of the current object 

let name = "rahul";
let age = 23;
const student = {
    name : "udayan",
    age:17,
    details:function(){
        console.log(this); //here this will refer to the student object 
        console.log(`${this.name} is of age ${this.age}`); 
    },
    properties:()=>{
        console.log(this); //here this will refer to the student's parent scope ie global scope
        console.log(`${this.name} is of age ${this.age}`);
    }
}

student.details();
student.properties();