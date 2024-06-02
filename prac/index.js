// const pr1 = new Promise((res, rej) => {
//     setTimeout(()=>{
//         res('done1')
//     }, 3000)
// })

// function pr2(){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res('done2')
//         },5000)
//     })
// }

// const ab = pr2()

// ab.then(function (res){
//     console.log(res)
// })


// const cbFn = (val) => console.log(val)
// function cbFn(){
//     console.log()
// }

// async function someFunction(){
//     const res = await pr2()
//     return res
// }

// function abc(a, ...params){
//     return params
// }

// const arrStore = [1,2,4,5]

// console.log(abc(...arrStore))

// console.log(someFunction())

// const tempArr = []

// function arg(){
//     console.log('pop')
// }

// console.log('47', typeof arg, typeof tempArr)

// arg(1, 2)

// const ar1 = [1, 2, 5, 6]

// const multi3 = (e) => (e*3)

// const object1 = {
//     name: 'Akash',
//     printName: function(){
//         return this.name
//     }
// }

// const random = (name) => {
//     let context = 'Sharma'
//     return {
//         printName: function (){
//             if(name === 'Akash')
//                 return context
//             else
//                 return 'Arpit'
//         }
//     }
// }

// class Counter {
//     constructor(n, a) {
//         this.name = n
//         this.age = a
//     }
// }


// const count1 = new Counter('A', 25)

// console.log('constr', typeof Counter)

// const r1 = random('Akasha')

// console.log(r1.printName())

// console.log('printname', object1.printName())

// const ar3 = ar1.map(multi3)

// console.log(ar3)




// const ar2 = ar1.reduce((acc, cv, i, arr) => {
//     acc.push(cv*3)
//     return acc 
// },[])

// Array.prototype.myMap = function (callback, thisArg){
//     let context = this
//     let result = []
//     for(let i=0; i< context.length; i++){
//         result.push(callback.call(thisArg || context, context[i], i, context))
//     }
//     return result
// }

// console.log('myMap', ar1.myMap(multi3))

// Array.prototype.myReduce = function (callback, initialValue){
//     let contextArray = this
//     let accumulator = initialValue ?? contextArray[0];
//     let startIndex = initialValue !== null && initialValue !== undefined ? 0 : 1

//     for(let i=startIndex; i<this.length; i++){
//         let currentValue = this[i]
//         accumulator = callback.call(contextArray, accumulator, currentValue, i, contextArray)
//     }

//     return accumulator
// }


// console.log('----------')
// console.log('myReduce', ar1.myReduce( (acc, cv) => {
//     acc.push(cv*3)
//     return acc 
// }, []))



// call, apply, bind


function user(name) {
    this.name = name
    return {
        printName: function () {
            return this.name
        }
    }
}

const result1 = user('Arpit').printName.bind({ name: 'Akash' })

console.log(result1())

const user2 = {
    name: 'Arpit',
    printName: () => this.name
}


// console.log(user2.printName.call({name: 'Akash'}))

const obj2 = {
    name: 'A',
    age: 28
}

const obj3 = obj2 //by ref

obj3.place = 'J'

console.log(obj2, obj3)

const arr1 = [1, 2, 4]

const arr2 = arr1

arr1[2] = 90

console.log(arr1, arr2)


let str1 = 'abcd'

let str2 = str1 //by val

str1 = str1[0].toUpperCase() + str1.slice(1, str1.length)

console.log(str1, str2)

// primitives > string, number, boolean, undefined

console.log('u', typeof [])

function sum(a) {
    return function (b) {
        if (b)
            return sum(a + b)
        else
            return a
    }
}


const resCurry = sum(1)(2)(3)(4)()

console.log(resCurry) //3


function a() {
    for (var i = 1; i <= 5; i++) {
        (function (res){
            setTimeout(() => {
                console.log(res);
            }, i * 1000)
        })(i)
    }
    console.log("Hello")
}

a();