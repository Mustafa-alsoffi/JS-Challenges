/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/



function chunkArrayInGroups(arr, size) {
let newArr = [];
for(var i = 0; i < arr.length; i++) {
  newArr.push(arr.splice(0, size))
  i--;
}
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);