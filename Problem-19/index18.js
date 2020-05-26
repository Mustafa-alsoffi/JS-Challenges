/*
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/


function sumPrimes(num) {
    let nums = [], primes = [];
    for (var i = 2; i <= num; i++) { nums.push(i) }
   nums.forEach(a => {
        if (nums.slice(0, a - 2).every(b => a % b)) primes.push(a);
   })
    return primes.reduce((c, d) => c + d)
 
  }

   sumPrimes(977)
  
