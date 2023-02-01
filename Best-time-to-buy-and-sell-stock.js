/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0;
    let min = prices[0]
    for (let i =1; i<prices.length;i++) {
       min = Math.min(min, prices[i-1]);
       ans = Math.max(prices[i]-min, ans)
    }
    return ans
};