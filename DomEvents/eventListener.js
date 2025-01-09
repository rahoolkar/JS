function sayHello(){
    console.log("hello!!!");
}

function sayGoodMorning(){
    console.log("good morning, sir!!")
}

let buttn = document.querySelector("button");

buttn.addEventListener("click",sayHello);
buttn.addEventListener("click",sayGoodMorning);
buttn.addEventListener("dblclick",()=>{
    console.log("button was double clicked")
})

//this is event listener 
// if this is used in the callback of the element handleer than it points to that element.

buttn.addEventListener("click",function () {
    console.log(this);
    console.dir(this); //this will now point to the element jis par handler use hua hai 
    
});