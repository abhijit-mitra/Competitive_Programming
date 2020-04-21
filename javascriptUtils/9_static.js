var User = function User(){
  //this static method attached to class not attached to prototype
  User.getFullName = function(firstName, lastName){
    return firstName+' '+ lastName;
  }

  //THIS IS INSTANCE METHOD
  User.prototype.test = function(){
    return this.firstName+' '+this.lastName
  }

  function User(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  return User;
}();


// Inheriting User
var Abhijit = function Abhijit(superClass){
  Abhijit.prototype = Object.create(superClass.prototype);
  Abhijit.prototype.constructor = Abhijit;
  function Abhijit(){
    superClass.apply(this,['Abhijit','Mitra']);
  }
  return Abhijit;

}(User);

// Inheriting User
var Pallabi = function Pallabi(superClass){
  Pallabi.prototype = Object.create(superClass.prototype);
  Pallabi.prototype.constructor = Pallabi;
  function Pallabi(){
    superClass.apply(this,['Pallabi','Mitra']);
  }
  return Pallabi;

}(User);

var abhiInstance = new Abhijit();
var pallabiInstance = new Pallabi();

console.log(User.getFullName(abhiInstance.firstName,abhiInstance.lastName));
console.log(User.getFullName(pallabiInstance.firstName,pallabiInstance.lastName));
