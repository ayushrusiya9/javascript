
let Book = () => {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let city = document.querySelector("#city").value;
    let aadhar = document.querySelector("#aadhar").value;
    let seatNo = document.querySelector("#seatNo").value;
    let date = document.querySelector("#date").value;

    let url = 'http://localhost:3000/ticket';

    fetch(url, {
        method: 'POST',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            aadhar: aadhar,
            email: email,
            city: city,
            seatNo: seatNo,
            date: date
        })
    })

    location.href = 'crud.html';
    return false;
}