let person = {
  name: "Aashu",
  age: 21,
  city: "Bhopal"
};

console.log(person);//full object

console.log(person.name)//Aashu
console.log(person["age"])//21

//add/updating/delete
// person.email = "ayush@gmail.com"
person["email"] = "ayush@gmail.com"//add
person.age = 99//update
delete person.city//delete
console.log(person)

let person1 = {
name: "Aashu",
age: 21,
city: "Bhopal"
};

for(let k in person1){
    console.log(k, person1[k])
}