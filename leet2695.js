// array wrapper

/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {
    constructor(nums) {
        this.array = nums
    }
    /**
     * @return {number}
     */
    valueOf() {
        return this.array.reduce((acc, cv) => {
            return acc + cv
        }, 0)
    }
    /**
     * @return {string}
     */
    toString() {
        return JSON.stringify(this.array)
    }
}


const obj1 = new ArrayWrapper([1,2]);
// const obj2 = new ArrayWrapper([3,4]);
// obj1 + obj2; // 10
// String(obj1); // "[1,2]"
// String(obj2); // "[3,4]"

console.log(obj1.valueOf())
