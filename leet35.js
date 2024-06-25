// search insert position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length == 1){
        if(target <= nums[0])
            return 0
        else
            return 1
    }

    if(target < nums[0])
        return 0

    for(let i = 1; i < nums.length; i++){
        if(nums[i] == target)
            return i
        if(target > nums[i-1] && target <= nums[i])
            return i
        if(target >= nums[i-1] && target < nums[i])
            return i-1
        if(i+1 == nums.length - 1){
            if (target > nums[i+1])
                return i+2
            else
                return i+1
        }
        if(i+1 > nums.length - 1)
            return i+1
    }
};

var searchInsertE = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;    
};
