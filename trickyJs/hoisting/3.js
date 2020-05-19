function((){
  var a = b = 1;
})();

console.log('a', a); //Error: Uncaught ReferenceError: a is not defined
console.log('b', b); // 1
console.log('window.b', window.b); // 1
