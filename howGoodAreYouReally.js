/* There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array! */


function betterThanAverage(classPoints, yourPoints) {
    let average = (classPoints.reduce((a, b) => a + (b > 0 ? b : 0), 0) + yourPoints) / (classPoints.length + 1)
    
    if (yourPoints > average) {
      return true
    }else {
      return false
    }
   }

//    I keep forgetting that these functions automatically return TRUE or FALSE and I add additional, unneeded logic:

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }


  // the one different in the above solution is that it doesn't follow the Kata note that yourPoints are not included in the array and to add them into the average