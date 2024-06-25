//memoize


/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        if(cache.has(args.toString()))
            return cache.get(args.toString())
        else{
            cache.set(args.toString(), fn.apply(null, args))
            return cache.get(args.toString())
        }
    }
}