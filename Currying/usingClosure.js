function multiply(x) {
  return function (y) {
    console.log(x * y);
  };
}

let multiplyAgain = multiply(2);
multiplyAgain(3);
