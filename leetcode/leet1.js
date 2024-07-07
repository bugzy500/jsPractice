var twoSum1 = function(nums, target) {
    const myObj = {}
    let res = []
    for(let i = 0; i < nums.length; i++){
        if(myObj[target - nums[i]] !== undefined){
            console.log('in if')
            res = [i, myObj[target - nums[i]]]
        }

        myObj[nums[i]] = i
        console.log(myObj)
    }
    return res
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const myMap = {}

    for(let i = 0; i < nums.length; i++){
        if(myMap[target - nums[i]] !== undefined)
            return [myMap[target - nums[i]], i]
        else
            myMap[nums[i]] = i
    }
};

const nums = [2,7,11,15]

twoSum(nums, 9)