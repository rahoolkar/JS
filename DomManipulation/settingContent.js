//selecting the first paragraph tag

let paragraph = document.querySelector("p");
console.log(paragraph);

// innerHTML
//it will print the whole html content inside the selected element 

console.log(paragraph.innerHTML);

// textContent
//it will print all the wrriten content available in the element. it will print all the text content including spaces and hidden elements  

console.log(paragraph.textContent);

// innerText 
//it will print all the text content that will be visible normally (without any tags and hidden texts)

console.log(paragraph.innerText);