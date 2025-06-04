function multiply(a, b) {
  console.log(a * b);
}

// multiplyByTwo function will look like this :- 
// function multiplyByTwo(y) {
//   let x = 2;
//   console.log(x * y);
// }

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);
