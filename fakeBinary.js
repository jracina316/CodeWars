/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

//I'm sure I did this the long way:


function fakeBin(x){
    let answer = []
    let separated = x.split('')
    for (let i = 0 ; i < x.length ; i++) {
      if (separated[i] < 5) {
        answer.push(0)
      }else {
        answer.push(1)
      }
    }
    answer = answer.join('')
    return answer
  }

  //Gosh I really went the long way:

  function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}