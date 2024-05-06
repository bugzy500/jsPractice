const nArray= [2,3,45,1,16,8,4,17]

const nMap = new Map();
var indexArray;


for(var val in nArray)
{
  nMap.set(val, nArray[val])
}

nArray.sort((a,b) => {return a-b})

var secondLargest = nArray[nArray.length-2]
console.log(nArray)
console.log(secondLargest)
for(var [key,value] of nMap)
{
    if(value == secondLargest)
    {
        indexArray = key
        break;
    }
}

//var findIndex = [...nMap.entries()].filter(({a, b}) => b == secondLargest)

console.log(indexArray)
