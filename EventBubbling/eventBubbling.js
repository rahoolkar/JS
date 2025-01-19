const div = document.querySelector("div");
const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li") //this returns a nodelist

div.addEventListener("click",function(event){
    event.stopPropagation(); //to stop the event bubbling process
    console.log("div was clicked");
})

ul.addEventListener("click",(event)=>{
    event.stopPropagation(); //to stop the event bubbling process
    console.log("ul was clicked");
})

for(let li of lis){
    li.addEventListener("click",(event)=>{
        event.stopPropagation(); //to stop the event bubbling process
        console.log("li was clicked");
    })
}


//event bubbling means when in nested elements when the last element element is clicked then the upper elements are also clicked

//li -> ul -> div 

//niche se upar like a bubble