<<<<<<< HEAD
function myFunc(a, b) {
   let timerId = setInterval(function() {
     console.log(a);
     if (a == b) {
      clearInterval(timerId);
     }
     a++;
   }, 1000);
 }
 myFunc(5, 15);  
