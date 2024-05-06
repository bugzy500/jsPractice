// var str = "w3resource";
// var finalStr = "";

// var strLength = str.length;

// var lElement = str.slice(strLength-1, strLength-1)

// console.log(lElement)
// console.log(str)

// for(let i = strLength - 1; i>=0  ;i--)
// {   
    
//     //finalStr = str[i] + str[i-(str.length -1)];
//     finalStr = lElement + str;
//     console.log(finalStr)
// }

var str2= "w3resource";

//substring > 2nd parameter index is not inclusive
//slice(n) > only 1 parameter removes the number of elements specified(n) from the first (if n is positive) or last position (if n is negative)
var finalStr = str2;

function rotation()
{
    let last = finalStr.slice(-1);
    finalStr = last + finalStr
    finalStr = finalStr.substring(0, str2.length );
    console.log(finalStr)
}

setInterval(rotation,1000)

//console.log(finalStr)



