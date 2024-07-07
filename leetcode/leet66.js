// plus one

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let len = digits.length

    if(digits[len-1] < 9){
        digits[len-1] = digits[len-1] + 1
        return digits
    }

    if(digits[len-1] == 9){
        digits.push(0)
        len = len - 1
        while(len >= 0){
            if(digits[len] == 9){
                if(len == 0)
                    digits[len] = 1
                else
                    digits[len] = 0
            }
            else{
                digits[len] = digits[len] + 1
                digits.pop()
                break
            }
            len--
        }
    }

    return digits

};


let digits = [7, 9]

console.log(plusOne(digits))
