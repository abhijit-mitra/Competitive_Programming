let obj = {
  name:'Abhijit',
  getName: ()=>{
    return this.name
  }
};
console.log(obj.getName()); 

// undefined, as this is window here
