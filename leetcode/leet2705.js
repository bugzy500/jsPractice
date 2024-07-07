// compact object

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    let i = 0
    Object.keys(obj).forEach((key) => {
        if(!Array.isArray(obj))
            i = key

        if((obj[i] === null || typeof obj[i] !== 'object') && !Boolean(obj[i])){
            if(Array.isArray(obj)){
                let temp = obj[i]
                obj = obj.filter((val) => val !== temp)
                i--
            }
            else
                delete obj[i]
        }
        else {
            if(typeof obj[i] === 'object')
                obj[i] = compactObject(obj[i])
        }
        i++
    })
    return obj
};

const obj = {"a": null, "b": [2, 0, false, 1]}

console.log(compactObject(obj))