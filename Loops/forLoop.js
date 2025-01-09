//printing table of 5 
//let table = prompt("enter the number")
let table = "3";
table = Number(table)
console.log(typeof table);

for(let i=table;i<=table*10;i=i+table){
    console.log(i);
}

//printing odd numbers

for(let i=1;i<=15;i=i+2){
    console.log(i);
}

//printing even numbers

for(let i =2;i<=10;i=i+2){
    console.log(i);
    
}

//backwards 

for(let i=10; i>=2; i=i-2){
    console.log(i);
    
}

//infinite loop happens when we forget to add the condition that will terminate the loop 
// for(let i =1 ; ;i++){ //condition ko likhna hi bhul gaye
//     console.log(i); //here the loop will never terminate    
// }

//for loops with array
let arr = ["orange","apple","grapes","banana","guava"]

for(let i=0;i<arr.length;i++){
    console.log(i, arr[i]); 
}

//reverse

for(let i = arr.length-1;i>=0;i--){
    console.log(i, arr[i]);
    
}

//for loop with nested array
let nar = [[-2,-1,0,1,2,3],[4,5,6],[7,8,9,10]]

for(let i=0;i<nar.length;i++){
    for(let j=0;j<nar[i].length;j++){
        console.log(nar[i][j]); //matrix
    }
    console.log();
}