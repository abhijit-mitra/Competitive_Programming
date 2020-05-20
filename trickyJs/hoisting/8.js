var obj={
  name:'Abhijit',
  getName: function(){
    return this
  }
};

var x = obj.getName;
console.log(x());// window
console.log(obj.getName());// obj
