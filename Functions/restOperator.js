//rest operator works with function and does the complete opposite work of the spread operator

//spread operator takes an array or object or string which can be iterated and print the elements of it as free individual //azzad karta ha 

//rest operator takes all the free individual elements and stores it in an array //bandh deta hai sabko

function add(...para) {
    let sum = 0 ;
    console.log(para) //here para is the array that is containing all the elements that we passed as parameter in the function 
    para.forEach((elem)=>{
        sum = sum + elem;
    })
    console.log(sum);
}

add(1,2,3,4,5);