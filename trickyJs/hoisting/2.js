function((){
  var a = b = 1;
})();

console.log('a', a); 
console.log('b', b); 

//Error: Uncaught ReferenceError: a is not defined
// 1
