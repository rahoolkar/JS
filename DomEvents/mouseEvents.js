let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function(){
    console.log("say hello");
}

//or

function sayHello(){
    alert("say hello");
}

btn.onclick = sayHello ; // we will not give the brackets here because if we apply it means we are executing the function here only but when we pass the reference it work when the button is clicked

btn.onmouseenter = function () {
    console.log("ponter entered the button")
}

let smallBox = document.querySelectorAll("div")[1];

smallBox.addEventListener("mouseenter",function(){
    console.log("pointer entered into the box");
})