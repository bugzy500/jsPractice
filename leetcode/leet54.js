// spiral matrix
const matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20], [21,22,23,24,25]]
// const matrix = [[1,2,3],[4,5,6],[7,8,9]]
// const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

var spiralOrder = function(matrix) {
    let i = 0;
    let j = 0;
    let m = matrix.length
    let n = matrix[0].length
    let result = []

    while(i < m){
        if(result.length == matrix.length * matrix[0].length)
            break
        if(j == -1){
            i--
            j = 0
        }
        if( i == 1 && j == 0){
            result.push(matrix[i][j])
            console.log('outer complete')
            m--
            n--
            i = 1
            j = 1
        }
        while(j<n){
            result.push(matrix[i][j])
            if(j == 0 && i > 0){
                i--
                break
            }
            if(i == m-1){
                j--
                break
            }
            if(j == n-1){
                i++
                continue
            }
            j++
        }
    }
    console.log(result)
};

spiralOrder(matrix)