// find max number of an array
let arr = [3,7,2,9,5]
max_value = arr[0]

for(let i = 0; i<= 5; i++){
    if(max_value < arr[i]){
        max_value = arr[i]
    }
}

console.log(max_value)