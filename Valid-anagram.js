/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const mapS = new Map()
    const mapT = new Map()
    for (let i =0; i< s.length;i++) {
        mapS.set(s[i], mapS.get(s[i])+1 ||1)
    }
    for (let i =0; i< t.length;i++) {
        mapT.set(t[i], mapT.get(t[i])+1 ||1)
    }
    if (mapS.size !== mapT.size) {
        return false;
    }
    for (var [key, val] of mapS) {
        testVal = mapT.get(key);
        if (testVal !== val || (testVal === undefined && !mapT.has(key))) {
            return false;
        }
    }
    return true;
};