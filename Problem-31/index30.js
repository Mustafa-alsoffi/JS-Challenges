/*
Return true if the passed string looks like a valid US phone number.
*/




function telephoneCheck(str) {

let bol = false;

let arr = [/^\d{3}(-|\s)?\d{3}(-|\s)?\d{4}/, /\(\d{3}\)\s?\d{3}(-|\s)?\d{4}/,
     /^1\s?\(\d{3}\)\s?\d{3}-\d{4}/, /^1\s?\d{3}(-|\s)?\d{3}(-|\s)?\d{4}/
    ]
switch (str.match(/\d/g).length) {
    case 10:
        bol = arr.slice(0,2).some(regex => (regex).test(str))
        break;
    case 11:
        bol = arr.slice(2).some(regex => (regex).test(str))
        break;
        
}
return bol;
}
  
  console.log(telephoneCheck("555-5555"))