// isomorphic strings

var isIsomorphic = function(s, t) {
    if(s.length !== t.length)
        return false

    function checker(s, t){
        const changeMap = {}
        for(let i = 0; i < s.length; i++){
            if(changeMap[s[i]] && t[i] !== changeMap[s[i]]){
                return false
            }
            changeMap[s[i]] = t[i]
        }
        return true
    }

    return checker(s,t) && checker(t,s)
};

var isomorphs = function(s,t){
    if(s.length !== t.length)
        return false

    function checker(s, t){
        //console.log('start', 's:', s, 't:', t)
        const changeMap = {}
        for(let i = 0; i < s.length; i++){
            if((!changeMap[s[i]]) || t[i] == changeMap[s[i]]){
                changeMap[s[i]] = t[i]
                s = s.slice(0,i) + s.slice(i).replace(s[i], t[i])
                //console.log('ss', s, changeMap)
            }
        }
        //console.log('end', 's:', s, 't:', t)
        return s === t
    }

    //console.log(s, t, changeMap)
    return checker(s,t) && checker(t,s)
}

const s = "baba"
const t = "badc"

console.log(isomorphs(s,t))

//isIsomorphic(s,t)