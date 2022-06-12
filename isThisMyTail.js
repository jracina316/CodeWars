/*
Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.
*/

function correctTail(body, tail) {
  
    let sub = body.substr(body.length-1, 1)
    
    if (sub === tail) {
      return true
    }
    else {
      return false
    }
  }

  // Other solutions didn't "fix" the existing code as the Kata requested.

  function correctTail(bod, tail) {
    return bod[bod.length-1] === tail
  }

  const correctTail = (x,y)=>x.endsWith(y)