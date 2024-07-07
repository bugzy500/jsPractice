//valid parenthesis

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const myBracketMap = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    const arr = []

    for(let i = 0; i < s.length; i++){
        if(!myBracketMap[s[i]]){
            arr.push(s[i])
        }
        else {
            let temp = arr.pop()
            if(temp !== myBracketMap[s[i]])
                return false
        }
    }

    if(arr.length !== 0)
        return false

    return true
    
};

