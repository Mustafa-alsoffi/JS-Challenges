/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
*/

function smallestCommons(arr) {
    const max = Math.max(arr[0], arr[1])
    const min = Math.min(arr[0], arr[1])
    var range = [];
    var result = 0;
    for (var i = min; i <= max; ++i){
       range.push(i) 
    } 
  for (var x = 2; range.some(e => x % e !== 0); ++x) {
    result = x + 1
  }
    return result;
  }
  
  smallestCommons([18,23])
