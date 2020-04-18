var getSum = (function(){
    var res=0;
    function sum(value){
       if(value === undefined){
           return res;
        }
       res += value;
       return sum;
    };
    return sum;
})();

console.log(getSum(1)(2)(3)());
