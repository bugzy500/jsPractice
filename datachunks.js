function chunk(arr, size){
    let result = []
    for(let i=0; i< arr.length; i= i + size){
        if(i+size < arr.length)
            result.push(arr.slice(i, i+size))
        else
            result.push(arr.slice(i, arr.length))
    }

    return result
}

const res = chunk([1,2,3,4,5], 5 )

console.log(res)