function whatIsInAName(collection, source) {
    var arr = [];
    //forEach() to loop through the elements of collection
    collection.forEach(element => {
        // Declare constants and assign them to the keys and values of the objects you want to check or compare
        const sourceVals = Object.values(source), sourceKeys = Object.keys(source), elemVals = Object.values(element), elemKeys = Object.keys(element);
        //Using a combination of every() and includes(), we can easily check for the existence of a value or key
        if (sourceVals.every(e => elemVals.includes(e)) && sourceKeys.every(e => elemKeys.includes(e))) { 
          arr.push(element)
        }
    });
    return arr;
  }
  
  const see = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
  see
