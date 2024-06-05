var removeDuplicates = function(nums) {
    let common = nums[0]
    let k = 1
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== common){
            nums[k] = nums[i]
            k++
            common = nums[i]
        }
    }
    console.log(nums,k)
    return k
};

const nums = [0,0,1,1,1,2,2,3,3,4]

removeDuplicates(nums)