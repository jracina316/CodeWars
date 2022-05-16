/* Write a function to split a string and convert it into an array of words.

Examples (Input -> Output):
* "Robin Singh" ==> ["Robin", "Singh"]

* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"] */


function stringToArray(string){

	return Array.from(string.split(' '))

}

//I didn't konw the .split method would automatically return a string:

function stringToArray(string){
    return string.split(' ');
  }

  