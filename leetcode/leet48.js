var rotate = function(matrix) {
    let length = matrix.length

    function transpose(matrix){
        for(let i = 0; i < length; i++){
            for(let j = i+1; j < length; j++){
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
            }
        }
    }

    function mirror(matrix){
        for(let i = 0; i < length; i++){
            for(let j = 0; j < length/2; j++){
                [matrix[i][j], matrix[i][length-j-1]] = [matrix[i][length-j-1], matrix[i][j]]
            }
        }
    }

    transpose(matrix)
    mirror(matrix)
    
    return matrix

};

const matrix = [[1,2,3],[4,5,6],[7,8,9]]

rotate(matrix)