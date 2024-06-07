/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let p1 = 0
    let p2 = height.length - 1
    let maxArea = 0
    while (p1 < p2){
        maxArea = Math.max(maxArea, (p2-p1) * Math.min(height[p1], height[p2]))

        if(height[p1] < height[p2])
            p1++
        else
            p2--
    }

    return maxArea

};