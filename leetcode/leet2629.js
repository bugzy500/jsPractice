/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        for(let i = functions.length - 1; i >= 0 ; i--){
            x = functions[i](x)
        }
        return x
    }
};

const functions = [x => x + 1, x => x * x, x => 2 * x]

// let res = functions[0](4)

let x = 4

//console.log(compose(functions)(x))
