var isSubsequence = function(s, t) {
    let c = 0
    for(let i = 0; i < t.length; i++){
        if(t[i] == s[c])
            c++
    }
    if(c>s.length)
        return true

    return false
};

