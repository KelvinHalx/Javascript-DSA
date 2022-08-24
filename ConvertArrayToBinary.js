const arr=[5,1,3,2,61];
// Expected Outcomes

// Binary-["101","1","11","10","110"]

function binary(x){
    return x.toString(2);
}
const output=arr.map(binary);

console.log(output);