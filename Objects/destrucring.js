//destrucring is used to store value of objects in different variable 

//for destrucring to work we have to put the variable name same as the key you want to access

const student = {
    name : "rahul",
    age : 22,
    subjects : ["english","maths","science"],
    username : "rahul@30",
    password : "12341234"
}
//we will use the curly brackets because we are taking values from an object 
let {username,password,subjects,age:umar,city = "rohtak"} = student ;  //when we want to use different names for the variable we have to write it as age : umar where age is the key in object and umar is name of varibale we want to use
console.log(username,password);
console.log(subjects);
console.log(subjects[1]);
console.log(umar);
console.log(city);