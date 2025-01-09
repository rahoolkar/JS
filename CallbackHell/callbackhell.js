function saveData(data,success,failure){
    let internetSpeed = Math.round(Math.random() * 10)+1;

    if(internetSpeed>4){
        setTimeout(()=>{
            success();
        },2000)
    }else{
        failure();
    }
}

saveData("data1",()=>{
    console.log("data1 successfullt saved");
    saveData("data1",()=>{
        console.log("data2 is saved successfully");
        saveData("data3",()=>{
            console.log("data3 was saved succcessfully")
        },()=>{
            console.log("data3 was failed")
        })
    },()=>{
        console.log("data2 is failed")
    })
},()=>{
    console.log("data1 is failed")
})

