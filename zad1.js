function arrFunc(){
let M =arr;
let j=0; //четные элементы
let k=0;//нечетные элементы
let y=0;// нулевые элементы
for(let i=0; i<=M.length; i++) {
	
if (typeof M[i]==='number'&& M[i] %2===0&&M[i]!=0&&M[i]!=null){
	j++;}
	else if (typeof M[i]==='number' && M[i]%2===1){
	k++;}
	else if(M[i]===0||M[i]===null||M[i]===''){
		y++;}	
}
console.log('четных элементов в массиве -'+j+' '+
' нечетных элементов в массиве -'+k+' '+
' нулевых элементов в массиве - '+ y);
}
let arr = [20,32,1,0,21,32,533,22,11,'text',null];
arrFunc(arr);
