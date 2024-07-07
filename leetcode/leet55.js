/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let runLoop = true
    let i = 0
    let result = false
    while(runLoop){
        if(nums[i] == 0){
            result = false
            break
        }

        if(nums[i] >= nums.length){
            nums[i] = nums[i] - 1
            continue
        }
        else {
            i = i + nums[i]
        }

        if(i >= nums.length - 1){
            result = true
            break
        }

        if(nums[i] == 0){
            i = 0

            nums[i] = nums[i] - 1
            if(nums[i] == 0)
                nums.shift()

            if(canJump(nums))
                result = true
            else
                break
        }
    }

    return result
};
// ^^ doesnt pass 9  test cases


// passes all test cases
var canJump2 = function(nums) {
    let goal = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }

    return goal === 0;
};

const nums = [1,1,2,2,0,1,1]

console.log(canJump(nums))