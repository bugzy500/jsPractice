function checkPrime(num){
    console.log('here')
    let res = true

    if(num === 1)
        return false

    let start = 2

    while(start < num){
        if(num%start === 0){
            res = false
            break
        }
        start++
    }

    return res
}

//console.log(checkPrime(2))
// print all primes in range inclusive
// printPrime(arr)

const range = [2,100]

function printPrimes(arr){
    const primes = []
    for(let i =arr[0]; i<=arr[1]; i++){
        if(checkPrime(i))
            primes.push(i)
    }
    return primes
}

console.log(printPrimes(range))