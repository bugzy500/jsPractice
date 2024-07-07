const nums = [6,5,5]

function majorityElement(nums){
    const map = new Map()
    for(let i=0; i< nums.length; i++){
        if(map.has(nums[i])){
            let val = map.get(nums[i]) + 1
            map.set(nums[i], val)
            //console.log('check', map)
            if(map.get(nums[i]) > (nums.length)/2)
                return nums[i]
        }
        else {
            map.set(nums[i], 1)
        }
    }
    return nums[0]
}
//Moore Voting algo
function majorityElement2(nums){
    let candidate = -1
    let count = 0
    nums.forEach(val => {
        if(count == 0){
            candidate = val
            count = 1
        }
        else {
            if(val == candidate)
                count++
            else
                count--
        }
    })

    count = 0
    nums.forEach(val => {
        if(val == candidate)
            count++
    })

    if(count > (nums.length/2))
        return candidate

    return -1
}

console.log(majorityElement(nums))