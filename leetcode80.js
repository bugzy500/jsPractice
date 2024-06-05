var removeDuplicates = function(nums) {
    let common = nums[0]
    let k = 1
    let commonCount = 1
    let flag = true
    for(let i = 1; i < nums.length; i++){

        if(nums[i] == common)
            commonCount++

        if(commonCount == 2 && flag){
            nums[k] = nums[i]
            k++
            flag = false
        }

        if(nums[i] !== common){
            nums[k] = nums[i]
            k++
            common = nums[i]
            commonCount = 1
            flag = true
        }
    }
    //console.log(nums,k)
    return k
};

const nums = [1,1,1,2,2,3]

removeDuplicates(nums)