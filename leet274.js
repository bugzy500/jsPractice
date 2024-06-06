var hIndex = function(citations) {
    
    if(citations.length == 1 && citations[0] == 0)
        return 0
    
    if(citations.length == 1)
        return 1
    
    let c = 0
    let result = citations[0];
    let resChanged = false

    for(let i = 0; i < citations.length; i++){
        if(citations[i] == 0)
            continue
        for(let j = 0;  j< citations.length; j++){
            if(citations[j] - citations[i] >=0){
                c++

                if(c == citations[i] && citations[i] >= result){
                    result = citations[i]
                    resChanged = true
                    console.log('innit', c, result)
                }
            }
        }
        c = 0
    }

    if(resChanged)
        return result
    else
        return 1
};

var hIndex2 = function(citations) {
    citations.sort((a, b) => b - a);
    let i = 0;
    while (citations[i] > i) i++;
    return i;
  };

const citations = [0,0]

console.log(hIndex(citations))