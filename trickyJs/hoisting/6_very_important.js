//Very Important

var test = 1;

function x(){
  test = 100;
  return;
  function test(){};
};

x();
console.log(test); // Output: 1

/*
JS parsing:
  Stage 1 called Compilation phase:
    test=undefined;
    x=[function];
    x(); will not execute in compilation phase
    console.log(); will not execute in compilation phase

  Stage 2 called Execution phase:
  test=1;

  x called:
    Compilation:
      test = [function]

    Execution:
      test = 100; Updated the test value from function to 100
      after that return from function
*/



//Very Important
var test2 = 1;

function test2(){
  test2 = 100;
  return;
  function test2(){};
};

test2(); // Output: Error test2 is not a function
console.log(test2); // 1

/*
JS parsing:
  Stage 1 called Compilation phase:
  test2=undefined;
  test2=[function]

  Stage 2 called Execution phase:
  test2=1;
  test2() call will fail as test2 is no more a function in execution phase

*/
