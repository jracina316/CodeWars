/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

function shortcut (string) {
    return string.replace(/[aeiou]/gi, '');
  }

  //Important to remember that /[aeiou]/gi allows to have multiple characters to search for globally (g) regardless of capitalization (i)

  // here's an arrow function:

  let shortcut = str => str.replace(/[aeiou]/g, '')