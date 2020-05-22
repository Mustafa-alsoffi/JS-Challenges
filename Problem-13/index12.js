/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).
*/




function myReplace(str, before, after) {

  // Check if the first letter of before is capitalized.
    if ((/^[A-Z]/).test(before)) {
      //Turn after into an array then map it so it has its first letter capitalized.
       after = after.split("").map((a, i) => i == 0 ? a.toUpperCase() : a).join("");
    }
    //look for before using regular expressions.
    let beforeRegex = new RegExp(before, "g");
    //Now you are safe to replace the word!
    return str.replace(beforeRegex, after);
  }
  
  console.log
  (myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
