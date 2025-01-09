//fetch api with await 

let url = "https://catfact.ninja/fact";

async function getFacts(){

    try{
        let r1 = await fetch(url);
        let data = await r1.json();
        console.log(data.fact)
    }catch(error){
        console.log(error)
    }
}

getFacts();