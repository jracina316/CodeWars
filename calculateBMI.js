/* Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */


function bmi(weight, height) {
    if (weight / height**2 <= 18.5) {
      return 'Underweight'
    }else if (weight / height**2 <= 25.0 && weight / height**2 > 18.5) {
      return 'Normal'
    }else if(weight / height**2 <= 30.0 && weight / height**2 > 25.0) {
      return 'Overweight'
    }else {
      return 'Obese'
    }
  }

/*   I realized that I didn't need the && statements.  If the answer is lower than 18.5, then the process would have just stopped.  
  There's no chance the process can get to the second condition if the value is lower than 18.5, therefor making it always higher */

  function bmi(weight, height) {
    var result = weight/Math.pow(height,2) 
    
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
    
  }


// this one is confusing:
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";
                                    
