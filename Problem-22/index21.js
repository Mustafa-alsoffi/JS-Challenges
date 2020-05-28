/*
Flatten a nested array. You must account for varying levels of nesting.
*/
function steamrollArray(arr) {
   for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])){
           arr = [].concat(...arr); 
         i--;
        } 
    }
   return arr
  }
  
  steamrollArray([1, [2, 3, [2, [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[4]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]])
  //Output: [1, 2, 3, 2, 4 ]
  