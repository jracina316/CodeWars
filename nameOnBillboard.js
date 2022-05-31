/*
You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).
*/

function billboard(name, price = 30){
    let sum = 0
     for (let i = 0 ; i<name.length; i++) {
       sum = sum + price
     }
     return sum
   } 

   //the restriction of using the multipy function made this more difficult than it needed to be but still pretty easy

   // Pretty much the same:

   function billboard(name, price = 30){

    var totalCost = 0;
    for(i=0; i<name.length; i++){
        totalCost += price;
    } 
    
    return totalCost;
    
    }
    