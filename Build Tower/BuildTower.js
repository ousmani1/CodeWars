function towerBuilder(nFloors) { 
  var tower = new Array(nFloors-1);
  var block = "*";
  var floor = "";
  var bottomFloor = nFloors + (nFloors - 1);
  
  for (var i = 0; i < bottomFloor; i++) {
    floor += "*";
  }
    
  tower[nFloors-1] = floor;  
  var firstReplacement = 0;
  var lastReplacement = floor.length - 1;
  
  for (var i = nFloors-2; i >= 0; i--) {
    floor = setCharAt(floor,firstReplacement," ");
    floor = setCharAt(floor, lastReplacement," ");
    tower[i] = floor;
    
    firstReplacement++;
    lastReplacement--;
  } 
  
  return tower;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) 
      return str;
      
    return str.substr(0,index) + chr + str.substr(index+1);
}