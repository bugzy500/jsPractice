const groupingMap = (number) => number % 2 === 0 ? "even" : "odd"

let res = groupingMap.call(null, 2)

console.log(res)
