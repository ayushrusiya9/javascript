let str1 = "silent"
let str2 = "listen"

let arr1 = str1.split("")
let arr2 = str2.split("")

// arr1.sort()
// arr2.sort()
console.log(arr1)
console.log(arr2)

for(let i = 0; i < arr1.length; i++){
    if(arr1[i] < arr1[i+1]){
        let temp = arr1[i]
        arr1[i] = arr1[i+1]
        arr1[i+1] = temp
    }
}
for(let i = 0; i < arr2.length; i++){
    if(arr2[i] < arr2[i+1]){
        let temp = arr2[i]
        arr2[i] = arr2[i+1]
        arr2[i+1] = temp
    }
}

str1 = arr1.join("")
str2 = arr2.join("")
 console.log(str1)
 console.log(str2)

if (str1 == str2){
    console.log("anagram")
} else{
    console.log("not anagram")
}


