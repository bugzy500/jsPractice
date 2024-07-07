var lengthOfLastWord = function(s) {
    let count = 0
    let foundWord = false
    for(let i = s.length-1; i >=0; i++){
        if(s[i] !== ' '){
            foundWord = true
            count++
        }

        if(s[i] == ' ' && !foundWord)
            break
    }

    return count
};

const s = "Hello World"

let res = lengthOfLastWord(s)
console.log(res)