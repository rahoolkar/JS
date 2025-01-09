//arrays are mutable, means whatever changes we do in the array it chamges the real array and does not return a new array like strings do
let arr = [1,1,2,3,3,4];
arr[3]=2;

console.log(arr);

arr[10]=12; // we can also do this,0-10 index tak ka array ban jaega and bech me khali indexs ki value hogi undefined


//methods with array //changes are made to real arrray

arr.pop(); //delete from the end and returns the element
arr.push(13); //add to the end and returns new length of array

arr.shift(); //deletes from the start of array and return the element
arr.unshift(0); //adds to the start of the array and return the new lenght 

console.log(arr.indexOf(4) ); //indexof method returns the first occurence of the element that we pass as argurment

console.log(arr.includes(5)); //returns true or false based on if the element is there or not in the array

let veg = ["aloo","pyaaz","bhindi"];
let fruits = ["apple","orange","grapes"];
let all = veg.concat(fruits); //this will add all the elements of the fruits array to the end of veg array
console.log(all);

all.reverse(); //reverses the array

console.log(all.slice(2)); //array ka tukda kaat ke de dega 
console.log(all.slice(1,4)); //it returns the new array and original array stays same
console.log(all);
console.log(all.slice(-2)); //piche se 2 element return kar dega 

console.log(all.splice(3)); //this will act like a slice method
console.log(all.splice(2,0,1,2,3,4));
console.log(all);
//2 is the starting index and 0 is the no of elements we want to delete and 1,2,3,4 is the elements we want to add
//it makes changes to the original array


let nums = [23,56,7,8,32,45,98];
console.log(nums.sort()); //this will sort on the basis of the first digit chahye vo numbers ya alphabets ho 

console.log(nums.sort((a,b)=>{ //to sort it properly
    return a-b;
}));
