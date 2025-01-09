//classlist returns a list of all the names of the class that element contains 

let h_one = document.getElementById("h-one");

let classList = h_one.classList

console.log(h_one.classList);

//methods with class list 

console.log(h_one.classList.add("shadow"));
console.log(h_one.classList);

console.log(h_one.classList.remove("green"));
console.log(h_one.classList);

console.log(h_one.classList.contains("hoes"));

console.log(h_one.classList.toggle("hoes"));