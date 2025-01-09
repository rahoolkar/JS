//block scope 
//variables defined in the block canot be acccessed outside the block, but outside vale variables are accessible int the block

let global = 100 ;
{
    let a = 90 ;
    const b = 90 ;
    var c = 90 ;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(global);
}

//console.log(a);
//console.log(b);
console.log(c);
console.log(global);
