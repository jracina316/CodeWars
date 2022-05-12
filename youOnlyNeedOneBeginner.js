/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

function check(a, x) {
    let result = false
    for (i = 0; i < a.length ; i++)
      if (a[i] === x) {
        result = true
      }
    return result
  }

  //I haven't looked at the solutions yet but I am proud I figured this out without help or searching.  Here's the other solutions:

  const check = (a,x) => a.includes(x);

  //I was proud until I saw the other answers.  LOL.  Now I know .includes is a method you can call on an parameter or variable. 