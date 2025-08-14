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
            <td>Edit</td>
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