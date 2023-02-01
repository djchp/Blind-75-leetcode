/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let cost = [0,1]
    for (let i =0;i<n;i++) {
      cost = [cost[1], cost[0]+ cost[1]];
    }
    return cost[1];
};