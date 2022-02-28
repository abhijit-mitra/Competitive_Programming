var test5={
  name:'',
  setName: function(name){
    function setName(){
      this.name = name;
    }
    setName(name)
  }
};

test5.setName('Abhijit');
console.log(test5.name);
console.log(window.name);

//Output: '';

//Output: 'Abhijit'
