function areDeepEquals(obj1, obj2) {
    if (obj1 === obj2)
        return true

    if (Array.isArray(obj1) && Array.isArray(obj2)) {

        if (obj1.length !== obj2.length)
            return false

        return obj1.every((value, index) => {
            return areDeepEquals(value, obj2[index])
        })
    }

    if (typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 !== null && obj2 !== null) {
        // if values were arrays or primitives they would've been handled in above line 5, now task is to compare if we have objects
        if (Array.isArray(obj1) || Array.isArray(obj2)) return false

        // from here we handle objects
        const keys1 = Object.keys(obj1)
        const keys2 = Object.keys(obj2)

        if (keys1.length !== keys2.length)
            return false

        if (!keys1.every((key) => keys2.includes(key)))
            return false

        if (!keys1.every((key) => { return areDeepEquals(obj1[key], obj2[key]) }))
            return false

        return true

    }

    return false
}

const obj1 = { a: 2, b: [1] }
const obj2 = { b: [1], a: 2 }

console.log(areDeepEquals(obj1, obj2))