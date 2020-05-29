/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
*/


function truthCheck(collection, pre) {
    let arr = [];
    collection.forEach(obj => {
        arr.push(Object.entries(obj))
    })
    // Flatten one level so that each key-value pair is in one array of their own.
    arr = arr.flat()
    // Check every individual array for pre, and then flatten one more level to make sure the number of the pre keys is equal to collection length.
   return arr.filter(e => e.includes(pre)).every(el => el[1]) && arr.flat().filter(e => e == pre).length == collection.length
  }
  
  
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
