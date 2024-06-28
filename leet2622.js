// cache with time limit


var TimeLimitedCache = function() {
    this.cacheMap = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    if(this.cacheMap.has(key)){
        clearTimeout(this.cacheMap.get(key)[1])
        let ref = setTimeout(() => {
            //console.log(this.cacheMap)
            this.cacheMap.delete(key)
        }, duration)
        this.cacheMap.set(key, [value, ref])
        return true
    }
    else if(!this.cacheMap.has(key)){
        let ref = setTimeout(() => {
            //console.log(this.cacheMap)
            this.cacheMap.delete(key)
        }, duration)
        this.cacheMap.set(key, [value, ref])
        return false
    }
    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.cacheMap.get(key)){
        let val = this.cacheMap.get(key)
        return val[0]
    }
    else
        return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cacheMap.size
};


const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1
