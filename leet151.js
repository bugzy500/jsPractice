/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = ''
    let foundWord = false
    let temp = ''
    for(let i = s.length - 1; i >=0; i--){
        if(s[i] !== ' '){
            foundWord = true
            temp = s[i] + temp
        }

        if(i == 0 && s[i] !== ' '){
            result = result + temp
        }

        if(s[i] == ' ' && foundWord){
            result = result + temp + ' '
            foundWord = false
            temp = ''
        }
    }
    if(result[result.length - 1] !== ' ')
        return result
    else
        return result.trim()
};