//sngleton --> ye object2 ma hai
// Object.create

//object literals

const mySym = Symbol("mykey1")

let JSuser = {
    name: "Ayush",
    "full name": "Ayush Rusiya",// ye smjhane ke liye tha ki value ko kaise lynge
    age: 18,
    [mySym]: "thia is symbol veriable",//symbol ka syntex aisa hota hai, ager symbol ko declear kenge toh aise hi krenge
    location:"jaipur",
    email: "ayushrusiya@gmail.com",
    isLoggedIn: false,
    lastLoggedInDay:["Monday","Friday"]
}

// console.log(JSuser);
// console.log(JSuser.email);
// console.log(JSuser["email"]);//uper wle ko smjhane ke liye tha ki kaise value ko bulaynge //**isko bracket notation kehte hai */
// console.log(JSuser[mySym])
// console.log(JSuser["full name"]);

// JSuser.name = "aashu";
// Object.freeze(JSuser);//freez kerne ke baad value change nahi hoti jaise niche nahi hui
// JSuser.name = "anshhhh";
// // console.log(JSuser);

JSuser = {
    name:"ayush"
}

JSuser.greeting = function(){
    console.log("Hello js User");
    
};

JSuser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);//is trah se `` krne ko string interpolation kehte hai
};

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());

