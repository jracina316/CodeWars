/*
Simple interest on a loan is calculated by simply taking the initial amount (the principal, p) and multiplying it by a rate of interest (r) and the number of time periods (n).

Compound interest is calculated by adding the interest after each time period to the amount owed, then calculating the next interest payment based on the principal PLUS the interest from all previous periods.

Given a principal p, interest rate r, and a number of periods n, return an array [ total owed under simple interest, total owed under compound interest ]

Notes:

Round all answers to the nearest integer
Principal will always be an integer between 0 and 9999
interest rate will be a decimal between 0 and 1
number of time periods will be an integer between 0 and 50
Examples
interest(100, 0.1,  1)  =  [110, 110]
interest(100, 0.1,  2)  =  [120, 121]
interest(100, 0.1, 10)  =  [200, 259]
*/

function interest(P,r,n) {
    let result = []
    let compoundTotal = P
    result[0] = Math.round((P * r)*n + P)
    for (let i = 1 ; i<=n ; i++) {
      compoundTotal = ((r + 1) * compoundTotal) 
    }
    compoundTotal = Math.round(compoundTotal)
    result.push(compoundTotal)
    return result
  }

  //I'm sure there are better, more efficient versions of this....let's see:

  function interest($, r, n) {
    const dif = (x, y, z) => z > 0 ? dif(x + x*y, y, z-1) : Math.round(x);
    return [Math.round($ + $*r*n), dif($, r, n)]
  }

  // OR....

  let interest = (P, r, n) => [P * (1 + r * n), P * Math.pow(1 + r, n)].map(Math.round);

  // OR....

  function interest(P,r,n) {
    return [P*(1 + r*n), P*Math.pow(1+r, n)].map(Math.round)
  }