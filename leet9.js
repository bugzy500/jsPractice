// palindrome number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)
        return false
    if(x >= 0 && x < 10)
        return true

    // let n = 10
    // let r = -1
    // let digits = 0
    // while(r !== x){
    //     r = x % n
    //     n = n*10
    //     digits++
    // }

    //console.log('digtis', digits, Math.floor(Math.log10(x) + 1))
    let last = 10
    let first = Math.pow(10, Math.floor(Math.log10(x)))

    while(last <= first){
        console.log(Math.floor((x % last)/ (last/10)) , Math.floor(x / first) % 10)
        if(Math.floor((x % last)/ (last/10)) !== Math.floor(x / first) % 10)
            return false

        last = last * 10
        first = first / 10
    }
    
    return true
};

let num = 1221

isPalindrome(num)
