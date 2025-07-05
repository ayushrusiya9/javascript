// // for(let a = 2; a <= 3; a++){
// //     for(let b = 1; b <= 10; b++){
// //         console.log(a * b)
// //     }
// // }

// // for(let a = 1; a <= 5; a++){
// //     for(let b = 1; b <= 5; b++){
// //         document.write('*')
// //     }
// //     document.write('<br>')
// // }

// for(let a = 1; a <= 5; a++){
//     for(let b = 1; b <= 5; b++){
//         if(a == 1 || a == 5 || b == 1 || b == 5){
//             document.write('*')
//         } else {
//             document.write('&nbsp&nbsp')
//         }
//     }
//     document.write('<br>')
// }


//x patern

for(let r = 1; r <= 5; r++){
    for(let c = 1; c <=5; c++){
        if(r == c || r + c == 6){
            document.write('*')
        }
        else{
            document.write('&nbsp&nbsp')
        }
    }
    document.write('<br>')
}