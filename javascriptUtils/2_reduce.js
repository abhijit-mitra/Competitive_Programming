Array.prototype.reduce = function(fun, acc) {
  const arr = this;
  for(let i=0; i<arr.length; i++){
    acc = fun(acc, arr[i], i);
  }
  return acc;
}
