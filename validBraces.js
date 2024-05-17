const code = '{{()[[{}]}}[]'

const bracketMap = new Map([])

bracketMap.set('{', '}')
bracketMap.set('(', ')')
bracketMap.set('[', ']')

function validBraces(codeString){
    let str = []
    for(let val of codeString){
        if(bracketMap.has(val)){
            str.push(val)
        }
        else{
            let temp = str.pop()
            if(val == bracketMap.get(temp))
                continue
            else
                break
        }
    }

    if(str.length == 0) 
        return true

    return false
        
}

console.log(validBraces(code))