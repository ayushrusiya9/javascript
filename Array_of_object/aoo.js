let a = [2,4,5,6,8,9]

let b = a.map((e)=>{
    return e * 2;
})

console.log(b)

let c = a.filter( (e)=>{
    return e > 10
})

console.log(c)

a.forEach((e)=>{
    console.log(e * 2);
})

let Aoo = [{
    name: "Ayush",
    age: 20,
    city: "Delhi"
}, {
    name: "Rohit",
    age: 22,
    city: "Mumbai"
}, {
    name: "Sita",
    age: 19,
    city: "Kolkata"
}, {
    name: "Anjali",
    age: 21,
    city: "Chennai"
}, {
    name: "Rahul",
    age: 23,
    city: "Bangalore"   
}]


// let s = document.getElementById("screen");

// Aoo.map( (e)=>{
//     // console.log(e.name)
//     document.getElementById("screen").innerHTML += e.name;
//     document.getElementById("age").innerHTML += e.age;
//     document.getElementById("city").innerHTML += e.city;
//     // s.innerHTML += `<h1>${e.name}</h1> </br>
//     // // <p>${e.age}</p></br
//     // // <p>${e.city}</p> </br>
//     // // `;
// })

let show = document.getElementById("show");

Aoo.map((e) => {
    show.innerHTML += `<tr>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.city}</td>
    </tr>`;
})