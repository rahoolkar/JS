//async functions by default return a promise 
//agar function pura ache se run hua ha then the promise is fulfilled and agar koi error aagya function me then the promise is rejected 

async function greet(){
    console.log("good morning");
    return 200; //resolve ki value 
}

greet().then((value)=>{
    console.log("theek se chal gya",value)
}).catch((error)=>{
    console.log("error aagya",error)
})


//arrow async function

let hello = async () =>{
    console.log0("hello");
}

hello().then(()=>{
    console.log("theek se chla gya function")
}).catch((error)=>{
    console.log("error aagya",error)
})