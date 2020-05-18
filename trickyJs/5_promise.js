function x1(){
    for(let i=0;i<10000; i++){
    };
    console.log('x1');
};

function x2(){
     for(let i=0;i<10000; i++){
    };
    console.log('x2');
};

function x3(){
     for(let i=0;i<10000; i++){
    };
    console.log('x3');
};

var p1 = ()=>new Promise((resolve)=>{
  x1();
  resolve();
});

var p2 = ()=>new Promise((resolve)=>{
  x2();
  resolve();
})

var p3 = ()=>new Promise((resolve)=>{
  x3();
  resolve();
})


var x = async ()=>{
  p1();
  p2();
  p3();
}

console.time()
x1();
x2();
x3();
console.log('synchronouse');
console.timeEnd()

console.time()
x();
console.log('asynchronouse');
console.timeEnd()
