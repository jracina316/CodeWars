/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list. */

/*I did not solve this but the most popular solution didn't work:*/

function invert(array) {
    return array.map(x => x === 0 ? x : -x)
 }

/*  The tests on this Kata expected 0 to return as -0, which this caused to error:

 describe("Invert array values",() => {
    it("Basic Tests", () => {
      assert.deepEqual(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
      assert.deepEqual(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
      assert.deepEqual(invert([]), []);
      assert.deepEqual(invert([0]), [-0]);
    });
  }); */

//   The solution that did work was:

  const invert = array => array.map(num => -num);


//   I also modified the first code with a negative and got it to work as well:

  function invert(array) {
    return array.map(x => x === 0 ? -x : -x)
 }

//  It just basically multiplied everything by -.  If it was positive, it made it negative and if it was negative, it made it positive.