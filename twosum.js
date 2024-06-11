const arr = [1,6,2,15]

let target = 7
let res = []
let res2 = []
let found = false

function twoSum(arr, target){
    const temp = [...arr]
    let count = 0
    const hashMap = new Map()

    //O(n^2)
    for(let i=0; i< arr.length; i++){
        count++
        let p1 = arr[i]
        for(let j=i+1; j < arr.length; j++){
            let p2 = arr[j]
            console.log(p1,p2)
            if(p1+p2 === target){
                res.push(i,j)
                found = true
                break
            }
        }
        if(found)
            break
    }

    //O(n)
    arr.forEach((num ,index) => {
        let find = target - num
        if(hashMap.has(find)){
            res2.push(index, hashMap.get(find))
        }
        else {
            hashMap.set(num, index)
        }
    })

    console.log('count', hashMap)
}

console.log(twoSum(arr, target), res2)