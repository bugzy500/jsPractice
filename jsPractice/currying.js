let multi = (a,b) => a*b;

let multi2 = multi.bind(null,2)

let temp = multi.call(null, 2,5)

console.log(temp)

console.log(multi2(3))

console.log(multi(2,3))


console.log(Math.max.call(null,2,56,1,5))