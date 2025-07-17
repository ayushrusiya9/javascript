//count even and odd in given arrayn[1,2,3,4,5,6,7,8]
function evenOddcheck(arr){
    let count_even = 0
    let count_odd = 0

    for(let i in arr){
        if(i % 2 == 0){
            count_even = count_even + 1
        }else{
            count_odd = count_odd + 1
        }
    }
    console.log(`Even number are ${count_even}`)
    console.log(`Odd number are ${count_odd}`)
}

let a = [1,2,3,4,5,6,7,8]
evenOddcheck(a)