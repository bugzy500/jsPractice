var removeElement = function(nums, val) {
    nums.sort((a, b) => {
        if (a !== val && b === val) return -1;
        if (a === val && b !== val) return 1;
        return 0;
    })

    let k = 1

    for(let i = 0; i< nums.length; i++)
    {
        if(nums[i]==val){
            k = i
            break
        }
        if(i == nums.length-1)
            k = nums.length
    }
    console.log(nums)
    return k
};

const nums = [3,2,2,3]
let val = 3

let k = removeElement(nums, val)

console.log('k=',k)