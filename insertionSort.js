const arr = [29, 10, 14, 37, 14, 33, 8, 11]

const insertionSort = (nums) => {

    for(let i = 1; i < nums.length; i++){
        let key = nums[i]
        let j = i-1
        while(j>=0 && nums[j] > key){
            nums[j+1] = nums[j]
            j--
        }
        nums[j+1] = key
    }
    return nums
}

console.log(insertionSort(arr))