/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! 
each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of 
bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
*/

const hero = (bullets, dragons) => bullets/2 >= dragons 

// I remembered that by default, an arrow function returns a bullion (t/f) so no point in writing the results since it figures it out already. 

// Other solutions:
function hero(bullets, dragons){
    return bullets >= dragons * 2
  }

// const hero = (bullets, dragons) => dragons * 2 <= bullets;

