// let time = new Date();

// // console.log(time.getFullYear())
// // console.log(time.getMonth(1))
// // console.log(time.getDay())
// // console.log(time.getHours())
// // console.log(time.getSeconds())
// // console.log(time.getMilliseconds())
// // console.log(time.toISOString())
// // console.log(time)

// let days =['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// console.log(days[time.getDay()]);
// console.log(months[time.getMonth()]);

let time = new Date();

let birthyear = parseInt(prompt("Enter Your Bithyear"))

let currentYear = time.getFullYear()
let result = birthyear - currentYear
console.log(result)    
