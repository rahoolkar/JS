//Variables are the name given to area in memory which is used to store data
a = 10 ; 

//let,var,const 
let x = 10 ;
x = "Rahul"
console.log(x);

const y = 20 ;
//y++ //this is not possible
//y = 199; //this is not possible since it is a const variable.
console.log(y);

var z ;
z = 30 ;
z++;
console.log(z);


//There are 7 types of primitive data types 
//1.null 2.number 3.bigint 4.boolean 5.string 6.symbol 7.undefined

//numbers in JS
let n1 = -90;
let n2 = 98.97; //any number is a number data type

//nan is used to denote when its not a possible datatype and its type is number

//boolean in JS
let ans = true; //true/false

//string in JS
let name = "rahul"
let surname = 'kar'
let char = 'a';
let s1 = '12345';
let emt = "" //this is also possible

//accessing the strings 
console.log(name[0]);
console.log(name[9087]); //this will print undefined since the index 9087 is nit defined yet 
 
//length of string
console.log(name.length);

//concatenation
let fullName = name + " " + surname; 
console.log(fullName);

