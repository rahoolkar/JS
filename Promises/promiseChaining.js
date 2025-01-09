function foodDelivery(item){
    let scooterSpeed = Math.round(Math.random() * 10)+1;
    let p = new Promise((resolve,reject)=>{
        if(scooterSpeed>3){
            setTimeout(() => {
                resolve(200);
            }, 5000);
        }else{
            setTimeout(() => {
                reject(-1);
            }, 3000);
        }
    })

    return p ;
}
//not an effective method
// foodDelivery("burger").then(()=>{
//     console.log("food1 was delivered");
//     foodDelivery("fries").then(()=>{
//         console.log("food2 was delivered")
//     })
// }).catch(()=>{
//     console.log("sorry, order was cancelled")
// })

//improved version 
foodDelivery("burger")
.then((value)=>{
    console.log("food1 was delivered");
    console.log(value)
    return foodDelivery("fries")
})
.then((value)=>{
    console.log("food2 was delivered")
    console.log(value)
    return foodDelivery("pizza")
})
.then((value)=>{
    console.log("food3 was delivered")
    console.log(value)
})
.catch((error)=>{
    console.log("sorry, food was cancelled")
    console.log(error)
})

//promise chaining 