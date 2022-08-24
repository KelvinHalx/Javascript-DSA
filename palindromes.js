// find palindromes
// palindrome("abba")== true
// palindrome("abcdefg")=== false

const Palindrome = (str)=>{
    const isPalindrome=str.split('').reverse().join('');
     console.log(str === isPalindrome);
   }
    //    Palindrome("hannah");
    
   (function(str){
     let reversed='';
    for(let x of str)
    {
      reversed = x + reversed;
    }
    console.log(str===reversed);
   })("hannah")