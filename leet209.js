var minSubArrayLen = function(target, nums) {
    let minLength = Infinity; // Initialize the minimum length as positive infinity

    let sum = 0; // Variable to track the current sum
    
    let left = 0; // Pointer for the left end of the subarray
    
    for (let right = 0; right < nums.length; right++) {
        
        sum += nums[right]; // Add the current element to the sum
        
        while (sum >= target) {
            
            minLength = Math.min(minLength, right - left + 1); // Update the minimum length
            sum -= nums[left]; // Remove the leftmost element from the sum
            left++; // Move the left pointer to the right
        }
    }
    return minLength === Infinity ? 0 : minLength; // Return 0 if no subarray is found
};

const nums = [2,3,1,2,4,3]

let target = 7

console.log(minSubArrayLen(target, nums))