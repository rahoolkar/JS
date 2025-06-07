const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //resolve("p1 success");
    reject("p1 reject");
  }, 3000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("p2 success");
  }, 7000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("p3 success");
  }, 5000);
});

Promise.any([p1, p2, p3])
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error.errors); //handling aggregate error
  });
