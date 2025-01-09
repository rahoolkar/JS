let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("form is submitted")
})

//accessing the values of the form 

form.addEventListener("submit",function(){
    
    let input = document.querySelector("input");
    console.dir(input);
    console.log(this);
    console.log(input.value)
    console.dir(form.elements[0]);
})