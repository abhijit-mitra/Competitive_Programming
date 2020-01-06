function memo(fun){
    let obj={};
    return function(){
        const context = this;
        const args = arguments;
        const key = JSON.stringify(args);
        if(obj.hasOwnProperty(key)){
            return obj[key]
        }
        obj[key] = fun.apply(context, args);
        return obj[key];
    }
};
