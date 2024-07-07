// contains duplicate

function dup(arr){
    return new Set(arr).size !== arr.length
}