// Remove White Spaces from a String

//  Solution 1
let string = "S p a r e p a p";
let regex = /\s+/g
let result = string.replace(regex, '');

console.log("original string: "+string)
console.log("updated string: "+result)


// Remove Extra Spaces at the  start end of a String
// Solution 2
let string1 = "  Sparepap  ";
let result1 = string1.trim()
console.log("original string: "+string1)
console.log("updated string: "+result1)