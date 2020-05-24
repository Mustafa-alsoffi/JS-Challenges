/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/




function uniteUnique(...arr) {
  // You will need this array for summing up all the elements
  const newArr = [];
  // Use forEach() twice to access your 2D arrays and get them flattened.
  arr.forEach(a => a.forEach(e => newArr.push(e)))
  // Filter or remove the duplicates elements using the strict operator.
  return newArr.filter((a, i) => newArr.indexOf(a) === i)
}


console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
