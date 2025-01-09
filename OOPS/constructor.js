//when an object is created from the class, constructor is callled 

//defining a class 
class myClass{
    name;
    age;
    //defining a constructor
    constructor(name,age){
        console.log("parameter constructor is run")
        this.name = name;
        this.age = age;
    }
    getdetails(){
        console.log(`hi ${this.name} and your age is ${this.age}`);
    }
}
//one class may have only one constructor

//defining a constructor function - it doesnot return anything 
function Person(name,age){
    name;
    age;
    this.name = name; 
    this.age = age;
}

//defining the prototype for the object 
Person.prototype.talk = () =>{
    console.log(this.name,"person is talking")
}

//defining an object
let s1 = new myClass(); //running the default constructor 
let s2 = new myClass("udayan",23);
s2.getdetails();
s1.getdetails();

//defining an object from the constructor function
let p1 = new Person("rahul",34); //when the function is called with new keyword then the function is called constructor

//new keyword 
//it creates a new plain blank js object 