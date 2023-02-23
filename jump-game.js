/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let len = nums.length-1
    for (let i = nums.length-1; i>=0;i--) {
        if (i+nums[i] >= len) {
            len = i;
        }
    }
    return len === 0 ? true : false
};