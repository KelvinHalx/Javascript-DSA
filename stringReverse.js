// Reverse The String

// Solution  
// Convert Into Array 
// Reverse the Array and join it back to a string

const stringReverse = (str) => {
    const arr = str.split('');
    arr.reverse();
    str = arr.join('');
    console.log(str);
}

stringReverse('sparepap');

// Expected Outcome
// paperaps

// Solution 2
function reverse1(str){
  let r = "";
  for(let i = str.length-1; i >= 0; i--){
    r += str[i];
  }
  return r;
}

console.log(reverse1("stepsolution"))
