//try block is used to when we think that this peice of code might give u some error

//when error comes no code is run after that and to prevent this we have try block 

//try block throws an error and catch block catch the error 

try{
    console.log("hello1");
    console.log("hello1");
    console.log("hello1");
    console.log(a); //this line will throw an error
    console.log("hello2");
    console.log("hello2");
    console.log("hello2");
} catch(err){
    console.log("utho error aagya")
    console.log(err);
    console.log("hello1");
}finally{
    console.log("this peice of code will always run agar error aaye ya na aaye")
}