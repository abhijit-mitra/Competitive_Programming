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

function getParents(root, nodes){
    if(!root){
      return null
    }

    for(let i=0; i<nodes.length; i++){
      if(root.name === nodes[i].name){
        return root;
      }
    }

    const left_value = getParents(root.left, nodes);
    const right_value = getParents(root.right, nodes);

    if(left_value && right_value){
      return root;
    }

    return left_value ? left_value: right_value ;
  }


console.log(getParents(Root , [D, E, F]).name);
