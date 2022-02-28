function((){
  var a = b = 1;
})();

console.log('a', a); 
console.log('b', b);
console.log('window.b', window.b); 

//Error: Uncaught ReferenceError: a is not defined
// 1
// 1
