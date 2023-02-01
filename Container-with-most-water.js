/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let right = 0;
    let left = height.length - 1;
    let max = 0;
    let area;
    while (right < left) {
        area = (left - right) * Math.min(height[right], height[left])
        max = Math.max(area, max)
        if (height[right] < height[left]) {
            right++

        } else {
            left--

        }
    }
    return max
};