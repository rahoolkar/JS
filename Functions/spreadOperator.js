//spread operator 
//expand an iterable into multiple values

//spread operator takes an array or object or string which can be iterated and print the elements of it as free individual //azzad karta ha 

let nums = [1,2,3,4,5,6];
console.log(...nums)

console.log(..."rahul")

//uses of spread operator 
let arr = [12,4,5,56,78];
let copyOfArr = [...arr];
console.log(copyOfArr);


let name = "rahulkar";
let char = [...name];
console.log(char)

let odd = [1,3,5,7];
let even = [2,4,6,8];
let commonNumbers = [...odd,...even];
console.log(commonNumbers);

//spread operator with objects 
const student = {
    name : "rahul",
    age : 22,
    marks : 89
}
const copyStudent = {...student,id:2819351};
console.log(copyStudent)


//storing an array in object 
let array = [1,3,4,5,6]
let object = {...arr} //since arrays only have values so it will store the index as key and value as value
console.log(object);