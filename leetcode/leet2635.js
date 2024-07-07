/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    return arr.myMap(fn)
};

Array.prototype.myMap = function myMap(callback){
    const result = []
    for(let i = 0; i < this.length; i++){
        result[i] = callback.call(null, this[i], i)
    }
    return result
}

const arr = [1,2,3,4]
const cb = (n) => n+1

console.log(map(arr, cb))
