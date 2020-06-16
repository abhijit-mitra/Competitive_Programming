console.log(test2()); // 2
function test2(){return 2;} // function declaration get hoisted


console.log(test3); // undefined
console.log(test3()); // Error: test3 is not a function
var test3 = function(){return 3;} // function expression not get hoisted
