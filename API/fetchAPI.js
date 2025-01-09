//fetch sends request to the api url that we mention in the brackets, and we get response from that api 

//fetch returns a promise that eventually your data will be delivered (means baad me resolve karega with data as response)

let url = "https://catfact.ninja/fact";
let f = fetch(url); //now f will be resolved or rejected eventaully 
f.then((response)=>{  //agar promise resolve ho jaaye matlab response aaya hoga 
   // console.log(response); //abb jo bhi response aaya hoga that response data is in json format and to convert it into normal readable data we can use json method
    let data = response.json(); //this also returns a promise 
    data.then((main)=>{
        console.log(main.fact);
        let p2 = fetch(url);
        return p2;
    }).then((r2)=>{
        let d2 = r2.json();
        return d2;
    }).then((data2)=>{
        console.log(data2.fact);
    })
}).catch((error)=>{
    console.log(error);
})

