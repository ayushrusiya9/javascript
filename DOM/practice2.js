function remove(){
    let a = document.querySelector(".change")
    let b = a.style.display
    if(b == "none"){
        a.style.display = "block"
    }else{
        a.style.display = "none"
    }
}

function remove1(){
    let a = document.querySelector(".change")
    a.style.display = "block"
}

const get = ()=>{
    let a = document.querySelector(".name").value
    let b = document.querySelector(".name1").value
    alert(parseInt(a) + parseInt(b))
}