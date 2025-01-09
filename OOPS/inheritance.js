class Animal{
    name;
    eyes;
    constructor(name,eyes){
        this.name = name;
        this.eyes = eyes;
    }
    eats(){
        console.log("this animal eats meat");
    }
    sleep(){
        console.log("this animal sleeps in the day time")
    }
}

//making a class that extends another class
class Monkey extends Animal{
    dance(){
        console.log("monkey dances")
    }
}

//making an object of the class 
let m = new Monkey("bandar",3);

m.eats();
m.dance();
m.sleep();