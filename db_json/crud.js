let fatchData = async () => {
 let url = 'http://localhost:3000/ticket'
 
 let res = await fetch(url, {method:"GET"})

 let data = await res.json()

 let show = document.querySelector('.showTable1')

 data.map((e)=>{
    show.innerHTML += `
        <tr>
        <td>${e.name}</td>
        <td>${e.email}</td>
        <td>${e.aadhar}</td>
        <td>${e.city}</td>
        <td>${e.seatNo}</td>
        <td>${e.date}</td>
        <td onclick="del('${e.id}')">DELETE</td>
        </tr>
    `
 })

 console.log(data)
}

fatchData()

let del = (id) =>{

    let url =  `http://localhost:3000/ticket/${id}`
    fetch(url, {method:"DELETE"})
}