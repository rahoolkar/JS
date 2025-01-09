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

let pro = foodDelivery("maggie");
pro.then(()=>{ //agar promise resolve ho jaaye toh
    console.log("food item was delivered")
}).catch(()=>{ //agar promise reject ho jaaye toh 
    console.log("item was cancelled")
})