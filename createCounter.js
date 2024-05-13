function createCounter(initialValue) {
    let current = initialValue
    return {
        getValue: function(){ return current},
        increment: function() {
            current++
        },
        decrement: function(){
            current--
        }
    }
}

const counter = createCounter(11);

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getValue()); // should print 14
console.log(typeof 12)

console.log([1,2,3].reverse())