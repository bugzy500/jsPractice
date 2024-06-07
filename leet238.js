var productExceptSelf = function(nums) {
    const lp = [1]
    for(let i = 1; i < nums.length; i++)
        lp.push(lp[lp.length-1] * nums[i-1])
    
    let temp = 1;
    //const rp = new Array(4).fill(1)
    for(let j = nums.length - 2; j >= 0; j--){
        temp = temp * nums[j+1]
        lp[j] = temp * lp[j]
    }

    return lp
};

const nums = [2,2,3,4]

const res = productExceptSelf(nums)

console.log(res)