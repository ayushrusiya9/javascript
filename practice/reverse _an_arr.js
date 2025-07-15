//reverse the array

function sortReverse(arr){
    let n = arr.length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n - i ; j++){
            if(arr[j] < arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

let numbers = [10,20,30,40,50]
let reverse = sortReverse(numbers)
console.log(reverse)

