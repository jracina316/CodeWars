/*
A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where l = 3 ( the number of digits in 153 )
13 + 53 + 33 = 153

Write a function that, given n, returns whether or not n is a Narcissistic Number.

*/

function isNarcissistic(n) {
    let num1 = n.toString()
    const answer = num1.split("").map(x => x**num1.length).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0)
    return answer == num1 ? true : false 
  }

  isNarcissistic(153)
  isNarcissistic(435)

  //I'm sure there'll be shorter, more efficient solutions.  Let's check:

  function isNarcissistic(n){
    return n === +n.toString().split('').reduce((s, v, i, arr) => s + Math.pow(v, arr.length),0)
  }

  function isNarcissistic(n) {
    return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0)
  }

  //similar solutions.  I was more efficient in using x**n.length.  They were more efficient nesting the power calculation in side the .reduce method