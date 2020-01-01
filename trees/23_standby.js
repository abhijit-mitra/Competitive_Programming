//
/*

B extends A
D extends B

Object Type Hierarchy Graph
           Object
       A           G
    B     C        H
    D   E   F    I   J

PL internal representation of Type Hierarchy

Find the type common of 2 or more objects
// Example:
  I & J = H
  D & E & F = A
  D & I & F = Object

Several Use cases:

var x = cond ? val1 : val2;

val1 is of type D
val2 is of type F



// Trying to infer the type of an
// terinary operator
// if-else if-else statement
// return(s) of a function

// Other use cases
// Find the common function in hierarchy
// to execute on these two objects, for
// example +
*/

K={name:'K'}
E = {name: "E"}; F = {name: "F"}
C = {name: "C", left: E, right: F}
D = {name: "D", right:K};
B = {name: "B", left: D}
A = {name: "A", left: B, right: C};


I = {name: "I"}; J = {name: "J"};
H = {name: "H", left: I, right: J};
G = {name: "G", left: H};

object = {name: "object", left: A, right: G};
Root = object;

// Function sig
var executed={};

function getResult(store){
  const obj = {};
  const entries = Object.entries(store);
  const total_keys = entries.length;
  for(let [key, value] of entries){
    for(let j= value.length -1 ; j>=0; j--){
      obj[value[j]] = (obj[value[j]] || 0) + 1;
      if(obj[value[j]]===total_keys){
        return value[j];
      }
    }
  }
}

function inferBaseType(classes) {
  var store = {};
  for(let i=0;i<classes.length;i++){
    store[classes[i].name] = [];
    executed[classes[i].name] = false;
    getParents(Root,classes[i], store[classes[i].name], classes[i].name);
  }
  console.log(store);
  const res = getResult(store);
  console.log(res);
}

function getParents(root , cur_node, store, req_name){
  if(!root || executed[req_name]){
    return true;
  }
  if (! root.left && ! root.right){
    store.pop();
    return true;
  }
  store.push(root.name);
  if((root.left && root.left.name === cur_node.name) || (root.right && root.right.name === cur_node.name)){
    executed[req_name] = true;
    return true;
  }else{
    const left_value = getParents(root.left, cur_node, store, req_name);
    const right_value = getParents(root.right, cur_node, store, req_name);
  }
}

inferBaseType([D, E, F]);
