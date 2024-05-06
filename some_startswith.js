const nArr = [1,5,2,6,10]

const strArr = ["Hi, nice to meet you.", "Hello, how are you?"]

let res = nArr.some((element) => {
    return element>10
})

let res2 = nArr.every((element) => {
    return element>0
})

let res3 = strArr.some((ele) => ele.startsWith("Ho"))

console.log(res,res2,res3)