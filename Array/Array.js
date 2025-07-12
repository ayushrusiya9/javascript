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

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let sum = 0
// for(let i = 0; i < 10; i ++){
//     if(arr[i] % 2 != 0){
//         sum = sum + arr[i]
//     }
// }

// console.log(sum)
// using for of loop
// for( i of arr){
//     console.log(i)
// }

// //for in -> less use 
// for( i in arr){
//     console.log(i)
// }

// let arr1 = [11,12,13,14,15,16,17,18,19,20]

// sum = 0
// for(i of arr1){
//     sum = sum + i
// }

// console.log(sum)

// arr1.push()
// console.log(arr1)

// arr1.pop()
// console.log(arr1)

// arr1.unshift("Ayush")
// console.log(arr1)

// arr1.shift()
// console.log(arr1)

// let sl = arr1.slice(1,5)
// console.log(sl)

// let pr = [1,2,3,4,5,6,7,8,9,10]
// let sl1 = pr.slice(3,9)

// for(let i of sl1){
//     if(i % 2 == 0){
//         console.log(i)
//     }
//     // console.log(i)
// }

let ayush = ['ayush rusiya', 21, 5.8, 'cybrom']

// ayush.splice(2)
ayush.splice(2,0,'radharaman')
console.log(ayush)

// ayush.splice(2)
ayush.splice(2,0,'radharamann')
console.log(ayush)

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
