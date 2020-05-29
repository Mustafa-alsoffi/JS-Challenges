/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
*/


function addTogether(x = 0, y = 0) {
    if (typeof x != 'number' || typeof y != 'number') return undefined;
    return x && y 
    ? x + y 
    : z => { return typeof z == 'number' 
    ? z + x + y 
    : undefined};
  }

addTogether(3, 2)
