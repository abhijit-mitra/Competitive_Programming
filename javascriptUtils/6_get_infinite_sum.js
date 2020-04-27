var getSum = function(value){
    var res=0;
    function sum(value){
       if(value === undefined){
           return res;
        }
       res += value;
       return sum;
    };
    return sum(value);
};

console.log(getSum(1)(2)(3)());
console.log(getSum(5)(5)(5)());
