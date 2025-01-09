//nested objects 

const classInfo = {
    rahul : {
        marks : 99,
        age: 12
    },
    udayan : {
        marks : 33,
        age: 19
    },
    amrita : {
        marks : 80,
        age : 55
    }
}

//accessing values

console.log(classInfo);
console.log(classInfo.rahul.marks);
console.log(classInfo.udayan.age);
classInfo.rahul.age = 22;
console.log(classInfo.rahul.age);


//Arrays of objects 
const classInfo2 = [
    {
        name:"rahul",
        marks : 99,
        age: 12
    },
    {
        name:"udayan",
        marks : 33,
        age: 19
    },
    {
        name:"amrita",
        marks : 80,
        age : 55
    }
]

//accessing the values

console.log(classInfo2[0]);
console.log(classInfo2[1]);
console.log(classInfo2[2]);

//updating the values 
classInfo2[0].age = 22 ;
console.log(classInfo2[0]);

classInfo2[1].city = "dehradun";
console.log(classInfo2[1]);