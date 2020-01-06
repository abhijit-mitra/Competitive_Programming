function debounce(fun, delay) {
  let timer;
  return function(){
    const context = this;
    const args = arguments;
    clearTimeOut(timer);
    timer = setTimeOut(()=>{
      return fun.apply(context, args);
    }, delay)
  }
}
