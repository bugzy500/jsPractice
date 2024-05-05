//const numarr = [11,22,36,7,2]
let numarr = [11,22,36,7,2]

let boolArr = [true, false, true, false, false]

// numarr = numarr.map((element) => {
//     return element*2
// }) 

numarr.forEach((element,index) => {
    numarr[index] = element*2
    console.log(numarr[index])
}) 

console.log(numarr)
//console.log(mnumarr)

//if we don't return, we get undefined
//map returns an array
//const numarr won't work since we are not changing the values in array, we are changing the whole array

//foreach will always return unefined so no point havin it in RHS after = (basically for assignment)

numarr.sort((a,b) => {return a-b})

console.log(numarr)

boolArr.sort((a,b) => {return a-b})

console.log(boolArr)

numarr.reduce()