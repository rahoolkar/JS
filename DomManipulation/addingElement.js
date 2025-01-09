//creating an element

let newPElement = document.createElement("p");

//adding some html to the element 

newPElement.innerHTML = "Hello i am a newly created element and i am here to make to understand the concept of creating elements and placing them on the desired positions"


//placing the whole element in the desired position 

let box = document.querySelector(".box");
box.appendChild(newPElement); //adding the new element to the last of the box class div

//we have diffrent options to place the element that we created according to our will 

//append 
box.append("append element"); //last me add hoga as a child element 

//prepend 
box.prepend("prepend element"); //start me add hoga but as a child element

//before  
box.before("before append"); //box div ke pehle add hoga 

//after 
box.after("after append"); //box div ke baad add hoga 

//inserAdjacentElement Method

//Syntax :  insertAdjacentElement("position","element")
//position : beforebegin ; afterbegin ; beforeend ; afterend

let btn = document.createElement("button");
btn.innerHTML = "Donot Click Me!"
btn.setAttribute("class","button");
btn.style.color="pink";
btn.style.backgroundColor="lightblue"

//beforeBegin
// box.insertAdjacentElement("beforebegin",btn);

//afterBegin
// box.insertAdjacentElement("afterbegin",btn);

//beforeEnd 
// box.insertAdjacentElement("beforeend",btn);

//afterEnd
box.insertAdjacentElement("afterend",btn);


//removing elements 
//1. removeChild Method 
box.removeChild(newPElement);

//2. remove method 
btn.remove();

