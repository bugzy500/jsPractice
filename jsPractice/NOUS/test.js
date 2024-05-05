const arr = [2,2,3,4,4,5,6,7,7,7]

function uniqueEntries(arr){
    let mySet = new Set(arr)
    const output = [...mySet]
    return output
}

function duplicateNumber(arr){
    let myMap = new Map()
    const output = []
    for(let i=0;i<arr.length;i++)
    {
        if(myMap.has(arr[i]))
        {
            myMap.set(arr[i], myMap.get(arr[i]) + 1)
        }
        else{
            myMap.set(arr[i], 1)
        }
    }
    return myMap
}

const res = duplicateNumber(arr)

console.log(res)
const output = []

for(let [k,v] of res.entries()){
    console.log(k,v)
    if(v > 1)
    {
        output.push(k)
    }
    //console.log(output)
}
console.log(output)

//console.log(uniqueEntries(arr))