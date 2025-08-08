
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

let OpenForm = async(id) => {

    let url = `http://localhost:3000/ticket/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    document.querySelector('.showform').innerHTML = `
    <form action="">
        Name: <input type="text" id="upname" value="${data.name}"> <br> <br>
        Email: <input type="text" id="upemail" value="${data.email}"> <br> <br>
        Aadhar: <input type="text" id="upaadhar" value="${data.aadhar}"> <br> <br>
        Select City:
        <select id="city">
            <option value="Bhopal">Bhopal</option>
            <option value="Indore">Indore</option>
            <option value="Gwaliar">Gwaliar</option>
            <option value="Jabalpur">Jabalpur</option>
        </select> <br> <br>
        Seat No: <input type="text" id="upseatNo" value="${data.seatNo}"> <br> <br>
        Date: <input type="date" id="update" value="${data.date}"> <br> <br>
        <input type="button" value="Submit" onclick="FinalUpdate('${data.id}')">
    </form>
    `

    // location.href = 'crud.html';
    // return false
}

let FinalUpdate = async (id) => {
    let Name = document.querySelector("#upname").value;
    let Email = document.querySelector("#upemail").value;
    let Aadhar = document.querySelector("#upaadhar").value;
    let SeatNo = document.querySelector("#upseatNo").value;
    let Date = document.querySelector("#update").value;

    let url = `http://localhost:3000/ticket/${id}`;

    fetch(url, {
        method: 'PUT',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: Name,
            email: Email,
            aadhar: Aadhar,
            seatNo: SeatNo,
            date: Date
        })
    })
}