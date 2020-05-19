function((){
  var a = b = 1;
})();

console.log('a', a); //Error: Uncaught ReferenceError: a is not defined
console.log('b', b); // 1

console.log(x) //undefined;
var x = 2;


var test = 1;
function test(){};
console.log(test); // 1


console.log(test2()); // 2
function test2(){return 2;}


console.log(test3()); // Error: test3 is not a function
var test3 = function(){return 3;}


//Very Important

var test4 = 1;

function test4_1(){
  test4 = 100;
  return;
  function test4(){};
};

test4_1();
console.log(test4); // Output: 1
