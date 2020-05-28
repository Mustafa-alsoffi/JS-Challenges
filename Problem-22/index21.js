/*
Flatten a nested array. You must account for varying levels of nesting.
*/
function steamrollArray(arr) {
   arr = [].concat(...arr)
   return arr.every(e => !Array.isArray(e)) ? arr : steamrollArray(arr);
  }
  
  steamrollArray([1, [2, 3, [2, [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[4]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]])
  //Output: [1, 2, 3, 2, 4 ]
  