/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

function solution(str, ending){
    // TODO: complete
    let numOfChar = ending.length
    let test = str.substring(str.length-numOfChar)
    if (test === ending) {
      return true
    }
    else return false
  }


  //This version is much more dry

  function solution(str, ending){
    return str.endsWith(ending);
  }


  function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(x => typeof x === "number")
  }