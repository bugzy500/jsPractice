const lengthOfLongestSubstring = function(s) {

    if(s.length == 1)
        return 1

    let mySet = new Set()
    let maxLength = 0
    let tempLength = 0
    for(let i = 0; i < s.length; i++){
        if(mySet.has(s[i])){
            maxLength = Math.max(maxLength, tempLength)
            tempLength = 0
            mySet.clear()
            i--
        }
        else {
            tempLength++
            mySet.add(s[i])
        }
    }

    console.log(tempLength, maxLength, mySet.size)

    if(maxLength == 0 || mySet.size !== 0)
        maxLength = Math.max.apply(null, [tempLength, maxLength, mySet.size])

    console.log(maxLength)
};

var lengthOfLongestSubstring2 = function(s) {
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;  

};

let s = "dvdf"

lengthOfLongestSubstring(s)