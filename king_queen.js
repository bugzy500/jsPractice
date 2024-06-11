/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    let result = new Array()
    let minAdjacentYLeft = -100
    let minAdjacentYRight = 100
    let minAdjacentXTop = -100
    let minAdjacentXBottom = 100
    let minTopLeftDiagonal = -100
    let minTopRightDiagonal = -100
    let minBottomLeftDiagonal = 100
    let minBottomRightDiagonal = 100
    // possible results
    for(let i = 0; i<queens.length; i++){
        const [x,y] = queens[i]
        if(x == king[0])
            result.push(queens[i])
        
        if(y == king[1])
            result.push(queens[i])

        if(Math.abs(x - king[0]) === Math.abs(y - king[1]))
            result.push(queens[i])
    }
    //blocking moves
    for(let i = 0; i < result.length; i++){

        if(result[i][0] == king[0]){
            if(result[i][1] > king[1]){
                //minAdjacentYRight
                if(result[i][1] < minAdjacentYRight)
                    minAdjacentYRight = result[i][1]
            }
            else {
                //minAdjacentYLeft
                if(result[i][1] > minAdjacentYLeft)
                    minAdjacentYLeft = result[i][1]
            }
        }

        if(result[i][1] == king[1]){
            if(result[i][0] < king[0]){
                //minAdjacentXTop
                if(result[i][0] > minAdjacentXTop)
                    minAdjacentXTop = result[i][0]
            }
            else {
                //minAdjacentXBottom
                if(result[i][0] < minAdjacentXBottom)
                    minAdjacentXBottom = result[i][0]
            }
        }

        if(result[i][0] !== king[0] && result[i][1] !== king[1]){
            if(result[i][0] - king[0] < 0){
            //top left and bottom left
                if(result[i][0] > minTopLeftDiagonal){
                    minTopLeftDiagonal = result[i][0]
                }
                else if(result[i][0] < minBottomLeftDiagonal){
                    minBottomLeftDiagonal = result[i][0]
                }
            }
            else if(result[i][0] - king[0] > 0){
            //top right and bottom right
                if(result[i][0] > minTopRightDiagonal){
                    minTopRightDiagonal = result[i][0]
                }
                else if(result[i][0] < minBottomRightDiagonal){
                    minBottomRightDiagonal = result[i][0]
                }
            }
        }

    }
    result.length = 0

    if(minAdjacentXTop !== -100)
        result.push([minAdjacentXTop, king[1]])
    if(minAdjacentXBottom !== 100)
        result.push([minAdjacentXBottom, king[1]])
    if(minAdjacentYLeft !== -100)
        result.push([king[0], minAdjacentYLeft])
    if(minAdjacentYRight !== 100)
        result.push([king[0], minAdjacentYRight])

    let c = king[1] - king[0] //y = mx+c minTopLeftDiagonal + (king[1] - king[0])]
    if(minTopLeftDiagonal !== -100)
        result.push([minTopLeftDiagonal, 1*minTopLeftDiagonal + c] )
    if(minTopRightDiagonal !== -100)
        result.push([minTopRightDiagonal, 1*minTopRightDiagonal + c])
    if(minBottomLeftDiagonal !== 100)
        result.push([minBottomLeftDiagonal, 1*minBottomLeftDiagonal + c])
    if(minBottomRightDiagonal !== 100)
        result.push([minBottomRightDiagonal, 1*minBottomRightDiagonal + c])

    //todo diagonal cases

    //console.log(minAdjacentXTop, minAdjacentXBottom, minAdjacentYLeft, minAdjacentYRight)

    return result
};


// king is [2,1] // 3,2 | 4,3
