

// let okk=()=>{
//     setTimeout(() => {
//         alert("runnn")
//     }, 3000);
// }


// let i = 0
// let count = ()=>{
    //     setInterval(()=>{
        //         console.log(i)
        //         i = i + 1
        //     },1000)
        // } 
        
let w = document.querySelector(".watch")
let c = 0
let s
let start = ()=>{
    s = setInterval(()=>{
        w.innerHTML = c
        if (c == 10){
            stopp()
        }
        c++
    },1000)
}

let stopp = ()=>{
    clearInterval(s)
}