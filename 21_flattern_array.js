var flat_arr = function(arr){
  let res = [];
  function flattern(arr){
      for(let i=0;i<arr.length;i++){
          if(arr[i].constructor === Array){
              flattern(arr[i]);
          }else{
              res.push(arr[i]);
          }
      };
      return res;
      };
  return flattern(arr);
};

console.log(flat_arr([1,2,[3,4,[5,6,7]]]));
