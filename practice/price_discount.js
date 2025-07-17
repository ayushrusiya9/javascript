//ask user for the price of an item and confirm weathwe they have a discount coupun apply 10% discount
function discount(){
    let price = prompt("Enter itme price")
    let discnt = confirm("You have coupun!!")
    if(discnt == true){
        let dis_per = 10
        let final = price - (dis_per * price / 100)
        alert(`Your final discounted price is ${final} -/`)
    }
}

discount()