/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if(arr.length == 0)
        return []
    
    let subArrays = Math.floor(arr.length/size) + 1
    if(size == 1)
        subArrays = arr.length
    const result = new Array(subArrays).fill('').map(() => [])
    let pos = 0
    let index = 0
    for(let i = 0; i < arr.length; i++){
        result[index].push(arr[i])
        pos++
        if(pos == size){
            pos = 0
            index++
        }
    }

    return result
};
