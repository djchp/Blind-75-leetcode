/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    let result = []
    for (let i =0; i< nums.length;i++) {
        map.set(nums[i], map.get(nums[i])+1 || 1)
    }
    const sortedmap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
    const iterator = sortedmap.keys()
    for (let i =0; i<k;i++) {
        result.push(iterator.next().value)
    }
    
    return result
};