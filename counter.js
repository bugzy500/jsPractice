// var __counter = 0
// function count() {
//     __counter++
//     return __counter
// }

//globalThis.__counter__ = 0

// function count(){
//     return ++count.counter
// }

// count.__proto__.counter = 0


const count = (() => {
    let counter = 0
    function abc(){
        return ++counter
    }

    abc.reset = function(){
        counter = 0
    }

    return abc

})()
console.log(count())
console.log(count())
console.log(count())

count.reset()

console.log(count())
console.log(count())
