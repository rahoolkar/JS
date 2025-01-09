//highorder methods for array are the methods that accept callbacks as an arguement
let arr = [1,2,3,4,5,6,7,8]

//for each loop //makes changes to the original array 
arr.forEach((element)=>{
    console.log(element)
})

//map method for array//makes changes and returns a new array with updates elements 
let newUpdatedArray = arr.map(function(elem){
    return elem*2;
})
console.log(newUpdatedArray);


let students = [
    {
        name:"rahul",
        age:23,
        marks:94
    },
    {   name:"udayan",
        age:17,
        marks:10
    },
    {   name:"amrita",
        age:22,
        marks:20
    }];

    let gpa = students.map(function(objects){
        return objects.marks/10;
    })

console.log(gpa);


//filter method for array //this methods also returns an new array with elements that satify the conditions
let evenArray = arr.filter(function(elem){
    return elem%2==0;
})
console.log(evenArray);

let smol = arr.filter((elem)=>{
    return elem<4;
})
console.log(smol);

//every method for array // it returns true if every element of an array satifies a condition else returns false
console.log([2,4,6,8,10].every((elem)=>{
    return elem%2==0;
}));

//some method for array // it return true if some of elements of an array satisfies the condition 
console.log([1,3,2,4,6,9,10].some((elem)=>{
    return elem%2==0;
}));

//reduce method for array //reduces an array into a single value 

let reducedValue = arr.reduce((res,element)=>{
    return res+element;
})
console.log(reducedValue);

//finding the greatest in the array using the reduce method
let nums = [1,2,3,4,5,4,3,2,1];

let greatestNumber = nums.reduce((max,elem)=>{
    if(max>elem){
        return max;  //return is used for the next line value here
    }else{
        return elem;
    }
})
console.log(greatestNumber);
