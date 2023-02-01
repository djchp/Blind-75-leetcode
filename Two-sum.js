/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashtable = {}
    for (let i = 0; i < nums.length; i++) {
        let tozero = target - nums[i]
        if (hashtable.hasOwnProperty(tozero)) {
            return [hashtable[tozero], i]
        }
        hashtable[nums[i]] = i
    }
};