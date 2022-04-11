  function wkapi(a) {
    for (let i = 2; i <= 4; i++) {
      document.images[i].src = "assest/tab-bg.png";
      if (i == a) {
        document.images[i].src = "assest/tab-bg-active.png";
      }
      if (a == 3) {
        // document.images[5].src = "";
        document.getElementById('firstlock').style.visibility='hidden';

      }
      if (a == 4) {
        // document.images[6].src = "";
        document.getElementById('secondlock').style.visibility='hidden';
      }
    }
  }
   function smbbwkapi(b){
     document.getElementById('smbb1').style.backgroundColor = '#1A293B'
     document.getElementById('smbb2').style.backgroundColor = '#1A293B'
     document.getElementById('smbb3').style.backgroundColor = '#1A293B'
     document.getElementById('smbb4').style.backgroundColor = '#1A293B'
     if(b === smbb1){
      document.getElementById('smbb1').style.backgroundColor = '#2E9EA1'
     }
     if(b === smbb2){
      document.getElementById('smbb2').style.backgroundColor = '#2E9EA1'
     }
     if(b === smbb3){
      document.getElementById('smbb3').style.backgroundColor = '#2E9EA1'
     }
     if(b === smbb4){
      document.getElementById('smbb4').style.backgroundColor = '#2E9EA1'
     }
   }
