/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

const quarterOf = (month) => {
    let quarter = month/3
    if (quarter <= 1) {
      return 1
    }
    else if (quarter <= 2) {
      return 2
    }
    else if (quarter <= 3) {
      return 3
    }
    else {
      return 4
    }
  }

  //I'm sure there's more concise answers....let's see: 

  // same idea without the extra math:

  /*
  const quarterOf = (month) => {
    if (month <= 3) {
      return 1
    } else if (month <= 6) {
      return 2
    } else if (month <= 9) {
      return 3
    } else if (month <= 12) {
      return 4
    }
    */
    /*
    const quarterOf = (month) => {
        // Your code here
        return Math.ceil(month / 3);
      } 
    */