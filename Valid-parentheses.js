/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length%2 !==0) return false
    const stack = []
    const pmap = {
        '{': '}',
        '[': ']',
        '(': ')',
    };
    for (let char of s) {
        if (pmap[char]) {
            stack.push(pmap[char])
        } else if (char !== stack.pop()) {
            return false
        }
    }
    return !stack.length
};