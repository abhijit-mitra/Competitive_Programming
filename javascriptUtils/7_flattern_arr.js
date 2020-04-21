//Flattern an array

function flat(arr){
  var res = [];
  function flat(arr){
    for(let i=0; i<arr.length; i++){
      if(typeof(arr[i]) === 'object' && arr[i].constructor === Array){
        flat(arr[i]);
      }else{
        res.push(arr[i])
      }
    }
  }
  flat(arr);
  return res;
};

const res = flat([1,[2,[3,[4]]]]);
console.log(res);
