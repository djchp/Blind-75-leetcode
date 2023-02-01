/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}

    for (let str of strs) {
        s= str.split('').sort().join('')
        if (!map[s]) map[s] = []
        map[s].push(str)
    }
    console.log(map)
    return Object.values(map)
};