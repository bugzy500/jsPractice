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

const nums = [2,7,11,15]

console.log(twoSum1(nums, 9))