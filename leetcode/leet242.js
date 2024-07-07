// valid anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length)
        return false
    
    const sMap = {}
    const tMap = {}

    for(let i = 0; i < s.length; i++){
        if(sMap[s[i]])
            sMap[s[i]] +=1
        else
            sMap[s[i]] = 1

        if(tMap[t[i]])
            tMap[t[i]] +=1
        else
            tMap[t[i]] = 1
    }

    for(let val in sMap){
        if(sMap[val] !== tMap[val])
            return false
    }

    // const sSet = new Set(s)
    // const tSet = new Set(t)

    // for(let val of sSet){
    //     if(!tSet.has(val))
    //         return false
    // }

    return true
};