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
