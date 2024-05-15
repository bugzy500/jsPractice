const radiuses = [2, 4, 6]

const circumference = (num) => 2*3.14*num

const area = (num) => 3.14*num*num

function calculate(arr, callback){
    return arr.myMap(callback)
}

Array.prototype.myMap = function(callback){
    const res = []
    const arr = this
    for(let i =0; i < arr.length; i++){
        res.push(callback(arr[i]))
    }
    return res
}

const res = calculate(radiuses, area)



//radiuses.calulate(area)

console.log(res)