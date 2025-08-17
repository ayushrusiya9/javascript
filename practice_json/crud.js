let fetchData = async()=>{
    let url = 'http://localhost:3000/Ticket'

    let res =  await fetch(url,{method:"GET"})

    let data = await res.json()

    console.log(data)

    data.map((e)=>{
        document.querySelector("#showTable").innerHTML +=`
        <tr>
            <td>${e.ticket_id}</td>
            <td>${e.event}</td>
            <td>${e.holder_name}</td>
            <td>${e.seat_number}</td>
            <td>${e.price}</td>
            <td onclick="openEditForm('${e.id}')">Edit</td>
            <td onclick="del('${e.id}')" >Delete</td>
        `
    })

}

let del= (id)=>{
   let url = `http://localhost:3000/Ticket/${id}`
   fetch(url, {method:'DELETE'})
}

let uploadData = ()=>{
    let tcketinp = document.getElementById('ticket_id').value
    let eventinp = document.getElementById('event').value
    let holderinp = document.getElementById('holder_name').value
    let seatNuminp = document.getElementById('seat_number').value
    let priceinp = document.getElementById('price').value

    let url = 'http://localhost:3000/Ticket'

    fetch(url,{method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            "ticket_id": tcketinp,
            "event": eventinp,
            "holder_name": holderinp,
            "seat_number": seatNuminp,
            "price": priceinp
        })
    }
        
    )
}

let openEditForm = async (id)=>{
    let url = `http://localhost:3000/Ticket/${id}`

    let res = await fetch(url)

    let data = await res.json()

    document.querySelector(".openform").innerHTML += `
         <form id="ticketForm">
        <label for="ticket_id">Ticket ID:</label>
        <input type="number" id="edit_ticket_id" name="ticket_id" value="${ data.ticket_id}"><br><br>

        <label for="event">Event Name:</label>
        <input type="text" id="edit_event" name="event" value="${ data.event}"><br><br>

        <label for="holder_name">Holder Name:</label>
        <input type="text" id="edit_holder_name" name="holder_name" value="${ data.holder_name}"><br><br>

        <label for="seat_number">Seat Number:</label>git 
        <input type="text" id="edit_seat_number" name="seat_number" value="${data.seat_number}"><br><br>

        <label for="price">Price:</label>
        <input type="number" id="edit_price" name="price" value="${data.price}"><br><br>


        <button type="submit" onclick="finalEdita('${data.id}')">Submit</button>
    </form>
    `

}

let finalEdita = async (id)=>{
    let edit_ticketid = document.querySelector("#edit_ticket_id").value
    let editevent = document.querySelector("#edit_event").value
    let editgoldername = document.querySelector("#edit_holder_name").value
    let editseatnum = document.querySelector("#edit_seat_number").value
    let editprice = document.querySelector("#edit_price").value

    let url = `http://localhost:3000/Ticket/${id}`
    fetch(url,{method: "PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            ticket_id:edit_ticketid,
            event:editevent,
            holder_name:editgoldername,
            seat_number:editseatnum,
            price:editprice
        })
    })
}