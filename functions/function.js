// const user = {
//     userName: "Ayush",
//     price: 999,
   
//     welcomeMessage: function(){
//         console.log(`${this.userName}, welcome to website`);
//         console.log(this);
        
//     }

// }

// user.welcomeMessage()//user ke ander ke function ko target kiya 
// user.userName = 'asshu'
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = 'ayush'
//     console.log(this.username);   
// }

// chai()

// const chai = () => {
//     let username = "Ayush"
//     console.log(this);
// }

// chai()

//#Arrow function

// const addTwo = (num1,num2) => { //curly bracket use krege toh return keyword likhna padega //isko explicit return bolte hai
//     return num1 + num2
// }

// const chai = () => {  //is tarah bhi likhte hai
    //  
    // }

// const addTwo = (num1,num2) => num1 + num2 //isko implicit return bolte hai

// const addTwo = (num1,num2) => (num1 + num2) 

// const addTwo = (num1,num2) => ({userName: 'ayush'}) 

// console.log(addTwo(2,3));


// +++++++++++++++++++++ IIFE ++++++++++++++++++++++++++++++

//IMMEDIATE INVOKED FUNCTION EXPRESSION

(function name() {//iso named iife bolte hai
    console.log(`Ayush`);
})();


(function name(name) {
    console.log(`${name}`);
})("aashu");//is tarah prameter pass krte hai


( (name) => {//isko unNamed iife bolte hai
    console.log(`${name} ye bhi chal gya`);
})("aashu");