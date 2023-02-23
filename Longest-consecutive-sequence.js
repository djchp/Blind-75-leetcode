/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums)
    
    let result= 0
    for (let number of set) {
        if (!set.has(number-1)) {
            let buffer = 0
            while (set.has(number++)) {
                buffer++
            }
            result = Math.max(buffer, result)
        }
    }
    return result
};