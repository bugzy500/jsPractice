function merge(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    if(n==0){
        console.log(nums1)
        return
    }
    for (let i = m + n - 1; i >= 0; i--) {

        if(p1 == -1){
            p1=0
            nums1[p1] = nums2[0]
        }

        if (nums2[p2] > nums1[p1]){
            nums1[i] = nums2[p2]
            p2--
        }
        else {
            nums1[i] = nums1[p1]
            p1--
        }
    }

    console.log(nums1)
}

//submitted solution
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge2 = function(nums1, m, nums2, n) {
    let loopLength = m+n-1
    if(n==0)
        return
    for (let i = loopLength; i >= 0; i--) {    

        if(m == 0){
            m = 1
            nums1[m-1] = nums2[0]
        }

        if (nums2[n-1] > nums1[m-1]){
            nums1[i] = nums2[n-1]
            n--
        }
        else {
            nums1[i] = nums1[m-1]
            m--
        }
    }
};

merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)
merge([1, 2, 3, 4, 0, 0, 0], 4, [2, 5, 6], 3)
merge([1], 1, [], 0)
merge([0], 0, [1], 1)