var isValid = function (s) {

    let lock = [];
    
    for (let a of s) {
      if (lock.length === 0) {
        lock.push(a);
        continue;
      }
   
      if (a == "(" 
         ||a == "[" ||
         a == "{") {
        lock.push(a);
        continue;
      }
  
        if (
            (a == ")" && lock.slice(-1) == "(") 
            ||(a == "]" && lock.slice(-1) == "[")|| 
            (a == "}" && lock.slice(-1) == "{")
        )

        lock.pop();

            else {
                return false;
            }
    }

        if (lock.length === 0) {
                return true;
        }
            else {
                return false;
            }
  };
  