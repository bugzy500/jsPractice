const nums = [1,2,3,4,5,6,7]

function rotate(nums, k){
    k = k % nums.length
    const result = []
    //console.log(nums, k)
    for(let i = nums.length - k; i < nums.length; i++ ){
        //console.log('1')
        result.push(nums[i])
    }
    for(let i = 0; i < nums.length - k; i++){
        //console.log('2')
        result.push(nums[i])
    }

    console.log(result)
}

function eRotate(nums,k){
    k = k % nums.length

    const reverse = (arr, start, end) => {
        let p1 = start
        let p2 = end - 1
        for(let i = start; i < end; i++){
            if(p1 >= p2)
                break

            arr[p1] = arr[p1] + arr[p2]
            arr[p2] = arr[p1] - arr[p2]
            arr[p1] = arr[p1] - arr[p2]
            p1++
            p2--
        }
        return arr
    }

    reverse(nums, 0, nums.length)
    console.log('start', nums)
    reverse(nums, 0, k)
    console.log('mid', nums)
    reverse(nums, k, nums.length)
    console.log('final', nums)

}

eRotate(nums,3)