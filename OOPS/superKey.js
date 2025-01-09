//super keyword is used to call the parent's class function from the child class

class Employee {
    login(){
        console.log("employee logged in");
    }
    logout(){
        console.log("employee logged out");
    }
}

class Devloper extends Employee{
    code(){
        console.log("developer codes");
    }
    //method overriding
    logout(){
        super.logout(); //calling parent class function 
        console.log("developer logged out very late")
    }
}

//creating object of the class
let d = new Devloper();
d.code();
d.logout();            