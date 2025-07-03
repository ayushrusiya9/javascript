let student = {
    name: "Aashu",
    age: 21,
    city: "Bhopal"
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}