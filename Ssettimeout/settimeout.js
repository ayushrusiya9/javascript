

let okk=()=>{
    setTimeout(() => {
        alert("runnn")
    }, 3000);
}

let i = 0
let count = ()=>{
    setInterval(()=>{
        console.log(i)
        i = i + 1
    },1000)
}