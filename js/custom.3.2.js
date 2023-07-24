// 1  old way 1995-2003
//1.  defination
function aFunction(){
    console.log("hello from afunction")
}
//2  calling
aFunction();


//  new  way fat arrow function
//1.   defination
var bFunction=()=>{
    console.log('hello from bfunction');
}
//2. calling
bFunction();

//1. defination
let addTwoNumber = (x=50,y=50)=>{ // x= 50 , y=50 is default value 
    console.log(x+y);
}
addTwoNumber();




