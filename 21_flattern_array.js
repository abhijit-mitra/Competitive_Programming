var flat_arr = function(arr){
    return (function(){
        let res = [];
        let j = 0;
        function flattern(arr){
            for(let i=0;i<arr.length;i++){
                if(arr[i].constructor === Array){
                    flattern(arr[i]);
                }else{
                    res[j] = arr[i];
                    j++;
                }
            };
            return res;
            };
        return flattern(arr);
    })()
};

console.log(flat_arr([1,2,[3,4,[5,6,7]]]));
