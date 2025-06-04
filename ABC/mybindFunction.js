let name = {
  firstname: "udayan",
  lastname: "kar",
};

function printName() {
  console.log(this.firstname + " " + this.lastname);
}

let newPrintFunction = printName.bind(name);
newPrintFunction();

Function.prototype.mybind = function (object) {
  let point = this;
  return function () {
    point.call(object);
  };
};

let myBindFunction = printName.mybind(name);
myBindFunction();
