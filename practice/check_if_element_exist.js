// wap to check if a given Number (eg. 9) is exist in array [3,5,7,9.11]

let arr = [3,5,7,9,11]

// for(i of arr){
//     if(i == 9){
//         console.log(`${i} exist in array.`)
//     }
// }

// for(let i = 0; i <=arr.length; i++){
//     if(arr[i] == 9){
//         console.log(`${arr[i]} in array`)
//     }
// }
let i = 0;
while(i <= arr.length){
    if(arr[i] == 9){
        console.log(arr[i] + " in array.")
    }
    i++;
}