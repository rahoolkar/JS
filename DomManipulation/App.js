//getElementByID is a method of document object and it return the whole element as an object, means if we do console.dir then we can see its properties 

let mainImgObject = document.getElementById("mainImg");
console.dir(mainImgObject); 

//getElementsByClassName returns a HTML Collection of the elements having same class name

let smallImages = document.getElementsByClassName("oldImg");

for(let i of smallImages){
    console.log(i.src);
}


//getElementsByTagName returns a HTML Collection of the elements having the same tag name or else it will return an empty HTML Collection

let paras = document.getElementsByTagName("p");

for(let i of paras){
    console.log(i.innerText);
}

