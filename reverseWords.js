// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

/* Examples:
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/


function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}


// .map function documentation 
// Arrow function
map((element) => { /* ... */ })
map((element, index) => { /* ... */ })
map((element, index, array) => { /* ... */ })

 // Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function(element) { /* ... */ })
map(function(element, index) { /* ... */ })
map(function(element, index, array){ /* ... */ })
map(function(element, index, array) { /* ... */ }, thisArg) 