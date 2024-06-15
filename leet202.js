// happy number

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let res = n
    const set = new Set()
    function sumOfSquares(n){
        let digits = n.toString().split('')

        let sumSquares = 0
        for(let i = 0; i < digits.length; i++){
            sumSquares += Math.pow(Number(digits[i]), 2)
        }

        return sumSquares
    }
    
    while(res !== 1){
        res = sumOfSquares(res)

        if(set.has(res))
            return false

        if(res == 1)
            return true
        
        set.add(res)
    }
};

let n = 19

isHappy(n)
