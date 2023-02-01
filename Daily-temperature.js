/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const res = Array(temperatures.length).fill(0)

    for (let i =0; i<temperatures.length; i++) {
        for (let j=i+1; j<temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                res[i] = j-i
                break
            }
        }
    }
    return res
};
// solution very bad 4000ms definitly need to optimze







// not working recursion solution idk why xd
// var dailyTemperatures = function(temperatures) {
//     const res = []
//     const findNextWarmer = (ix,b) => {
//         let curr = b
//         for (let a = ix; a<temperatures.length-1;a++) {
//             if (temperatures[ix] < temperatures[ix+1]) {
//                 return curr+1
//             } else {
//                 let toPass = ix
//                 return findNextWarmer(toPass+1,b+1)
//             }
//         }
//         return
//     }

//     for (let i =0; i<temperatures.length-1; i++) {
//         if (temperatures[i] < temperatures[i+1]) {
//             res.push(1)
//         } else {
//             res.push(findNextWarmer(i+1,1))
//         }
//     }
//     return [...res,0]
// };