//Merge the first array into the second array at the sepcified index.

function frankenSplice(arr1, arr2, n) {
let newArr = arr2.slice(0, arr2.length);
 for (var i = arr1.length - 1; i > -1; --i) {
 newArr.splice(n, null, arr1[i]);
 }
return newArr;
}

frankenSplice([1, 2], ["a", "b"], 1);

