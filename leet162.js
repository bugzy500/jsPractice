// find peak element


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length == 1)
        return 0
    
    if(nums.length == 2)
        return nums[0] >= nums[1] ? 0 : 1;

    let max = 0
    
    for(let i = 1; i < nums.length - 1; i++){
        if(nums[i-1] < nums[i] && nums[i] > nums[i+1]){
            if(nums[i] > nums[max])
                max = i
        }
        if(i+1 == nums.length - 1)
            return nums[i+1] > nums[max] ? i+1 : max
    }

    return max
};

const nums = [1,2,1,3,5,6,4]

console.log(findPeakElement(nums))
