//writ a function that check if a nmber is prime 
function checkPrime(n){
    if(n == 1){
        return `${n} is a prime number`
    }
    if(n == 2){
        return `${n} is a prime number`
    }
    let i = 2;
    while(i < n){
        if(n % i == 0 ){
            return `Given number ${n} is not a prime number`
        }
        i++;
    }
    return `Given number ${n} is prime number`;
}



let number = parseInt(prompt("Enter any number"))
let result = checkPrime(number)
alert(result)
