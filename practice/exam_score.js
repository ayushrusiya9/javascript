//ask user thei exam score and deterine pass or failed.(33 above pass)

function score(sc){
    if(s >= 33){
        alert('Hurrey!! you are pass.')
    }else{
        alert("Opss!! you are fail!!")
    }
}

let s = parseInt(prompt("Enter your score"))
score(s)