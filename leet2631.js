// Group By

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const map = {}

    for(let i = 0; i < this.length; i++){
        if(!map[fn(this[i])]){
            map[fn(this[i])] = [this[i]]
        }
        else {
            map[fn(this[i])].push(this[i])
        }
    }

    return map
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

const arr = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
]

const fn = function (item) { 
    return item.id; 
}

console.log(arr.groupBy(fn))