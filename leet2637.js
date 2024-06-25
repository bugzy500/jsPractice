// promise time limit
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded")
            },t)
            fn(...args).then((response) => resolve(response)).catch(reject)
        })
    }
};


