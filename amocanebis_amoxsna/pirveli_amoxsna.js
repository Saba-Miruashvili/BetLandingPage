var numJewelsInStones = function (jewels, stones) {
    var n = 0;
    for (let j of jewels) {
    for (let i of stones) {
        
                if (j.includes(i)) {
                    n++;
                }
      }
    }

   return n;
  };