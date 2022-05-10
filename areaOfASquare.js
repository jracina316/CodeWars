/* Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)  */


function squareArea(A){
    let radius = (4 * A) / (2 * Math.PI)
    return Math.round((radius * radius) * 100) / 100;
  }

 // I solved the math of the radius variable with a google search that yielded: radius is r = c / (2 * π)

 // here are some other solutions
  
 function squareArea(A){
    return Math.round(Math.pow(A*2/Math.PI,2) * 100) /100
  }

  function squareArea(A){
    var circum = 4 * A;
    var radius = circum / (2 * Math.PI);
    var area = Math.pow(radius, 2);
    return Math.round(area*100)/100
  }