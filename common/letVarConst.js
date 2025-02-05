a = 2;
var a;
console.log(a);
// for  var it will show 2 and for let and const Cannot access 'a' before initialization

console.log(b);
var b = 3;
//for var it will be undefined and for let and const Cannot access 'b' before initialization

var c = "John Doe";
var c = 0;
console.log(c);
//for var it will show 0 and for  let and const  Identifier 'c' has already been declared

setTimeout(() => {
  console.log("this is time out");
}, 1000);

function myTimer() {
  const date = new Date();
  console.log(date.toLocaleTimeString())
  

}
const myInterval = setInterval(myTimer, 1000);
