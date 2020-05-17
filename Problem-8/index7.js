/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/



function diffArray(arr1, arr2) {
  var newArr = [...arr1, ...arr2];
  var nonSymmetric = newArr.filter((elem, i) => !(newArr.indexOf(elem) === i));
  return newArr.filter(elem => !nonSymmetric.includes(elem));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
