function AddText(){

    // let t = document.getElementById("text")
    let t = document.querySelector("#text")

    t.innerHTML = "This is <i>text</i> from Js."
    // t.innerText = "This is <i>text</i> from Js."
    t.style.color = "red"
    t.style.backgroundColor = "yellow"

}

function POrSpann(){
    let p = document.querySelector("#pre1")
    let s = document.querySelector("#pre2")
    p.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus animi, ex corrupti autem cumque quasi minus a, distinctio facere fuga ea. Accusamus, atque delectus nostrum repellendus doloremque id saepe perferendis quae? In, inventore facere!"
    s.innerHTML = "Ayush Rusiya"
    p.style.color = "yellow"
    s.style.color = "blue"
}

function green(){
    let g = document.querySelector("#ayush")
    g.style.color = "green"
}

function blue(){
    let b = document.querySelector("#ayush")
    b.style.color="red"
}