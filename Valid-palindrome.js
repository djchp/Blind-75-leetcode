/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newstring= s.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    const splitString = newstring.split(""); 

    const reverseArray = splitString.reverse(); 

    const reversedString = reverseArray.join(""); 

    if (newstring === reversedString) {
        return true
    } else {
        return false
    }
};