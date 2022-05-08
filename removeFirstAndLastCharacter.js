/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */

function removeChar(str){
    return (str.slice(1, -1))
   
   };


 /*I created the same code as the most popular answer.  Nothing more efficient other than maybe an arrow function:

   const removeChar = str => str.slice(1,-1) */