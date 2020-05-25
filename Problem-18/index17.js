/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    let arr = [1, 1]
    for (var i = 0; i < num; i++) {
    // Do the Fibonacci numbers by adding the array numbers to each other
        let sum = arr[i] + arr[i + 1]
    //Check the numbers so you don't exceed the required parameter value which is num
        if (sum <= num) arr.push(sum);
    }
    // Check for odd numbers and add them to each other. 
    return arr.reduce((a, b) => b % 2 != 0 ? a + b : a);
  }
  
  console.log(sumFibs(1000));