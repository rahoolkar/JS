class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    get nameValue(){
        return this.name;
    }

    set nameValue(name){
        this.name = name;
    }

    get ageValue(){
        return this.age;
    }

    set ageValue(age){
        this.age = age;
    }

}

let p = new Person("udayan",17);
console.log(p.nameValue);
console.log(p.ageValue);

p.nameValue = "udayankar";
p.ageValue = 2333;

console.log(p.nameValue);
console.log(p.ageValue);

//instance of operator 
console.log(p instanceof Person);