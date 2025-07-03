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

let marks = 75;
if (marks >= 90) {
console.log("Grade: A");
} else if (marks >= 70) {
console.log("Grade: B");
} else if (marks >= 50) {
console.log("Grade: C");
} else {
console.log("Fail");
}