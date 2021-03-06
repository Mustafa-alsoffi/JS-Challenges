/*  
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
*/


function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var orbitalPeriod = avr => Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avr, 3) / GM ));
    arr = arr.map(obj => {
        return {'name' : obj.name , 'orbitalPeriod' : orbitalPeriod(obj.avgAlt)}
    } )
    return arr
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))

