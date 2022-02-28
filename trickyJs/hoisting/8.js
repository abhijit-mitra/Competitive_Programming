var obj={
  name:'Abhijit',
  getName: function(){
    return this
  }
};

var x = obj.getName;
console.log(x());
console.log(obj.getName());

// window
// obj
