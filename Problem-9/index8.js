/*
Challeng requests:
provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/



function destroyer(arr, ...val) {
  return arr.filter(a => !val.includes(a));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);