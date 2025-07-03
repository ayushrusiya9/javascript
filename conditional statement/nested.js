// take input age if age >= 18 -> 1 input 1 for indian - > eligible . not eligible 
// minor

let age = parseInt(prompt("Enter age: "))

if(age >= 18){
    let a = parseInt(prompt("Enter 1 for indian!"))
    if(a == 1){
        alert("Eligible...")
    }else{
        alert("Not eligible....!")
    }
}else{
    alert("Minor...!")
}