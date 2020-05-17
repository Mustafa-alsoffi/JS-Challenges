/*
Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  let maxNum = Math.max(arr[0], arr[1]) - 1;
  let minNum = Math.min(arr[0], arr[1]) + 1;
  for (var i=minNum; i <= maxNum; i++) {
    arr.push(i)
  }
    return arr.reduce((total, num) => total + num);
}

sumAll([1, 4]);
