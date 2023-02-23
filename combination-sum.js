/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    const findSum = (tosum, path, start) => {
        if (tosum < 0) return
        if (tosum ===0) {
            result.push([...path])
        }

        for (let i =start; i<candidates.length;i++ ) {
            findSum(tosum - candidates[i], [...path, candidates[i]], i)    
        }
    }
    findSum(target,[],0)
    return result
};