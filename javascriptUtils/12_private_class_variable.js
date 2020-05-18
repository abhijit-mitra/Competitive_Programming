class MyClass {

  a = 1;          // .a is public
  #b = 2;         // .#b is private
  static #c = 3;  // .#c is private and static

  incB() {
    this.#b++;
  }

  getB(){
    return this.#b;
  }

  getC(){
    return MyClass.#c;
  }

}

let m = new MyClass();

m.incB(); // runs OK
//m.#b = 0; // error - private property cannot be modified outside class
console.log(m.#b); // error - can not be accessed directly
console.log(m.getB()); // 3
console.log(MyClass.#c); // error - Pcan not be accessed directly
console.log(m.getC()); // 3
