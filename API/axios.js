//axios helps to make http requets
//with fetch its a 2 step process, first the response is sent into json format and then we convert into readable form


//axios is a library, we get download it or copy the cdn links 
//with axios the response we get is in readble form, there is no 2 step process

let url = "https://catfact.ninja/fact";

async function getData(){
    try{
        let data = await axios.get(url); //axios returns a promise
        console.log(data.data.fact);
    }catch(error){
        console.log("error aagya!!!")
    }
}