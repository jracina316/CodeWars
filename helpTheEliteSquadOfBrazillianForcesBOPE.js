/* The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

Example:

["PT92", 6] => 2 (6 streets 3 bullets each)
["M4A1", 6] => 1

The return Will always be an integer so as the params. */

function magNumber(info){
    let weapon = info[0]
    let streets = info[1]
    let bulletsNeeded = streets * 3
    
    if (weapon === 'M4A1' || weapon === 'M16A2') {
      return (Math.ceil(bulletsNeeded / 30))
    }else if (weapon === 'PT92') {
      return (Math.ceil(bulletsNeeded / 17))
    }else {
      return (Math.ceil(bulletsNeeded / 5))
    }
  }
  

  // Solutions on this one are all over the place. No answer had more than 5 people solving it the same way.  Here's the one with 5 users:


  magNumber = info => Math.ceil(info[1] * 3 / {PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5}[info[0]])

  // I don't understand this solution because it looks like they're declaring variable in the middle of the arrow function in a way I'm not familiar with. 