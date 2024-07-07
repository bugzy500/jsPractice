// summary ranges

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = []
    let start = nums[0]
    let end = nums[0]
    for(let i = 0; i < nums.length; i++){
        if(nums[i+1] == nums[i] + 1){
            end++
        }
        else {
            if(start !== end)
                result.push(`${start}->${end}`)
            else
                result.push(`${start}`)

            start = nums[i+1]
            end = nums[i+1]
        }
    }

    return result
};