/*
Return true if the given string is a palindrome. Otherwise, return false.
*/

function palindrome(str) {
    // Turn str into an array, filter and remove all non word elements, then turn all char into lowercase.
   let arr = str
   .split("")
   .filter(e => !(/\W|_/g).test(e))
   .map(el => el.toLowerCase())
   let arr2 = [...arr];
    return JSON.stringify(arr) === JSON.stringify(arr2.reverse())
  }
  
  
  console.log(palindrome("_eye"))