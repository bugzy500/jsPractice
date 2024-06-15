// word pattern

var wordPattern = function(pattern, s) {
  
    const sentence = s.split(' ')
    
    if(pattern.length !== sentence.length)
        return false

    const myMap = {}

    for(let i = 0; i < sentence.length; i++){
        if(myMap[pattern[i]] && myMap[pattern[i]] !== sentence[i])
            return false

        myMap[pattern[i]] = sentence[i]
    }

    return true
};