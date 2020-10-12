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
=======
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
>>>>>>> d5306730856535c7f2dedef04ea55f7078a06ddf
