const repeatString = function(string, num) {
    let totalString = '';
    let i = 0;
    let error;
    if( num < 0 ){
        return error  = "ERROR";
        
    };

    while (i < num) {
      totalString += string;
      i++;
    }
    
    return totalString;
  };
  
  // Do not edit below this line
  module.exports = repeatString;
  
  console.log(repeatString('ali', 0));