//await keyword pauses the execution of the surrounding async function and waits till the promise is resolved or rejected
//jab tak promise pending state me ha tab tak await will wait and no after code will run


function getNumber() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random() *10 )+1;
            console.log(num);
            resolve();
        }, 3000);
    })
}

async function callingNumberFunction(){
    try{
        await getNumber();
        await getNumber();
        await getNumber();
        await getNumber();
    }catch (err){
        console.log(err);
    }
}

callingNumberFunction();

//handling rejections with await