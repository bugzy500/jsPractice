var nArray= [2,3,45,1,16,8,4,17]

var maxValue = nArray[0]>nArray[nArray.length-1] ? nArray[0] : nArray[nArray.length-1]

const temp = nArray.map((element, i, nArray) => maxValue);

nArray = temp

arr =''

console.log(temp)

console.log(!arr)
