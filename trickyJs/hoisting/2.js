(function(){
  var a = b = 1;
})();

console.log('b', b); 
console.log('a', a); 

//b 1
//Error: Uncaught ReferenceError: a is not defined
