// Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    if(strs.length == 1)
        return [strs]
    
    if(strs.length == 0)
        return []

    const sortedStrings = strs.map((str) => {
        return str.split('').sort((a, b) => a.localeCompare(b)).join('')
    })

    const hashMap = new Map()

    for(let i = 0; i < sortedStrings.length; i++){
        if(hashMap.has(sortedStrings[i])){
            let temp = hashMap.get(sortedStrings[i])
            temp.push(i)
            hashMap.set(sortedStrings[i], temp)
        }
        else {
            hashMap.set(sortedStrings[i], [i])
        }
    }

    const result = new Array(hashMap.size)
    let j = 0
    for(let [key, value] of hashMap){
        result[j] = new Array()
        for(let i = 0; i < value.length; i++){
            result[j].push(strs[value[i]])
        }
        j++
    }

    return result
};

const strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))

