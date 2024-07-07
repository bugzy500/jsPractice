// search value in 2d matrix


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length

    let left = 0
    let right = rows*cols-1

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        let mid_val = matrix[Math.floor(mid / cols)][mid % cols];

        if (mid_val === target)
            return true;
        else if (mid_val < target)
            left = mid + 1;
        else
            right = mid - 1;
    }

    return false

};