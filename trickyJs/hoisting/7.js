var test5={
  name:'',
  getName: function(name){
    function setName(){
      this.name = name;
    }
    setName(name)
  }
};

test5.setName('Abhijit');
console.log(test5.name)//Output: '';
console.log(window.name)//Output: 'Abhijit'
