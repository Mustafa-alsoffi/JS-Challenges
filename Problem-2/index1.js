/*Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
Example:

bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
*/


function bouncer(arr) {
 return arr.filter(elem => elem != false && elem != '' && elem != undefined && !Number.isNaN(elem))

}


bouncer([7, "ate", "", false, 9]);
