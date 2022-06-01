/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

function reverseSeq(n) {
    let result = []
    for (let i = n; i > 0; i--)
      result.push(i)
    return result
  };

  //I'm sure there's more efficient ways of doing this.  Let's check:

  const reverseSeq = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
    };

    //the most popular solution was similar to what I came up with