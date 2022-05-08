// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    return (number % 2 === 0 ? 'Even' : 'Odd')
  }


  //Another solution but I'm not sure how it would work.  the ODD is on the True sode of the Turary.

  function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }
