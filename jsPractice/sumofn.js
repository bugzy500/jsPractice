

let sum = function(a){
    return function(b){
        if(b)
            return sum(a+b)
        else
            return a
    }
}

let res = sum(1)(2)(3)()

console.log(res)