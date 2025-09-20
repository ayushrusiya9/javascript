//merge two array [1,2,3] and [4,5,6] without using .concat() method.

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let merge = [...arr1,...arr2]
console.log(merge)

arr1.push(...arr2)
console.log(arr1)

using loop

let merge1 = []
for(let i = 0; i < arr1.length; i++){
    merge1.push(arr1[i])
}

for(let i = 0; i < arr2.length; i++){
    merge1.push(arr2[i])
}

console.log(merge1)