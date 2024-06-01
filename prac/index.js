const pr1 = new Promise((res, rej) => {
    setTimeout(()=>{
        res('done1')
    }, 3000)
})

function pr2(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('done2')
        },5000)
    })
}

const ab = pr2()

// ab.then(function (res){
//     console.log(res)
// })



// const cbFn = (val) => console.log(val)
// function cbFn(){
//     console.log()
// }

async function someFunction(){
    const res = await pr2()
    return res
}

// function abc(a, ...params){
//     return params
// }

// const arrStore = [1,2,4,5]

// console.log(abc(...arrStore))

//console.log(someFunction())

function arg(){
    console.log(arguments[0])
}
//arg(1, 2)

const ar1 = [1, 2, 5, 6]

const multi3 = (e) => (e*3)

const ar3 = ar1.map(multi3)

//console.log(ar3)


const ar2 = ar1.reduce((acc, cv, i, arr) => {
    acc.push(cv*3)
    return acc 
},[])

Array.prototype.myMap = function (callback, thisArg){
    let context = this
    let result = []
    for(let i=0; i< context.length; i++){
        result.push(callback.call(thisArg || context, context[i], i, context))
    }
    return result
}

console.log('myMap', ar1.myMap(multi3))

Array.prototype.myReduce = function (callback, initialValue){
    let contextArray = this
    let accumulator = initialValue ?? contextArray[0];
    let startIndex = initialValue !== null && initialValue !== undefined ? 0 : 1

    for(let i=startIndex; i<this.length; i++){
        let currentValue = this[i]
        accumulator = callback.call(contextArray, accumulator, currentValue, i, contextArray)
    }

    return accumulator
}


console.log('----------')
console.log('myReduce', ar1.myReduce( (acc, cv) => {
    acc.push(cv*3)
    return acc 
}, []))