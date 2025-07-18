// reverse a string without using any method
function reverseString(s){
    let s1 = ''
    for(let i of s){
        s1 = i + s1
    }
    return s1
}

let str = "ayush"
let r = reverseString(str)
console.log(r)