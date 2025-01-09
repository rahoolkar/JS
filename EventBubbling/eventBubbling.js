//event bubbling is the process that happens when we click the nested elements 

//if we click an element which is nested deeply, sabse pehle humne click kiya hai upar vale ko then usse niche vale ko then usse bhi niche vale ko

const div = document.querySelector("div");
const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li");

div.addEventListener("click",()=>{
    console.log("div is clicked")
})

ul.addEventListener("click",(event)=>{
    event.stopPropagation(); //to stop event bubling 
    console.log("ul is clicked");
})

for(let i=0 ;i<lis.length;i++){
    lis[i].addEventListener("click",()=>{
        event.stopPropagation(); //to stop event bubbling 
        console.log("li is clicked")
    })
}

//to stop event bubbling we have a method of event obj to stop progation
