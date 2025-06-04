let name = {
  firstname: "rahul",
  lastname: "kar",
};

let name2 = {
  firstname: "udayan",
  lastname: "kar",
};

function printName(city, state) {
  console.log(
    this.firstname + " " + this.lastname + " lives in " + city + "," + state
  );
}

//call function
printName.call(name, "rohtak", "haryana");
printName.call(name2, "kolkata", "west bengal");

//apply function 
printName.apply(name, ["rohtak", "haryana"]);
printName.apply(name2, ["kolkata", "west bengal"]);

//bind function
let newPrintFunction = printName.bind(name,"rohtak","haryana");
newPrintFunction();

let newPrintFunction2 = printName.bind(name2,"kolkata","west bengal");
newPrintFunction2();