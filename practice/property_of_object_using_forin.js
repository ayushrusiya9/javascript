//wap to to access proties of objects using for in

let person = {
    name:"ayush",
    age: 21,
    city: "Bhopal",
    course: "python",
    contact: 12345
}

for(let k in person){
    console.log(k + ":" + person[k])
}