let todo = [] ;
let req = prompt("enter the command");

while(true){
    if(req=="quit"){
        console.log("quiting the app...");
        break;
    }

    if(req=="list"){
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
            
        }
    }else if(req=="add"){
        let add = prompt("enter the task you want to do")
        todo.push(add);
        console.log("task added", add);
        
    }else if(req=="delete"){
        let del = prompt("enter the index of task you want to delete");
        del = Number(del);
        todo.splice(del,1);
        console.log("task deleted");
        
    }else{
        console.log("you didnt entered the correct command, please enter the correct command");
        
    }
    req = prompt("enter the command");
}
