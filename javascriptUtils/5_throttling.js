function throttling(fun, delay) {
  let execute=true;
  return function(){
    const context = this;
    const args = arguments;
    if(execute){
      execute = false;
      setTimeOut(()=>{
        execute = true;
        return fun.apply(context, args);
      }, delay)
    }
  }
}
