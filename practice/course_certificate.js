//ask user if they have complte course and have certificate by confirm if boh are ok then alert Complated otherwise not complte
function course(){
    let a = confirm("You have completed your course?")
    if(a == true){
        let b = confirm("You have certificate?")
        if(b == true){
            alert('Completed!!!')
        }else{
            alert('Not complete!!!')
        }
    }else{
        alert('Course completed required!!!!!!!!')
    }
}

course()