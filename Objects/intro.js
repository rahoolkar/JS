//creating object 
const student = {  
    name : "rahul",
    age : 19, 
    marks : 22.8
}
//here, student will be created in the memory and its reference will be stored in student and since its a const, toh hum iska address reference change nhi kar sakte hai

//being a const varibale, means we cannot change the reference of object, but we can change the keys and values inside

//there is no order for object properties, we acess it with keys


//objects in arrays 
const item = {
    name : "brush",
    price : 90,
    color : ["blue","green","pink"]
}


//creating a post
const post = { 
    username : "@rahoolkar",
    post : "november dumb",
    likes : 78 , 
    comments :2, 
    tags : ["@abc","@xyz"]
}
//js converts object keys to strings, means if the key is number, the number will be converted to string

//accessing the values of objects 
console.log(post["username"]);
console.log(post.tags);
