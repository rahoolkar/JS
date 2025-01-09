//this keyword
//this refers to an object that is executing the current peice of code. 

//if we want to access the paramters of object in object method then we use "this" to refer to object. 

//if we print the value of this we get the currebt object we working on 

const student = { 
    name : "rahul",
    age : 23,
    city : "rohtak" ,
    details :function(n){
        console.log(`${this.name} of age ${this.age} lives in the ${this.city} city`);
    },
    printThis : function(){
        console.log(this);
    }
}

student.details();
student.printThis();
console.log(this)// window object which is a global object 