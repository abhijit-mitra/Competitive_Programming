console.log(1);

setTimeout(()=>{console.log('setTimeOut')}, 0);

Promise.resolve().then(()=>{
    console.log('P1');
}).then(()=>{
    console.log('P2');
}).then(()=>{
    console.log('P3');
});

console.log(2);

//output: 1 2 P1 P2 P3 setTimeOut
