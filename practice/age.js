//ask user of their age and if it is greater tehn or equal to 18 with ternory operater and display the result in alert.
function age(a){
    (a >= 18) ? alert('You are adult!!') : alert('You are under 18')
}

let usr = prompt("Enter Your age......")
age(usr)