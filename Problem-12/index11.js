/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.
*/

function translatePigLatin(str) {
    const regex = /^[aeoui]/;    
    return regex.test(str) ? str.replace(/(\w)$/g, "$1way") : str.replace(/(^[^aeoui]*)(\w*)/g, "$2$1ay") ;
}

translatePigLatin("consonant");