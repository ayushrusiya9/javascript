// Array
// let arr = ["cybrom",18,4.7,true]
// // console.log(arr)
// console.log(arr[3])

// let arr1 = []

// for(let i = 0; i < 5; i++){
//     arr1[i] = prompt("Enter a value:")
// }

// console.log(arr1)


// let arr2 = []

// for(let i = 0; i < 10; i++){
//     arr2[i] = parseInt(prompt("Enter a value:"))
// }

// console.log(arr2)

// wap to print sum of all odd number between 1 to 10 which present in array

let arr = [1,2,3,4,5,6,7,8,9,10]

let sum = 0
for(let i = 0; i < 10; i ++){
    if(arr[i] % 2 != 0){
        sum = sum + arr[i]
    }
}

console.log(sum)