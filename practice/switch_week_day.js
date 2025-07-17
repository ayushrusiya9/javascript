//ask the user to enter a day of the week (1 for monday, 2 for tuesday etc) and display the name of the day. by switch case.

function week(day){
    switch(day){
        case 1:
            alert("Today is Monday")
            break;
        case 2:
            alert("Today is Tuesday")
            break;
        case 3:
            alert("Today is Wednesday")
            break;
        case 4:
            alert("Today is Thursday")
            break;
        case 5:
            alert("Today is Friday")
            break;
        case 6:
            alert("Today is Saturday")
            break;
        case 7:
            alert("Today is Sunday")
            break;
    }
    
}

let d = parseInt(prompt("1.For Monday\n2.For Tuesday\n3.For Wednesday\n4.For Thursday\n5.For Friday\n6.For Saturday\n7.For Sunday"))
week(d)