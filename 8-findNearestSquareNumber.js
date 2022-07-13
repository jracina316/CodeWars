/* Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)

*/

function nearestSq(n){
    return Math.round(Math.sqrt(n)) *  Math.round(Math.sqrt(n))
}

// Other Solutions:

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

function nearestSq(n){
    return Math.round(n**0.5)**2
}

// I remembered a couple of these math functions without looking them up.