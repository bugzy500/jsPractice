function flow(...functions) {
    return function (...args) {
        return functions.reduce((acc, cfn) => {
            args = Array.isArray(args) ? args : [args]
            acc = cfn.call(null, ...args)
            args = Array.isArray(acc) ? [acc] : acc
            return acc
        }, undefined)
    }
}

const add = (a, b) => a + b;
const square = (a) => a ** 2;

const run = flow(add, square, square);

console.log(run(1, 2)); // 81

//const doubleNumbers = (numbers) => numbers.map((item) => item * 2);

//console.log(doubleNumbers.apply(null, [1,2,4]))