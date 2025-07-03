let maths = parseInt(prompt("Enter your marks in maths: "))
let physics = parseInt(prompt("Enter your marks in physics: "))
let chemistry = parseInt(prompt("Enter your marks in chemistry: "))

let total = maths + physics + chemistry
let percentage = (total / 300) * 100
console.log("your percentage is: "+percentage)

if(percentage >= 90) {
    console.log("You have got A+ grade")
}
else if(percentage >= 80 && percentage < 90) {
    console.log("You have got A grade")
}
else if(percentage >= 70 && percentage < 80 ){
    console.log("You have got B+ grade")
}
else if(percentage >= 60 && percentage < 70){
    console.log("You have got B grade")
}
else if(percentage >= 50 && percentage < 34){
    console.log("You got second division")
}
else{
    console.log("you are fail!!!")
}