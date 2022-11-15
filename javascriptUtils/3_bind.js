const obj = {
  firstName: "sds",
  lastName: "bh"
};

function getFullName(state) {
  return this.firstName + " " + this.lastName + " " + state;
}

Function.prototype.myBind = function (obj, ...args) {
  obj.func = this;
  return () => {
    return obj.func(...args);
  };
};

Function.prototype.myCall = function (obj, ...args) {
  obj.func = this;
  return obj.func(...args);
};

Function.prototype.myApply = function (obj, args) {
  obj.func = this;
  return obj.func(...args);
};

const fName2 = getFullName.myBind(obj, "bsh");
console.log(fName2()); //sds bh bsh

console.log(getFullName.myCall(obj, "kkr"));  //sds bh kkr

console.log(getFullName.myApply(obj, ["kkr"]));  //sds bh kkr
