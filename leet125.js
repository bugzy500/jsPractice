var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(s)
    let result = true

    for(let i = 0; i <= Math.floor(s.length/2);i++) {
        if(s[i] == s[s.length -i-1])
            continue
        else {
            result = false
            break
        }
    }
    return result
};

let str = "anaccana"

console.log(isPalindrome(str))