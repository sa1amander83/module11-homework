//function myFunc1(a) {
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
console.log(summ(20));
