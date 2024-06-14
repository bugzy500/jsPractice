//ransom note
var canConstruct = function(ransomNote, magazine) {
    const myMap = new Map()
    let result = true
    for(let i = 0; i < magazine.length; i++){
        if(myMap.has(magazine[i])){
            myMap.set(magazine[i], myMap.get(magazine[i]) + 1)
        }
        else {
            myMap.set(magazine[i], 1)
        }
    }

    for(let i = 0; i < ransomNote.length; i++){
        if(myMap.has(ransomNote[i])){
            if(myMap.get(ransomNote[i]) == 0){
                result = false
                break
            }
            myMap.set(ransomNote[i], myMap.get(ransomNote[i]) - 1)
        }
        else {
            result = false
            break
        }
    }

    return result
};

const ransomNote = "a"
const magazine = "b"

console.log(canConstruct(ransomNote, magazine))


