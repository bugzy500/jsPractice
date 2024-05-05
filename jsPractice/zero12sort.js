const arr = [0, 1, 0, 2, 0, 3, 0, 4, 0, 5,2]

let counter = 0;

let result = arr.sort((a,b) => {
    counter++
    return (a==0 || b==0?a-b:b-a)
})

console.log(result,counter)

let arr2=[2,1,6,1,2,1,0]

const mySet = new Set(arr2)

arr2 = [...mySet]

console.log(arr2)

let arr3 = new Int8Array([1, 34, 61, 1, 8, 52, 0])

arr3.sort()

console.log(arr3)