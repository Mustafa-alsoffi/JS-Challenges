/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/


function convertHTML(str) {
const HTMLEntities = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : '&apos;'
}
for (var i = 0; i < str.length; i++){
    if ((/[&<>'"]/).test(str.charAt(i))) {
       str = str.replace(str.charAt(i),HTMLEntities[str.charAt(i)])   
    }
}
    console.log(str);
  }
  
  convertHTML("<>");