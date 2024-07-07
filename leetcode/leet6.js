var convert = function(s, numRows) {
    if(numRows == 1)
        return s
    const twoD = new Array(numRows)
    let counter = 0
    let i = 0
    let j = 0
    twoD[i] = new Array()

    while(i < numRows && counter < s.length){
        if(j%(numRows-1) == 0){
            twoD[i][j] = s[counter]
            counter++
            i++
            if(i < numRows && j == 0)
                twoD[i] = new Array()
            if(i == numRows){
                i = 0
                j++
                continue
            }
        }
        else {
            twoD[numRows-i-2][j] = s[counter]
            counter++
            i++
            j++
            if(j%(numRows-1) == 0)
                i = 0
        }
    }


    let result = twoD.reduce((acc, cv) => {
        acc = acc + cv.join('')
        return acc
    }, '')

    //console.log(result)

    return result
};

console.log(convert('PAYPALISHIRING', 4))
// console.log(convert('PAYPALISHIRING', 1))