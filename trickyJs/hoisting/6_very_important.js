//Very Important

var test4 = 1;

function test4_1(){
  test4 = 100;
  return;
  function test4(){};
};

test4_1();
console.log(test4); // Output: 1
