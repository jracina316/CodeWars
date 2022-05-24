/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" (in COBOL "found the needle at position 6")
*/

function findNeedle(haystack) {
    for (let i = 0 ; i < haystack.length ; i++) {
      if (haystack[i] === 'needle') {
        return `found the needle at position ${i}`
      }
    }
  }

  // solved this one with no research.  Now let's see if there's a shorter way:

  function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }

  // I also tried for the first time to write the above as an arrow function:
  const findNeedle = (haystack) => "found the needle at position " + haystack.indexOf("needle")

  //Used the solution at line 24 to create this arrow function.  I need to work on these more.