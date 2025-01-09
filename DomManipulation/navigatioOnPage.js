//parent node  
//children nodelist 
//nextElementSibling
//previousElementSibling

let h1 = document.getElementById("h-one");
console.log(h1.parentElement);
console.log(h1.nextElementSibling);

let ul = document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling);

let div = document.getElementsByClassName("box")[0];
console.log(div.children) //this will return a html collection 
