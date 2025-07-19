let mark = (p,c,m)=> {
    let per = p + c + m 
    let result = 100*(per/300)
    console.log(result)
}

mark(40,40,40)


//simple intrest p * r * t / 100
let simpleIntrest = (p,r,t)=>{
    let sI = p * r * t / 100
    console.log(sI)
}

simpleIntrest(12,22,43)

// add three number 
let addThree = (a,b,c)=> a + b + c

console.log(addThree(3,3,3))

//check  number is positive or not

let Number = (n)=>{
    if(n > 0){
        console.log("positive")
    }else{
        console.log("negative")
    }
}
Number(1)