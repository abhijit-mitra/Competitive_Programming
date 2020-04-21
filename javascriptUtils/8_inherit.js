var Car = function(){
  Car.prototype.getName = function(){
    return this.name;
  }
  function Car(name){
    this.name = name;
  }
  return Car;
}();

// Inheriting Car
var Tata = function (superClass){
  Tata.prototype = Object.create(superClass.prototype);
  Tata.prototype.constructor = Tata;
  function Tata(){
    superClass.apply(this,['Tata']);
  }
  return Tata;

}(Car);


// Inheriting Car
var Mahindra = function(superClass){
  Mahindra.prototype = Object.create(superClass.prototype);
  Mahindra.prototype.constructor = Mahindra;
  function Mahindra(){
    superClass.apply(this,['Mahindra']);
  }
  return Mahindra;

}(Car);

var tataInstance = new Tata();
var mahindraInstance = new Mahindra();

console.log(tataInstance.getName());
console.log(mahindraInstance.getName());
console.log(tataInstance.getName === mahindraInstance.getName);
