// Find The Character that Occurs the Most and How Many Times

// Solution 1
const mostChar = (str) => {
    let charMap = {};
    let max = 0;
    let maxChar = '';
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    console.log(maxChar);
}
mostChar('sparepap');