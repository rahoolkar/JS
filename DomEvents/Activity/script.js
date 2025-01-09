function generateColor(){
    let r = Math.floor(Math.random() * 255);

    let g = Math.floor(Math.random() * 255);

    let b = Math.floor(Math.random() * 255);

    let final = `(${r},${g},${b})`;
    return final ;
}

let button = document.querySelector("button");

button.addEventListener("click",()=>{
    let heading = document.querySelector("h1");
    heading.innerText = "rgb" + generateColor();

    let box = document.querySelector("div");
    box.style.backgroundColor = "rgb" + generateColor();

    console.log("color was updated")
});
