let fatchData = async () => {
 let url = 'http://localhost:3000/ticket'
 
 let res = await fetch(url, {method:"GET"})

 let data = await res.json()

 console.log(data)
}

fatchData()