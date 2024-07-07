// factorial trailing zeroes

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {

    if(n == 0)
        return 0

    function factorial(n){
        if(n == 1)
            return BigInt(1)
        else {
            return BigInt(n)*factorial(n-1)
        } 
    }

    let fac = BigInt(factorial(n))
    //console.log(fac)

    let count = 0

    while(BigInt(fac) > BigInt(0)){
        if((BigInt(fac) % BigInt(10)) === BigInt(0)){
            //console.log('inif')
            fac = BigInt(fac)/BigInt(10)
            count++
        }
        else
            break
    }

    return count
};

console.log(trailingZeroes(30))
