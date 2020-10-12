<<<<<<< HEAD

// function myFunc1(a) {
//     function myFunc2(b) {
//     console.log(a + b);
//     }
//   myFunc2(10);
// }
// myFunc1(20); 

//или  так 
function myFunc1(a) {
	return function myFunc2(b) {
  	  return a + b;
  };
}  
const summ = myFunc1(10);
=======

// function myFunc1(a) {
//     function myFunc2(b) {
//     console.log(a + b);
//     }
//   myFunc2(10);
// }
// myFunc1(20); 

//или  так 
function myFunc1(a) {
	return function myFunc2(b) {
  	return a + b;
  };
}
const summ = myFunc1(10);
>>>>>>> d5306730856535c7f2dedef04ea55f7078a06ddf
console.log(summ(7)); 