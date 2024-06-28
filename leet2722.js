// join two arrays by ID

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const all = [...arr1, ...arr2]
    const myMap = {}
    all.forEach((obj) => {
        if(!myMap[obj.id]){
            myMap[obj.id] = obj
        }
        else {
            myMap[obj.id] = {...myMap[obj.id], ...obj}
        }
    })
    return Object.values(myMap)
};