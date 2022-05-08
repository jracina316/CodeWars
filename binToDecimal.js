// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    return parseInt(bin, 2)
  }


  // NOTE: parseInt('string', 'radix')  string and radix are the two parameters needed to get parseInt to work.  Radix is the quantity of numbers in the number system.  2 for binary, 10 for decimal or 'standard'

  //Here's another solution:
  const binToDec = bin => parseInt(bin,2);

  