// Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
    x = x.toLowerCase()
   return (x === x.split('').reverse().join(''))
  }


  // other solutions:

  const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }

  const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');


  