/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    return arr.myFilter(fn)
};

Array.prototype.myFilter = function (callback){
    const result = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i))
            result.push(this[i])
    }
    return result
}