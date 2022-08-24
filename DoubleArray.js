const arr=[5,1,3,2,6];

// Expected Outcomes
// Double-[10,2,6,4,121
// Triple-[15,3,9,6,18]
// Binary-["101","1","11","10","110"]

function double(x){
  return x*2;
}
const output=arr.map(double);
console.log(output);