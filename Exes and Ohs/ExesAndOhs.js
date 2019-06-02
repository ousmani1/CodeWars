function XO(str) {
    var xCount = 0;
    var oCount = 0;


    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) == 'x' || str.charAt(i) == 'X')
        xCount++;

      if (str.charAt(i) == 'o' || str.charAt(i) == 'O')
        oCount++;
    }

    if (xCount === oCount)
      return true;
    else
      return false;
}
