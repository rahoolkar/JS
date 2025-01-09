//attributes are the class and id and style 

//get attributes of an element 

let image = document.getElementById("mainImg");
console.log(image.getAttribute("id"))
console.log(image.getAttribute("src"));

//set attributes of an element 

image.setAttribute("class","spiderman-swinging-image");

console.log(image.getAttribute("class"));


//we can change the style of the elements by the style attribute 

let heading = document.querySelector("h1");

heading.style.color = "purple";
heading.style.backgroundColor = "green";

let anchor = document.querySelectorAll(".box a");

for(let element of anchor){
    element.style.color = "yellow"; //inline css
}