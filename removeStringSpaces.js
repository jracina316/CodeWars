// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    return x.split(' ').join('')
  }

  // Another solution

  function noSpace(x){
    return x.replace(/\s/g, '');
  }

  //NOTE "\s" shown in the above is a meta character in JavaScript regular expressions matches any whitespace character: spaces, tabs, newlines and Unicode spaces.
  //NOTE "g" above indicates globally in the string.  without this only the first would be removed ('this is the end of the world' would become 'thisis the end of the world' )
  //NOTE an "i" after the or instead of the "g" would indicate NOT CASE SENSITIVE.  So if the goal was to remove t and the string has 'This is the end of the world', with the "i". the T in 'This' would be removed.  

  