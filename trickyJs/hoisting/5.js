console.log(test2()); 
function test2(){return 2;} 

// 2
// function declaration get hoisted



console.log(test3); 
console.log(test3()); 
var test3 = function(){return 3;} 

// undefined
// Error: test3 is not a function
// function expression not get hoisted
