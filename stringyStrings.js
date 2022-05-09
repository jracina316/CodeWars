/* write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers. */


// MY CODE:
function stringy(size) {
    let str = ''
     for (let i = 1 ; i <= size; i++)
       str += i%2
       return str
       }
    } 

// Solution Code:
function stringy(size) {
    var str='';
    for( var i=1; i<=size; i++ )
      str+=i%2;
    return str;
  }

  //the issue with this is that for some reason, the solution code worked but my code didn't.  they are almost identical.  I used LET instead of VAR....that's all the difference I Can find but I got an error on mine.  Still can't figure it out


  //Test Code :

  describe("the stringy function", function() {

    it('Should return a string', function() {
      Test.assertEquals(typeof stringy(3), 'string',
      'Make sure it\'s a string not a number (the function is called stringy after all!)');
    });
  
    it('Should start with a 1', function() {
      Test.assertEquals(stringy(3)[0], '1',
      'Whoops your string doesnt start with a 1?');
    });  
  
    it('Should have the correct length', function() {  
      for(let i = 0; i < 10; ++i){
        let parameter = (Math.random() * 50 + 1) | 0;
        Test.assertEquals(stringy(parameter).length, parameter, 'Wrong length on ' + parameter);
      }
    });
  });