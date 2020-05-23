/* MISSING LETTERS*/
/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/


function fearNotLetter(str) {
    // Put all the alphabets in one string or array to check against
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    // Find the index at which you should start checking your given string
    const index = alphabets.indexOf(str.charAt(0));
    // Convert your alphabets string to an array so you can use splice() to extract the substring you want to check against
    const checkedStr = alphabets.split("").splice(index, str.length);
    // After getting the array you want to check, you can easily see that at [0] index, the missing letter is.
    return checkedStr.filter((a, i) => a != str.charAt(i))[0];
  }
  fearNotLetter('abcdefghijklmnopqrstuvwxyz');