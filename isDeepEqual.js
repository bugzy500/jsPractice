function isDeepEqual(object1, object2) {

    if (object1 === object2)
        return true

    if (typeof object1 === 'object' && typeof object2 === 'object' && object1 !== null && object2 !== null) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            if (!genericIsEqual(object1[key], object2[key])) {
                return false;
            }
        }

        return true;
    }

    return false


}

/**
 * Function that verifies if two values are deeply equal.
 * It supports: primitives, objects, arrays, maps, sets and dates.
 */
function genericIsEqual(value1, value2) {
    if (isPrimitive(value1) && isPrimitive(value2)) {
        return value1 === value2;
    }

    if (Array.isArray(value1) && Array.isArray(value2)) {
        return isArrayDeepEqual(value1, value2);
    }

    if (value1 instanceof Map && value2 instanceof Map) {
        return isMapDeepEqual(value1, value2);
    }

    if (value1 instanceof Date && value2 instanceof Date) {
        return isDateDeepEqual(value1, value2);
    }

    if (typeof value1 === "object" && typeof value2 === "object") {
        return isDeepEqual(value1, value2);
    }

    return false;
}

function isPrimitive(value) {
    if (value === null || value === undefined || Number.isNaN(value)) {
        return true;
    }

    return typeof value !== "object" && typeof value !== "function";
}

function isArrayDeepEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (!genericIsEqual(array1[i], array2[i])) {
            return false;
        }
    }

    return true;
}

function isMapDeepEqual(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }

    for (const [key, value] of map1) {
        if (!genericIsEqual(value, map2.get(key))) {
            return false;
        }
    }

    return true;
}

function isDateDeepEqual(date1, date2) {
    return date1.getTime() === date2.getTime();
}

const obj1 = { a: 2, b: [1] }
const obj2 = { b: [1], a: null }

console.log(isDeepEqual(obj1, obj2))