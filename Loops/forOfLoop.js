//for-of loop 
//for(element of collection){....}

let veges = ["potato","capsicum","onion","brinjal"];
for(let element of veges){
    console.log(element);
    
}

for(let elem of "rahulkar"){
    console.log(elem);
    
}

//for-of loops with nested arrays
let md = [[1,2,3],[4,5,6],[7,8,9]];

for(let elem of md){
    for (let element of elem) {
        console.log(element);
    }
    console.log();    
}