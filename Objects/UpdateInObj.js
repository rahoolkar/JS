const student = {
    name: "rahul",
    age : 90, 
    city : "rohtak",
    marks : 88
}

//adding or updating the values in objects 
//before 
console.log(student.age);
//updating
student.age = 22;
//after 
console.log(student.age);

//adding in object 
student.gender = "male";
console.log(student);


//delete from object 
delete student.gender;
console.log(student);
