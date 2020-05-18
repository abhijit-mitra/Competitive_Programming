Function.prototype.bind = function(){
  const method = this;
  const context = arguments[0];
  const args = arguments.slice(1);
  return function(){
    const args_2 = arguments;
    return method.apply(context, [...args, ...args_2]);
  }
}
