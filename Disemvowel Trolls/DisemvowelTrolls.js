function disemvowel(str) {
  var newString = "";
  var vowelArray = ['A', 'E', 'I', 'O', 'U',
                    'a', 'e', 'i', 'o', 'u'];
  
  for (var i = 0; i < str.length; i++) {
    if (!(vowelArray.includes(str.charAt(i))))
      newString += str.charAt(i);
  }
  
  return newString;
}