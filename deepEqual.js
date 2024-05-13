function isDeepEqual(obj1, obj2) {
    // Check if both parameters are of type 'object'
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }
    
    // Check if both parameters are null
    if (obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }

    // Check if both parameters are Date objects
    if (obj1 instanceof Date && obj2 instanceof Date) {
        return obj1.getTime() === obj2.getTime();
    }

    // Check if both parameters are Arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) {
            return false;
        }
        for (let i = 0; i < obj1.length; i++) {
            if (!isDeepEqual(obj1[i], obj2[i])) {
                return false;
            }
        }
        return true;
    }

    // Check if both parameters are Maps
    if (obj1 instanceof Map && obj2 instanceof Map) {
        if (obj1.size !== obj2.size) {
            return false;
        }
        for (let [key, value] of obj1.entries()) {
            if (!obj2.has(key) || !isDeepEqual(value, obj2.get(key))) {
                return false;
            }
        }
        return true;
    }

    // Check if both parameters are Objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key) || !isDeepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}
