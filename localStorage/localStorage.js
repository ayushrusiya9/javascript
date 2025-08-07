let sanddata = ()=>{
    localStorage.setItem("username", 'Aashu');
    localStorage.setItem('userage', 21);

    location.href = "login.html"
    location.reload()

}

let show = document.querySelector("#showname")
show.innerHTML = localStorage.getItem("username")

let = ()=>{
    localStorage.removeItem("username")
    location.reload()
}   